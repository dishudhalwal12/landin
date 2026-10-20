import type { FC, ReactNode } from 'react'

import { DotField } from '@/components/landing/dot-field'

// The page-wide backdrop: warm paper, sage and teal washes under a pointer-aware dot field.
export const PageBackdrop: FC = (): ReactNode => {
    return (
        <div aria-hidden className='pointer-events-none fixed inset-0 z-0 overflow-hidden bg-paper'>
            <div className='absolute -top-[30%] left-1/2 h-[64vh] w-[78vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(200,225,221,0.55),transparent_70%)] blur-3xl' />
            <div className='absolute top-[44%] -right-[20%] h-[50vh] w-[48vw] rounded-full bg-[radial-gradient(closest-side,rgba(165,190,186,0.35),transparent_72%)] blur-3xl' />
            <div className='absolute bottom-[-16%] left-[-12%] h-[44vh] w-[44vw] rounded-full bg-[radial-gradient(closest-side,rgba(200,188,174,0.28),transparent_70%)] blur-3xl' />
            <DotField />
            <div className='absolute inset-0 bg-[linear-gradient(to_bottom,rgba(251,250,246,0.2),rgba(251,250,246,0.72))]' />
        </div>
    )
}
