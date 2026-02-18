/**
 * Call Process Section Component — "How It Works"
 *
 * "We Build. We Manage. You Own." section with 8 checkmark items
 * showing what's included in the managed ecommerce service.
 *
 * @component
 */

import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';

const services = [
  'Product research',
  'Supplier sourcing',
  'Store setup (Amazon, Walmart, Shopify, Etsy, eBay, TikTok Shop)',
  'Listings optimization',
  'Inventory management',
  '3PL & fulfillment',
  'Ongoing store management',
  'Performance tracking',
];

export default function CallProcessSection() {
  return (
    <Container size="lg" className="py-10 md:py-16 lg:py-20 relative z-10">
      <div className="flex flex-col items-center gap-6 md:gap-10">
        {/* Section Label */}
        <span className="font-primary font-bold text-[13px] md:text-[15px] uppercase tracking-[3px] text-[#AB78E9] text-center">
          How It Works
        </span>

        {/* Section Title */}
        <Heading
          variant="h2"
          className="text-center max-w-[700px] text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px]"
        >
          <span>We Build. We Manage. </span>
          <span className="text-[#D9B9FF]">You Own.</span>
        </Heading>

        {/* Intro Paragraph */}
        <Text
          variant="body"
          color="muted"
          className="text-center max-w-[700px] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed !overflow-visible"
        >
          Unlike most ecommerce programs that sell courses or leave you guessing&hellip; We handle everything:
        </Text>

        {/* Service Checkmarks — 2 columns, center-aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 md:gap-y-4 w-full max-w-[480px] mx-auto">
          {services.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="shrink-0 w-[26px] h-[26px] md:w-[30px] md:h-[30px] rounded-full bg-gradient-to-br from-[rgba(145,55,255,0.4)] to-[rgba(115,0,255,0.2)] border border-[#AB78E9] flex items-center justify-center mt-0.5 flex-shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E1C8FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <Text variant="body" color="muted" className="text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed !overflow-visible">
                {item}
              </Text>
            </div>
          ))}
        </div>

        {/* Closing Lines */}
        <div className="flex flex-col items-center gap-1 mt-2 md:mt-4">
          <Text variant="body" className="text-[#E1C8FF] font-semibold text-[16px] md:text-[20px] text-center !overflow-visible">
            You are not managing tasks.
          </Text>
          <Text variant="body" className="text-[#E1C8FF] font-semibold text-[16px] md:text-[20px] text-center !overflow-visible">
            You are reviewing performance.
          </Text>
        </div>
      </div>
    </Container>
  );
}
