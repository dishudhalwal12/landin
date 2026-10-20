import type { FC, ReactNode } from 'react'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
    value: string
    duration?: number
    className?: string
}

type ParsedValue = {
    prefix: string
    target: number
    decimals: number
    grouped: boolean
    suffix: string
}

const parseValue = (value: string): ParsedValue | null => {
    const match = value.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/)

    if (!match) return null

    const [, prefix, number, suffix] = match

    return {
        prefix,
        target: Number(number.replace(/,/g, '')),
        decimals: number.includes('.') ? number.split('.')[1].length : 0,
        grouped: number.includes(','),
        suffix
    }
}

const formatValue = (parsed: ParsedValue, amount: number) => {
    const number = amount.toLocaleString('en-US', {
        minimumFractionDigits: parsed.decimals,
        maximumFractionDigits: parsed.decimals,
        useGrouping: parsed.grouped
    })

    return `${parsed.prefix}${number}${parsed.suffix}`
}

const ease = (t: number) => 1 - Math.pow(1 - t, 4)

// Counts a figure up when it first scrolls into view, and glides between values when it changes.
// The final value is what the server renders and what screen readers hear.
export const CountUp: FC<CountUpProps> = ({ value, duration = 1400, className }): ReactNode => {
    const ref = useRef<HTMLSpanElement>(null)
    const [display, setDisplay] = useState(value)
    const shown = useRef<number | null>(null)
    const started = useRef(false)

    useEffect(() => {
        const node = ref.current
        const parsed = parseValue(value)

        if (!node || !parsed || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setDisplay(value)
            shown.current = parsed?.target ?? null

            return
        }

        let frame = 0

        const run = (from: number) => {
            const start = performance.now()

            const step = (now: number) => {
                const progress = Math.min(1, (now - start) / duration)
                const amount = from + (parsed.target - from) * ease(progress)

                shown.current = amount
                setDisplay(progress < 1 ? formatValue(parsed, amount) : value)

                if (progress < 1) frame = window.requestAnimationFrame(step)
            }

            frame = window.requestAnimationFrame(step)
        }

        if (started.current) {
            run(shown.current ?? 0)

            return () => window.cancelAnimationFrame(frame)
        }

        const rect = node.getBoundingClientRect()

        if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
            started.current = true
            shown.current = parsed.target
            setDisplay(value)

            return
        }

        setDisplay(formatValue(parsed, 0))

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry?.isIntersecting) return

                observer.disconnect()
                started.current = true
                run(0)
            },
            { rootMargin: '0px 0px -12% 0px' }
        )

        observer.observe(node)

        return () => {
            observer.disconnect()
            window.cancelAnimationFrame(frame)
        }
    }, [value, duration])

    return (
        <span ref={ref} className={className}>
            <span className='sr-only'>{value}</span>
            <span aria-hidden>{display}</span>
        </span>
    )
}
