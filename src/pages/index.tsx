import type { FC, ReactNode } from 'react'

import { Seo } from '@/components/generals/seo'
import { Layout } from '@/components/generals/layout'
import { HeroSection } from '@/components/landing/hero-section'
import { ScrollManifesto } from '@/components/landing/scroll-manifesto'
import { ProofSection } from '@/components/landing/proof-section'
import { WorkflowSection } from '@/components/landing/workflow-section'
import { FeatureGrid } from '@/components/landing/feature-grid'
import { OwnerApproval } from '@/components/landing/owner-approval'
import { DashboardMock } from '@/components/landing/dashboard-mock'
import { BeforeAfter } from '@/components/landing/before-after'
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
            <ScrollManifesto />
            <ProofSection />
            <WorkflowSection />
            <FeatureGrid />
            <OwnerApproval />
            <DashboardMock />
            <BeforeAfter />
            <SetupSection />
            <FaqSection />
            <CtaSection />
        </Layout>
    )
}

export default Home
