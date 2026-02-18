/**
 * Ecommerce Automation Page
 *
 * Landing page for the ecommerce automation service.
 * 12-section layout following the 4Q framework:
 * Q1: Hero, Q2: Qualification, How It Works, Pricing, Q4: Guarantee,
 * Q3: Strategy Call, Why Most Fail, Multi-Platform, Testimonials,
 * Calendly CTA, FAQ, Footer CTA.
 */

import type { Metadata } from 'next';
import Section from '@/components/layout/Section';
import Navbar from '@/components/sections/Navbar';
import AutomationHeroSection from '@/components/sections/AutomationHeroSection';
import AutomationQualificationSection from '@/components/sections/AutomationQualificationSection';
import CallProcessSection from '@/components/sections/CallProcessSection';
import AutomationPricingSection from '@/components/sections/AutomationPricingSection';
import AutomationGuaranteeSection from '@/components/sections/AutomationGuaranteeSection';
import StrategyCallSection from '@/components/sections/StrategyCallSection';
import AutomationWhyFailSection from '@/components/sections/AutomationWhyFailSection';
import AutomationPlatformsSection from '@/components/sections/AutomationPlatformsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CalendlyWidget from '@/components/sections/CalendlyWidget';
import AutomationFAQSection from '@/components/sections/AutomationFAQSection';
import AutomationFooterCTA from '@/components/sections/AutomationFooterCTA';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Heading, Text } from '@/components/ui/Typography';

export const metadata: Metadata = {
  title: 'Own a Fully-Managed Ecommerce Store | EcommGlobe',
  description:
    'Get 2 fully managed ecommerce stores for $1,499. We build, launch, and manage your stores across Amazon, Walmart, Shopify & more. First sale in 7 days or your money back.',
  keywords: ["ecommerce automation", "managed ecommerce store", "hands-off ecommerce", "ecommerce investment", "ecommglobe"],
  alternates: { canonical: "https://www.ecommglobe.com/ecommerce-automation" },
  openGraph: {
    title: "Own a Fully-Managed Ecommerce Store | EcommGlobe",
    description: "Get 2 fully managed ecommerce stores for $1,499. First sale in 7 days or your money back.",
    url: "https://www.ecommglobe.com/ecommerce-automation",
  },
};

