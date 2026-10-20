import type { FC, ReactNode } from 'react'

import { Plus } from 'lucide-react'
import { Reveal } from '@/components/generals/reveal'
import { faq } from '@/constants/copy'
import { whatsAppHref } from '@/constants/site'

export const FaqSection: FC = (): ReactNode => {
    return (
        <section
            id='faq'
            aria-labelledby='faq-title'
            className='relative isolate overflow-hidden border-t border-ink/10 py-24 sm:py-32'
        >
            <div className='mx-auto grid w-full max-w-[1439px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20'>
                <Reveal className='lg:sticky lg:top-28 lg:self-start'>
                    <p className='eyebrow text-ink/45'>Questions</p>

                    <h2 id='faq-title' className='display-lg mt-5 max-w-[16ch] text-ink text-balance'>
                        The things shop owners ask first.
                    </h2>

                    <p className='mt-5 max-w-[34ch] text-[15.5px] leading-[1.55] tracking-[-0.01em] text-ink/55'>
                        Something else on your mind? Send a message. A person reads it.
                    </p>

                    <a
                        href={whatsAppHref('Hi Dukaan.AI, I have a question about the shop setup.')}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='mt-7 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-5 py-2.5 text-[13px] font-medium text-ink/75 transition-colors hover:border-teal/40 hover:text-teal-deep focus-visible:ring-2 focus-visible:ring-iris focus-visible:outline-none'
                    >
                        Ask on WhatsApp
                    </a>
                </Reveal>

                <Reveal delay={100}>
                    <div className='divide-y divide-ink/10 border-y border-ink/10'>
                        {faq.map((item) => (
                            <details key={item.question} className='group'>
                                <summary className='flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden'>
                                    <span className='font-heading text-[19px] leading-[1.25] font-normal tracking-[-0.025em] text-ink/85 transition-colors group-open:text-ink sm:text-[22px]'>
                                        {item.question}
                                    </span>

                                    <span className='mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/45 transition-[transform,border-color,background-color,color] duration-300 group-open:rotate-45 group-open:border-teal/30 group-open:bg-moss group-open:text-ink'>
                                        <Plus aria-hidden className='size-3.5' />
                                    </span>
                                </summary>

                                <p className='max-w-[62ch] pr-10 pb-6 text-[14.5px] leading-[1.6] text-ink/55'>
                                    {item.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
