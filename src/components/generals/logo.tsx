import type { FC, ReactNode } from 'react'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoMarkProps {
    className?: string
    title?: string
}

interface LogoProps {
    className?: string
    markClassName?: string
    wordmarkClassName?: string
}

export const LogoMark: FC<LogoMarkProps> = ({ className, title }): ReactNode => {
    return (
        <span
            className={cn(
                'inline-flex h-8 w-8 shrink-0 items-center justify-center bg-mint p-1 [clip-path:polygon(0_0,100%_0,100%_100%,50%_84%,0_100%)]',
                className
            )}
        >
            <Image
                src='/brand/dukaan-logo.png'
                alt={title ?? ''}
                width={64}
                height={64}
                aria-hidden={title ? undefined : true}
                className='h-full w-full object-contain mix-blend-multiply'
            />
        </span>
    )
}

export const Logo: FC<LogoProps> = ({ className, markClassName, wordmarkClassName }): ReactNode => {
    return (
        <span className={cn('inline-flex items-center gap-2.5 text-ink', className)}>
            <LogoMark className={cn('h-7 w-7 sm:h-8 sm:w-8', markClassName)} />

            <span
                className={cn(
                    'font-sans text-[21px] leading-none font-semibold tracking-[-0.045em] sm:text-[23px]',
                    wordmarkClassName
                )}
            >
                dukaan<span className='text-teal-deep'>.ai</span>
            </span>
        </span>
    )
}
