import type { FC, ReactNode } from 'react'

// The page-wide backdrop: warm paper, one sage wash, and a fine grain.
// Sections sit on top of it with their own colour bands.
export const PageBackdrop: FC = (): ReactNode => {
    return (
        <div aria-hidden className='pointer-events-none fixed inset-0 z-0 overflow-hidden bg-paper'>
            <div className='absolute -top-[26%] left-1/2 h-[58vh] w-[74vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(200,225,221,0.45),transparent_72%)] blur-3xl' />
            <div className='absolute right-[-14%] bottom-[-18%] h-[46vh] w-[44vw] rounded-full bg-[radial-gradient(closest-side,rgba(200,188,174,0.22),transparent_72%)] blur-3xl' />

            <div className='grain absolute inset-0 opacity-[0.5]' />
        </div>
    )
}
