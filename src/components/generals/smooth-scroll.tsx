import type { FC, ReactNode } from 'react'

import { useEffect } from 'react'
import Lenis from 'lenis'

// Smooth scroll for wheel and trackpad, with native anchor offsets.
// Reduced-motion users keep the browser's own scrolling.
export const SmoothScroll: FC<{ children: ReactNode }> = ({ children }): ReactNode => {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const lenis = new Lenis({
            autoRaf: true,
            lerp: 0.09,
            smoothWheel: true,
            anchors: { offset: -96 }
        })

        return () => lenis.destroy()
    }, [])

    return <>{children}</>
}
