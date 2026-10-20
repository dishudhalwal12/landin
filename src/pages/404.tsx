import type { FC, ReactNode } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import { LogoMark } from '@/components/generals/logo'
import { whatsAppHref } from '@/constants/site'

const NotFound: FC = (): ReactNode => {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center'>
            <Head>
                <title>
                    Page not found - Dukaan.AI
                </title>
            </Head>

            <LogoMark className='h-12 w-12 border border-ink/10' />

            <p className='mt-8 font-heading text-[clamp(4.5rem,12vw,8rem)] leading-none font-normal tracking-[-0.05em] text-ink'>
                404
            </p>

            <h1 className='mt-4 font-heading text-[28px] leading-tight font-normal tracking-[-0.03em] text-ink'>
                This aisle is empty.
            </h1>

            <p className='mt-3 max-w-[42ch] text-[16px] leading-relaxed text-muted-foreground'>
                The page you were looking for has moved or never existed.
            </p>

            <div className='mt-9 flex flex-col gap-2.5 sm:flex-row'>
                <Link
                    href='/'
                    className='inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-[15px] font-medium text-paper transition-colors hover:bg-ink-2 focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-paper focus-visible:outline-none'
                >
                    Back to home
                </Link>

                <a
                    href={whatsAppHref()}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex h-12 items-center justify-center rounded-full border border-ink/15 px-6 text-[15px] font-medium text-ink/70 transition-colors hover:border-ink/30 hover:text-ink focus-visible:ring-2 focus-visible:ring-teal focus-visible:outline-none'
                >
                    Chat on WhatsApp
                </a>
            </div>
        </main>
    )
}

export default NotFound
