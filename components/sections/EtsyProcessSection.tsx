/**
 * Etsy Process Section Component
 * 
 * Displays "Our Process" section with 5 process steps with icons, titles, descriptions, and arrow connectors.
 * 
 * @component
 * @example
 * ```tsx
 * <EtsyProcessSection steps={processSteps} />
 * ```
 * 
 * Features:
 * - Title with purple accent on "Process"
 * - Subtitle text
 * - 5 process steps with icons
 * - Arrow connectors between steps
 * - Responsive layout (horizontal on desktop, stacked on mobile)
 * 
 * @returns {JSX.Element} Process section with 5 steps
 */

import { Heading, Text } from '@/components/ui/Typography';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Container from '@/components/layout/Container';
import type { EtsyProcessSectionProps } from '@/types';

export default function EtsyProcessSection({
  title = "Our Process",
  subtitle = "A proven step-by-step approach to your success",
  steps,
  className = "",
}: EtsyProcessSectionProps) {
  return (
    <div className={className}>
      <Container size="xl" className="relative z-10">
        <div className="flex flex-col items-center text-center gap-8 md:gap-12 lg:gap-[68px]">
          {/* Section Title */}
          <div className="flex flex-col items-center gap-4 md:gap-8 lg:gap-[68px]">
            <Heading
              as="h2"
              variant="h2"
              className="text-center text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px]"
            >
              <span>Our </span>
              <span className="text-[#E1C8FF]">Process</span>
            </Heading>
            <Text
              as="p"
              variant="large"
              color="muted"
              className="text-[16px] md:text-[20px] lg:text-[22px] text-center w-full max-w-[885px] px-4 -mt-2 md:-mt-4 lg:-mt-6"
            >
              {subtitle}
            </Text>
          </div>

          {/* Process Steps */}
          <div className="w-full max-w-[1180px]">
            {/* First Row - 3 steps */}
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-6 sm:gap-8 md:gap-[50px_40px] mb-6 sm:mb-8 md:mb-0">
              {steps
                .sort((a, b) => a.order - b.order)
                .slice(0, 3)
                .map((step, index) => (
                  <div key={step.order} className="flex items-center">
                    {/* Process Step */}
                    <div className="flex flex-col gap-2 md:gap-[10px] items-center w-[140px] sm:w-[180px] md:w-[284px] text-center">
                      {/* Step Icon */}
                      <div className="relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[82px] md:h-[82px] shrink-0">
                        <OptimizedImage
                          src={step.icon}
                          alt={step.title}
                          width={82}
                          height={82}
                          className="w-full h-full"
                        />
                      </div>

                      {/* Step Title */}
                      <Heading
                        as="h3"
                        variant="h4"
                        className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] leading-[1.4] font-poppins font-extrabold uppercase text-center w-full"
                      >
                        {step.title}
                      </Heading>

                      {/* Step Description */}
                      <Text
                        as="p"
                        variant="body"
                        className="text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[1.6] text-[#F9F6FF] text-center w-full font-red-hat-display font-normal"
                      >
                        {step.description}
                      </Text>
                    </div>

                    {/* Arrow Connector (show between steps, not after last, hidden on mobile) */}
                    {index < 2 && (
                      <div className="relative w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] lg:w-[44px] lg:h-[44px] shrink-0 mx-1 sm:mx-2 md:mx-4 hidden md:block">
                        <OptimizedImage
                          src="/images/icons/arrow-right-circle.svg"
                          alt=""
                          width={44}
                          height={44}
                          className="w-full h-full"
                        />
                      </div>
                    )}
                  </div>
                ))}
            </div>

            {/* Second Row - 2 steps centered */}
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-6 sm:gap-8 md:gap-[50px_40px] mt-6 sm:mt-8 md:mt-8">
              {steps
                .sort((a, b) => a.order - b.order)
                .slice(3, 5)
                .map((step, index) => (
                  <div key={step.order} className="flex items-center">
                    {/* Process Step */}
                    <div className="flex flex-col gap-2 md:gap-[10px] items-center w-[140px] sm:w-[180px] md:w-[284px] text-center">
                      {/* Step Icon */}
                      <div className="relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[82px] md:h-[82px] shrink-0">
                        <OptimizedImage
                          src={step.icon}
                          alt={step.title}
                          width={82}
                          height={82}
                          className="w-full h-full"
                        />
                      </div>

                      {/* Step Title */}
                      <Heading
                        as="h3"
                        variant="h4"
                        className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] leading-[1.4] font-poppins font-extrabold uppercase text-center w-full"
                      >
                        {step.title}
                      </Heading>

                      {/* Step Description */}
                      <Text
                        as="p"
                        variant="body"
                        className="text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-[1.6] text-[#F9F6FF] text-center w-full font-red-hat-display font-normal"
                      >
                        {step.description}
                      </Text>
                    </div>

                    {/* Arrow Connector (show between steps, not after last, hidden on mobile) */}
                    {index < 1 && (
                      <div className="relative w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[32px] md:h-[32px] lg:w-[44px] lg:h-[44px] shrink-0 mx-1 sm:mx-2 md:mx-4 hidden md:block">
                        <OptimizedImage
                          src="/images/icons/arrow-right-circle.svg"
                          alt=""
                          width={44}
                          height={44}
                          className="w-full h-full"
                        />
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

