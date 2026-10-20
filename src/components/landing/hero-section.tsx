import type { FC, ReactNode } from 'react'

import { useRef } from 'react'
import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react'
import { CtaButton } from '@/components/generals/cta-button'
import { WhatsAppChat } from '@/components/landing/whatsapp-chat'
import { heroChat, heroCopy } from '@/constants/copy'
import { useScrollProgress } from '@/hooks/use-scroll-progress'
import { APP_URL, whatsAppHref } from '@/constants/site'

const HERO_FACTS = [
    { value: 'No app', label: 'for customers' },
    { value: 'Same', label: 'WhatsApp number' },
    { value: '7', label: 'languages' }
]

export const HeroSection: FC = (): ReactNode => {
    const heroRef = useRef<HTMLElement>(null)

    useScrollProgress(heroRef, '--hero', 'exit')

    return (
        <section
            ref={heroRef}
            id='hero'
            aria-labelledby='hero-title'
            className='relative isolate overflow-hidden pt-28 pb-14 sm:pt-32 lg:pt-36'
        >
            <div aria-hidden className='pointer-events-none absolute inset-0 -z-10'>
                <div className='halftone absolute top-[6%] right-[-8%] h-[62%] w-[56%] opacity-[0.16]' />
                <div className='absolute top-[16%] right-[18%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(closest-side,rgba(200,225,221,0.55),transparent_72%)] blur-2xl' />
                <div className='absolute inset-y-0 left-1/2 hidden w-px bg-ink/[0.06] lg:block' />
            </div>

            <div className='mx-auto w-full max-w-[1439px] px-5 sm:px-8'>
                <div className='grid items-center gap-14 lg:min-h-[calc(100svh-8rem)] lg:grid-cols-[0.94fr_1.06fr] lg:gap-6'>
                    <div className='relative z-10 max-w-[640px]'>
                        <p className='flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-ink/55 uppercase motion-safe:animate-rise-soft'>
                            <span className='inline-block size-1.5 rounded-full bg-lime' />
                            {heroCopy.eyebrow}
                        </p>

                        <h1
                            id='hero-title'
                            className='mt-7 font-heading text-[clamp(2.85rem,6vw,5.9rem)] leading-[0.98] font-normal tracking-[-0.045em] text-balance text-ink motion-safe:animate-rise-soft [animation-delay:80ms]'
                        >
                            {heroCopy.titleLead}
                            <br />
                            <span className='text-serif-accent italic'>{heroCopy.titleAccent}</span>
                        </h1>

                        <p className='mt-7 max-w-[42ch] text-[16px] leading-[1.55] text-ink/65 motion-safe:animate-rise-soft sm:text-[17px] [animation-delay:160ms]'>
                            {heroCopy.subtitle}
                        </p>

                        <div className='mt-9 flex flex-col items-stretch gap-3 motion-safe:animate-rise-soft sm:flex-row sm:items-center [animation-delay:240ms]'>
                            <CtaButton
                                href={APP_URL}
                                className='h-[52px] pr-2 pl-6'
                                icon={
                                    <span className='ml-1 flex size-8 items-center justify-center rounded-full bg-mint text-ink'>
                                        <ArrowUpRight aria-hidden className='size-4' />
                                    </span>
                                }
                            >
                                {heroCopy.primaryCta}
                            </CtaButton>

                            <CtaButton
                                href={whatsAppHref()}
                                variant='light'
                                className='h-[52px]'
                                icon={<MessageCircle aria-hidden className='size-4' />}
                            >
                                {heroCopy.secondaryCta}
                            </CtaButton>
                        </div>

                        <p className='mt-6 font-mono text-[11.5px] tracking-tight text-ink/45 motion-safe:animate-rise-soft [animation-delay:320ms]'>
                            {heroCopy.note}
                        </p>

                        <dl className='mt-10 grid max-w-[460px] grid-cols-3 gap-4 border-t border-ink/10 pt-5 motion-safe:animate-rise-soft [animation-delay:400ms]'>
                            {HERO_FACTS.map((fact) => (
                                <div key={fact.label}>
                                    <dt className='font-heading text-[22px] leading-none text-ink'>{fact.value}</dt>
                                    <dd className='mt-1.5 text-[12px] leading-snug text-ink/50'>{fact.label}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div
                        className='relative mx-auto w-full max-w-[680px] pb-8 sm:pb-14 lg:pb-0'
                        style={{ transform: 'translate3d(0, calc(var(--hero, 0) * -30px), 0)' }}
                    >
                        <div
                            aria-hidden
                            className='absolute top-[7%] right-[4%] h-[80%] w-[68%] -rotate-3 border border-ink/10 bg-mint sm:right-[10%]'
                        >
                            <div className='dot-grid absolute inset-0 opacity-25' />
                        </div>

                        <div className='relative z-10 mx-auto w-full max-w-[430px] motion-safe:animate-rise-soft [animation-delay:220ms]'>
                            <WhatsAppChat />
                        </div>

                        <div className='ticket relative z-20 mx-auto mt-5 w-full max-w-[280px] -rotate-2 border border-ink/15 bg-paper p-5 motion-safe:animate-rise-soft sm:absolute sm:bottom-4 sm:left-0 sm:mt-0 sm:-rotate-3 [animation-delay:520ms]'>
                            <div className='flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-ink/50 uppercase'>
                                <span>{heroChat.order.title}</span>
                                <span>{heroChat.order.count}</span>
                            </div>
                            <p className='mt-3 font-heading text-[20px] leading-tight text-ink'>{heroChat.order.items}</p>
                            <div className='mt-4 flex items-end justify-between border-t border-dashed border-ink/15 pt-3'>
                                <span className='font-mono text-[10px] tracking-[0.12em] text-ink/45 uppercase'>
                                    {heroChat.order.timer}
                                </span>
                                <span className='font-heading text-[26px] leading-none text-ink'>{heroChat.order.total}</span>
                            </div>
                        </div>

                        <div className='absolute top-[2%] -right-1 z-20 hidden items-center gap-2 border border-ink/12 bg-paper/90 px-3 py-2 font-mono text-[10px] tracking-[0.12em] text-ink/60 uppercase backdrop-blur-[5px] motion-safe:animate-float-soft md:flex'>
                            <span className='size-1.5 rounded-full bg-teal' />
                            Voice note read
                        </div>

                        <p className='absolute top-1/2 -right-8 hidden origin-right rotate-90 font-mono text-[10px] tracking-[0.24em] text-ink/35 uppercase lg:block'>
                            Live on WhatsApp
                        </p>
                    </div>
                </div>

                <a
                    href='#manifesto'
                    className='mt-10 flex w-fit items-center gap-2 font-mono text-[10.5px] tracking-[0.16em] text-ink/40 uppercase transition-colors hover:text-teal-deep focus-visible:ring-2 focus-visible:ring-iris focus-visible:outline-none lg:mt-0'
                >
                    Keep scrolling
                    <ArrowDown aria-hidden className='size-3.5 motion-safe:animate-bounce' />
                </a>
            </div>
        </section>
    )
}
