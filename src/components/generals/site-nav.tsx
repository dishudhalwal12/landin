import type { FC, ReactNode } from 'react'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CtaButton } from '@/components/generals/cta-button'
import { APP_URL, NAV_LINKS, whatsAppHref } from '@/constants/site'

const SparkMark: FC<{ className?: string }> = ({ className }): ReactNode => {
    return (
        <svg viewBox='0 0 24 24' aria-hidden className={cn('size-4', className)} fill='none'>
            <path
                d='M12 1.5c.6 4.9 2.1 7.4 7 8 .4 0 .4.6 0 .6-4.9.6-6.4 3.1-7 8-.06.5-.84.5-.9 0-.6-4.9-2.1-7.4-7-8-.4 0-.4-.6 0-.6 4.9-.6 6.4-3.1 7-8 .06-.5.84-.5.9 0Z'
                fill='currentColor'
            />
            <path
                d='M5.2 16.6c.3 2.2.9 3.3 3.1 3.6.2 0 .2.3 0 .3-2.2.3-2.8 1.4-3.1 3.6 0 .2-.4.2-.4 0-.3-2.2-.9-3.3-3.1-3.6-.2 0-.2-.3 0-.3 2.2-.3 2.8-1.4 3.1-3.6 0-.2.4-.2.4 0Z'
                fill='currentColor'
                opacity='0.75'
            />
        </svg>
    )
}

export const SiteNav: FC = (): ReactNode => {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)

        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        if (!open) return

        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setOpen(false)
        }

        window.addEventListener('keydown', onKey)

        return () => window.removeEventListener('keydown', onKey)
    }, [open])

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300',
                scrolled || open
                    ? 'border-b border-ink/10 bg-paper/85 backdrop-blur-[6px]'
                    : 'border-b border-transparent bg-transparent'
            )}
        >
            {/* Bookmark ribbon, pinned to the very corner of the page */}
            <span
                aria-hidden
                className='ribbon pointer-events-none absolute top-0 left-4 flex items-start justify-center pt-3 text-paper/90 sm:left-6'
            >
                <SparkMark className='size-[15px]' />
            </span>

            <div className='mx-auto flex h-14 w-full max-w-[1439px] items-center justify-between gap-4 px-5 pr-5 pl-[68px] sm:px-8 sm:pl-[88px]'>
                <div className='flex min-w-0 items-center gap-7'>
                    <Link
                        href='/'
                        aria-label='Dukaan.AI home'
                        className='flex shrink-0 items-center rounded-sm focus-visible:ring-2 focus-visible:ring-iris focus-visible:ring-offset-4 focus-visible:ring-offset-paper focus-visible:outline-none'
                    >
                        <span className='flex items-baseline gap-1 text-ink'>
                            <span className='font-heading text-[21px] leading-none font-medium tracking-[-0.045em] lowercase'>
                                dukaan
                            </span>
                            <span className='font-sans text-[10px] leading-none font-medium tracking-[0.16em] text-teal-deep uppercase'>
                                .ai
                            </span>
                        </span>
                    </Link>

                    <nav aria-label='Primary' className='hidden lg:block'>
                        <ul className='flex items-center gap-6'>
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className='link-underline text-[14px] text-ink/75 transition-colors hover:text-ink focus-visible:ring-2 focus-visible:ring-iris focus-visible:outline-none'
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className='flex shrink-0 items-center gap-2'>
                    <CtaButton
                        href={whatsAppHref()}
                        variant='light'
                        className='hidden h-10 px-4 text-[13.5px] font-medium md:inline-flex'
                        icon={<MessageCircle aria-hidden className='size-3.5' />}
                    >
                        Chat on WhatsApp
                    </CtaButton>

                    <CtaButton href={APP_URL} className='h-10 px-4 text-[13.5px] font-medium sm:px-5'>
                        <span className='sm:hidden'>Set up</span>
                        <span className='hidden sm:inline'>Set up your store</span>
                    </CtaButton>

                    <button
                        type='button'
                        aria-expanded={open}
                        aria-controls='mobile-menu'
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        onClick={() => setOpen((current) => !current)}
                        className='flex size-10 items-center justify-center rounded-full text-ink/80 transition-colors hover:bg-ink/[0.06] hover:text-ink focus-visible:ring-2 focus-visible:ring-iris focus-visible:outline-none lg:hidden'
                    >
                        {open ? <X aria-hidden className='size-5' /> : <Menu aria-hidden className='size-5' />}
                    </button>
                </div>
            </div>

            <div
                id='mobile-menu'
                aria-hidden={!open}
                className={cn(
                    'overflow-hidden border-t border-ink/10 bg-paper transition-[max-height,opacity] duration-300 lg:hidden',
                    open ? 'max-h-[520px] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
                )}
            >
                <nav aria-label='Mobile' className='px-5 py-4 sm:px-8'>
                    <ul className='divide-y divide-ink/[0.07]'>
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className='flex items-center justify-between py-3.5 font-heading text-[22px] tracking-[-0.03em] text-ink transition-colors hover:text-teal-deep focus-visible:ring-2 focus-visible:ring-iris focus-visible:outline-none'
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className='mt-5 flex flex-col gap-2.5'>
                        <CtaButton href={APP_URL} className='h-12 w-full'>
                            Set up your store
                        </CtaButton>
                        <CtaButton
                            href={whatsAppHref()}
                            variant='light'
                            className='h-12 w-full'
                            icon={<MessageCircle aria-hidden className='size-4' />}
                        >
                            Chat on WhatsApp
                        </CtaButton>
                    </div>
                </nav>
            </div>
        </header>
    )
}
