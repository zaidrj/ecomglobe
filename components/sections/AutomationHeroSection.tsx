/**
 * Automation Hero Section Component (Q1)
 *
 * Hero section for the Ecommerce Automation page.
 * "Own a Fully-Managed Ecommerce Store" with 7-day guarantee hook.
 *
 * @component
 */

import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import ScrollToSection from '@/components/ui/ScrollToSection';

export default function AutomationHeroSection() {
  return (
    <div className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-visible w-full">
      <Container size="xl" className="relative z-10">
        <div className="flex flex-col items-center text-center gap-4 md:gap-6 pt-32 md:pt-44 lg:pt-48">
          {/* Main Headline */}
          <Heading
            variant="display"
            className="capitalize max-w-[900px] text-[28px] sm:text-[32px] md:text-[48px] lg:text-[58px] leading-[1.2] md:leading-tight text-center"
          >
            <span>Own a Fully-Managed </span>
            <span className="text-[#E1C8FF]">Ecommerce Store</span>
          </Heading>

          {/* Sub-headline */}
          <p className="font-primary font-bold text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] text-[#E1C8FF] tracking-wide text-center">
            Get Your First Sale in 7 Days &mdash; Or Your Money Back.
          </p>

          {/* Body Copy */}
          <Text
            variant="body"
            color="muted"
            className="max-w-[720px] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed text-center !overflow-visible"
          >
            Build a real ecommerce asset across Amazon, Walmart, Shopify or TikTok &mdash; without managing products, suppliers, ads, or fulfillment.
          </Text>

          {/* Ownership Lines */}
          <div className="flex flex-col items-center gap-1 md:gap-2 mt-2">
            <Text variant="body" className="text-white font-semibold text-[15px] sm:text-[17px] md:text-[20px] lg:text-[22px] text-center !overflow-visible">
              For a one-time $1,499 investment, we build it.
            </Text>
            <Text variant="body" className="text-white font-semibold text-[15px] sm:text-[17px] md:text-[20px] lg:text-[22px] text-center !overflow-visible">
              You own it.
            </Text>
            <Text variant="body" className="text-white font-semibold text-[15px] sm:text-[17px] md:text-[20px] lg:text-[22px] text-center !overflow-visible">
              We run it.
            </Text>
          </div>

          {/* CTA prompt */}
          <Text
            variant="body"
            color="muted"
            className="text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-center !overflow-visible mt-2"
          >
            Book your free strategy call below and see if this fits your goals.
          </Text>

          {/* CTA Button */}
          <div className="mt-2 md:mt-4">
            <ScrollToSection
              targetId="calendly"
              className="border-[#7300ff] border border-solid px-6 md:px-8 py-3 md:py-[14.784px] rounded-full md:rounded-[19.712px] shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] not-italic text-[14px] md:text-[18px] text-center text-white uppercase transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(132,0,255,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80 inline-block cursor-pointer relative z-10"
              style={{
                backgroundImage: `radial-gradient(ellipse at center, rgba(132,0,255,0.59) 0%, rgba(115,0,255,0) 100%)`,
              }}
            >
              Book Your Free Strategy Call
            </ScrollToSection>
          </div>
        </div>
      </Container>
    </div>
  );
}
