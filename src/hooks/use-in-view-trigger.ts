import type { RefObject } from 'react'

import { useEffect, useRef, useState } from 'react'

export type TriggerState = 'idle' | 'armed' | 'play'

interface TriggerOptions {
    rootMargin?: string
}

// Drives scroll-in animations without ever hiding content on the server.
// idle: rendered normally (server, reduced motion, or already on screen at load).
// armed: below the fold, waiting in its start pose.
// play: scrolled into view, run the animation.
export const useInViewTrigger = <T extends HTMLElement>(options: TriggerOptions = {}): [RefObject<T | null>, TriggerState] => {
    const ref = useRef<T>(null)
    const [state, setState] = useState<TriggerState>('idle')
    const rootMargin = options.rootMargin ?? '0px 0px -12% 0px'

    useEffect(() => {
        const node = ref.current

        if (!node || typeof IntersectionObserver === 'undefined') return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const rect = node.getBoundingClientRect()

        if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) return

        setState('armed')

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry?.isIntersecting) return

                setState('play')
                observer.disconnect()
            },
            { rootMargin }
        )

        observer.observe(node)

        return () => observer.disconnect()
    }, [rootMargin])

    return [ref, state]
}