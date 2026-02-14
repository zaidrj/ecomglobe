/**
 * Strategy Call Section Component
 *
 * "What you'll get in the free strategy call?" section with stats
 * showing profit, ROI, and success rate figures.
 * Follows the site's dark purple theme.
 *
 * @component
 */

import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import ScrollToSection from '@/components/ui/ScrollToSection';

const stats = [
  {
    label: 'Total Profit',
    value: '$52K',
  },
  {
    label: 'Return on Investment',
    value: '4x',
  },
  {
    label: 'Success Rate',
    value: '89%',
  },
];

export default function StrategyCallSection() {
  return (
    <Container size="lg" className="py-6 md:py-8 lg:py-10 relative z-10 px-4 md:px-6">
      <div className="flex flex-col items-center gap-6 md:gap-10">
        {/* Section Title */}
        <Heading
          variant="h2"
          className="text-center max-w-[800px] text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px] px-2"
        >
          <span>What you&apos;ll get in the </span>
          <span className="text-[#D9B9FF]">free strategy call?</span>
        </Heading>

        {/* Description */}
        <Text
          variant="body"
          color="muted"
          className="text-center max-w-[850px] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] px-2 leading-relaxed"
        >
          In this call, our senior business consultant will guide you step-by-step on how this automation system works and the actionable steps through which we can help accomplish at least <span className="text-[#E1C8FF] font-semibold">$4,000 in sales</span> for you in just <span className="text-[#E1C8FF] font-semibold">60 days</span>.
        </Text>

        {/* Guaranteed High Profits Banner */}
        <div className="w-full max-w-[1000px] mt-2 md:mt-4">
          {/* Banner Title */}
          <div className="text-center mb-6 md:mb-10">
            <Heading
              variant="h3"
              className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]"
            >
              <span className="text-[#E1C8FF]">Guaranteed</span>
              <span> High Profits Within the First Month</span>
            </Heading>
          </div>

          {/* Stats Row — same style as home StatsSection */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-6 md:gap-0">
                <div className="flex flex-col items-center justify-center text-center px-6 md:px-10 lg:px-14">
                  {/* Value */}
                  <p className="font-secondary font-normal text-[36px] sm:text-[42px] md:text-[52px] lg:text-[61px] text-white whitespace-nowrap leading-tight">
                    {stat.value}
                  </p>
                  {/* Label */}
                  <p className="mt-1 md:mt-2 text-[#C8CDD2] font-secondary text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] tracking-[2px] md:tracking-[4px] uppercase">
                    {stat.label}
                  </p>
                </div>

                {/* Divider line between stats */}
                {index < stats.length - 1 && (
                  <div className="hidden md:block h-[74px] w-[1px] bg-[#AB78E9]/40 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Horizontal divider below stats */}
          <div className="mt-8 md:mt-12 mx-auto w-full max-w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#AB78E9]/30 to-transparent" />
        </div>

        {/* Book Now CTA */}
        <div className="mt-2 md:mt-4 w-full sm:w-auto flex justify-center">
          <ScrollToSection
            targetId="calendly"
            className="border-[#7300ff] border border-solid px-6 md:px-8 py-3 md:py-[14.784px] rounded-full md:rounded-[19.712px] shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] not-italic text-[14px] md:text-[18px] text-center text-white uppercase w-full sm:w-auto transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(132,0,255,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80 inline-block cursor-pointer relative z-10"
            style={{
              backgroundImage: `radial-gradient(ellipse at center, rgba(132,0,255,0.59) 0%, rgba(115,0,255,0) 100%)`,
            }}
          >
            Book Now
          </ScrollToSection>
        </div>
      </div>
    </Container>
  );
}
