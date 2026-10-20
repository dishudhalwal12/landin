import type { FC, ReactNode } from 'react'

import { Reveal } from '@/components/generals/reveal'
import { testimonials } from '@/constants/copy'

const SPINES = [
    ['bg-night', 'bg-iris', 'bg-sage', 'bg-clay'],
    ['bg-iris', 'bg-clay', 'bg-night', 'bg-sage'],
    ['bg-clay', 'bg-sage', 'bg-iris', 'bg-night']
]

export const TestimonialStack: FC = (): ReactNode => {
    return (
        <section aria-labelledby='proof-title' className='relative isolate overflow-hidden bg-paper py-20 sm:py-24 lg:py-28'>
            <div className='mx-auto grid w-full max-w-[1439px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20'>
                <Reveal className='lg:sticky lg:top-24 lg:self-start'>
                    <p className='eyebrow text-ink/45'>From the counter</p>

                    <h2 id='proof-title' className='display-xl mt-5 max-w-[13ch] text-ink text-balance'>
                        Trusted by shops that never closed.
                    </h2>

                    <p className='mt-5 max-w-[38ch] text-[15.5px] leading-[1.55] tracking-[-0.01em] text-ink/55 sm:text-[16.5px]'>
                        Dukaan.AI turns the messages your shop already gets into orders, stock and sales records — without changing the number your customers know.
                    </p>

                    <div className='mt-8 flex items-center gap-3 border-t border-ink/10 pt-5'>
                        <span className='ribbon flex h-9 w-7 items-start justify-center pt-1.5 text-paper/90'>
                            <span className='size-1.5 rounded-full bg-paper' />
                        </span>
                        <p className='text-[12.5px] leading-snug text-ink/45'>
                            Beta shops across Jaipur, Ahmedabad and Kochi.
                        </p>
                    </div>
                </Reveal>

                <div className='relative'>
                    {testimonials.map((item, index) => (
                        <Reveal key={item.name} delay={index * 90}>
                            <figure
                                className='paper-card relative mb-4 flex overflow-hidden sm:mb-5'
                                style={{
                                    transform: `rotate(${index % 2 === 0 ? -0.35 : 0.4}deg)`,
                                    marginLeft: `${index * 10}px`
                                }}
                            >
                                <div aria-hidden className='flex w-3 shrink-0 flex-col sm:w-4'>
                                    {SPINES[index % SPINES.length].map((tone, spineIndex) => (
                                        <span key={spineIndex} className={`flex-1 ${tone}`} />
                                    ))}
                                </div>

                                <div className='flex-1 px-5 py-6 sm:px-8 sm:py-8'>
                                    <span aria-hidden className='font-heading text-[34px] leading-none text-teal/40'>
                                        &ldquo;
                                    </span>

                                    <blockquote className='-mt-3 font-heading text-[20px] leading-[1.22] tracking-[-0.025em] text-ink text-balance sm:text-[24px]'>
                                        {item.quote}
                                    </blockquote>

                                    <figcaption className='mt-5 flex flex-wrap items-baseline gap-x-2 text-[12.5px] text-ink/50'>
                                        <span className='font-medium text-ink/70'>{item.name}</span>
                                        <span aria-hidden className='opacity-40'>—</span>
                                        <span>{item.role}</span>
                                    </figcaption>
                                </div>
                            </figure>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
