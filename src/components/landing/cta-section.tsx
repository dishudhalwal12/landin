import type { FC, ReactNode } from 'react'

import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/generals/reveal'
import { CtaButton } from '@/components/generals/cta-button'
import { finalCtaCopy } from '@/constants/copy'
import { APP_URL, whatsAppHref } from '@/constants/site'

export const CtaSection: FC = (): ReactNode => {
    return (
        <section
            id='start'
            aria-labelledby='cta-title'
            className='relative isolate overflow-hidden border-y border-ink/15 bg-mint px-5 py-24 sm:px-8 sm:py-32'
        >
            <div aria-hidden className='halftone pointer-events-none absolute inset-0 opacity-[0.09]' />

            <Reveal className='relative mx-auto flex w-full max-w-[1199px] flex-col items-center text-center'>
                <p className='font-mono text-[10.5px] tracking-[0.18em] text-teal-deep uppercase'>
                    Open today
                </p>

                <h2
                    id='cta-title'
                    className='mt-6 max-w-[19ch] font-heading text-[clamp(2.5rem,5.4vw,4.6rem)] leading-[1.02] font-normal tracking-[-0.045em] text-balance text-ink'
                >
                    {finalCtaCopy.title}
                </h2>

                <p className='mt-5 max-w-[48ch] text-[16.5px] leading-relaxed text-ink/60 sm:text-[18px]'>
                    {finalCtaCopy.body}
                </p>

                <div className='mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row'>
                    <CtaButton
                        href={APP_URL}
                        className='w-full sm:w-auto'
                        icon={<ArrowUpRight aria-hidden className='size-4' />}
                    >
                        {finalCtaCopy.primaryCta}
                    </CtaButton>

                    <CtaButton
                        href={whatsAppHref()}
                        variant='light'
                        className='w-full sm:w-auto'
                        icon={<MessageCircle aria-hidden className='size-4' />}
                    >
                        {finalCtaCopy.secondaryCta}
                    </CtaButton>
                </div>

                <p className='mt-6 font-mono text-[10.5px] tracking-[0.1em] text-ink/40 uppercase'>
                    Your customers keep WhatsApp. You keep the same number.
                </p>
            </Reveal>
        </section>
    )
}
