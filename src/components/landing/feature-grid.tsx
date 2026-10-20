import type { FC, ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

import {
    Boxes,
    Camera,
    ChartColumn,
    Cloud,
    Languages,
    MessageSquareText,
    QrCode,
    ReceiptText,
    Sparkles
} from 'lucide-react'
import { Reveal } from '@/components/generals/reveal'
import { features } from '@/constants/copy'

const ICONS: Record<(typeof features)[number]['icon'], LucideIcon> = {
    receipt: ReceiptText,
    camera: Camera,
    boxes: Boxes,
    message: MessageSquareText,
    chart: ChartColumn,
    sparkles: Sparkles,
    qr: QrCode,
    languages: Languages,
    cloud: Cloud
}

export const FeatureGrid: FC = (): ReactNode => {
    return (
        <section
            id='features'
            aria-labelledby='features-title'
            className='relative isolate overflow-hidden bg-paper py-20 sm:py-24 lg:py-28'
        >
            <div className='mx-auto w-full max-w-[1439px] px-5 sm:px-8'>
                <div className='grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16'>
                    <Reveal>
                        <p className='eyebrow text-ink/45'>Everything in one place</p>

                        <h2 id='features-title' className='display-xl mt-5 max-w-[15ch] text-ink text-balance'>
                            Everything behind the counter.
                        </h2>
                    </Reveal>

                    <Reveal delay={80}>
                        <p className='max-w-[42ch] text-[16.5px] leading-[1.5] tracking-[-0.01em] text-ink/60 lg:pb-2 lg:text-[18px]'>
                            The dashboard does the bookkeeping. You keep the shop.
                        </p>
                    </Reveal>
                </div>

                <Reveal className='mt-12 sm:mt-16'>
                    <ul className='grid grid-cols-1 gap-px overflow-hidden rounded-[8px] border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:grid-cols-3'>
                        {features.map((feature, index) => {
                            const Icon = ICONS[feature.icon]

                            return (
                                <li
                                    key={feature.title}
                                    className='group relative flex h-full flex-col bg-paper p-6 transition-colors duration-300 hover:bg-[#f6f4ec] sm:p-7 lg:p-8'
                                >
                                    <div className='flex items-start justify-between gap-4'>
                                        <span className='flex size-9 items-center justify-center rounded-full border border-ink/12 text-ink/70 transition-colors duration-300 group-hover:border-teal/30 group-hover:text-teal-deep'>
                                            <Icon aria-hidden className='size-4' />
                                        </span>

                                        <span className='font-mono text-[10.5px] text-ink/30 tabular-nums'>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <h3 className='mt-8 max-w-[20ch] font-heading text-[21px] leading-[1.12] font-normal tracking-[-0.028em] text-ink'>
                                        {feature.title}
                                    </h3>

                                    <p className='mt-2.5 max-w-[34ch] text-[14px] leading-[1.55] text-ink/55'>
                                        {feature.body}
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                </Reveal>
            </div>
        </section>
    )
}
