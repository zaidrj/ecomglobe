/**
 * Strategy Call Section Component (Q3)
 *
 * "What you'll get on the free strategy call?" section
 * with 3-step cards and honest positioning.
 *
 * @component
 */

import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import ScrollToSection from '@/components/ui/ScrollToSection';

const steps = [
  {
    number: '1',
    title: 'Your Situation',
    description: 'We review your goals, timeline, and expectations.',
  },
  {
    number: '2',
    title: 'Our System',
    description: 'We walk you through how our automated store model works across platforms.',
  },
  {
    number: '3',
    title: 'Your Roadmap',
    description:
      "If it's a fit, we outline your personalized 60-day execution plan.",
  },
];

export default function StrategyCallSection() {
  return (
    <Container size="lg" className="py-10 md:py-16 lg:py-20 relative z-10">
      <div className="flex flex-col items-center gap-6 md:gap-10">
        {/* Section Title */}
        <Heading
          variant="h2"
          className="text-center max-w-[800px] text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px]"
        >
          <span>What You&apos;ll Get on the </span>
          <span className="text-[#D9B9FF]">Free Strategy Call?</span>
        </Heading>

        {/* Subtitle */}
        <div className="flex flex-col items-center gap-1 max-w-[650px]">
          <Text
            variant="body"
            color="muted"
            className="text-center text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed"
          >
            This is not a sales pitch.
          </Text>
          <Text
            variant="body"
            color="muted"
            className="text-center text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed"
          >
            It&apos;s a structured evaluation session to see if this fits you.
          </Text>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-[1000px] mx-auto mt-2 md:mt-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[rgba(115,0,255,0.08)] border border-[#AB78E9] rounded-[14px] md:rounded-[18px] p-6 md:p-8 flex flex-col gap-4 md:gap-5 hover:bg-[rgba(115,0,255,0.14)] transition-all duration-300"
            >
              {/* Step Number */}
              <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-full bg-gradient-to-br from-[rgba(145,55,255,0.4)] to-[rgba(115,0,255,0.2)] border border-[#AB78E9] flex items-center justify-center">
                <span className="font-secondary font-bold text-[22px] md:text-[26px] text-white">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <Heading variant="h4" className="text-[18px] md:text-[22px] lg:text-[24px]">
                {step.title}
              </Heading>

              {/* Description */}
              <Text
                variant="small"
                color="muted"
                className="text-[13px] md:text-[15px] lg:text-[16px] leading-relaxed flex-1"
              >
                {step.description}
              </Text>
            </div>
          ))}
        </div>

        {/* Honest positioning */}
        <Text variant="body" color="muted" className="text-center max-w-[500px] text-[14px] md:text-[18px] italic leading-relaxed">
          If it&apos;s not a fit, we&apos;ll tell you honestly.
        </Text>

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
    </Container>
  );
}
