import { HttpError } from './http.js';
export function retiredStripeProvider() {
  throw new HttpError(410, 'provider_retired', 'Stripe/PromptPay is not a Benedict commerce provider.');
}
export const createStripeCheckoutSession = retiredStripeProvider;
export const retrieveStripeCheckoutSession = retiredStripeProvider;
export const verifyStripeWebhook = retiredStripeProvider;
