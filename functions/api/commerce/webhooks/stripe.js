import {
  finishWebhook,
  fulfillPaidOrder,
  markOrderExpired,
  markPaymentFailed,
  markRefundByPaymentIntent,
  recordWebhookStart,
} from '../../../_lib/commerce.js';
import { errorResponse, jsonResponse, requireCommerceDb, responseFromError } from '../../../_lib/http.js';
import { verifyStripeWebhook } from '../../../_lib/stripe.js';

function metadataOrderId(object) {
  return String(object?.metadata?.order_id || '').trim();
}

export async function onRequestPost(context) {
  let event;
  let db;
  try {
    db = requireCommerceDb(context.env);
    event = await verifyStripeWebhook(context.request, context.env);
    const state = await recordWebhookStart(db, event);
    if (state === 'processed') return jsonResponse({ ok: true, duplicate: true });

    const object = event.data.object;
    let orderId = metadataOrderId(object) || null;

    switch (event.type) {
      case 'checkout.session.completed':
      case 'checkout.session.async_payment_succeeded': {
        if (object.payment_status !== 'paid') break;
        if (!orderId) throw new Error('Stripe checkout missing order_id metadata');
        const paymentIntentId = typeof object.payment_intent === 'string'
          ? object.payment_intent
          : object.payment_intent?.id;
        if (!paymentIntentId) throw new Error('Stripe checkout missing payment_intent');
        await fulfillPaidOrder(context.env, {
          orderId,
          checkoutId: object.id,
          paymentIntentId,
          amount: object.amount_total,
          currency: object.currency,
          eventId: event.id,
        });
        break;
      }
      case 'payment_intent.succeeded': {
        if (!orderId) throw new Error('Stripe payment intent missing order_id metadata');
        await fulfillPaidOrder(context.env, {
          orderId,
          checkoutId: null,
          paymentIntentId: object.id,
          amount: object.amount_received ?? object.amount,
          currency: object.currency,
          eventId: event.id,
        });
        break;
      }
      case 'payment_intent.payment_failed': {
        if (orderId) await markPaymentFailed(db, orderId, object.id, event.id);
        break;
      }
      case 'checkout.session.expired': {
        if (orderId) await markOrderExpired(db, orderId);
        break;
      }
      case 'charge.refunded': {
        const paymentIntentId = typeof object.payment_intent === 'string'
          ? object.payment_intent
          : object.payment_intent?.id;
        if (paymentIntentId) {
          const result = await markRefundByPaymentIntent(db, paymentIntentId, object.amount_refunded || 0, event.id);
          orderId = result?.orderId || orderId;
        }
        break;
      }
      default:
        break;
    }

    await finishWebhook(db, event.id, { orderId });
    return jsonResponse({ ok: true });
  } catch (error) {
    if (db && event?.id) {
      await finishWebhook(db, event.id, {
        errorCode: String(error?.code || error?.name || 'processing_error').slice(0, 80),
      }).catch(() => undefined);
    }
    return responseFromError(error);
  }
}

export function onRequest() {
  return errorResponse(405, 'method_not_allowed');
}
