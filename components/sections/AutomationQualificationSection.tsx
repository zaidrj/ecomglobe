/**
 * Automation Qualification Section (Q2)
 *
 * "This Is For You If..." section with checkmark items
 * and a disclaimer for non-fit prospects.
 *
 * @component
 */

import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';

const qualifications = [
  'You want to own an ecommerce business — not operate one daily',
  "You don't have time to learn Amazon, suppliers, or fulfillment",
  'You want an additional income-producing asset',
  'You prefer structured systems over trial and error',
  'You value guarantees and accountability',
];

export default function AutomationQualificationSection() {
  return (
    <Container size="lg" className="py-10 md:py-16 lg:py-20 relative z-10">
      <div className="flex flex-col items-center gap-6 md:gap-10">
        {/* Section Title */}
        <Heading
          variant="h2"
          className="text-center max-w-[700px] text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px]"
        >
          <span>This Is </span>
          <span className="text-[#D9B9FF]">For You If...</span>
        </Heading>

        {/* Checkmark Items — left-aligned within a centered block */}
        <div className="w-full max-w-[620px] mx-auto flex flex-col gap-4 md:gap-5">
          {qualifications.map((item, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-4">
              <div className="shrink-0 w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full bg-gradient-to-br from-[rgba(145,55,255,0.4)] to-[rgba(115,0,255,0.2)] border border-[#AB78E9] flex items-center justify-center mt-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E1C8FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <Text variant="body" color="muted" className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed">
                {item}
              </Text>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <Text variant="body" className="text-[#C8CDD2]/70 text-[14px] md:text-[16px] leading-relaxed text-center max-w-[620px]">
          If you&apos;re looking to become a full-time operator, this isn&apos;t for you.
        </Text>

        {/* Closing Hook */}
        <Text variant="body" className="text-[#E1C8FF] font-semibold text-[16px] md:text-[20px] text-center">
          If you want a hands-off ecommerce asset, keep reading.
        </Text>
      </div>
    </Container>
  );
}
