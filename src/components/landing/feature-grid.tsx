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
import { SectionBadge } from '@/components/landing/section-badge'
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
        <section id='features' aria-labelledby='features-title' className='relative isolate overflow-hidden py-20 sm:py-28'>
            <div className='mx-auto w-full max-w-[1439px] px-5 sm:px-8'>
                <div className='grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-16'>
                    <Reveal>
                        <SectionBadge>Everything in one place</SectionBadge>

                        <h2
                            id='features-title'
                            className='mt-5 max-w-[16ch] font-heading text-[clamp(2.3rem,4.5vw,4.2rem)] leading-[1] font-normal tracking-[-0.04em] text-balance text-ink'
                        >
                            Everything behind the counter.
                        </h2>
                    </Reveal>

                    <Reveal delay={80}>
                        <p className='max-w-[44ch] text-[16px] leading-[1.55] text-ink/65'>
                            The dashboard does the bookkeeping. You keep the shop.
                        </p>
                    </Reveal>
                </div>

                <ul className='mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                    {features.map((feature, index) => {
                        const Icon = ICONS[feature.icon]

                        return (
                            <Reveal key={feature.title} delay={(index % 3) * 70} className='h-full'>
                                <li className='group flex h-full flex-col border border-ink/15 bg-paper p-6 transition-colors duration-200 hover:border-ink/35 sm:p-7'>
                                    <div className='flex items-start justify-between gap-4'>
                                        <span className='flex size-10 items-center justify-center border border-ink/10 bg-mint text-ink'>
                                            <Icon aria-hidden className='size-[18px]' />
                                        </span>

                                        <span className='font-mono text-[10.5px] text-ink/25 tabular-nums'>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <h3 className='mt-7 font-heading text-[21px] leading-tight font-normal tracking-[-0.02em] text-ink'>
                                        {feature.title}
                                    </h3>

                                    <p className='mt-2.5 text-[14px] leading-[1.55] text-ink/60'>{feature.body}</p>
                                </li>
                            </Reveal>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
