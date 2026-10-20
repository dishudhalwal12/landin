import type { FC, ReactNode } from 'react'

import { Seo } from '@/components/generals/seo'
import { Layout } from '@/components/generals/layout'
import { SectionBadge } from '@/components/landing/section-badge'

const SECTIONS = [
    { id: 'privacy', label: 'Privacy' },
    { id: 'cookies', label: 'Cookies' },
    { id: 'terms', label: 'Terms of use' }
]

const headingClass = 'scroll-mt-32 font-heading text-[28px] leading-tight font-normal tracking-[-0.03em] text-ink'
const paragraphClass = 'mt-4 text-[16.5px] leading-relaxed text-ink/75'
const listClass = 'mt-4 list-disc space-y-2 pl-5 text-[16.5px] leading-relaxed text-ink/75 marker:text-teal'

const Legal: FC = (): ReactNode => {
    return (
        <Layout>
            <Seo
                title='Legal'
                description='How Dukaan.AI handles the information you share, and the terms for using the beta.'
            />

            <article className='mx-auto w-full max-w-3xl px-5 pt-36 pb-24 sm:pt-48 sm:pb-32'>
                <SectionBadge>Legal</SectionBadge>

                <h1 className='mt-6 font-heading text-[clamp(2.4rem,4.4vw,3.4rem)] leading-[1.05] font-normal tracking-[-0.04em] text-ink'>
                    Privacy and terms
                </h1>

                <p className='mt-4 font-mono text-[11px] tracking-[0.08em] text-muted-foreground uppercase'>
                    Last updated October 20, 2026
                </p>

                <nav aria-label='On this page' className='mt-10 border border-ink/15 bg-paper-2 p-6'>
                    <p className='font-mono text-[10.5px] tracking-[0.16em] text-ink/50 uppercase'>
                        On this page
                    </p>

                    <ul className='mt-3 flex flex-wrap gap-2'>
                        {SECTIONS.map((section) => (
                            <li key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    className='inline-flex rounded-full border border-ink/15 bg-paper px-4 py-2 text-[14px] font-medium text-ink transition-colors hover:border-teal/40 hover:bg-mint focus-visible:ring-2 focus-visible:ring-teal focus-visible:outline-none'
                                >
                                    {section.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <section aria-labelledby='privacy' className='mt-16'>
                    <h2 id='privacy' className={headingClass}>
                        Privacy
                    </h2>

                    <p className={paragraphClass}>
                        When you create a shop, we collect your name, email, shop name and the WhatsApp number you link. We use them to sign you in, run the bot and send order updates. Your catalog and orders are stored so the dashboard can load them on any device you sign in from.
                    </p>

                    <ul className={listClass}>
                        <li>We do not sell your information or share it for advertising.</li>
                        <li>Customer messages travel through WhatsApp and are also covered by WhatsApp's privacy terms.</li>
                        <li>You can ask us to show, correct or delete your account data at any time.</li>
                    </ul>
                </section>

                <section aria-labelledby='cookies' className='mt-14'>
                    <h2 id='cookies' className={headingClass}>
                        Cookies
                    </h2>

                    <p className={paragraphClass}>
                        This site does not set advertising or tracking cookies. The app keeps the sign-in session it needs to stay logged in.
                    </p>
                </section>

                <section aria-labelledby='terms' className='mt-14'>
                    <h2 id='terms' className={headingClass}>
                        Terms of use
                    </h2>

                    <p className={paragraphClass}>
                        Dukaan.AI is in beta. Features can change, and the bot goes quiet when the machine hosting it is offline.
                    </p>

                    <ul className={listClass}>
                        <li>An accepted order is a record of what the shop agreed to sell. It is not a tax invoice.</li>
                        <li>Uptime, delivery times and stock accuracy are not guaranteed during the beta.</li>
                        <li>We may update these terms. The date at the top of this page shows the latest revision.</li>
                    </ul>
                </section>
            </article>
        </Layout>
    )
}

export default Legal
