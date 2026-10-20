import type { FC, ReactNode } from 'react'

import { Store } from 'lucide-react'
import { cn } from '@/lib/utils'
import { shopTypes } from '@/constants/copy'

const Track: FC<{ hidden?: boolean }> = ({ hidden }): ReactNode => {
    return (
        <ul aria-hidden={hidden} className='flex shrink-0 items-center'>
            {shopTypes.map((shop) => (
                <li key={shop} className='flex items-center'>
                    <span
                        className={cn(
                            'inline-flex items-center gap-2.5 border border-ink/15 bg-transparent px-5 py-2.5 text-[13px] font-medium whitespace-nowrap sm:text-[14px]',
                            shop === 'Your shop' ? 'text-teal-deep' : 'text-ink/60'
                        )}
                    >
                        <Store aria-hidden className='size-3.5 opacity-60' />
                        {shop}
                    </span>

                    <span aria-hidden className='mx-3 size-1 rounded-full bg-ink/20' />
                </li>
            ))}
        </ul>
    )
}

// A slow strip of the catalog types the app starts with. The list repeats once,
// and the track shifts by half its width, so the loop has no visible seam.
export const ShopMarquee: FC = (): ReactNode => {
    return (
        <div
            className='group relative mt-10 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)] sm:mt-12'
            aria-label='Shop types Dukaan.AI starts with'
            role='group'
        >
            <div className='flex w-max motion-safe:animate-marquee group-hover:[animation-play-state:paused]'>
                <Track />
                <Track hidden />
            </div>
        </div>
    )
}
