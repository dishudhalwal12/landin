import type { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

export type ArtTone = 'teal' | 'crimson' | 'sage' | 'gold' | 'night' | 'clay'

interface ArtworkPanelProps {
    tone?: ArtTone
    className?: string
    children?: ReactNode
}

// A painted surface built entirely from layered gradients, dot fields and grain.
// It stands in for editorial artwork without borrowing anyone's imagery.
export const ArtworkPanel: FC<ArtworkPanelProps> = ({ tone = 'teal', className, children }): ReactNode => {
    return <div className={cn('panel-art', `art-${tone}`, className)}>{children}</div>
}
