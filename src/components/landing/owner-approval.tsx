import type { FC, ReactNode } from 'react'

import { useState } from 'react'
import { Bell, Check, CheckCheck, PackageCheck, RotateCcw, Truck, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/generals/reveal'
import { SectionBadge } from '@/components/landing/section-badge'
import { ownerCopy } from '@/constants/copy'

type Stage = 'pending' | 'accepted' | 'ready' | 'delivered' | 'rejected'

const REPLIES: Record<Stage, string> = {
    pending: 'Waiting for the shop to reply.',
    accepted: 'Order confirmed. Aaj 20 minutes mein.',
    ready: 'Your order is packed. Aaj aa jaiye.',
    delivered: 'Delivered. Thank you!',
    rejected: 'Sorry, we cannot take this order right now.'
}

const STATUS: Record<Stage, string> = {
    pending: 'Needs your yes',
    accepted: 'Accepted',
    ready: 'Ready for pickup',
    delivered: 'Delivered',
    rejected: 'Rejected'
}

export const OwnerApproval: FC = (): ReactNode => {
    const [stage, setStage] = useState<Stage>('pending')

    const next = () => {
        if (stage === 'accepted') setStage('ready')
        else if (stage === 'ready') setStage('delivered')
    }

    return (
        <section
            id='owners'
            aria-labelledby='owners-title'
            className='relative isolate overflow-hidden border-y border-ink/10 bg-paper-2 py-24 sm:py-32'
        >
            <div className='mx-auto grid w-full max-w-[1199px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20'>
                <Reveal>
                    <SectionBadge>{ownerCopy.eyebrow}</SectionBadge>

                    <h2
                        id='owners-title'
                        className='mt-6 max-w-[17ch] font-heading text-[clamp(2.3rem,4.2vw,3.6rem)] leading-[1.04] font-normal tracking-[-0.04em] text-balance text-ink'
                    >
                        {ownerCopy.title}
                    </h2>

                    <p className='mt-5 max-w-[42ch] text-[16.5px] leading-relaxed text-ink/55 sm:text-[17.5px]'>
                        {ownerCopy.body}
                    </p>

                    <ul className='mt-8 space-y-3'>
                        {ownerCopy.points.map((point) => (
                            <li key={point} className='flex items-start gap-3 text-[14.5px] text-ink/70'>
                                <span className='mt-0.5 flex size-5 shrink-0 items-center justify-center bg-teal-deep text-paper'>
                                    <Check aria-hidden className='size-3' strokeWidth={3} />
                                </span>
                                {point}
                            </li>
                        ))}
                    </ul>
                </Reveal>

                <Reveal delay={120}>
                    <div className='relative mx-auto w-full max-w-[460px] overflow-hidden rounded-lg border border-night/30 bg-night p-2.5 shadow-[0_50px_120px_-70px_rgba(16,33,41,0.9)]'>
                        <div className='flex items-center justify-between px-1.5 pb-2.5'>
                            <div className='flex items-center gap-1.5'>
                                <span aria-hidden className='size-2 rounded-full bg-lime' />
                                <span aria-hidden className='size-2 rounded-full bg-cyan' />
                                <span aria-hidden className='size-2 rounded-full bg-clay/60' />
                                <span className='ml-1.5 font-mono text-[10px] tracking-[0.14em] text-paper/40 uppercase'>
                                    shop console
                                </span>
                            </div>

                            <span className='font-mono text-[10px] tracking-[0.14em] text-lime uppercase'>
                                live
                            </span>
                        </div>

                        <div className='overflow-hidden rounded-md border border-paper/12 bg-[#0c1b22]'>
                            <div className='flex items-center justify-between border-b border-paper/10 bg-paper/[0.03] px-5 py-4'>
                                <div>
                                    <p className='text-[13px] font-semibold text-paper'>New order · #1042</p>
                                    <p className='font-mono text-[10.5px] tracking-[0.08em] text-paper/40'>Sharma Kirana · 10:42</p>
                                </div>

                                <span className='relative flex size-9 items-center justify-center rounded-md bg-lime/10 text-lime'>
                                    <Bell aria-hidden className='size-4' />
                                    {stage === 'pending' && (
                                        <span aria-hidden className='absolute inset-0 animate-ping-soft rounded-md' />
                                    )}
                                </span>
                            </div>

                            <div className='px-5 py-5'>
                                <div className='flex items-center justify-between text-[11px]'>
                                    <span
                                        className={cn(
                                            'font-medium',
                                            stage === 'rejected' ? 'text-red-300' : stage === 'pending' ? 'text-amber-200' : 'text-lime'
                                        )}
                                    >
                                        {STATUS[stage]}
                                    </span>

                                    <span className='text-paper/35'>{stage === 'pending' ? '60s to accept' : 'Updated just now'}</span>
                                </div>

                                <span className='mt-2 block h-1 overflow-hidden rounded-full bg-paper/10'>
                                    <span
                                        className={cn(
                                            'block h-full rounded-full transition-[width,background-color] duration-700 ease-out',
                                            stage === 'rejected' ? 'bg-red-300/70' : stage === 'pending' ? 'bg-amber-300/80' : 'bg-lime'
                                        )}
                                        style={{ width: stage === 'pending' ? '78%' : stage === 'rejected' ? '100%' : '100%' }}
                                    />
                                </span>

                                <ul className='mt-5 space-y-2 rounded-md border border-paper/10 bg-paper/[0.03] p-3.5 text-[13px]'>
                                    <li className='flex items-center justify-between'>
                                        <span className='text-paper/60'>2 × Milk 500 ml</span>
                                        <span className='text-paper/85'>₹56</span>
                                    </li>
                                    <li className='flex items-center justify-between'>
                                        <span className='text-paper/60'>1 × Maggi</span>
                                        <span className='text-paper/85'>₹13</span>
                                    </li>
                                    <li className='flex items-center justify-between border-t border-paper/10 pt-2 font-semibold'>
                                        <span className='text-paper/80'>Total · Cash</span>
                                        <span className='text-paper'>₹69</span>
                                    </li>
                                </ul>

                                <div className='mt-4 flex gap-2'>
                                    {stage === 'pending' && (
                                        <>
                                            <button
                                                type='button'
                                                onClick={() => setStage('rejected')}
                                                className='flex h-11 flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full border border-paper/15 bg-transparent text-[13.5px] font-medium text-paper/60 transition-colors hover:border-red-300/30 hover:text-red-200 focus-visible:ring-2 focus-visible:ring-lime focus-visible:outline-none'
                                            >
                                                <X aria-hidden className='size-4' />
                                                Reject
                                            </button>

                                            <button
                                                type='button'
                                                onClick={() => setStage('accepted')}
                                                className='flex h-11 flex-[1.6] cursor-pointer items-center justify-center gap-1.5 rounded-full bg-lime text-[13.5px] font-semibold text-night transition-[background-color,transform] hover:bg-[#8fd44f] active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-night focus-visible:outline-none'
                                            >
                                                <Check aria-hidden className='size-4' strokeWidth={3} />
                                                Accept order
                                            </button>
                                        </>
                                    )}

                                    {stage === 'accepted' && (
                                        <button
                                            type='button'
                                            onClick={next}
                                            className='flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-lime text-[13.5px] font-semibold text-night transition-colors hover:bg-[#8fd44f] focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-night focus-visible:outline-none'
                                        >
                                            <PackageCheck aria-hidden className='size-4' />
                                            Mark ready
                                        </button>
                                    )}

                                    {stage === 'ready' && (
                                        <button
                                            type='button'
                                            onClick={next}
                                            className='flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-lime text-[13.5px] font-semibold text-night transition-colors hover:bg-[#8fd44f] focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-night focus-visible:outline-none'
                                        >
                                            <Truck aria-hidden className='size-4' />
                                            Mark delivered
                                        </button>
                                    )}

                                    {(stage === 'delivered' || stage === 'rejected') && (
                                        <button
                                            type='button'
                                            onClick={() => setStage('pending')}
                                            className='flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-paper/15 text-[13.5px] font-medium text-paper/70 transition-colors hover:bg-paper/5 hover:text-paper focus-visible:ring-2 focus-visible:ring-lime focus-visible:outline-none'
                                        >
                                            <RotateCcw aria-hidden className='size-4' />
                                            Next order
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className='border-t border-paper/10 bg-paper/[0.02] px-5 py-4'>
                                <p className='font-mono text-[10px] tracking-[0.16em] text-paper/30 uppercase'>
                                    The customer sees
                                </p>

                                <div
                                    key={stage}
                                    className={cn(
                                        'mt-2.5 flex max-w-[92%] items-start gap-2 rounded-md px-3.5 py-2.5 text-[12.5px] leading-snug animate-rise-soft',
                                        stage === 'rejected'
                                            ? 'border border-paper/10 bg-paper/[0.04] text-paper/60'
                                            : 'bg-mint text-night'
                                    )}
                                >
                                    <span className='flex-1'>{REPLIES[stage]}</span>
                                    {stage !== 'pending' && stage !== 'rejected' && (
                                        <CheckCheck aria-hidden className='mt-0.5 size-3.5 shrink-0 opacity-60' />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
