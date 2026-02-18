/**
 * Automation Platforms Section
 *
 * Multi-platform grid showing 6 ecommerce platforms
 * with diversification messaging.
 *
 * @component
 */

import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';

const platforms = [
  'Amazon',
  'Walmart',
  'Shopify',
  'Etsy',
  'eBay',
  'TikTok Shop',
];

export default function AutomationPlatformsSection() {
  return (
    <Container size="lg" className="py-10 md:py-16 lg:py-20 relative z-10">
      <div className="flex flex-col items-center gap-6 md:gap-10">
        {/* Section Label */}
        <span className="font-primary font-bold text-[13px] md:text-[15px] uppercase tracking-[3px] text-[#AB78E9]">
          Multi-Platform Structure
        </span>

        {/* Section Title */}
        <Heading
          variant="h2"
          className="text-center max-w-[800px] text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px]"
        >
          <span>We Build </span>
          <span className="text-[#D9B9FF]">Across</span>
        </Heading>

        {/* Platform Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-[660px] mx-auto">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-[rgba(115,0,255,0.06)] border border-[#AB78E9]/40 rounded-[14px] md:rounded-[18px] p-5 md:p-7 flex items-center justify-center hover:border-[#AB78E9] hover:bg-[rgba(115,0,255,0.12)] transition-all duration-300"
            >
              <Heading variant="h4" className="text-[16px] md:text-[20px] text-[#E1C8FF] text-center">
                {platform}
              </Heading>
            </div>
          ))}
        </div>

        {/* Diversification message */}
        <Text
          variant="body"
          color="muted"
          className="text-center max-w-[600px] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed"
        >
          Diversification reduces dependency on one channel and increases long-term stability.
        </Text>
      </div>
    </Container>
  );
}
