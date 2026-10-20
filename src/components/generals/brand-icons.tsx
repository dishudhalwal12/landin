import type { FC, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface IconProps {
    className?: string
}

// Monochrome brand marks. They inherit the surrounding text color.

export const SlackMark: FC<IconProps> = ({ className }): ReactNode => {
    return (
        <svg viewBox='0 0 54 54' fill='currentColor' aria-hidden className={cn('size-6', className)}>
            <circle cx='19.712' cy='5.52' r='5.376' />
            <rect x='19.712' y='5.52' width='5.376' height='5.386' />
            <rect x='0' y='14.498' width='25.088' height='10.773' rx='5.376' />

            <circle cx='48.384' cy='19.884' r='5.376' />
            <rect x='43.008' y='19.884' width='5.376' height='5.387' />
            <rect x='28.672' y='0.133' width='10.752' height='25.138' rx='5.376' />

            <circle cx='34.048' cy='48.613' r='5.376' />
            <rect x='28.672' y='43.227' width='5.376' height='5.386' />
            <rect x='28.672' y='28.862' width='25.088' height='10.773' rx='5.376' />

            <circle cx='5.376' cy='34.249' r='5.376' />
            <rect x='5.376' y='28.862' width='5.376' height='5.387' />
            <rect x='14.336' y='28.862' width='10.752' height='25.138' rx='5.376' />
        </svg>
    )
}

export const DropboxMark: FC<IconProps> = ({ className }): ReactNode => {
    return (
        <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden className={cn('size-6', className)}>
            <path d='M6 1.807L0 5.629l6 3.822 6.001-3.822L6 1.807zM18 1.807l-6 3.822 6 3.822 6-3.822-6-3.822zM0 13.274l6 3.822 6.001-3.822L6 9.452l-6 3.822zM18 9.452l-6 3.822 6 3.822 6-3.822-6-3.822zM6 18.371l6.001 3.822 6-3.822-6-3.822L6 18.371z' />
        </svg>
    )
}

export const HubspotMark: FC<IconProps> = ({ className }): ReactNode => {
    return (
        <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden className={cn('size-6', className)}>
            <path d='M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z' />
        </svg>
    )
}

export const NotionMark: FC<IconProps> = ({ className }): ReactNode => {
    return (
        <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden className={cn('size-6', className)}>
            <path d='M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z' />
        </svg>
    )
}

export const XMark: FC<IconProps> = ({ className }): ReactNode => {
    return (
        <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden className={cn('size-6', className)}>
            <path d='M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z' />
        </svg>
    )
}

export const LinkedinMark: FC<IconProps> = ({ className }): ReactNode => {
    return (
        <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden className={cn('size-6', className)}>
            <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
        </svg>
    )
}