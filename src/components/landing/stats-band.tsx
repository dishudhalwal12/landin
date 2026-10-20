import type { FC, ReactNode } from 'react'

import { CountUp } from '@/components/generals/count-up'
import { Reveal } from '@/components/generals/reveal'
import { stats } from '@/constants/copy'

export const StatsBand: FC = (): ReactNode => {
    return (
        <section aria-label='Dukaan.AI in numbers' className='relative isolate overflow-hidden bg-iris py-14 sm:py-16'>
            <div
                aria-hidden
                className='pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(251,250,246,0.5)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:linear-gradient(to_bottom,#000,transparent_85%)]'
            />

            <div className='relative mx-auto w-full max-w-[1439px] px-5 sm:px-8'>
                <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4'>
                    {stats.map((stat, index) => (
                        <Reveal key={stat.label} delay={index * 70}>
                            <div className='paper-card grain flex h-full flex-col justify-between px-6 py-7 sm:px-7 sm:py-8'>
                                <p className='font-heading text-[clamp(2.4rem,3.4vw,3.25rem)] leading-none tracking-[-0.045em] text-ink'>
                                    <CountUp value={stat.value} />
                                </p>

                                <div className='mt-6'>
                                    <p className='text-[14.5px] leading-snug tracking-[-0.01em] text-ink/75'>{stat.label}</p>
                                    <p className='mt-2 text-[12.5px] leading-snug text-ink/45'>{stat.context}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