export default function EcommerceAutomationPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] w-full" style={{ overflowX: 'clip' }}>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <Navbar hideLinks />

      <main id="main-content">
        {/* 1. Hero Section (Q1) */}
        <Section id="hero" padding="none" maxWidth="xl" className="pb-4 md:pb-8 lg:pb-10 relative overflow-visible">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[400px] md:h-[800px]"
              style={{
                background:
                  'radial-gradient(ellipse at left center, rgba(132,0,255,0.4) 0%, rgba(132,0,255,0.2) 30%, transparent 70%)',
              }}
            />
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[400px] md:h-[800px]"
              style={{
                background:
                  'radial-gradient(ellipse at right center, rgba(132,0,255,0.4) 0%, rgba(132,0,255,0.2) 30%, transparent 70%)',
              }}
            />
            <OptimizedImage
              src="/images/globe.png"
              alt=""
              width={500}
              height={500}
              className="absolute right-[-80px] md:right-[-40px] top-[10%] w-[200px] md:w-[350px] lg:w-[450px] opacity-25"
            />
          </div>
          <div className="hidden lg:block absolute h-[338.62px] left-[61.72px] top-0 w-[1341.233px] z-0">
            <OptimizedImage
              src="/images/icons/ellipse-container.svg"
              alt=""
              width={1341}
              height={339}
              className="absolute inset-0"
            />
          </div>
          <AutomationHeroSection />
        </Section>

        {/* 2. Qualification Section (Q2) */}
        <Section id="qualification" padding="none" maxWidth="lg" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[900px] h-[400px] md:h-[800px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(132,0,255,0.2) 0%, rgba(132,0,255,0.08) 40%, transparent 70%)',
              }}
            />
          </div>
          <AutomationQualificationSection />
        </Section>

        {/* 3. How It Works */}
        <Section id="how-it-works" padding="none" maxWidth="lg" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[900px] h-[400px] md:h-[800px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(132,0,255,0.25) 0%, rgba(132,0,255,0.12) 40%, transparent 70%)',
              }}
            />
            <OptimizedImage
              src="/images/globe.png"
              alt=""
              width={400}
              height={400}
              className="absolute left-[-80px] md:left-[-40px] top-[20%] w-[160px] md:w-[260px] lg:w-[340px] opacity-25 -scale-x-100"
            />
          </div>
          <CallProcessSection />
        </Section>

        {/* 4. Pricing Section */}
        <Section id="pricing" padding="none" maxWidth="lg" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[350px] md:h-[700px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
              }}
            />
          </div>
          <AutomationPricingSection />
        </Section>

        {/* 5. Guarantee Section (Q4) */}
        <Section id="guarantee" padding="none" maxWidth="lg" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute right-0 top-[10%] w-[280px] md:w-[550px] h-[350px] md:h-[650px]"
              style={{
                background:
                  'radial-gradient(ellipse at right center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)',
              }}
            />
            <div
              className="absolute left-0 bottom-[10%] w-[250px] md:w-[500px] h-[300px] md:h-[600px]"
              style={{
                background:
                  'radial-gradient(ellipse at left center, rgba(132,0,255,0.22) 0%, rgba(115,0,255,0.1) 40%, transparent 75%)',
              }}
            />
          </div>
          <AutomationGuaranteeSection />
        </Section>

        {/* 6. Strategy Call Section (Q3) */}
        <Section id="strategy" padding="none" maxWidth="lg" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[900px] h-[400px] md:h-[800px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
              }}
            />
          </div>
          <StrategyCallSection />
        </Section>

        {/* 7. Why Most Fail */}
        <Section id="why-fail" padding="none" maxWidth="lg" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[900px] h-[400px] md:h-[800px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(132,0,255,0.2) 0%, rgba(132,0,255,0.08) 40%, transparent 70%)',
              }}
            />
            <OptimizedImage
              src="/images/globe.png"
              alt=""
              width={400}
              height={400}
              className="absolute right-[-70px] md:right-[-30px] top-[15%] w-[160px] md:w-[270px] lg:w-[350px] opacity-25"
            />
          </div>
          <AutomationWhyFailSection />
        </Section>

        {/* 8. Multi-Platform */}
        <Section id="platforms" padding="none" maxWidth="lg" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-0 top-[15%] w-[280px] md:w-[520px] h-[350px] md:h-[650px]"
              style={{
                background:
                  'radial-gradient(ellipse at left center, rgba(132,0,255,0.22) 0%, rgba(115,0,255,0.1) 40%, transparent 75%)',
              }}
            />
          </div>
          <AutomationPlatformsSection />
        </Section>

        {/* 9. Client Results / Testimonials */}
        <Section id="testimonials" padding="sm" maxWidth="lg" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[900px] h-[400px] md:h-[800px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
              }}
            />
          </div>
          <TestimonialsSection />
        </Section>

        {/* 10. Final CTA + Calendly */}
        <Section padding="sm" maxWidth="lg" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[900px] h-[350px] md:h-[750px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
              }}
            />
          </div>
          {/* CTA heading above Calendly */}
          <div className="relative z-10 w-full max-w-[900px] mx-auto mb-6 md:mb-10">
            <div className="flex flex-col items-center text-center gap-4 md:gap-6">
              <Heading
                variant="h2"
                className="text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px]"
              >
                <span>Ready to Own a </span>
                <span className="text-[#D9B9FF]">Hands-Off Ecommerce Store?</span>
              </Heading>
              <Text variant="body" color="muted" className="text-[14px] sm:text-[16px] md:text-[20px] leading-relaxed !overflow-visible">
                If you want:
              </Text>
              {/* Bullet list — 2 columns perfectly aligned */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 md:gap-y-4 w-full max-w-[480px] mx-auto">
                {[
                  'A structured system',
                  'Full store ownership',
                  'A team handling\noperations',
                  'A performance-driven\nmodel',
                  'Clear guarantees',
                  'Transparent pricing',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#AB78E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 flex-shrink-0" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <Text variant="body" color="muted" className="text-[14px] md:text-[16px] lg:text-[18px] leading-tight whitespace-pre-line !overflow-visible">
                      {item}
                    </Text>
                  </div>
                ))}
              </div>
              <Text variant="body" color="muted" className="text-[14px] sm:text-[16px] md:text-[20px] leading-relaxed max-w-[650px] mt-2 !overflow-visible">
                Book your free strategy call below. We&apos;ll determine if this model fits your time, goals, and expectations.
              </Text>
              <Text variant="body" color="muted" className="text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed !overflow-visible">
                Schedule your call now.
              </Text>
            </div>
          </div>
          <div id="calendly" className="relative z-10">
            <CalendlyWidget />
          </div>
        </Section>

        {/* 11. FAQ */}
        <Section id="faq" padding="sm" maxWidth="xl" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[900px] h-[400px] md:h-[800px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(132,0,255,0.2) 0%, rgba(132,0,255,0.08) 40%, transparent 70%)',
              }}
            />
          </div>
          <AutomationFAQSection />
        </Section>

        {/* 12. Footer Close CTA */}
        <Section id="footer-cta" padding="sm" maxWidth="lg" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[350px] md:h-[600px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(132,0,255,0.25) 0%, rgba(132,0,255,0.1) 40%, transparent 70%)',
              }}
            />
          </div>
          <AutomationFooterCTA />
        </Section>
      </main>
    </div>
  );
}
