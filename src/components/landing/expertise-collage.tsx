import type { ArtTone } from '@/components/landing/artwork-panel'
import type { CSSProperties, FC, ReactNode } from 'react'

import { useRef } from 'react'
import { ArtworkPanel } from '@/components/landing/artwork-panel'
import { useScrollProgress } from '@/hooks/use-scroll-progress'
import { collageLines, manifestoCopy } from '@/constants/copy'

interface Tile {
    left: string
    top: string
    width: number
    height: number
    tone: ArtTone
    driftX: number
    driftY: number
    rotate: number
    desktopOnly?: boolean
}

const TILES: Tile[] = [
    { left: '5%', top: '15%', width: 186, height: 124, tone: 'crimson', driftX: 74, driftY: -104, rotate: -3 },
    { left: '41%', top: '8%', width: 148, height: 96, tone: 'gold', driftX: 44, driftY: 72, rotate: 2.5, desktopOnly: true },
    { left: '78%', top: '12%', width: 208, height: 138, tone: 'teal', driftX: -86, driftY: 78, rotate: 2 },
    { left: '2%', top: '40%', width: 124, height: 108, tone: 'teal', driftX: 86, driftY: -38, rotate: 2.5, desktopOnly: true },
    { left: '85%', top: '40%', width: 118, height: 148, tone: 'clay', driftX: -112, driftY: 32, rotate: -1.5, desktopOnly: true },
    { left: '9%', top: '70%', width: 228, height: 152, tone: 'gold', driftX: 108, driftY: 58, rotate: 1.5 },
    { left: '44%', top: '82%', width: 196, height: 118, tone: 'crimson', driftX: -52, driftY: -58, rotate: -1.5, desktopOnly: true },
    { left: '76%', top: '68%', width: 178, height: 196, tone: 'night', driftX: -72, driftY: -86, rotate: -2 }
]

export const ExpertiseCollage: FC = (): ReactNode => {
    const sectionRef = useRef<HTMLElement>(null)

    useScrollProgress(sectionRef, '--p', 'exit')

    return (
        <section
            ref={sectionRef}
            id='manifesto'
            aria-labelledby='manifesto-title'
            className='relative isolate h-[280vh] bg-paper'
            style={{ '--p': 0.16 } as CSSProperties}
        >
            <div className='sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden'>
                <div aria-hidden className='pointer-events-none absolute inset-0'>
                    <div className='absolute top-1/2 left-1/2 h-[70vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(200,225,221,0.4),transparent_72%)] blur-3xl' />
                </div>

                {TILES.map((tile, index) => (
                    <div
                        key={`${tile.left}-${tile.top}`}
                        aria-hidden
                        className='absolute hidden sm:block'
                        style={
                            {
                                left: tile.left,
                                top: tile.top,
                                width: tile.width,
                                height: tile.height,
                                '--dx': tile.driftX,
                                '--dy': tile.driftY,
                                '--rot': `${tile.rotate}deg`,
                                transform: 'translate3d(calc(var(--p, 0) * var(--dx) * 1px), calc(var(--p, 0) * var(--dy) * 1px), 0) rotate(var(--rot))',
                                zIndex: 1
                            } as CSSProperties
                        }
                    >
                        <ArtworkPanel
                            tone={tile.tone}
                            className='collage-tile h-full w-full rounded-[6px] shadow-[0_18px_50px_-24px_rgba(16,33,41,0.45)]'
                        />

                        {index === 3 ? (
                            <span className='absolute inset-x-3 bottom-3 rounded-[4px] border border-paper/20 bg-night/55 px-2.5 py-1.5 text-[9.5px] leading-tight tracking-[0.06em] text-paper/85 backdrop-blur-[2px]'>
                                Order #1042 accepted
                            </span>
                        ) : null}
                    </div>
                ))}

                <div className='relative z-10 mx-auto w-full max-w-[760px] px-5 text-center sm:px-8'>
                    <p className='eyebrow text-ink/45'>{manifestoCopy.eyebrow}</p>

                    <h2 id='manifesto-title' className='mt-6 grid'>
                        <span className='sr-only'>{collageLines.join(' ')}</span>

                        {collageLines.map((line, index) => {
                            const start = index * 0.31
                            const duration = 0.34

                            return (
                                <span
                                    key={line}
                                    aria-hidden
                                    className='collage-line display-xl block text-balance text-ink'
                                    style={
                                        {
                                            '--s': start,
                                            '--d': duration,
                                            '--t': `clamp(0, calc((var(--p, 0.16) - var(--s)) / var(--d)), 1)`,
                                            opacity: 'min(calc(var(--t) * 7), calc((1 - var(--t)) * 7), 1)',
                                            transform: 'translate3d(0, calc((1 - var(--t)) * 20px), 0)',
                                            gridArea: '1 / 1'
                                        } as CSSProperties
                                    }
                                >
                                    {line}
                                </span>
                            )
                        })}
                    </h2>

                    <p className='mx-auto mt-7 max-w-[46ch] text-[15.5px] leading-[1.55] tracking-[-0.01em] text-ink/55 sm:text-[17px]'>
                        {manifestoCopy.body}
                    </p>
                </div>

                <div
                    aria-hidden
                    className='absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1.5 text-[10px] tracking-[0.18em] text-ink/30 uppercase'
                >
                    <span>01</span>
                    <span className='h-px w-6 bg-ink/20' />
                    <span>03</span>
                </div>
            </div>
        </section>
    )
}
