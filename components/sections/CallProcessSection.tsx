/**
 * Call Process Section Component
 *
 * "What Happens on the Call?" section showing 3 steps of the strategy call.
 * Each step has a number, title, description, and Book Now CTA.
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
    description:
      "We'll review your background and goals to understand how our system can best serve you.",
  },
  {
    number: '2',
    title: 'Our System',
    description:
      "We'll walk you through a live demonstration of our automated store system, so you can see it in action.",
  },
  {
    number: '3',
    title: 'Your Path',
    description:
      "We'll map out a personalized strategy to help you achieve a guaranteed return in just 90 days.",
  },
];

export default function CallProcessSection() {
  return (
    <Container size="lg" className="py-6 md:py-8 lg:py-10 relative z-10 px-4 md:px-6">
      <div className="flex flex-col items-center gap-4 md:gap-6">
        {/* Section Label */}
        <span className="font-primary font-bold text-[13px] md:text-[15px] uppercase tracking-[3px] text-[#AB78E9]">
          Call Process
        </span>

        {/* Section Title */}
        <Heading
          variant="h2"
          className="text-center max-w-[700px] text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px] px-2"
        >
          <span>What Happens </span>
          <span className="text-[#D9B9FF]">on the Call?</span>
        </Heading>

        {/* Subtitle */}
        <Text
          variant="body"
          color="muted"
          className="text-center max-w-[750px] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] px-2 leading-relaxed"
        >
          We&apos;ve helped investors and entrepreneurs just like you launch profitable, hands-off e-commerce stores. Not a sales pitch — a strategy session with actionable steps.
        </Text>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-[1000px] mt-4 md:mt-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-[rgba(115,0,255,0.08)] border border-[#AB78E9] rounded-[14px] md:rounded-[18px] p-6 md:p-8 flex flex-col gap-4 md:gap-5 group hover:bg-[rgba(115,0,255,0.14)] transition-all duration-300"
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

              {/* Book Now Button */}
              <ScrollToSection
                targetId="calendly"
                className="inline-flex items-center gap-2 border-[#7300ff] border border-solid px-4 md:px-5 py-2.5 md:py-3 rounded-full shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold text-[13px] md:text-[15px] text-white uppercase w-fit transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(132,0,255,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80"
                style={{
                  backgroundImage: `radial-gradient(ellipse at center, rgba(132,0,255,0.59) 0%, rgba(115,0,255,0) 100%)`,
                }}
              >
                Book Now
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </ScrollToSection>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
