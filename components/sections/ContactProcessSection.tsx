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
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[7px] items-start w-full">
        {steps.map((step) => (
          <div key={step.id} className="h-auto lg:h-[66.617px] relative shrink-0 w-full">
            {/* Icon */}
            <div className="absolute flex items-center justify-center left-0 size-[32px] sm:size-[36px] lg:size-[39.483px] top-0">
              <div className="flex-none rotate-[319.365deg]">
                <OptimizedImage
                  src={step.icon}
                  alt={step.title}
                  width={28}
                  height={28}
                  className="relative size-[24px] sm:size-[26px] lg:size-[28px]"
                />
              </div>
            </div>

            {/* Title and description */}
            <div className="ml-[44px] sm:ml-[48px] lg:ml-[calc(50%-224.5px)] space-y-1">
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

