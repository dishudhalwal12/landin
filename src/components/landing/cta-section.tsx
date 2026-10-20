import type { FC, ReactNode } from 'react'

import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { ArtworkPanel } from '@/components/landing/artwork-panel'
import { CtaButton } from '@/components/generals/cta-button'
import { Reveal } from '@/components/generals/reveal'
import { finalCtaCopy } from '@/constants/copy'
import { APP_URL, whatsAppHref } from '@/constants/site'

export const CtaSection: FC = (): ReactNode => {
    return (
        <section
            id='start'
            aria-labelledby='cta-title'
            className='grain relative isolate overflow-hidden bg-night text-paper'
        >
            <ArtworkPanel tone='night' className='absolute inset-0 -z-10' />
            <div aria-hidden className='absolute inset-0 -z-10 bg-night/55' />

            <div className='relative mx-auto flex w-full max-w-[1439px] flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-32 lg:py-40'>
                <Reveal className='flex flex-col items-center'>
                    <span className='ribbon mb-8 flex h-14 w-10 items-start justify-center pt-3 text-night/70'>
                        <span className='size-1.5 rounded-full bg-night/60' />
                    </span>

                    <p className='eyebrow text-paper/45'>Open today</p>

                    <h2 id='cta-title' className='display-xl mt-6 max-w-[15ch] text-paper text-balance'>
                        {finalCtaCopy.title}
                    </h2>

                    <p className='mt-5 max-w-[46ch] text-[16.5px] leading-[1.5] tracking-[-0.01em] text-paper/60 sm:text-[18px]'>
                        {finalCtaCopy.body}
                    </p>

                    <div className='mt-9 flex w-full flex-col items-stretch justify-center gap-2.5 sm:w-auto sm:flex-row sm:items-center'>
                        <CtaButton
                            href={APP_URL}
                            className='h-12 border border-paper bg-paper px-7 text-[14px] font-medium text-night hover:bg-paper/90'
                        >
                            {finalCtaCopy.primaryCta}
                            <ArrowUpRight aria-hidden className='size-4' />
                        </CtaButton>

                        <CtaButton
                            href={whatsAppHref()}
                            variant='glass'
                            className='h-12 border-paper/25 bg-transparent px-7 text-[14px] font-medium text-paper backdrop-blur-[3px] hover:border-paper/50 hover:bg-paper/10'
                            icon={<MessageCircle aria-hidden className='size-4' />}
                        >
                            {finalCtaCopy.secondaryCta}
                        </CtaButton>
                    </div>

                    <p className='mt-6 text-[12.5px] tracking-[-0.01em] text-paper/40'>
                        No card. No new number. Your shop stays yours.
                    </p>
                </Reveal>
            </div>

            <div
                aria-hidden
                className='pointer-events-none relative -mb-[2vw] flex justify-center overflow-hidden select-none'
            >
                <span className='font-heading text-[19vw] leading-[0.72] tracking-[-0.06em] text-paper/[0.05] lowercase'>
                    dukaan.ai
                </span>
            </div>
        </section>
    )
}
