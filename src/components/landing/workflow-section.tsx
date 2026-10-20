import type { FC, ReactNode } from 'react'

import { Check, ChevronRight, Mic, Package, TriangleAlert } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/generals/reveal'
import { steps } from '@/constants/copy'

const WAVE = [6, 12, 18, 10, 22, 14, 8, 16, 24, 12, 7, 15]

const MessageVisual: FC = (): ReactNode => {
    return (
        <div aria-hidden className='space-y-2.5'>
            <div className='ml-auto max-w-[86%] rounded-md rounded-br-xs border border-white/8 bg-night/45 px-3.5 py-2.5 text-[13px] leading-snug text-paper/85'>
                Bhaiya, 2 packet doodh aur ek Maggi
                <span className='mt-1 block text-right text-[9.5px] text-paper/30'>10:42</span>
            </div>

            <div className='ml-auto flex w-fit items-center gap-2.5 rounded-full border border-white/8 bg-night/45 px-3 py-2'>
                <span className='flex size-7 items-center justify-center rounded-full bg-mint text-ink'>
                    <Mic className='size-3.5' />
                </span>
                <span className='flex items-end gap-[3px]'>
                    {WAVE.map((height, index) => (
                        <span
                            key={index}
                            className='w-[2.5px] rounded-full bg-paper/35'
                            style={{ height: `${height * 0.75}px` }}
                        />
                    ))}
                </span>
                <span className='text-[10.5px] text-paper/40'>0:04</span>
            </div>
        </div>
    )
}

const ParseVisual: FC = (): ReactNode => {
    return (
        <div aria-hidden className='rounded-md border border-white/8 bg-night/40 p-3.5'>
            <div className='flex items-center justify-between'>
                <span className='text-[10px] font-semibold tracking-[0.16em] text-mint/80 uppercase'>
                    Reading the message
                </span>
                <span className='flex items-center gap-1 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[9.5px] text-emerald-300'>
                    <Check className='size-2.5' />
                    Understood
                </span>
            </div>

            <ul className='mt-3 space-y-1.5'>
                {[
                    { name: 'Milk 500 ml', quantity: '× 2', price: '₹56' },
                    { name: 'Maggi', quantity: '× 1', price: '₹13' }
                ].map((item) => (
                    <li key={item.name} className='flex items-center gap-2 rounded-md border border-white/6 bg-white/[0.025] px-2.5 py-2 text-[12px]'>
                        <Package className='size-3.5 text-paper/30' />
                        <span className='flex-1 text-paper/75'>{item.name}</span>
                        <span className='text-paper/40'>{item.quantity}</span>
                        <span className='font-medium text-paper/80'>{item.price}</span>
                    </li>
                ))}
            </ul>

            <div className='mt-3 flex items-center justify-between text-[11px]'>
                <span className='text-paper/40'>Saved address · Cash on delivery</span>
                <span className='font-semibold text-paper'>₹69</span>
            </div>
        </div>
    )
}

const AcceptVisual: FC = (): ReactNode => {
    return (
        <div aria-hidden className='rounded-md border border-white/8 bg-night/40 p-3.5'>
            <div className='flex items-center justify-between'>
                <span className='text-[10px] font-semibold tracking-[0.16em] text-mint/80 uppercase'>
                    New order · #1042
                </span>
                <span className='rounded-full border border-amber-300/20 bg-amber-300/10 px-2 py-0.5 text-[9.5px] text-amber-200'>
                    0:47
                </span>
            </div>

            <div className='mt-3 flex items-center justify-between text-[12.5px]'>
                <span className='text-paper/70'>2 × Milk · 1 × Maggi</span>
                <span className='font-semibold text-paper'>₹69</span>
            </div>

            <div className='mt-3 flex h-11 items-center rounded-full border border-white/8 bg-white/[0.03] p-1'>
                <span className='flex size-9 items-center justify-center rounded-full bg-mint text-ink'>
                    <ChevronRight className='size-4' />
                </span>
                <span className='flex-1 text-center text-[11.5px] text-paper/45'>Slide to accept</span>
            </div>

            <div className='mt-3 flex items-center justify-between rounded-md border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-2 text-[10.5px] text-emerald-200/85'>
                <span>Customer gets a confirmation</span>
                <Check className='size-3.5' />
            </div>
        </div>
    )
}

