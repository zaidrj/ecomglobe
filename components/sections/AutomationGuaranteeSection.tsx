/**
 * Automation Guarantee Section (Q4)
 *
 * Three guarantee cards: Dropshipping, Wholesale, Revenue Target.
 * Reinforces risk-reversal messaging.
 *
 * @component
 */

import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';

const guarantees = [
  {
    title: 'Dropshipping Stores',
    description: 'Get your first sale within 7 days of launch — or you get a full refund.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E1C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Wholesale Stores',
    description: 'Get your first sale once inventory is live — or you get a full refund.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E1C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    title: 'Revenue Target',
    description: 'Our goal is to help you reach $4,000+ in sales within 60 days depending on platform. If the system is followed and the target isn\'t met, we keep working at no extra cost until it is.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E1C8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function AutomationGuaranteeSection() {
  return (
    <Container size="lg" className="py-10 md:py-16 lg:py-20 relative z-10">
      <div className="flex flex-col items-center gap-6 md:gap-10">
        {/* Section Title */}
        <Heading
          variant="h2"
          className="text-center max-w-[700px] text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px]"
        >
          <span>Our </span>
          <span className="text-[#D9B9FF]">Guarantees</span>
        </Heading>

        {/* Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-[1000px] mx-auto">
          {guarantees.map((item, index) => (
            <div
              key={index}
              className="bg-[rgba(115,0,255,0.08)] border border-[#AB78E9] rounded-[14px] md:rounded-[18px] p-6 md:p-8 flex flex-col gap-4 md:gap-5 hover:bg-[rgba(115,0,255,0.14)] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-full bg-gradient-to-br from-[rgba(145,55,255,0.4)] to-[rgba(115,0,255,0.2)] border border-[#AB78E9] flex items-center justify-center">
                {item.icon}
              </div>

              {/* Title */}
              <Heading variant="h4" className="text-[18px] md:text-[22px] lg:text-[24px]">
                {item.title}
              </Heading>

              {/* Description */}
              <Text variant="small" color="muted" className="text-[13px] md:text-[15px] lg:text-[16px] leading-relaxed flex-1">
                {item.description}
              </Text>
            </div>
          ))}
        </div>

        {/* Closing Lines */}
        <div className="flex flex-col items-center gap-1">
          <Text variant="body" className="text-[#C8CDD2] text-[16px] md:text-[20px] text-center font-semibold">
            No hype.
          </Text>
          <Text variant="body" className="text-[#C8CDD2] text-[16px] md:text-[20px] text-center font-semibold">
            No empty promises.
          </Text>
          <Text variant="body" className="text-[#C8CDD2] text-[16px] md:text-[20px] text-center font-semibold">
            Just execution.
          </Text>
        </div>
      </div>
    </Container>
  );
}
