import { Resend } from 'resend';

const resendKey = process.env.REACT_APP_RESEND_API_KEY;
export const resend = new Resend(resendKey);