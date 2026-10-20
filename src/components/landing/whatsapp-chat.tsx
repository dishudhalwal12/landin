import type { FC, ReactNode } from 'react'

import { useEffect, useRef, useState } from 'react'
import { Bell, Check, CheckCheck, RotateCcw, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { heroChat } from '@/constants/copy'

const BOT_BUBBLE = 'mr-auto rounded-[14px] rounded-bl-[4px] border border-night/10 bg-mint text-night'
const CUSTOMER_BUBBLE = 'ml-auto rounded-[14px] rounded-br-[4px] border border-paper/10 bg-paper/[0.07] text-paper'

const TypingDots: FC = (): ReactNode => {
    return (
        <span className='flex items-center gap-1' aria-label='The shop is typing'>
            {[0, 1, 2].map((dot) => (
                <span
                    key={dot}
                    className='size-1.5 rounded-full bg-black/55 motion-safe:animate-type-dot'
                    style={{ animationDelay: `${dot * 140}ms` }}
                />
            ))}
        </span>
    )
}

export const WhatsAppChat: FC = (): ReactNode => {
    const [stage, setStage] = useState(0)
    const [accepted, setAccepted] = useState(false)
    const [runId, setRunId] = useState(0)
    const logRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setStage(5)
            return
        }

        setStage(0)
        setAccepted(false)

        const timers = [
            window.setTimeout(() => setStage(1), 350),
            window.setTimeout(() => setStage(2), 1100),
            window.setTimeout(() => setStage(3), 2200),
            window.setTimeout(() => setStage(4), 3100),
            window.setTimeout(() => setStage(5), 3900)
        ]

        return () => timers.forEach((timer) => window.clearTimeout(timer))
    }, [runId])

    useEffect(() => {
        const log = logRef.current

        if (!log) return

        log.scrollTo({
            top: log.scrollHeight,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        })
    }, [stage, accepted])

    const accept = () => {
        setAccepted(true)
        setStage(6)
    }

    return (
        <div className='relative mx-auto w-full max-w-[430px]'>
            <div className='pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(closest-side,rgba(56,116,120,0.22),transparent_72%)] blur-2xl' />

            <div className='rounded-lg border border-night/30 bg-night p-2.5 shadow-[0_50px_120px_-50px_rgba(16,33,41,0.85)]'>
                <div className='overflow-hidden rounded-md border border-paper/12 bg-[#0c1b22]'>
                    <div className='flex items-center gap-3 border-b border-paper/10 bg-[#0f2029] px-4 py-3'>
                        <span className='flex size-10 items-center justify-center rounded-md bg-mint text-[13px] font-semibold text-night'>
                            SK
                        </span>

                        <div className='min-w-0 flex-1'>
                            <p className='truncate text-[14px] font-semibold text-paper'>
                                {heroChat.shop}
                            </p>
                            <p className='flex items-center gap-1.5 text-[11.5px] text-paper/50'>
                                <span className='size-1.5 rounded-full bg-lime' />
                                {accepted ? 'Order accepted' : heroChat.status}
                            </p>
                        </div>

                        <button
                            type='button'
                            onClick={() => setRunId((current) => current + 1)}
                            aria-label='Replay the sample conversation'
                            className='flex size-8 items-center justify-center rounded-md text-paper/45 transition-colors hover:bg-paper/10 hover:text-paper focus-visible:ring-2 focus-visible:ring-lime focus-visible:outline-none'
                        >
                            <RotateCcw aria-hidden className='size-4' />
                        </button>
                    </div>

                    <div
                        ref={logRef}
                        role='log'
                        aria-label='Sample WhatsApp conversation'
                        className='no-scrollbar relative flex h-[430px] flex-col gap-2.5 overflow-y-auto px-3 py-4'
                    >
                        <div aria-hidden className='dot-grid-inverse pointer-events-none absolute inset-0 opacity-[0.14]' />

                        <div className='relative z-10 mx-auto mb-1 flex items-center gap-1.5 rounded-full border border-paper/10 bg-paper/5 px-2.5 py-1 text-[10px] text-paper/45'>
                            <Bell aria-hidden className='size-3' />
                            New order alerts are on
                        </div>

                        {stage >= 1 && (
                            <div className={cn('relative z-10 max-w-[82%] animate-rise-soft px-3 py-2 text-[13.5px] leading-snug', CUSTOMER_BUBBLE)}>
                                {heroChat.messages[0].text}
                                <span className='mt-1 block text-right text-[9.5px] text-paper/35'>10:42</span>
                            </div>
                        )}

                        {stage === 2 && (
                            <div className={cn('relative z-10 flex w-16 animate-rise-soft items-center justify-center px-3 py-2.5', BOT_BUBBLE)}>
                                <TypingDots />
                            </div>
                        )}

                        {stage >= 3 && (
                            <div className={cn('relative z-10 max-w-[86%] animate-rise-soft px-3 py-2 text-[13.5px] leading-snug', BOT_BUBBLE)}>
                                {heroChat.messages[1].text}
                                <span className='mt-1 flex items-center justify-end gap-1 text-[9.5px] text-black/40'>
                                    10:42 <CheckCheck aria-hidden className='size-3' />
                                </span>
                            </div>
                        )}

                        {stage >= 4 && (
                            <div className={cn('relative z-10 max-w-[82%] animate-rise-soft px-3 py-2 text-[13.5px] leading-snug', CUSTOMER_BUBBLE)}>
                                {heroChat.messages[2].text}
                                <span className='mt-1 block text-right text-[9.5px] text-paper/35'>10:43</span>
                            </div>
                        )}

                        {stage >= 5 && (
                            <div className='relative z-10 ml-auto w-full max-w-[94%] animate-rise-soft rounded-md border border-moss/25 bg-paper/[0.05] p-3.5'>
                                <div className='flex items-center justify-between'>
                                    <span className='font-mono text-[10px] tracking-[0.16em] text-moss/80 uppercase'>
                                        {heroChat.order.title}
                                    </span>
                                    <span className='rounded-full bg-paper/10 px-2 py-0.5 text-[10px] text-paper/50'>
                                        {heroChat.order.count}
                                    </span>
                                </div>

                                <p className='mt-2 text-[13.5px] font-medium text-paper'>
                                    {heroChat.order.items}
                                </p>

                                <div className='mt-3 flex items-end justify-between'>
                                    <span className='text-[11px] text-paper/45'>Total</span>
                                    <span className='font-heading text-[24px] leading-none font-normal tracking-[-0.03em] text-paper'>
                                        {heroChat.order.total}
                                    </span>
                                </div>

                                <button
                                    type='button'
                                    onClick={accept}
                                    disabled={accepted}
                                    className={cn(
                                        'mt-3.5 flex h-11 w-full items-center justify-center gap-2 rounded-full text-[13.5px] font-semibold transition-[background-color,transform] focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1b22] focus-visible:outline-none',
                                        accepted
                                            ? 'cursor-default bg-paper/10 text-paper/60'
                                            : 'cursor-pointer bg-lime text-night hover:bg-[#8fd44f] active:scale-[0.99]'
                                    )}
                                >
                                    {accepted ? (
                                        <>
                                            <Check aria-hidden className='size-4' />
                                            Accepted
                                        </>
                                    ) : (
                                        'Accept order'
                                    )}
                                </button>

                                <p className='mt-2 text-center text-[10px] text-paper/35'>
                                    {accepted ? 'Customer notified on WhatsApp' : heroChat.order.timer}
                                </p>
                            </div>
                        )}

                        {accepted && (
                            <div className={cn('relative z-10 max-w-[86%] animate-rise-soft px-3 py-2 text-[13.5px] leading-snug', BOT_BUBBLE)}>
                                {heroChat.confirmation}
                                <span className='mt-1 flex items-center justify-end gap-1 text-[9.5px] text-black/40'>
                                    10:43 <CheckCheck aria-hidden className='size-3' />
                                </span>
                            </div>
                        )}
                    </div>

                    <div className='flex items-center gap-2 border-t border-paper/10 bg-[#0f2029] px-3 py-2.5'>
                        <div className='flex h-9 flex-1 items-center rounded-full border border-paper/10 bg-paper/5 px-3 text-[12px] text-paper/30'>
                            Message
                        </div>
                        <span className='flex size-9 items-center justify-center rounded-full bg-mint text-night'>
                            <Send aria-hidden className='size-4' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
