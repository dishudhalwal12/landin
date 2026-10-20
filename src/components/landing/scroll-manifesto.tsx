import type { CSSProperties, FC, ReactNode } from 'react'

import { useRef } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/generals/reveal'
import { useScrollProgress } from '@/hooks/use-scroll-progress'
import { manifestoCopy } from '@/constants/copy'

const words = manifestoCopy.title.split(' ')

export const ScrollManifesto: FC = (): ReactNode => {
    const readRef = useRef<HTMLDivElement>(null)

    // One progress value drives the blur on every word, so scrolling stays cheap.
    useScrollProgress(readRef, '--read', 'through')

    return (
        <section
            id='manifesto'
            aria-labelledby='manifesto-title'
            className='relative isolate overflow-hidden bg-ink-2 py-24 text-paper sm:py-32'
        >
            <div aria-hidden className='pointer-events-none absolute inset-0 opacity-[0.12]'>
                <div className='dot-grid-inverse absolute inset-0' />
            </div>

            <div className='relative mx-auto w-full max-w-[1439px] px-5 sm:px-8'>
                <Reveal className='flex items-center justify-between border-b border-paper/15 pb-5'>
                    <p className='font-mono text-[11px] tracking-[0.18em] text-paper/55 uppercase'>
                        {manifestoCopy.eyebrow}
                    </p>
                    <span className='font-mono text-[11px] tracking-[0.18em] text-paper/35 uppercase'>01 / 06</span>
                </Reveal>

                <div ref={readRef} className='mt-14 sm:mt-20'>
                    <h2
                        id='manifesto-title'
                        className='mx-auto max-w-[20ch] text-center font-heading text-[clamp(2.7rem,6.6vw,6.2rem)] leading-[0.98] font-normal tracking-[-0.045em] text-balance'
                    >
                        {words.map((word, index) => (
                            <span
                                key={`${word}-${index}`}
                                className={cn(
                                    'manifesto-word mr-[0.22em] last:mr-0',
                                    index === words.length - 1 && 'text-mint italic'
                                )}
                                style={{ '--start': (index / words.length) * 0.55 } as CSSProperties}
                            >
                                {word}
                            </span>
                        ))}
                    </h2>
                </div>

                <Reveal delay={120} className='mx-auto mt-12 max-w-[52ch] text-center'>
                    <p className='text-[16px] leading-[1.6] text-paper/60 sm:text-[18px]'>{manifestoCopy.body}</p>
                </Reveal>
            </div>
        </section>
    )
}
