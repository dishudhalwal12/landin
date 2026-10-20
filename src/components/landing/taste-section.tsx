import type { FC, ReactNode } from 'react'

import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/generals/reveal'
import { shopTypes, tasteCopy } from '@/constants/copy'
import { APP_URL } from '@/constants/site'

export const TasteSection: FC = (): ReactNode => {
    return (
        <section
            id='owners'
            aria-labelledby='taste-title'
            className='grain relative isolate overflow-hidden bg-iris py-20 text-paper sm:py-24 lg:py-32'
        >
            <div
                aria-hidden
                className='pointer-events-none absolute inset-0 opacity-[0.14] [background-image:radial-gradient(rgba(251,250,246,0.55)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_at_20%_0%,#000,transparent_72%)]'
            />
            <div
                aria-hidden
                className='pointer-events-none absolute -right-[16%] -bottom-[28%] h-[62vh] w-[62vw] rounded-full bg-[radial-gradient(closest-side,rgba(10,22,26,0.6),transparent_72%)] blur-3xl'
            />

            <div className='relative mx-auto w-full max-w-[1439px] px-5 sm:px-8'>
                <div className='grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20'>
                    <Reveal>
                        <p className='eyebrow text-paper/55'>{tasteCopy.eyebrow}</p>

                        <h2
                            id='taste-title'
                            className='display-xl mt-6 max-w-[17ch] text-paper text-balance'
                        >
                            {tasteCopy.title}
                        </h2>
                    </Reveal>

                    <Reveal delay={120} className='lg:pt-14'>
                        <p className='max-w-[40ch] text-[16.5px] leading-[1.55] tracking-[-0.01em] text-paper/70 sm:text-[18px]'>
                            {tasteCopy.body}
                        </p>

                        <a
                            href={APP_URL}
                            target='_blank'
                            rel='noreferrer'
                            className='group mt-7 inline-flex items-center gap-2 border-b border-paper/30 pb-1 text-[13.5px] font-medium text-paper transition-colors hover:border-paper focus-visible:ring-2 focus-visible:ring-paper focus-visible:outline-none'
                        >
                            Open the beta app
                            <ArrowUpRight
                                aria-hidden
                                className='size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                            />
                        </a>
                    </Reveal>
                </div>

                <Reveal delay={160}>
                    <div className='mt-12 border-t border-paper/15 pt-6 sm:mt-16'>
                        <p className='eyebrow text-paper/45'>{tasteCopy.rolesLabel}</p>

                        <ul className='mt-4 flex flex-wrap gap-2'>
                            {shopTypes.map((shop) => (
                                <li
                                    key={shop}
                                    className='rounded-full border border-paper/20 px-4 py-2 text-[13px] tracking-[-0.01em] text-paper/75'
                                >
                                    {shop}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>

                <div className='mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[8px] bg-paper/15 sm:grid-cols-3'>
                    {tasteCopy.stats.map((stat, index) => (
                        <Reveal key={stat.label} delay={index * 80}>
                            <div className='h-full bg-iris px-2 py-6 sm:px-6 sm:py-7'>
                                <p className='font-heading text-[clamp(2.2rem,3.2vw,3rem)] leading-none tracking-[-0.045em] text-paper'>
                                    {stat.value}
                                </p>
                                <p className='mt-3 max-w-[22ch] text-[13.5px] leading-snug text-paper/60'>
                                    {stat.label}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
