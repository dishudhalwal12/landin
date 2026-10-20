import type { FC, ReactNode } from 'react'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { whatsAppHref } from '@/constants/site'

// Appears after the hero so it does not compete with the first screen.
export const WhatsAppFab: FC = (): ReactNode => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const hero = document.getElementById('hero')
        const footer = document.querySelector('footer')
        let pastHero = false
        let atFooter = false

        const update = () => setVisible(pastHero && !atFooter)
        const onScroll = () => {
            pastHero = hero ? hero.getBoundingClientRect().bottom < 80 : window.scrollY > window.innerHeight
            update()
        }
        const observer = footer
            ? new IntersectionObserver(([entry]) => {
                atFooter = Boolean(entry?.isIntersecting)
                update()
            })
            : null

        onScroll()
        if (footer) observer?.observe(footer)
        window.addEventListener('scroll', onScroll, { passive: true })

        return () => {
            observer?.disconnect()
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <a
            href={whatsAppHref()}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Chat with Dukaan.AI on WhatsApp'
            className={cn(
                'fixed right-6 bottom-6 z-50 hidden size-14 items-center justify-center rounded-full border border-paper/15 bg-ink text-paper shadow-[0_18px_50px_-20px_rgba(16,33,41,0.65)] transition-[opacity,transform,visibility] duration-300 hover:-translate-y-0.5 hover:bg-teal-deep focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-paper focus-visible:outline-none sm:inline-flex',
                visible ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-4 opacity-0'
            )}
        >
            <span className='relative flex size-9 items-center justify-center rounded-full bg-mint text-ink'>
                <MessageCircle aria-hidden className='size-4' />
                <span className='absolute inset-0 -z-10 animate-ping-soft rounded-full bg-lime/30' />
            </span>
        </a>
    )
}
