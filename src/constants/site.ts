import type { SiteConfig } from '@/types'

export const APP_URL = 'https://dukaan-ai-hypnexis.vercel.app'
export const GITHUB_URL = 'https://github.com/dishudhalwal12/dukaan.ai'
export const WHATSAPP_NUMBER = '919256487182'
export const WHATSAPP_MESSAGE = 'Hi Dukaan.AI, I want to set up my store.'

export const whatsAppHref = (message: string = WHATSAPP_MESSAGE): string =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const NAV_LINKS = [
    { label: 'How it works', href: '/#how' },
    { label: 'Features', href: '/#features' },
    { label: 'For owners', href: '/#owners' },
    { label: 'Setup', href: '/#setup' },
    { label: 'FAQ', href: '/#faq' }
]

export const siteConfig: SiteConfig = {
    name: 'Dukaan.AI',
    description: 'Turn WhatsApp into your shop. Take orders, track stock, show a UPI QR and see sales in one place. Built for neighbourhood shops in India.',
    url: APP_URL,
    ogImage: `${APP_URL}/og-image.png`,
    links: {
        github: GITHUB_URL
    }
}
