import type { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface SectionBadgeProps {
    children: ReactNode
    className?: string
}

export const SectionBadge: FC<SectionBadgeProps> = ({ children, className }): ReactNode => {
    return (
        <span
            className={cn(
                'inline-flex items-center border border-ink/15 px-3 py-1.5 font-mono text-[10.5px] tracking-[0.16em] text-ink/60 uppercase',
                className
            )}
        >
            {children}
        </span>
    )
}