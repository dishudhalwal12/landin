import type { FC, ReactNode } from 'react'

import { Seo } from '@/components/generals/seo'
import { Layout } from '@/components/generals/layout'
import { HeroSection } from '@/components/landing/hero-section'
import { ShopMarquee } from '@/components/landing/shop-marquee'
import { EcosystemGrid } from '@/components/landing/ecosystem-grid'
import { ExpertiseCollage } from '@/components/landing/expertise-collage'
import { StatsBand } from '@/components/landing/stats-band'
import { TestimonialStack } from '@/components/landing/testimonial-stack'
import { TasteSection } from '@/components/landing/taste-section'
import { BigTypeScrubber } from '@/components/landing/big-type-scrubber'
import { FeatureGrid } from '@/components/landing/feature-grid'
import { SetupSection } from '@/components/landing/setup-section'
import { FaqSection } from '@/components/landing/faq-section'
import { CtaSection } from '@/components/landing/cta-section'
import { faq } from '@/constants/copy'

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
        }
    }))
}

const Home: FC = (): ReactNode => {
    return (
        <Layout>
            <Seo title='WhatsApp ordering for your shop' />

            <script
                type='application/ld+json'
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <HeroSection />
            <ShopMarquee />
            <EcosystemGrid />
            <ExpertiseCollage />
            <StatsBand />
            <TestimonialStack />
            <TasteSection />
            <BigTypeScrubber />
            <FeatureGrid />
            <SetupSection />
            <FaqSection />
            <CtaSection />
        </Layout>
    )
}

export default Home
