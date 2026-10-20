import type { FC, ReactNode } from 'react'

import { useEffect, useRef } from 'react'

const TEXT = 'DUKAAN.AI'
const CHARS = ' .:-=+*#%@'

// A live ASCII field of the wordmark. It ripples on its own and leans toward the pointer.
// Paused when offscreen, and drawn once for reduced-motion users.
export const AsciiFooter: FC = (): ReactNode => {
    const wrapRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const wrap = wrapRef.current
        const canvas = canvasRef.current
        const context = canvas?.getContext('2d')

        if (!wrap || !canvas || !context) return

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const pointer = { x: -999, y: -999, active: false }
        let cols = 0
        let rows = 0
        let cellW = 8
        let cellH = 12
        let mask = new Float32Array(0)
        let raf = 0
        let visible = false

        const buildMask = () => {
            const offscreen = document.createElement('canvas')

            offscreen.width = Math.max(1, cols)
            offscreen.height = Math.max(1, rows)

            const maskContext = offscreen.getContext('2d')

            if (!maskContext) return

            const base = 100
            maskContext.font = `700 ${base}px ui-monospace, SFMono-Regular, Menlo, monospace`
            maskContext.textAlign = 'center'
            maskContext.textBaseline = 'middle'
            maskContext.fillStyle = '#ffffff'

            const measured = maskContext.measureText(TEXT).width
            const fitted = Math.min(rows * 0.94, (cols * 0.9 / Math.max(1, measured)) * base)

            maskContext.font = `700 ${fitted}px ui-monospace, SFMono-Regular, Menlo, monospace`
            maskContext.fillText(TEXT, cols / 2, rows / 2)

            const pixels = maskContext.getImageData(0, 0, cols, rows).data

            mask = new Float32Array(cols * rows)

            for (let index = 0; index < mask.length; index += 1) {
                mask[index] = pixels[index * 4 + 3] / 255
            }
        }

        const draw = (time: number) => {
            const dpr = Math.min(2, window.devicePixelRatio || 1)
            const width = canvas.width / dpr
            const height = canvas.height / dpr

            context.setTransform(dpr, 0, 0, dpr, 0, 0)
            context.clearRect(0, 0, width, height)
            context.font = `700 ${Math.max(6, Math.min(cellH - 1, cellW * 1.55))}px ui-monospace, SFMono-Regular, Menlo, monospace`
            context.textBaseline = 'top'

            const phase = time * 0.0017

            for (let y = 0; y < rows; y += 1) {
                for (let x = 0; x < cols; x += 1) {
                    const strength = mask[y * cols + x]

                    if (strength < 0.05) continue

                    const wave = 0.5 + 0.5 * Math.sin(phase + x * 0.38 + y * 0.62)
                    let glow = strength * (0.35 + wave * 0.65)

                    if (pointer.active) {
                        const dx = x - pointer.x / cellW
                        const dy = y - pointer.y / cellH
                        const distance = Math.sqrt(dx * dx + dy * dy)

                        glow += Math.max(0, 1 - distance / 9) * 0.55
                    }

                    const level = Math.min(CHARS.length - 1, Math.max(1, Math.round(strength * (CHARS.length - 1))))

                    if (level === 0) continue

                    context.fillStyle = glow > 1.05
                        ? `rgba(43,43,41,${Math.min(0.9, 0.3 + glow * 0.55)})`
                        : `rgba(56,116,120,${Math.min(0.85, 0.22 + glow * 0.55)})`
                    context.fillText(CHARS[level], x * cellW, y * cellH)
                }
            }
        }

        const resize = () => {
            const width = Math.max(280, wrap.clientWidth)
            const height = Math.max(width < 640 ? 240 : 300, Math.min(360, width * 0.24))
            const dpr = Math.min(2, window.devicePixelRatio || 1)

            cellW = width < 640 ? 4 : 8
            cellH = width < 640 ? 7 : 12
            cols = Math.max(16, Math.floor(width / cellW))
            rows = Math.max(8, Math.floor(height / cellH))

            canvas.width = Math.floor(width * dpr)
            canvas.height = Math.floor(height * dpr)
            canvas.style.width = `${width}px`
            canvas.style.height = `${height}px`

            buildMask()

            if (reduced) draw(0)
        }

        const loop = (time: number) => {
            draw(time)
            raf = window.requestAnimationFrame(loop)
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
            const rect = canvas.getBoundingClientRect()

            pointer.x = event.clientX - rect.left
            pointer.y = event.clientY - rect.top
            pointer.active = true
        }

        const onPointerLeave = () => {
            pointer.active = false
        }

        resize()

        const observer = new IntersectionObserver(
            ([entry]) => {
                visible = Boolean(entry?.isIntersecting)

                if (visible) start()
                else stop()
            },
            { rootMargin: '120px' }
        )

        observer.observe(wrap)
        window.addEventListener('resize', resize)
        wrap.addEventListener('pointermove', onPointerMove)
        wrap.addEventListener('pointerleave', onPointerLeave)

        if (reduced) draw(0)

        return () => {
            observer.disconnect()
            stop()
            window.removeEventListener('resize', resize)
            wrap.removeEventListener('pointermove', onPointerMove)
            wrap.removeEventListener('pointerleave', onPointerLeave)
        }
    }, [])

    return (
        <div ref={wrapRef} aria-hidden className='relative w-full overflow-hidden'>
            <canvas ref={canvasRef} className='block w-full opacity-90' />
            <span className='sr-only'>Dukaan.AI</span>
            <div className='pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-paper to-transparent' />
        </div>
    )
}
