import type { ArtTone } from '@/components/landing/artwork-panel'
import type { FC, ReactNode } from 'react'

import { ArtworkPanel } from '@/components/landing/artwork-panel'
import { shopTypes } from '@/constants/copy'

const TONES: ArtTone[] = ['teal', 'gold', 'crimson', 'sage', 'clay', 'night', 'teal', 'gold']

const CARDS = shopTypes.flatMap((shop, index) => [
    { label: shop, tone: TONES[index % TONES.length], id: `${shop}-a` },
    { label: shop, tone: TONES[(index + 3) % TONES.length], id: `${shop}-b` }
])

const Track: FC<{ reverse?: boolean; offset?: number }> = ({ reverse, offset = 0 }): ReactNode => {
    const items = reverse ? [...CARDS].reverse() : CARDS

    return (
        <div className='flex w-max shrink-0'>
            {[0, 1].map((copy) => (
                <ul key={copy} aria-hidden={copy === 1} className='flex shrink-0 items-center'>
                    {items.map((card, index) => (
                        <li key={`${card.id}-${copy}`} className='px-1.5'>
                            <div className='group relative h-[118px] w-[186px] overflow-hidden rounded-[6px] sm:h-[136px] sm:w-[214px]'>
                                <ArtworkPanel
                                    tone={card.tone}
                                    className='h-full w-full transition-transform duration-700 group-hover:scale-[1.06]'
                                />

                                <span className='absolute inset-x-3 bottom-2.5 z-10 text-[11.5px] tracking-[0.02em] text-paper/85'>
                                    {String((index + offset) % 9 + 1).padStart(2, '0')} — {card.label}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    )
}

export const ShopMarquee: FC = (): ReactNode => {
    return (
        <section aria-label='Shops using Dukaan.AI' className='relative isolate overflow-hidden border-y border-ink/10 bg-paper py-5'>
            <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper to-transparent sm:w-28' />
            <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper to-transparent sm:w-28' />

            <div className='flex flex-col gap-3'>
                <div className='flex motion-safe:animate-marquee'>
                    <Track />
                </div>

                <div className='flex [animation-direction:reverse] motion-safe:animate-marquee'>
                    <Track reverse offset={4} />
                </div>
            </div>
        </section>
    )
}
