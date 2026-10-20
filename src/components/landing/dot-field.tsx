import type { FC, ReactNode } from 'react'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface DotFieldProps {
    className?: string
    spacing?: number
}

interface Dot {
    x: number
    y: number
    radius: number
    phase: number
}

// A quiet field of dots that leans toward the pointer. Fixed to the viewport,
// paused when the tab is hidden, and drawn once for reduced-motion users.
export const DotField: FC<DotFieldProps> = ({ className, spacing = 28 }): ReactNode => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas?.getContext('2d')

        if (!canvas || !context) return

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const pointer = { x: -9999, y: -9999, active: false }
        let dots: Dot[] = []
        let width = 0
        let height = 0
        let raf = 0
        let last = 0

        const build = () => {
            dots = []

            for (let y = spacing / 2; y < height; y += spacing) {
                for (let x = spacing / 2; x < width; x += spacing) {
                    dots.push({
                        x,
                        y,
                        radius: 0.8 + Math.random() * 0.8,
                        phase: Math.random() * Math.PI * 2
                    })
                }
            }
        }

        const resize = () => {
            const dpr = Math.min(1.5, window.devicePixelRatio || 1)

            width = window.innerWidth
            height = window.innerHeight
            canvas.width = Math.floor(width * dpr)
            canvas.height = Math.floor(height * dpr)
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`

            context.setTransform(dpr, 0, 0, dpr, 0, 0)
            build()
            draw(0)
        }

        const draw = (time: number) => {
            context.clearRect(0, 0, width, height)

            for (const dot of dots) {
                const dx = dot.x - pointer.x
                const dy = dot.y - pointer.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                const pull = pointer.active ? Math.max(0, 1 - distance / 190) : 0
                const wave = reduced ? 0 : Math.sin(time * 0.0006 + dot.phase) * 0.035
                const alpha = 0.13 + wave + pull * 0.62

                if (alpha <= 0.01) continue

                context.beginPath()
                context.fillStyle = pull > 0.08
                    ? `rgba(41, 106, 108, ${Math.min(0.6, alpha)})`
                    : `rgba(43, 43, 41, ${Math.min(0.34, alpha)})`
                context.arc(dot.x, dot.y, dot.radius + pull * 1.6, 0, Math.PI * 2)
                context.fill()
            }
        }

        const loop = (time: number) => {
            raf = window.requestAnimationFrame(loop)

            if (time - last < 40) return

            last = time
            draw(time)
        }

        const start = () => {
            if (reduced || raf) return
            raf = window.requestAnimationFrame(loop)
        }

        const stop = () => {
            window.cancelAnimationFrame(raf)
            raf = 0
        }

        const onPointerMove = (event: PointerEvent) => {
            pointer.x = event.clientX
            pointer.y = event.clientY
            pointer.active = true
        }

        const onPointerLeave = () => {
            pointer.active = false
        }

        const onVisibility = () => {
            if (document.hidden) stop()
            else start()
        }

        resize()

        if (!reduced) start()

        window.addEventListener('resize', resize)
        window.addEventListener('pointermove', onPointerMove, { passive: true })
        window.addEventListener('pointerleave', onPointerLeave)
        document.addEventListener('visibilitychange', onVisibility)

        return () => {
            stop()
            window.removeEventListener('resize', resize)
            window.removeEventListener('pointermove', onPointerMove)
            window.removeEventListener('pointerleave', onPointerLeave)
            document.removeEventListener('visibilitychange', onVisibility)
        }
    }, [spacing])

    return (
        <canvas
            ref={canvasRef}
            aria-hidden
            className={cn('pointer-events-none fixed inset-0 h-full w-full opacity-70', className)}
        />
    )
}
