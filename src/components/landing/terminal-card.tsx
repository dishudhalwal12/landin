import type { FC, ReactNode } from 'react'

import { useEffect, useRef, useState } from 'react'
import { Check, Copy, Terminal } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TerminalCardProps {
    title: string
    commands: string[]
}

export const TerminalCard: FC<TerminalCardProps> = ({ title, commands }): ReactNode => {
    const [copied, setCopied] = useState<number | null>(null)
    const timer = useRef(0)

    useEffect(() => () => window.clearTimeout(timer.current), [])

    const copy = async (command: string, index: number) => {
        try {
            await navigator.clipboard.writeText(command)
            setCopied(index)
            window.clearTimeout(timer.current)
            timer.current = window.setTimeout(() => setCopied(null), 1600)
        } catch {
            setCopied(null)
        }
    }

    return (
        <div className='overflow-hidden rounded-lg border border-night/30 bg-night shadow-[0_30px_80px_-50px_rgba(16,33,41,0.85)]'>
            <div className='flex items-center justify-between border-b border-paper/10 bg-paper/[0.03] px-4 py-3'>
                <div className='flex items-center gap-2'>
                    <span aria-hidden className='size-2 rounded-full bg-lime' />
                    <span aria-hidden className='size-2 rounded-full bg-cyan' />
                    <span aria-hidden className='size-2 rounded-full bg-clay/60' />
                    <span className='ml-1.5 font-mono text-[11px] tracking-[0.08em] text-paper/45'>{title}</span>
                </div>

                <Terminal aria-hidden className='size-4 text-paper/25' />
            </div>

            <ol className='divide-y divide-paper/8'>
                {commands.map((command, index) => (
                    <li key={command} className='group flex items-center gap-3 px-4 py-3.5'>
                        <span aria-hidden className='font-mono text-[12px] text-lime'>
                            $
                        </span>

                        <code className='min-w-0 flex-1 font-mono text-[12px] break-all whitespace-pre-wrap text-paper/80 sm:text-[12.5px]'>
                            {command}
                        </code>

                        <button
                            type='button'
                            onClick={() => copy(command, index)}
                            aria-label={copied === index ? 'Copied' : `Copy ${command}`}
                            className={cn(
                                'flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md border border-paper/10 text-paper/40 transition-colors hover:border-paper/25 hover:text-paper focus-visible:ring-2 focus-visible:ring-lime focus-visible:outline-none',
                                copied === index && 'border-lime/40 text-lime'
                            )}
                        >
                            {copied === index
                                ? <Check aria-hidden className='size-3.5' />
                                : <Copy aria-hidden className='size-3.5' />}
                        </button>
                    </li>
                ))}
            </ol>

            <p aria-live='polite' className='sr-only'>
                {copied === null ? '' : 'Command copied to the clipboard.'}
            </p>
        </div>
    )
}
