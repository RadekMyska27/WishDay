export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '',
  recipientEmail: 'rmyska@seznam.cz',
} as const

export const isEmailConfigured =
  Boolean(EMAILJS_CONFIG.serviceId) &&
  Boolean(EMAILJS_CONFIG.templateId) &&
  Boolean(EMAILJS_CONFIG.publicKey)
