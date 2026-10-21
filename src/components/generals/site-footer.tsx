import type { FC, ReactNode } from 'react'

import Link from 'next/link'
import { ArrowUp, ArrowUpRight, MessageCircle } from 'lucide-react'
import { CtaButton } from '@/components/generals/cta-button'
import { footerCopy } from '@/constants/copy'
import { APP_URL, GITHUB_URL, whatsAppHref } from '@/constants/site'

const GithubMark: FC<{ className?: string }> = ({ className }): ReactNode => {
    return (
        <svg viewBox='0 0 24 24' aria-hidden className={className} fill='currentColor'>
            <path d='M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.23c-3.34.72-4.04-1.41-4.04-1.41-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .5Z' />
        </svg>
    )
}

const resourceLinks = [
    { label: 'Source on GitHub', href: GITHUB_URL },
    { label: 'Chat on WhatsApp', href: whatsAppHref() },
    { label: 'Open the beta app', href: APP_URL }
]

const linkClass =
    'link-underline text-[13.5px] text-ink/60 transition-colors hover:text-ink focus-visible:ring-2 focus-visible:ring-iris focus-visible:outline-none'

const socialClass =
    'flex size-9 items-center justify-center rounded-full border border-ink/15 text-ink/55 transition-[color,border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-ink/30 hover:bg-ink hover:text-paper focus-visible:ring-2 focus-visible:ring-iris focus-visible:outline-none'

export const SiteFooter: FC = (): ReactNode => {
    return (
        <footer className='relative isolate overflow-hidden border-t border-ink/10 bg-paper'>
            <div
                aria-hidden
                className='pointer-events-none absolute inset-x-0 bottom-0 h-[40vh] bg-[radial-gradient(closest-side,rgba(200,225,221,0.35),transparent_72%)] [background-position:50%_120%] [background-repeat:no-repeat] [background-size:80vw_70vh]'
            />

            <div className='relative mx-auto w-full max-w-[1439px] px-5 sm:px-8'>
                <div className='flex flex-col items-center py-16 text-center sm:py-20'>
                    <span aria-hidden className='ribbon flex h-12 w-8 items-start justify-center pt-2.5 text-paper/90'>
                        <span className='size-1.5 rounded-full bg-paper' />
                    </span>

                    <p className='eyebrow mt-6 text-ink/40'>The shop is open</p>

                    <Link
                        href='/'
                        aria-label='Dukaan.AI home'
                        className='mt-3 flex items-baseline justify-center rounded-sm text-ink focus-visible:ring-2 focus-visible:ring-iris focus-visible:ring-offset-4 focus-visible:ring-offset-paper focus-visible:outline-none'
                    >
                        <span className='font-heading text-[clamp(2.6rem,6.4vw,5.5rem)] leading-[0.85] font-normal tracking-[-0.055em] lowercase'>
                            dukaan
                        </span>
                        <span className='ml-[0.14em] font-sans text-[clamp(0.68rem,1.2vw,1.05rem)] leading-none font-medium tracking-[0.16em] text-teal-deep uppercase'>
                            .ai
                        </span>
                    </Link>

                    <p className='mt-5 max-w-[34ch] text-[15px] leading-[1.5] tracking-[-0.01em] text-ink/55'>
                        {footerCopy.tagline}
                    </p>

                    <div className='mt-8 flex w-full flex-col items-stretch justify-center gap-2.5 sm:w-auto sm:flex-row sm:items-center'>
                        <CtaButton href={APP_URL} className='h-11 px-6 text-[13.5px] font-medium'>
                            Set up your store
                            <ArrowUpRight aria-hidden className='size-4' />
                        </CtaButton>

                        <CtaButton
                            href={whatsAppHref()}
                            variant='light'
                            className='h-11 px-6 text-[13.5px] font-medium'
                            icon={<MessageCircle aria-hidden className='size-4' />}
                        >
                            Chat on WhatsApp
                        </CtaButton>
                    </div>

                    <nav aria-label='Footer' className='mt-12 w-full border-t border-ink/10 pt-7'>
                        <ul className='flex flex-wrap items-center justify-center gap-x-7 gap-y-3'>
                            {footerCopy.productLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className={linkClass}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}

                            {footerCopy.legalLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className={linkClass}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <ul className='mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3'>
                        {resourceLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='group inline-flex items-center gap-1 text-[12.5px] text-ink/50 transition-colors hover:text-teal-deep'
                                >
                                    {link.label}
                                    <ArrowUpRight
                                        aria-hidden
                                        className='size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <ul className='mt-8 flex items-center gap-2.5'>
                        <li>
                            <a
                                href={GITHUB_URL}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Dukaan.AI source on GitHub'
                                className={socialClass}
                            >
                                <GithubMark className='size-4' />
                            </a>
                        </li>

                        <li>
                            <a
                                href={whatsAppHref()}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Chat with Dukaan.AI on WhatsApp'
                                className={socialClass}
                            >
                                <MessageCircle aria-hidden className='size-4' />
                            </a>
                        </li>

                        <li>
                            <a href='#hero' aria-label='Back to top' className={socialClass}>
                                <ArrowUp aria-hidden className='size-4' />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col gap-2 border-t border-ink/10 py-6 text-[11px] tracking-[0.04em] text-ink/45 sm:flex-row sm:items-center sm:justify-between'>
                    <p>{footerCopy.copyright}</p>
                    <p className='font-mono text-[10.5px] tracking-[0.1em] uppercase'>Made in India</p>
                    <p>{footerCopy.note}</p>
                </div>
            </div>
        </footer>
    )
}
