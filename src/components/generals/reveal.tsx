import type { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { useInViewTrigger } from '@/hooks/use-in-view-trigger'

interface RevealProps {
    children: ReactNode
    className?: string
    delay?: number
}

// Fades content up as it scrolls into view. It renders fully visible on the server
// and only hides content that starts below the fold, so nothing is lost without JavaScript.
export const Reveal: FC<RevealProps> = ({ children, className, delay = 0 }): ReactNode => {
    const [ref, state] = useInViewTrigger<HTMLDivElement>({ rootMargin: '0px 0px -10% 0px' })

    return (
        <div
            ref={ref}
            data-reveal={state}
            style={state === 'play' ? { transitionDelay: `${delay}ms` } : undefined}
            className={cn(
                'data-[reveal=armed]:translate-y-6 data-[reveal=armed]:opacity-0 data-[reveal=play]:transition-[opacity,translate] data-[reveal=play]:duration-700 data-[reveal=play]:ease-out',
                className
            )}
        >
            {children}
        </div>
    )
}