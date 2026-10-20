import type { FC, ReactNode } from 'react'

import Link from 'next/link'
import { ArrowUpRight, Github, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/generals/logo'
import { AsciiFooter } from '@/components/landing/ascii-footer'
import { footerCopy } from '@/constants/copy'
import { APP_URL, GITHUB_URL, whatsAppHref } from '@/constants/site'

const resourceLinks = [
    { label: 'Source on GitHub', href: GITHUB_URL },
    { label: 'Chat on WhatsApp', href: whatsAppHref() },
    { label: 'Open the beta app', href: APP_URL }
]

const linkClass = 'group inline-flex items-center gap-1 rounded-sm text-[15px] text-ink/65 transition-colors hover:text-teal-deep focus-visible:ring-2 focus-visible:ring-teal focus-visible:outline-none'

const iconLinkClass = 'flex size-10 items-center justify-center rounded-full bg-ink text-paper transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-teal-deep focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-paper focus-visible:outline-none'

const columnTitle = 'font-mono text-[10.5px] tracking-[0.16em] text-ink/45 uppercase'

export const SiteFooter: FC = (): ReactNode => {
    return (
        <footer className='bg-paper px-5 pt-16 sm:px-8'>
            <div className='mx-auto w-full max-w-[1199px]'>
                <div className='flex items-center justify-between border-b border-ink/10 pb-3 font-mono text-[10.5px] tracking-[0.16em] text-ink/40 uppercase'>
                    <span>Dukaan.AI</span>
                    <span>The shop is open</span>
                </div>

                <AsciiFooter />

                <div className='grid gap-12 border-t border-ink/10 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]'>
                    <div className='sm:col-span-2 lg:col-span-1'>
                        <Link
                            href='/'
                            aria-label='Dukaan.AI home'
                            className='inline-flex items-center rounded-sm focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-4 focus-visible:ring-offset-paper focus-visible:outline-none'
                        >
                            <Logo />
                        </Link>

                        <p className='mt-5 max-w-[34ch] text-[15.5px] leading-relaxed text-ink/60'>
                            {footerCopy.tagline}
                        </p>

                        <ul className='mt-7 flex items-center gap-3'>
                            <li>
                                <a
                                    href={GITHUB_URL}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='Dukaan.AI source on GitHub'
                                    className={iconLinkClass}
                                >
                                    <Github aria-hidden className='size-5' />
                                </a>
                            </li>

                            <li>
                                <a
                                    href={whatsAppHref()}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='Chat with Dukaan.AI on WhatsApp'
                                    className={iconLinkClass}
                                >
                                    <MessageCircle aria-hidden className='size-5' />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <nav aria-label={footerCopy.productTitle}>
                        <p className={columnTitle}>
                            {footerCopy.productTitle}
                        </p>

                        <ul className='mt-5 space-y-3.5'>
                            {footerCopy.productLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className={linkClass}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label={footerCopy.resourceTitle}>
                        <p className={columnTitle}>
                            {footerCopy.resourceTitle}
                        </p>

                        <ul className='mt-5 space-y-3.5'>
                            {resourceLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className={linkClass}
                                    >
                                        {link.label}
                                        <ArrowUpRight aria-hidden className='size-4 opacity-0 transition-opacity group-hover:opacity-100' />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label={footerCopy.legalTitle}>
                        <p className={columnTitle}>
                            {footerCopy.legalTitle}
                        </p>

                        <ul className='mt-5 space-y-3.5'>
                            {footerCopy.legalLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className={linkClass}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className='flex flex-col gap-3 border-t border-ink/10 py-7 font-mono text-[11px] tracking-[0.06em] text-ink/40 sm:flex-row sm:items-center sm:justify-between'>
                    <p>{footerCopy.copyright}</p>
                    <p>{footerCopy.note}</p>
                </div>
            </div>
        </footer>
    )
}
