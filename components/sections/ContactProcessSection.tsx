/**
 * Contact Process Section Component
 * 
 * Process section for Contact page matching Figma design exactly.
 * Displays 4 process steps in "What's Next" section.
 * 
 * @component
 */

import OptimizedImage from '@/components/ui/OptimizedImage';
import type { ContactProcessStep } from '@/types';

interface ContactProcessSectionProps {
  steps: ContactProcessStep[];
  className?: string;
}

export default function ContactProcessSection({
  steps,
  className = "",
}: ContactProcessSectionProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Section title */}
      <div className="w-full mb-4 md:mb-6 lg:mb-8">
        <h2 className="capitalize font-lexend font-bold leading-normal text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-white">
          <span>What's </span>
          <span className="text-[#E1C8FF]">Next</span>
        </h2>
      </div>

      {/* Process steps container - Responsive layout */}
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-4 items-start w-full">
        {steps.map((step) => (
          <div key={step.id} className="flex items-start gap-3 sm:gap-4 w-full">
            {/* Icon */}
            <div className="shrink-0 flex items-center justify-center w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] lg:w-[40px] lg:h-[40px] mt-0.5">
              <OptimizedImage
                src={step.icon}
                alt={step.title}
                width={28}
                height={28}
                className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] lg:w-[28px] lg:h-[28px] rotate-[319.365deg]"
              />
            </div>

            {/* Title and description */}
            <div className="flex-1 space-y-1">
              <p className="font-red-hat-display font-normal leading-[normal] text-[#c8cdd2] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
                {step.title}
              </p>
              <p className="font-red-hat-display font-normal leading-[normal] text-[#e2a4ff] text-[14px] sm:text-[15px] lg:text-[16px]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

