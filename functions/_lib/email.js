import { HttpError } from './http.js';

function isTestMode(env) {
  return String(env?.BENEDICT_COMMERCE_TEST_MODE || '').toLowerCase() === 'true';
}

export function createOtpCode(env) {
  if (isTestMode(env)) {
    const configured = String(env?.BENEDICT_OTP_TEST_CODE || '').trim();
    if (/^\d{6}$/.test(configured)) return configured;
  }
  const value = new Uint32Array(1);
  crypto.getRandomValues(value);
  return String(value[0] % 1_000_000).padStart(6, '0');
}

function copyFor(locale, purpose, code) {
  const restore = purpose === 'restore';
  if (String(locale).startsWith('th')) return {
    subject: restore ? 'รหัสกู้คืน Bearagnostic Pro' : 'รหัสยืนยันสำหรับ Bearagnostic Pro',
    text: `รหัสยืนยันของคุณคือ ${code}\n\nรหัสนี้ใช้ได้ 10 นาทีและใช้ได้ครั้งเดียว หากคุณไม่ได้เป็นผู้ขอรหัสนี้ สามารถละเว้นอีเมลฉบับนี้ได้`,
  };
  if (String(locale).startsWith('ja')) return {
    subject: restore ? 'Bearagnostic Pro 復元コード' : 'Bearagnostic Pro 確認コード',
    text: `確認コード: ${code}\n\nこのコードは10分間、1回のみ有効です。心当たりがない場合は、このメールを無視してください。`,
  };
  return {
    subject: restore ? 'Restore Bearagnostic Pro' : 'Verify your Bearagnostic Pro purchase',
    text: `Your verification code is ${code}.\n\nIt expires in 10 minutes and can be used once. If you did not request this code, you can ignore this email.`,
  };
}

export async function sendOtpEmail(env, { email, code, purpose, locale }) {
  if (isTestMode(env)) {
    const liveTestEnabled =
      String(env?.BENEDICT_EMAIL_TEST_DELIVERY || '').toLowerCase() === 'true';

    const allowedRecipient =
      String(env?.BENEDICT_EMAIL_TEST_RECIPIENT || '').trim().toLowerCase();

    const normalizedRecipient =
      String(email || '').trim().toLowerCase();

    if (!liveTestEnabled || !allowedRecipient || normalizedRecipient !== allowedRecipient) {
      return { delivery: 'test' };
    }
  }

  const provider = String(env?.BENEDICT_EMAIL_PROVIDER || '').trim().toLowerCase();
  if (provider !== 'resend') throw new HttpError(503, 'email_provider_unconfigured');
  const apiKey = String(env?.RESEND_API_KEY || '').trim();
  const from = String(env?.BENEDICT_EMAIL_FROM || '').trim();
  if (!apiKey || !from) throw new HttpError(503, 'email_provider_unconfigured');

  const copy = copyFor(locale, purpose, code);
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ from, to: [email], subject: copy.subject, text: copy.text }),
  });
  if (!response.ok) throw new HttpError(503, 'email_delivery_failed');
  return { delivery: 'sent' };
}
