/**
 * Contact Methods Section Component
 * 
 * Contact methods section for Contact page matching Figma design exactly.
 * Displays 4 contact method cards (Email, Call, Visit, Business Hours).
 * 
 * @component
 */

import OptimizedImage from '@/components/ui/OptimizedImage';
import type { ContactMethod } from '@/types';

interface ContactMethodsSectionProps {
  methods: ContactMethod[];
  className?: string;
}

export default function ContactMethodsSection({
  methods,
  className = "",
}: ContactMethodsSectionProps) {
  return (
    <div className={`relative w-full max-w-[1200px] mx-auto px-4 md:px-6 ${className}`}>
      {/* Contact methods container - Responsive layout */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-4 sm:gap-[9.957px] items-stretch justify-center w-full lg:px-[9.957px]">
        {methods.map((method) => (
          <div
            key={method.id}
            className="bg-gradient-to-b border-[#ab78e9] border-[1.291px] border-solid content-stretch flex flex-col from-[rgba(145,55,255,0.22)] gap-[20px] sm:gap-[25px] lg:gap-[31.113px] items-start justify-between overflow-clip px-4 sm:px-[25px] lg:px-[31.113px] py-4 sm:py-[20px] lg:py-[23.335px] relative rounded-[7.778px] shrink-0 to-[rgba(115,0,255,0.094)] w-full sm:w-[calc(50%-4.5px)] lg:w-[293.554px] flex-grow h-full"
          >
            {/* Icon */}
            <div className="relative shrink-0 size-[80px] sm:size-[95px] lg:size-[105.776px]">
              <OptimizedImage
                src={method.icon}
                alt={method.title}
                width={106}
                height={106}
                className="block max-w-none size-full"
              />
            </div>

            {/* Title, info, and context */}
            <div className="content-stretch flex flex-col gap-[7.778px] items-start relative shrink-0 w-full">
              <h3 className="font-poppins font-bold leading-[1.4] not-italic relative shrink-0 text-[18px] sm:text-[20px] lg:text-[23.896px] text-white uppercase w-full">
                {method.title}
              </h3>
              <p className="font-red-hat-display font-normal leading-[1.6] relative shrink-0 text-[#f9f6ff] text-[14px] sm:text-[16px] lg:text-[17.922px] w-full">
                {method.info}
              </p>
              <p className="capitalize font-poppins font-light leading-[normal] not-italic relative shrink-0 text-[#e2a4ff] text-[13px] sm:text-[14px] lg:text-[15.527px] text-center text-nowrap">
                {method.context}
              </p>
            </div>

            {/* Shadow overlay */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_5.149px_42.244px_0px_rgba(171,120,233,0.32)]" />
          </div>
        ))}
      </div>
    </div>
  );
}

