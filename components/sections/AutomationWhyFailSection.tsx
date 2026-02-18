/**
 * Automation Why Most Fail Section
 *
 * "65% of founders quit ecommerce..." pain point section
 * showing why DIY ecommerce fails and how we solve it.
 *
 * @component
 */

import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';

const painPoints = [
  'Research products alone',
  'Negotiate suppliers alone',
  'Manage fulfillment alone',
  'Fix ad issues alone',
];

export default function AutomationWhyFailSection() {
  return (
    <Container size="lg" className="py-10 md:py-16 lg:py-20 relative z-10">
      <div className="flex flex-col items-center gap-6 md:gap-10">
        {/* Section Title */}
        <Heading
          variant="h2"
          className="text-center max-w-[800px] text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px]"
        >
          <span>Why Most People </span>
          <span className="text-[#D9B9FF]">Fail in Ecommerce</span>
        </Heading>

        {/* Stat Line */}
        <Text
          variant="body"
          color="muted"
          className="text-center max-w-[700px] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed"
        >
          <span className="text-[#E1C8FF] font-semibold">65% of founders</span> quit ecommerce not because it doesn&apos;t work &mdash; but because it becomes a second job.
        </Text>

        {/* They try to: — 2 columns, centered */}
        <div className="flex flex-col items-center gap-3 md:gap-4 w-full">
          <Text variant="body" className="text-white font-semibold text-[16px] md:text-[20px]">
            They try to:
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 md:gap-y-4 w-full max-w-[480px] mx-auto">
            {painPoints.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full bg-red-500/20 border border-red-400/40 flex items-center justify-center shrink-0 flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <Text variant="body" color="muted" className="text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed !overflow-visible">
                  {item}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* That's exhausting */}
        <Text variant="body" className="text-[#C8CDD2] text-[16px] md:text-[20px] text-center font-semibold">
          That&apos;s exhausting.
        </Text>

        {/* Solution Line */}
        <div className="w-full max-w-[700px] mx-auto bg-[rgba(115,0,255,0.1)] border border-[#AB78E9] rounded-[14px] md:rounded-[18px] p-5 md:p-8 text-center">
          <Text variant="body" className="text-[#E1C8FF] font-semibold text-[16px] md:text-[20px] leading-relaxed">
            We remove operational complexity so you can focus on ownership and scaling.
          </Text>
        </div>
      </div>
    </Container>
  );
}
