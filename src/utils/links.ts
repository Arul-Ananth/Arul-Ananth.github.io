export function toTelephoneHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}
