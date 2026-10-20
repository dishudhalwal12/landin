import type { FC, ReactNode } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import { LogoMark } from '@/components/generals/logo'

const ServerError: FC = (): ReactNode => {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center'>
            <Head>
                <title>
                    Something went wrong - Dukaan.AI
                </title>
            </Head>

            <LogoMark className='h-12 w-12 border border-ink/10' />

            <h1 className='mt-8 font-heading text-[clamp(2.2rem,5vw,3rem)] leading-tight font-normal tracking-[-0.04em] text-ink'>
                Something went wrong.
            </h1>

            <p className='mt-3 max-w-[42ch] text-[16px] leading-relaxed text-muted-foreground'>
                We hit an unexpected problem loading this page. Try again in a moment.
            </p>

            <Link
                href='/'
                className='mt-9 inline-flex h-12 items-center justify-center rounded-full bg-ink px-6 text-[15px] font-medium text-paper transition-colors hover:bg-ink-2 focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-paper focus-visible:outline-none'
            >
                Back to home
            </Link>
        </main>
    )
}

export default ServerError