const StockVisual: FC = (): ReactNode => {
    return (
        <div aria-hidden className='space-y-2 rounded-md border border-white/8 bg-night/40 p-3.5'>
            {[
                { name: 'Milk 500 ml', left: 18, width: '72%', low: false },
                { name: 'Maggi', left: 8, width: '38%', low: true },
                { name: 'Bread', left: 24, width: '86%', low: false }
            ].map((item) => (
                <div key={item.name} className='rounded-md border border-white/6 bg-white/[0.02] px-3 py-2.5'>
                    <div className='flex items-center justify-between text-[12px]'>
                        <span className='text-paper/75'>{item.name}</span>
                        <span className={cn('flex items-center gap-1 font-medium', item.low ? 'text-amber-300' : 'text-paper/55')}>
                            {item.low && <TriangleAlert className='size-3' />}
                            {item.left} left
                        </span>
                    </div>

                    <span className='mt-2 block h-1 overflow-hidden rounded-full bg-white/8'>
                        <span
                            className={cn('block h-full rounded-full', item.low ? 'bg-amber-300/80' : 'bg-mint/80')}
                            style={{ width: item.width }}
                        />
                    </span>
                </div>
            ))}
        </div>
    )
}

const VISUALS = {
    message: MessageVisual,
    parse: ParseVisual,
    accept: AcceptVisual,
    stock: StockVisual
}

export const WorkflowSection: FC = (): ReactNode => {
    return (
        <section
            id='how'
            aria-labelledby='how-title'
            className='relative isolate overflow-hidden border-y border-ink/10 bg-mint py-20 sm:py-28'
        >
            <div className='mx-auto w-full max-w-[1439px] px-5 sm:px-8'>
                <div className='grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16'>
                    <Reveal>
                        <p className='font-mono text-[11px] tracking-[0.18em] text-ink/55 uppercase'>How it works</p>

                        <h2
                            id='how-title'
                            className='mt-5 max-w-[16ch] font-heading text-[clamp(2.3rem,4.5vw,4.2rem)] leading-[1] font-normal tracking-[-0.04em] text-balance text-ink'
                        >
                            From a message to a stocked shelf.
                        </h2>
                    </Reveal>

                    <Reveal delay={80}>
                        <p className='max-w-[44ch] text-[16px] leading-[1.55] text-ink/65'>
                            The whole loop fits inside the chat your customer already has open.
                        </p>

                        <div className='mt-6 inline-flex items-center gap-2 border border-ink/15 px-3 py-2 font-mono text-[10.5px] tracking-[0.12em] text-ink/60 uppercase'>
                            WhatsApp in
                            <ChevronRight className='size-3 text-ink/30' />
                            Dashboard out
                        </div>
                    </Reveal>
                </div>

                <ol className='mt-12 grid gap-4 md:grid-cols-2'>
                    {steps.map((step, index) => {
                        const Visual = VISUALS[step.visual]

                        return (
                            <Reveal key={step.number} delay={index * 70} className='h-full'>
                                <li className='flex h-full flex-col rounded-lg border border-ink/15 bg-sage p-6 transition-[transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-ink/40 sm:p-8 md:min-h-[450px]'>
                                    <div className='flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-ink/55 uppercase'>
                                        <span>Step {step.number}</span>
                                        <span>{index + 1} / 4</span>
                                    </div>

                                    <h3 className='mt-6 max-w-[18ch] font-heading text-[27px] leading-[1.04] font-normal tracking-[-0.03em] text-ink sm:text-[32px]'>
                                        {step.title}
                                    </h3>

                                    <p className='mt-4 max-w-[42ch] text-[14.5px] leading-[1.55] text-ink/70'>{step.body}</p>

                                    <div className='mt-8 flex flex-1 items-end'>
                                        <div className='w-full rounded-md border border-ink/15 bg-teal p-3 sm:p-4'>
                                            <Visual />
                                        </div>
                                    </div>
                                </li>
                            </Reveal>
                        )
                    })}
                </ol>
            </div>
        </section>
    )
}
