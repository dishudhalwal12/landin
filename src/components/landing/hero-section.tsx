import type { FC, ReactNode } from 'react'

import { useRef } from 'react'
import { ArrowDown, MessageCircle } from 'lucide-react'
import { CtaButton } from '@/components/generals/cta-button'
import { WhatsAppChat } from '@/components/landing/whatsapp-chat'
import { heroCopy } from '@/constants/copy'
import { useScrollProgress } from '@/hooks/use-scroll-progress'
import { APP_URL, whatsAppHref } from '@/constants/site'

const HERO_FACTS = ['No app for customers', 'The same WhatsApp number', 'Seven languages']

export const HeroSection: FC = (): ReactNode => {
    const heroRef = useRef<HTMLElement>(null)

    useScrollProgress(heroRef, '--hero', 'exit')

    return (
        <section
            ref={heroRef}
            id='hero'
            aria-labelledby='hero-title'
            className='grain relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-20 sm:pt-24 lg:pt-28'
        >
            <div aria-hidden className='pointer-events-none absolute inset-0 -z-10'>
                <div className='absolute top-[-18%] left-[8%] h-[52vh] w-[52vw] rounded-full bg-[radial-gradient(closest-side,rgba(200,225,221,0.5),transparent_72%)] blur-3xl' />
                <div className='absolute top-[30%] right-[-10%] h-[46vh] w-[42vw] rounded-full bg-[radial-gradient(closest-side,rgba(200,188,174,0.32),transparent_72%)] blur-3xl' />
            </div>

            <div className='mx-auto w-full max-w-[1439px] flex-1 px-5 sm:px-8'>
                <div className='grid items-start gap-12 pt-2 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-12 lg:pt-4'>
                    <div className='max-w-[680px]'>
                        <p className='eyebrow flex items-center gap-2.5 text-ink/50 motion-safe:animate-rise-soft'>
                            <span className='inline-block size-1.5 rounded-full bg-teal' />
                            {heroCopy.eyebrow}
                        </p>

                        <h1 id='hero-title' className='display-xl mt-6 text-ink text-balance motion-safe:animate-rise-soft [animation-delay:60ms]'>
                            {heroCopy.titleLead}
                            <br />
                            <span className='text-teal-deep'>{heroCopy.titleAccent}</span>
                        </h1>

                        <p className='mt-6 max-w-[42ch] text-[17px] leading-[1.45] tracking-[-0.01em] text-ink/65 motion-safe:animate-rise-soft sm:text-[19px] lg:text-[21px] [animation-delay:140ms]'>
                            {heroCopy.subtitle}
                        </p>

                        <div className='mt-8 flex flex-col items-stretch gap-2.5 motion-safe:animate-rise-soft sm:flex-row sm:items-center [animation-delay:220ms]'>
                            <CtaButton href={APP_URL} className='h-11 px-6 text-[14px] font-medium'>
                                {heroCopy.primaryCta}
                            </CtaButton>

                            <CtaButton
                                href={whatsAppHref()}
                                variant='light'
                                className='h-11 px-6 text-[14px] font-medium'
                                icon={<MessageCircle aria-hidden className='size-4' />}
                            >
                                {heroCopy.secondaryCta}
                            </CtaButton>
                        </div>

                        <p className='mt-5 text-[13px] tracking-[-0.01em] text-ink/45 motion-safe:animate-rise-soft [animation-delay:300ms]'>
                            {heroCopy.note}
                        </p>
                    </div>

                    <div className='relative mx-auto hidden w-full max-w-[400px] motion-safe:animate-rise-soft lg:block [animation-delay:260ms]'>
                        <div
                            aria-hidden
                            className='absolute -top-4 -right-4 h-full w-full rounded-[10px] border border-ink/10'
                        />
                        <div className='relative'>
                            <WhatsAppChat />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-auto w-full max-w-[1439px] px-5 pb-8 sm:px-8 sm:pb-10'>
                <div
                    className='flex justify-center pt-4'
                    style={{ transform: 'translate3d(0, calc(var(--hero, 0) * -34px), 0)' }}
                >
                    <span className='flex items-baseline justify-center text-ink motion-safe:animate-intro-settle [animation-delay:160ms]'>
                        <span className='font-heading text-[clamp(3rem,9.2vw,8.25rem)] leading-[0.82] font-normal tracking-[-0.055em] lowercase'>
                            dukaan
                        </span>
                        <span className='ml-[0.14em] font-sans text-[clamp(0.72rem,1.7vw,1.5rem)] leading-none font-medium tracking-[0.16em] text-teal-deep uppercase'>
                            .ai
                        </span>
                    </span>
                </div>

                <div className='mt-6 flex flex-col gap-2 border-t border-ink/10 pt-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between'>
                    <ul className='flex flex-wrap items-center gap-x-6 gap-y-1.5'>
                        {HERO_FACTS.map((fact) => (
                            <li key={fact} className='eyebrow text-ink/55'>
                                {fact}
                            </li>
                        ))}
                    </ul>

                    <a
                        href='#manifesto'
                        className='group inline-flex w-fit items-center gap-2 text-[11.5px] tracking-[0.14em] text-ink/50 uppercase transition-colors hover:text-teal-deep focus-visible:ring-2 focus-visible:ring-iris focus-visible:outline-none'
                    >
                        Keep scrolling
                        <ArrowDown aria-hidden className='size-3.5 transition-transform group-hover:translate-y-0.5 motion-safe:animate-float-soft' />
                    </a>
                </div>
            </div>
        </section>
    )
}
