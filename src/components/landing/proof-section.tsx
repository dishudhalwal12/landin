import type { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Reveal } from '@/components/generals/reveal'
import { CountUp } from '@/components/generals/count-up'
import { ShopMarquee } from '@/components/landing/shop-marquee'
import { stats } from '@/constants/copy'

const RECEIPTS = [
    {
        kicker: 'New order',
        value: '#1042',
        body: '2 × Milk · 1 × Maggi',
        meta: '₹69 · Cash on delivery',
        tone: 'paper' as const,
        span: 'lg:col-span-4',
        tilt: 'lg:-rotate-2'
    },
    {
        kicker: 'Customer message',
        value: '“Bhaiya, 2 packet doodh aur ek Maggi”',
        body: 'One message. No app to install.',
        meta: '10:42',
        tone: 'mint' as const,
        span: 'lg:col-span-5',
        tilt: 'lg:rotate-[1.5deg] lg:mt-10'
    },
    {
        kicker: 'Hyperlocal',
        value: '5 km radius',
        body: 'Nearest linked shop gets the order.',
        meta: 'Location pin in chat',
        tone: 'clay' as const,
        span: 'lg:col-span-3',
        tilt: 'lg:-rotate-1 lg:mt-20'
    },
    {
        kicker: 'Owner approval',
        value: '60s',
        body: 'to accept or reject. You stay in charge.',
        meta: 'The customer is told either way',
        tone: 'olive' as const,
        span: 'lg:col-span-5',
        tilt: 'lg:-mt-8 lg:rotate-[1deg]'
    },
    {
        kicker: 'Across the counter',
        value: 'Seven languages',
        body: 'English, Hindi, Tamil, Punjabi, Kannada, Gujarati and Urdu.',
        meta: 'Dashboard and bot',
        tone: 'ink' as const,
        span: 'lg:col-span-7',
        tilt: 'lg:-mt-2 lg:-rotate-[1deg]'
    }
]

const TONES = {
    paper: 'border-ink/15 bg-paper text-ink',
    mint: 'border-ink/15 bg-mint text-ink',
    clay: 'border-ink/15 bg-clay text-ink',
    olive: 'border-ink/25 bg-olive text-paper',
    ink: 'border-paper/20 bg-ink text-paper'
}

export const ProofSection: FC = (): ReactNode => {
    return (
        <section id='proof' aria-labelledby='proof-title' className='relative isolate overflow-hidden py-20 sm:py-28'>
            <div className='mx-auto w-full max-w-[1439px] px-5 sm:px-8'>
                <div className='grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16'>
                    <Reveal>
                        <p className='font-mono text-[11px] tracking-[0.18em] text-ink/55 uppercase'>Receipts from the counter</p>

                        <h2
                            id='proof-title'
                            className='mt-5 max-w-[15ch] font-heading text-[clamp(2.3rem,4.5vw,4.2rem)] leading-[1] font-normal tracking-[-0.04em] text-balance text-ink'
                        >
                            The beta, in receipts.
                        </h2>
                    </Reveal>

                    <Reveal delay={80}>
                        <p className='max-w-[44ch] text-[16px] leading-[1.55] text-ink/65'>
                            Every card comes from the same order the bot handled in the chat above. No mock testimonials, no borrowed logos.
                        </p>
                    </Reveal>
                </div>

                <div className='mt-14 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-3'>
                    {RECEIPTS.map((receipt, index) => (
                        <Reveal
                            key={receipt.kicker}
                            delay={index * 60}
                            className={cn('h-full', receipt.span, receipt.tilt)}
                        >
                            <article
                                className={cn(
                                    'ticket flex h-full flex-col rounded-lg border p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7',
                                    TONES[receipt.tone]
                                )}
                            >
                                <p className='font-mono text-[10px] tracking-[0.16em] uppercase opacity-55'>{receipt.kicker}</p>

                                <p
                                    className={cn(
                                        'mt-5 font-heading leading-[1.08] tracking-[-0.03em]',
                                        receipt.kicker === 'Across the counter'
                                            ? 'text-[clamp(2rem,3.4vw,3rem)]'
                                            : receipt.kicker === 'Customer message' || receipt.kicker === 'Reply'
                                              ? 'text-[clamp(1.5rem,2.4vw,2rem)] italic'
                                              : 'text-[clamp(2.4rem,4vw,3.4rem)]'
                                    )}
                                >
                                    {receipt.value}
                                </p>

                                <p className='mt-4 max-w-[36ch] text-[14px] leading-[1.5] opacity-75'>{receipt.body}</p>

                                <p className='mt-auto pt-6 font-mono text-[10px] tracking-[0.12em] uppercase opacity-50'>
                                    {receipt.meta}
                                </p>
                            </article>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={120}>
                    <ShopMarquee />
                </Reveal>
            </div>

            <div className='mt-20 border-y border-paper/20 bg-teal-deep py-16 text-paper sm:mt-24 sm:py-20'>
                <div className='mx-auto w-full max-w-[1439px] px-5 sm:px-8'>
                    <div className='grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end'>
                        <Reveal>
                            <p className='font-mono text-[11px] tracking-[0.18em] text-paper/55 uppercase'>Why it fits</p>

                            <h2 className='mt-5 max-w-[17ch] font-heading text-[clamp(2.1rem,4vw,3.6rem)] leading-[1.02] font-normal tracking-[-0.04em] text-balance'>
                                Built for the way a shop already runs.
                            </h2>
                        </Reveal>

                        <Reveal delay={80}>
                            <p className='max-w-[40ch] text-[16px] leading-[1.55] text-paper/65'>
                                Your customers keep the app they use all day. You keep the counter.
                            </p>
                        </Reveal>
                    </div>

                    <dl className='mt-10 grid gap-px border border-paper/20 bg-paper/20 sm:grid-cols-2 lg:grid-cols-4'>
                        {stats.map((stat, index) => (
                            <Reveal key={stat.value} delay={index * 70} className='h-full'>
                                <div className='h-full bg-teal-deep p-6 sm:p-7'>
                                    <dt className='sr-only'>{stat.label}</dt>

                                    <dd>
                                        <span className='block font-heading text-[clamp(2.2rem,3.4vw,3.1rem)] leading-none tracking-[-0.04em]'>
                                            <CountUp value={stat.value} />
                                        </span>

                                        <span className='mt-4 block text-[14px] font-medium text-paper/85'>{stat.label}</span>

                                        <span className='mt-2 block text-[13px] leading-[1.5] text-paper/55'>
                                            {stat.context}
                                        </span>
                                    </dd>
                                </div>
                            </Reveal>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}
