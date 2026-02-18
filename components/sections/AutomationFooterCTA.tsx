/**
 * Automation Footer CTA Section
 *
 * Final closing CTA with ownership messaging
 * and "Book Now" button scrolling to Calendly.
 *
 * @component
 */

import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import ScrollToSection from '@/components/ui/ScrollToSection';

export default function AutomationFooterCTA() {
  return (
    <Container size="lg" className="py-10 md:py-16 lg:py-20 relative z-10">
      <div className="flex flex-col items-center text-center gap-2 md:gap-3">
        <Text variant="body" className="text-white font-semibold text-[18px] md:text-[24px]">
          Own the asset.
        </Text>
        <Text variant="body" className="text-white font-semibold text-[18px] md:text-[24px]">
          Avoid the overwhelm.
        </Text>
        <Text variant="body" className="text-white font-semibold text-[18px] md:text-[24px]">
          Build structured ecommerce revenue.
        </Text>

        <Text variant="body" color="muted" className="text-[14px] sm:text-[16px] md:text-[20px] leading-relaxed mt-4">
          Book your strategy call today.
        </Text>

        <ScrollToSection
          targetId="calendly"
          className="border-[#7300ff] border border-solid px-6 md:px-8 py-3 md:py-4 rounded-full shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] text-[14px] md:text-[18px] text-center text-white uppercase transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(132,0,255,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80 inline-block cursor-pointer mt-4"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, rgba(132,0,255,0.59) 0%, rgba(115,0,255,0) 100%)`,
          }}
        >
          Book Now
        </ScrollToSection>
      </div>
    </Container>
  );
}
