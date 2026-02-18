/**
 * Automation Hero Section Component
 *
 * Hero section for the Ecommerce Automation page.
 * Features headline, subheadline, and CTA button.
 *
 * @component
 */

import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import ScrollToSection from '@/components/ui/ScrollToSection';

export default function AutomationHeroSection() {
  return (
    <div className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-visible px-4 md:px-0 w-full">
      <Container size="xl" className="relative z-10">
        <div className="flex flex-col items-center text-center gap-3 md:gap-6 pt-32 md:pt-44 lg:pt-48">
          {/* Main Headline */}
          <Heading
            variant="display"
            className="capitalize max-w-[900px] text-[28px] sm:text-[32px] md:text-[48px] lg:text-[58px] leading-[1.2] md:leading-tight px-2"
          >
            <span>Automate Your </span>
            <span className="text-[#E1C8FF]">Ecommerce Empire</span>
          </Heading>

          {/* Subheadline */}
          <Text
            variant="body"
            color="muted"
            className="max-w-[755px] mx-auto text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] px-2 md:px-4 relative z-10 leading-relaxed"
          >
            Stop wasting hours on manual tasks. Our automation systems handle inventory, orders, pricing, and marketing across all your marketplaces—so you can focus on scaling.
          </Text>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-[23.655px] items-center mt-4 md:mt-4 w-full sm:w-auto">
            <ScrollToSection
              targetId="calendly"
              className="border-[#7300ff] border border-solid px-4 md:px-[19.712px] py-3 md:py-[14.784px] rounded-full md:rounded-[19.712px] shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] not-italic text-[14px] md:text-[18px] text-center text-white uppercase w-full sm:w-auto transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(132,0,255,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80 inline-block cursor-pointer relative z-10"
              style={{
                backgroundImage: `radial-gradient(ellipse at center, rgba(132,0,255,0.59) 0%, rgba(115,0,255,0) 100%)`,
              }}
            >
              Book Your Free Strategy Call
            </ScrollToSection>
            <ScrollToSection
              targetId="calendly"
              className="border-[#ab78e9] border border-solid bg-transparent px-4 md:px-[19.712px] py-3 md:py-[14.784px] rounded-full md:rounded-[19.712px] shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] not-italic text-[14px] md:text-[18px] text-center text-[#c8cdd2] uppercase w-full sm:w-auto transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(171,120,233,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80 inline-block cursor-pointer relative z-10"
            >
              See How It Works
            </ScrollToSection>
          </div>
        </div>
      </Container>
    </div>
  );
}
