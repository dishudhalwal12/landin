import type { FC, ReactNode } from 'react'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Github, Menu, MessageCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/generals/logo'
import { CtaButton } from '@/components/generals/cta-button'
import { APP_URL, GITHUB_URL, NAV_LINKS, whatsAppHref } from '@/constants/site'

const iconLinkClass =
    'flex size-10 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-sage hover:text-ink focus-visible:ring-2 focus-visible:ring-iris focus-visible:outline-none'

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
                'pointer-events-none fixed inset-x-0 top-0 z-50 transition-colors duration-300',
                scrolled ? 'border-b border-ink/10 bg-paper/85 backdrop-blur-[5px]' : 'border-b border-transparent'
            )}
        >
            <div className='pointer-events-auto mx-auto flex w-full max-w-[1439px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:py-5'>
                <div className='flex items-center gap-8'>
                    <Link
                        href='/'
                        aria-label='Dukaan.AI home'
                        className='flex items-center focus-visible:ring-2 focus-visible:ring-iris focus-visible:ring-offset-4 focus-visible:ring-offset-paper focus-visible:outline-none'
                    >
                        <Logo />
                    </Link>

                    <ul className='hidden items-center gap-7 lg:flex'>
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className='text-[14px] font-medium text-ink/70 transition-colors hover:text-teal-deep focus-visible:ring-2 focus-visible:ring-iris focus-visible:outline-none'
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex items-center gap-2'>
                    <a
                        href={GITHUB_URL}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Dukaan.AI source on GitHub'
                        className={cn(iconLinkClass, 'hidden md:flex')}
                    >
                        <Github aria-hidden className='size-[18px]' />
                    </a>

                    <CtaButton
                        href={whatsAppHref()}
                        variant='light'
                        className='hidden h-10 px-5 text-[14px] sm:inline-flex'
                        icon={<MessageCircle aria-hidden className='size-4' />}
                    >
                        Chat on WhatsApp
                    </CtaButton>

                    <CtaButton href={APP_URL} className='h-10 px-5 text-[14px]'>
                        <span className='sm:hidden'>Set up store</span>
                        <span className='hidden sm:inline'>Set up your store</span>
                    </CtaButton>

                    <button
                        type='button'
                        aria-expanded={open}
                        aria-controls='mobile-menu'
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        onClick={() => setOpen((current) => !current)}
                        className={cn(iconLinkClass, 'lg:hidden')}
                    >
                        {open ? <X aria-hidden className='size-5' /> : <Menu aria-hidden className='size-5' />}
                    </button>
                </div>
            </div>

            <div
                id='mobile-menu'
                aria-hidden={!open}
                className={cn(
                    'pointer-events-auto mx-5 mb-4 overflow-hidden rounded-lg border border-ink/10 bg-paper transition-[opacity,transform] duration-200 sm:mx-8 lg:hidden',
                    open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
                )}
            >
                <ul className='p-2'>
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className='block rounded-md px-4 py-3 text-[15px] font-medium text-ink/80 transition-colors hover:bg-sage hover:text-ink focus-visible:ring-2 focus-visible:ring-iris focus-visible:outline-none'
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}

                    <li>
                        <a
                            href={GITHUB_URL}
                            target='_blank'
                            rel='noopener noreferrer'
                            onClick={() => setOpen(false)}
                            className='flex items-center gap-2 rounded-md px-4 py-3 text-[15px] font-medium text-ink/80 transition-colors hover:bg-sage hover:text-ink focus-visible:ring-2 focus-visible:ring-iris focus-visible:outline-none'
                        >
                            <Github aria-hidden className='size-4' />
                            Source on GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}
