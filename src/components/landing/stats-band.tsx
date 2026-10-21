import type { FC, ReactNode } from 'react'

import { CountUp } from '@/components/generals/count-up'
import { Reveal } from '@/components/generals/reveal'
import { stats } from '@/constants/copy'

export const StatsBand: FC = (): ReactNode => {
    return (
        <section aria-label='Dukaan.AI in numbers' className='relative isolate overflow-hidden bg-iris py-14 sm:py-16'>
            <div
                aria-hidden
                className='pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(rgba(251,250,246,0.5)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,#000,transparent_88%)]'
            />

            <div className='relative mx-auto w-full max-w-[1439px] px-5 sm:px-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                    {stats.map((stat, index) => (
                        <Reveal key={stat.label} delay={index * 70} className='h-full'>
                            <div
                                className={[
                                    'h-full border-t border-paper/20 py-7',
                                    'sm:px-6 lg:px-7 lg:py-8',
                                    index === 0 ? 'lg:pl-0' : '',
                                    index === 3 ? 'lg:pr-0' : '',
                                    index % 2 === 1 ? 'sm:border-l sm:border-paper/20' : '',
                                    index > 0 ? 'lg:border-l lg:border-paper/20' : ''
                                ].join(' ')}
                            >
                                <p className='font-heading text-[clamp(2.4rem,3.4vw,3.25rem)] leading-none tracking-[-0.045em] text-paper'>
                                    <CountUp value={stat.value} />
                                </p>

                                <p className='mt-6 max-w-[22ch] text-[14px] leading-snug tracking-[-0.01em] text-paper/80'>
                                    {stat.label}
                                </p>

                                <p className='mt-2 max-w-[26ch] text-[12.5px] leading-snug text-paper/60'>
                                    {stat.context}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
