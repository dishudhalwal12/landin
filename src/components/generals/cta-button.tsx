import type { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

type CtaVariant = 'primary' | 'light' | 'glass' | 'dark'

interface CtaButtonProps {
    href: string
    children: ReactNode
    variant?: CtaVariant
    className?: string
    icon?: ReactNode
    ariaLabel?: string
}

const VARIANTS: Record<CtaVariant, string> = {
    primary: 'bg-ink text-paper hover:bg-ink-2',
    light: 'border border-ink/12 bg-paper text-ink hover:border-ink/25 hover:bg-white',
    glass: 'border border-ink/12 bg-paper/75 text-ink backdrop-blur-[5px] hover:border-ink/25 hover:bg-paper',
    dark: 'bg-night text-paper hover:bg-[#173540]'
}

const isExternal = (href: string) => href.startsWith('http')

export const CtaButton: FC<CtaButtonProps> = ({
    href,
    children,
    variant = 'primary',
    className,
    icon,
    ariaLabel
}): ReactNode => {
    return (
        <a
            href={href}
            aria-label={ariaLabel}
            target={isExternal(href) ? '_blank' : undefined}
            rel={isExternal(href) ? 'noopener noreferrer' : undefined}
            className={cn(
                'glass-button group relative inline-flex h-12 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full px-6 text-[15px] font-semibold transition-[background-color,border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985] focus-visible:ring-2 focus-visible:ring-iris focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none',
                VARIANTS[variant],
                className
            )}
        >
            <span className='relative z-10 inline-flex items-center gap-2'>
                {children}
                {icon}
            </span>
        </a>
    )
}
