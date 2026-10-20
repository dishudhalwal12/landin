import type { FC, ReactNode } from 'react'
import type { LayoutProps } from '@/types'

import { SiteNav } from '@/components/generals/site-nav'
import { SiteFooter } from '@/components/generals/site-footer'
import { SmoothScroll } from '@/components/generals/smooth-scroll'
import { WhatsAppFab } from '@/components/generals/whatsapp-fab'
import { PageBackdrop } from '@/components/landing/page-backdrop'

export const Layout: FC<LayoutProps> = ({ children }): ReactNode => {
    return (
        <SmoothScroll>
            <a
                href='#main'
                className='sr-only rounded-full bg-moss px-5 py-3 text-sm font-semibold text-black focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-5 focus:py-3 focus:shadow-[0_10px_40px_-12px_rgba(14,14,16,0.5)] focus:outline-none focus:ring-2 focus:ring-iris focus:ring-offset-2'
            >
                Skip to content
            </a>

            <PageBackdrop />

            <div className='relative z-10 flex min-h-screen flex-col'>
                <SiteNav />

                <main id='main' className='flex-1'>
                    {children}
                </main>

                <SiteFooter />
            </div>

            <WhatsAppFab />
        </SmoothScroll>
    )
}
