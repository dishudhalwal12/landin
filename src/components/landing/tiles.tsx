import type { CSSProperties, FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

export type TileCell = readonly [number, number]

interface TileGridProps {
    cells: readonly TileCell[]
    size: string
    className?: string
    gap?: string
}

interface GlassTilesProps extends TileGridProps {
    animated?: boolean
    introDelay?: number
}

const gridBounds = (cells: readonly TileCell[]) => ({
    cols: Math.max(...cells.map(([col]) => col)) + 1,
    rows: Math.max(...cells.map(([, row]) => row)) + 1
})

const gridStyle = (cells: readonly TileCell[], size: string, gap: string): CSSProperties => {
    const { cols, rows } = gridBounds(cells)

    return {
        '--tile': size,
        '--tile-gap': gap,
        width: `calc(${cols} * (var(--tile) + var(--tile-gap)) - var(--tile-gap))`,
        height: `calc(${rows} * (var(--tile) + var(--tile-gap)) - var(--tile-gap))`
    } as CSSProperties
}

const cellStyle = ([col, row]: TileCell): CSSProperties => ({
    left: `calc(${col} * (var(--tile) + var(--tile-gap)))`,
    top: `calc(${row} * (var(--tile) + var(--tile-gap)))`,
    width: 'var(--tile)',
    height: 'var(--tile)',
    borderRadius: 'calc(var(--tile) * 0.17)'
})

// Frosted glass squares that sit on top of the landscapes.
// With introDelay set, each square grows in one after another when the page loads.
export const GlassTiles: FC<GlassTilesProps> = ({ cells, size, className, gap = '3px', animated = true, introDelay }): ReactNode => {
    return (
        <div aria-hidden className={cn('pointer-events-none absolute', className)} style={gridStyle(cells, size, gap)}>
            {cells.map((cell, index) => {
                const tile = (
                    <span
                        className={cn('glass-tile absolute inset-0', animated && 'motion-safe:animate-breathe')}
                        style={{ borderRadius: 'inherit', animationDelay: `${-((index * 2.3) % 7)}s` }}
                    />
                )

                return (
                    <span
                        key={`${cell[0]}-${cell[1]}`}
                        className={cn('absolute', introDelay !== undefined && 'motion-safe:animate-pop')}
                        style={{ ...cellStyle(cell), animationDelay: introDelay !== undefined ? `${introDelay + index * 110}ms` : undefined }}
                    >
                        {tile}
                    </span>
                )
            })}
        </div>
    )
}

// Faint outlined squares that decorate the white background.
export const TileField: FC<TileGridProps> = ({ cells, size, className, gap = '6px' }): ReactNode => {
    return (
        <div aria-hidden className={cn('pointer-events-none absolute', className)} style={gridStyle(cells, size, gap)}>
            {cells.map((cell, index) => (
                <span
                    key={`${cell[0]}-${cell[1]}`}
                    className='outline-tile absolute motion-safe:animate-blink'
                    style={{ ...cellStyle(cell), animationDelay: `${-((index * 1.7) % 6)}s`, animationDuration: `${5 + (index % 3)}s` }}
                />
            ))}
        </div>
    )
}