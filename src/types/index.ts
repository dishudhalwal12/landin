import type { ReactNode } from 'react'

export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage?: string
    links?: {
        x?: string
        instagram?: string
        linkedin?: string
        twitter?: string
        github?: string
    }
}

export type LayoutProps = {
    children: ReactNode
}

export type SeoProps = {
    title?: string
    description?: string
    ogImage?: string
}
