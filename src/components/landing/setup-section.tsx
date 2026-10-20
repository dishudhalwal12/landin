import type { FC, ReactNode } from 'react'

import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/generals/reveal'
import { CtaButton } from '@/components/generals/cta-button'
import { SectionBadge } from '@/components/landing/section-badge'
import { TerminalCard } from '@/components/landing/terminal-card'
import { setupCopy } from '@/constants/copy'
import { APP_URL, whatsAppHref } from '@/constants/site'

export const SetupSection: FC = (): ReactNode => {
    return (
        <section
            id='setup'
            aria-labelledby='setup-title'
            className='relative isolate overflow-hidden py-24 sm:py-32'
        >
            <div className='mx-auto w-full max-w-[1199px] px-5 sm:px-8'>
                <Reveal className='grid gap-6 border-b border-ink/10 pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16'>
                    <div>
                        <SectionBadge>{setupCopy.eyebrow}</SectionBadge>

                        <h2
                            id='setup-title'
                            className='mt-6 max-w-[20ch] font-heading text-[clamp(2.3rem,4.5vw,4.2rem)] leading-[1.02] font-normal tracking-[-0.04em] text-balance text-ink'
                        >
                            {setupCopy.title}
                        </h2>
                    </div>

                    <p className='max-w-[44ch] text-[16.5px] leading-relaxed text-ink/55 sm:text-[17.5px] lg:justify-self-end'>
                        {setupCopy.body}
                    </p>
                </Reveal>

                <ol className='mt-10 grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-3'>
                    {setupCopy.steps.map((step, index) => (
                        <Reveal key={step.number} delay={index * 80}>
                            <li className='group h-full bg-paper p-6 transition-colors hover:bg-sage/40 sm:p-7'>
                                <span className='font-mono text-[11px] tracking-[0.14em] text-teal-deep'>
                                    {step.number}
                                </span>

                                <h3 className='mt-5 font-heading text-[22px] leading-tight font-normal tracking-[-0.03em] text-ink'>
                                    {step.title}
                                </h3>

                                <p className='mt-2.5 text-[14px] leading-relaxed text-ink/55'>
                                    {step.body}
                                </p>
                            </li>
                        </Reveal>
                    ))}
                </ol>

                <Reveal delay={120} className='mt-4'>
                    <div className='grid border border-ink/15 bg-paper lg:grid-cols-[0.85fr_1.15fr]'>
                        <div className='relative flex min-w-0 flex-col justify-between overflow-hidden border-b border-ink/15 bg-mint p-6 sm:p-8 lg:border-r lg:border-b-0'>
                            <div
                                aria-hidden
                                className='halftone pointer-events-none absolute inset-0 opacity-[0.08]'
                            />

                            <div className='relative'>
                                <p className='font-mono text-[10.5px] tracking-[0.16em] text-teal-deep uppercase'>
                                    Open today
                                </p>

                                <p className='mt-4 max-w-[22ch] font-heading text-[27px] leading-[1.08] font-normal tracking-[-0.035em] text-ink sm:text-[31px]'>
                                    Your first order could land before dinner.
                                </p>
                            </div>

                            <div className='relative mt-10'>
                                <div className='flex flex-col gap-2.5 sm:flex-row'>
                                    <CtaButton
                                        href={APP_URL}
                                        className='w-full sm:w-auto'
                                        icon={<ArrowUpRight aria-hidden className='size-4' />}
                                    >
                                        Set up your store
                                    </CtaButton>

                                    <CtaButton
                                        href={whatsAppHref()}
                                        variant='light'
                                        className='w-full sm:w-auto'
                                        icon={<MessageCircle aria-hidden className='size-4' />}
                                    >
                                        Ask a question
                                    </CtaButton>
                                </div>

                                <p className='mt-4 text-[12px] text-ink/45'>
                                    No card, no new number, no developer.
                                </p>
                            </div>
                        </div>

                        <div className='flex min-w-0 flex-col justify-center p-4 sm:p-6'>
                            <p className='font-mono text-[10.5px] tracking-[0.16em] text-ink/45 uppercase'>
                                {setupCopy.terminalLabel}
                            </p>

                            <p className='mt-2 max-w-[46ch] text-[13.5px] leading-relaxed text-ink/50'>
                                {setupCopy.terminalBody}
                            </p>

                            <div className='mt-4'>
                                <TerminalCard title={setupCopy.terminalTitle} commands={setupCopy.commands} />
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
