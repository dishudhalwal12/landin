import type { CSSProperties, FC, ReactNode } from 'react'

import { useRef } from 'react'
import { bigTypeCopy } from '@/constants/copy'
import { useScrollProgress } from '@/hooks/use-scroll-progress'

const LEAD_WORDS = bigTypeCopy.lead.split(' ')

export const BigTypeScrubber: FC = (): ReactNode => {
    const sectionRef = useRef<HTMLElement>(null)

    useScrollProgress(sectionRef, '--p', 'exit')

    const words = [...LEAD_WORDS.map((word) => ({ word, accent: false })), { word: bigTypeCopy.accent, accent: true }]
    const step = 0.17
    const duration = 0.34

    return (
        <section
            ref={sectionRef}
            aria-labelledby='big-type-title'
            data-motion='scrub'
            className='relative isolate h-[220vh] bg-paper'
            style={{ '--p': 0.1 } as CSSProperties}
        >
            <div className='sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden'>
                <div
                    aria-hidden
                    className='pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(200,225,221,0.38),transparent_72%)] [background-position:50%_20%] [background-repeat:no-repeat] [background-size:70vw_70vh]'
                />

                <div className='relative mx-auto w-full max-w-[1439px] px-5 sm:px-8'>
                    <div className='flex flex-col gap-8 border-t border-ink/10 pt-6 sm:flex-row sm:items-start sm:justify-between'>
                        <p className='eyebrow text-ink/40'>One less thing to carry</p>

                        <div className='flex items-center gap-3'>
                            <span className='h-px w-10 bg-ink/15' />
                            <p className='eyebrow text-ink/40'>02 / 03</p>
                        </div>
                    </div>

                    <h2
                        id='big-type-title'
                        className='mt-10 flex flex-wrap items-baseline gap-x-[0.22em] gap-y-1 text-[clamp(2.9rem,9.6vw,8.25rem)] leading-[0.92] tracking-[-0.05em] text-ink sm:mt-14'
                    >
                        <span className='sr-only'>
                            {bigTypeCopy.lead} {bigTypeCopy.accent}
                        </span>

                        {words.map((item, index) => {
                            const start = index * step
                            const t = `clamp(0, calc((var(--p, 0.1) - ${start}) / ${duration}), 1)`

                            return (
                                <span
                                    key={`${item.word}-${index}`}
                                    aria-hidden
                                    className={
                                        item.accent
                                            ? 'scrub-word font-heading block text-teal-deep italic'
                                            : 'scrub-word font-heading block'
                                    }
                                    style={
                                        {
                                            opacity: `max(0.12, min(calc(${t} * 6), calc((1 - ${t}) * 6), 1))`,
                                            transform: `translate3d(0, calc((1 - ${t}) * 26px), 0)`,
                                            willChange: 'opacity, transform'
                                        } as CSSProperties
                                    }
                                >
                                    {item.word}
                                </span>
                            )
                        })}
                    </h2>

                    <div className='mt-12 grid gap-8 border-t border-ink/10 pt-6 sm:mt-16 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-12'>
                        <p className='max-w-[34ch] text-[16px] leading-[1.5] tracking-[-0.01em] text-ink/60 sm:text-[18px]'>
                            {bigTypeCopy.body}
                        </p>

                        <p className='max-w-[26ch] font-mono text-[11px] leading-relaxed tracking-[0.06em] text-ink/35 uppercase sm:text-right'>
                            {bigTypeCopy.trailing}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
