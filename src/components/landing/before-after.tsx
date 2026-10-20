import type { FC, ReactNode } from 'react'

import { useState } from 'react'
import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/generals/reveal'
import { SectionBadge } from '@/components/landing/section-badge'
import { beforeAfterCopy } from '@/constants/copy'

type Mode = 'old' | 'new'

export const BeforeAfter: FC = (): ReactNode => {
    const [mode, setMode] = useState<Mode>('old')

    const list = mode === 'old' ? beforeAfterCopy.old : beforeAfterCopy.new

    return (
        <section
            aria-labelledby='before-after-title'
            className='relative isolate overflow-hidden py-24 sm:py-32'
        >
            <div className='mx-auto w-full max-w-[1199px] px-5 sm:px-8'>
                <Reveal>
                    <SectionBadge>{beforeAfterCopy.eyebrow}</SectionBadge>

                    <h2
                        id='before-after-title'
                        className='mt-5 font-heading text-[clamp(2.3rem,4.5vw,4.2rem)] leading-[1] font-normal tracking-[-0.04em] text-balance text-ink'
                    >
                        {beforeAfterCopy.title}
                    </h2>

                    <p className='mt-5 max-w-[44ch] text-[16px] leading-[1.55] text-ink/65'>{beforeAfterCopy.body}</p>
                </Reveal>

                <Reveal delay={100} className='mt-10'>
                    <div className='flex justify-start'>
                        <div
                            role='group'
                            aria-label='Compare the old way with Dukaan.AI'
                            className='flex border border-ink/15 bg-paper p-1'
                        >
                            {([
                                { key: 'old', label: beforeAfterCopy.oldLabel },
                                { key: 'new', label: beforeAfterCopy.newLabel }
                            ] as const).map((option) => (
                                <button
                                    key={option.key}
                                    type='button'
                                    aria-pressed={mode === option.key}
                                    onClick={() => setMode(option.key)}
                                    className={cn(
                                        'h-9 cursor-pointer px-5 text-[13px] font-medium transition-colors focus-visible:ring-2 focus-visible:ring-teal-deep focus-visible:outline-none',
                                        mode === option.key
                                            ? option.key === 'new'
                                                ? 'bg-mint text-ink'
                                                : 'bg-ink text-paper'
                                            : 'text-ink/45 hover:text-ink'
                                    )}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div
                        key={mode}
                        className={cn(
                            'relative mx-auto mt-8 max-w-[760px] overflow-hidden border p-6 animate-rise-soft sm:p-9',
                            mode === 'new' ? 'border-teal/30 bg-mint' : 'border-ink/15 bg-paper'
                        )}
                    >
                        <div className='flex items-center justify-between'>
                            <p className='font-mono text-[11px] tracking-[0.12em] text-ink/35 uppercase'>
                                9:00 pm · the counter
                            </p>

                            <span
                                className={cn(
                                    'border px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] uppercase',
                                    mode === 'new' ? 'border-teal/25 bg-paper/60 text-teal-deep' : 'border-ink/15 text-ink/50'
                                )}
                            >
                                {mode === 'new' ? 'Closed and counted' : 'Still open'}
                            </span>
                        </div>

                        <ul className='mt-7 space-y-4'>
                            {list.map((item) => (
                                <li key={item} className='flex items-start gap-3.5'>
                                    <span
                                        className={cn(
                                            'mt-0.5 flex size-6 shrink-0 items-center justify-center',
                                            mode === 'new' ? 'bg-teal-deep text-paper' : 'bg-ink/8 text-ink/40'
                                        )}
                                    >
                                        {mode === 'new'
                                            ? <Check aria-hidden className='size-3.5' strokeWidth={3} />
                                            : <Minus aria-hidden className='size-3.5' />}
                                    </span>

                                    <span className={cn('text-[16px] leading-relaxed', mode === 'new' ? 'text-ink/80' : 'text-ink/55')}>
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <p className={cn('mt-8 border-t pt-5 text-[13px] leading-relaxed', mode === 'new' ? 'border-teal/20 text-ink/60' : 'border-ink/10 text-ink/40')}>
                            {mode === 'new'
                                ? 'The day is already written down. Close the shutter.'
                                : 'The notebook closes when you remember to close it.'}
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
