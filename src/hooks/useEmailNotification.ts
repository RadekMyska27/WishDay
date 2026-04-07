import { useEffect } from 'react'
import emailjs from '@emailjs/browser'
import i18n from '../i18n'
import { UpcomingEvent } from '../types'
import { EMAILJS_CONFIG, isEmailConfigured } from '../config/emailjs'
import { formatDate } from '../utils/dateUtils'

const STORAGE_KEY = 'wishday_notifications_sent'

function getNotificationKey(event: UpcomingEvent): string {
  const year = new Date().getFullYear()
  return `${event.person.id}_${event.type}_${year}`
}

function wasNotificationSent(key: string): boolean {
  const sent: string[] = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
  return sent.includes(key)
}

function markNotificationSent(key: string): void {
  const sent: string[] = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...sent, key]))
}

export function useEmailNotification(events: UpcomingEvent[], notifyDaysBefore = 7): void {
  useEffect(() => {
    if (!isEmailConfigured) {
      console.warn('[WishDay] EmailJS is not configured. Set VITE_EMAILJS_* env variables to enable notifications.')
      return
    }

    const toNotify = events.filter(e => e.daysUntil <= notifyDaysBefore)

    for (const event of toNotify) {
      const key = getNotificationKey(event)
      if (wasNotificationSent(key)) continue

      const typeLabel = i18n.t(`event.${event.type}`)

      emailjs
        .send(
          EMAILJS_CONFIG.serviceId,
          EMAILJS_CONFIG.templateId,
          {
            to_email: EMAILJS_CONFIG.recipientEmail,
            person_name: event.person.name,
            event_type: typeLabel,
            event_date: formatDate(event.date, i18n.language),
            days_until: event.daysUntil,
          },
          EMAILJS_CONFIG.publicKey,
        )
        .then(() => {
          markNotificationSent(key)
          console.info(`[WishDay] Notification sent for ${event.person.name} (${typeLabel})`)
        })
        .catch(err => {
          console.error('[WishDay] Failed to send notification:', err)
        })
    }
  }, [events, notifyDaysBefore])
}
