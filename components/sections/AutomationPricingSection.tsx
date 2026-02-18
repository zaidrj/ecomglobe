/**
 * Automation Pricing Section
 *
 * "Get 2 Fully Managed Ecommerce Stores" pricing card
 * with one-time investment and benefit bullet points.
 *
 * @component
 */

import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import ScrollToSection from '@/components/ui/ScrollToSection';

const benefits = [
  'Complete account setup',
  'Proven product selection',
  'Supplier integration',
  'Automated fulfillment systems',
  'Dedicated project manager',
  'Ongoing store management',
  'Performance tracking dashboard',
  'Full ownership of your stores',
];

export default function AutomationPricingSection() {
  return (
    <Container size="lg" className="py-10 md:py-16 lg:py-20 relative z-10">
      <div className="flex flex-col items-center gap-6 md:gap-10">
        {/* Section Title */}
        <Heading
          variant="h2"
          className="text-center max-w-[800px] text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px]"
        >
          <span>Get 2 Fully Managed </span>
          <span className="text-[#D9B9FF]">Ecommerce Stores</span>
        </Heading>

        {/* Pricing Card */}
        <div className="w-full max-w-[560px] mx-auto bg-[rgba(115,0,255,0.08)] border border-[#AB78E9] rounded-[18px] md:rounded-[24px] p-6 md:p-10 flex flex-col items-center gap-6 md:gap-8">
          {/* Price Header */}
          <div className="text-center w-full">
            <p className="font-secondary font-normal text-[14px] md:text-[16px] text-[#C8CDD2] uppercase tracking-[3px] mb-2">
              One-Time Investment
            </p>
          </div>

          {/* Price */}
          <p className="font-secondary font-bold text-[48px] sm:text-[56px] md:text-[72px] text-white leading-tight text-center">
            $1,499
          </p>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#AB78E9]/40 to-transparent" />

          {/* Benefits Header */}
          <Text variant="body" className="text-white font-semibold text-[16px] md:text-[20px] text-center !overflow-visible">
            Here&apos;s what you get:
          </Text>

          {/* Benefits — 2 columns, centered, ticks aligned */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-[520px] mx-auto">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#AB78E9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 flex-shrink-0" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <Text variant="body" color="muted" className="text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed !overflow-visible">
                  {item}
                </Text>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#AB78E9]/40 to-transparent" />

          {/* CTA */}
          <ScrollToSection
            targetId="calendly"
            className="border-[#7300ff] border border-solid px-6 md:px-8 py-3 md:py-4 rounded-full shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] text-[14px] md:text-[18px] text-center text-white uppercase transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(132,0,255,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80 inline-block cursor-pointer"
            style={{
              backgroundImage: `radial-gradient(ellipse at center, rgba(132,0,255,0.59) 0%, rgba(115,0,255,0) 100%)`,
            }}
          >
            Book Your Free Strategy Call
          </ScrollToSection>
        </div>

        {/* Tagline */}
        <Text variant="body" className="text-[#C8CDD2] text-[14px] md:text-[18px] text-center max-w-[560px] leading-relaxed italic !overflow-visible">
          You&apos;re building a governed ecommerce asset &mdash; not a side hustle experiment.
        </Text>
      </div>
    </Container>
  );
}
