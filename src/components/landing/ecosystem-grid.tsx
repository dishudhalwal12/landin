import type { ArtTone } from '@/components/landing/artwork-panel'
import type { FC, ReactNode } from 'react'

import { ArrowUpRight } from 'lucide-react'
import { ArtworkPanel } from '@/components/landing/artwork-panel'
import { Reveal } from '@/components/generals/reveal'
import { ecosystemCopy, steps } from '@/constants/copy'

const TONES: ArtTone[] = ['teal', 'gold', 'clay', 'crimson']

export const EcosystemGrid: FC = (): ReactNode => {
    return (
        <section
            id='how'
            aria-labelledby='how-title'
            className='relative isolate overflow-hidden bg-moss py-20 sm:py-24 lg:py-28'
        >
            <div
                aria-hidden
                className='pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgba(43,43,41,0.12)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_70%_0%,#000,transparent_70%)]'
            />

            <div className='relative mx-auto w-full max-w-[1439px] px-5 sm:px-8'>
                <div className='grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16'>
                    <Reveal>
                        <p className='eyebrow text-teal-deep'>{ecosystemCopy.eyebrow}</p>

                        <h2 id='how-title' className='display-xl mt-5 max-w-[16ch] text-ink text-balance'>
                            {ecosystemCopy.title}
                        </h2>
                    </Reveal>

                    <Reveal delay={120}>
                        <p className='max-w-[44ch] text-[16.5px] leading-[1.5] tracking-[-0.01em] text-ink/65 lg:pb-2 lg:text-[18px]'>
                            {ecosystemCopy.body}
                        </p>
                    </Reveal>
                </div>

                <div className='mt-12 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4'>
                    {steps.map((step, index) => (
                        <Reveal key={step.number} delay={index * 70}>
                            <article className='group relative isolate flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[8px] p-6 sm:min-h-[380px] sm:p-7 lg:min-h-[440px] lg:p-9'>
                                <ArtworkPanel
                                    tone={TONES[index % TONES.length]}
                                    className='absolute inset-0 -z-10 transition-transform duration-[1100ms] ease-out group-hover:scale-[1.035]'
                                />

                                <div className='flex items-start justify-between gap-4'>
                                    <p className='eyebrow text-paper/80'>
                                        {step.number} <span className='mx-1.5 opacity-40'>/</span> {step.visual}
                                    </p>

                                    <span className='flex size-8 items-center justify-center rounded-full border border-paper/25 text-paper/70 transition-[background-color,color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:bg-paper group-hover:text-ink'>
                                        <ArrowUpRight aria-hidden className='size-3.5' />
                                    </span>
                                </div>

                                <div className='mt-16'>
                                    <h3 className='display-md max-w-[15ch] text-paper text-balance'>{step.title}</h3>
                                    <p className='mt-3 max-w-[36ch] text-[14px] leading-[1.5] text-paper/75 sm:text-[14.5px]'>
                                        {step.body}
                                    </p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
