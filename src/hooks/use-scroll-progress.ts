import type { RefObject } from 'react'

import { useEffect } from 'react'

type ProgressMode = 'exit' | 'through'

// Writes a 0 to 1 scroll progress onto the element as a CSS variable, once per frame.
// exit: 0 while the element's top sits at the top of the screen, 1 once it has scrolled fully past.
// through: 0 when the element enters at the bottom of the screen, 1 when it leaves at the top.
export const useScrollProgress = (ref: RefObject<HTMLElement | null>, variable: string, mode: ProgressMode = 'exit') => {
    useEffect(() => {
        const node = ref.current

        if (!node) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        let frame = 0

        const update = () => {
            frame = 0

            const rect = node.getBoundingClientRect()
            const viewport = window.innerHeight

            if (rect.bottom < -viewport || rect.top > viewport * 2) return

            const raw = mode === 'exit'
                ? -rect.top / rect.height
                : (viewport - rect.top) / (viewport + rect.height)

            node.style.setProperty(variable, Math.min(1, Math.max(0, raw)).toFixed(4))
        }

        const schedule = () => {
            if (!frame) frame = window.requestAnimationFrame(update)
        }

        update()

        window.addEventListener('scroll', schedule, { passive: true })
        window.addEventListener('resize', schedule)

        return () => {
            window.removeEventListener('scroll', schedule)
            window.removeEventListener('resize', schedule)
            window.cancelAnimationFrame(frame)
        }
    }, [ref, variable, mode])
}