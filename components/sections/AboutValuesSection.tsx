/**
 * About Values Section Component
 * 
 * Values section for About page matching Figma design exactly.
 * Displays 4 value cards with icons, titles, and descriptions.
 * 
 * @component
 */

import OptimizedImage from '@/components/ui/OptimizedImage';
import type { ValueCard } from '@/types';

interface AboutValuesSectionProps {
  values: ValueCard[];
  className?: string;
}

export default function AboutValuesSection({
  values,
  className = "",
}: AboutValuesSectionProps) {
  return (
    <div className={`relative w-full max-w-[1200px] mx-auto px-4 md:px-6 ${className}`}>
      {/* Section title */}
      <div className="w-full max-w-[473px] mx-auto text-center mb-6 md:mb-8 lg:mb-12">
        <h2 className="capitalize font-lexend font-bold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-white leading-normal">
          <span>Our </span>
          <span className="text-[#E1C8FF]">Values</span>
        </h2>
        <p className="font-red-hat-display font-normal text-[#c8cdd2] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-normal mt-3 md:mt-4 lg:mt-6">
          The principles that guide everything we do
        </p>
      </div>

      {/* Values cards container - Responsive layout */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-4 sm:gap-[9.957px] items-stretch justify-center w-full lg:px-[9.957px]">
        {values.map((value) => (
          <div
            key={value.id}
            className="bg-gradient-to-b border-[#ab78e9] border-[1.291px] border-solid content-stretch flex flex-col from-[rgba(145,55,255,0.22)] gap-[20px] sm:gap-[25px] lg:gap-[31.113px] items-center justify-center overflow-clip px-4 sm:px-[20px] lg:px-[31.113px] py-4 sm:py-[18px] lg:py-[23.335px] relative rounded-[7.778px] shrink-0 to-[rgba(115,0,255,0.094)] w-full sm:w-[calc(50%-4.5px)] lg:w-[350px] flex-grow"
          >
            {/* Icon */}
            <div className="relative shrink-0 size-[70px] sm:size-[90px] lg:size-[113px] flex items-center justify-center">
              <OptimizedImage
                src={value.icon}
                alt={value.title}
                width={113}
                height={113}
                className="block max-w-none size-full"
              />
            </div>

            {/* Title and description */}
            <div className="content-stretch flex flex-col gap-[7.778px] items-center justify-center relative shrink-0 w-full flex-grow text-center">
              <h3 className="font-poppins font-bold leading-[1.4] not-italic relative shrink-0 text-[16px] sm:text-[18px] lg:text-[23.896px] text-white uppercase w-full min-h-[33.6px] flex items-center justify-center">
                {value.title}
              </h3>
              <p className="font-red-hat-display font-normal leading-[1.6] relative shrink-0 text-[#f9f6ff] text-[13px] sm:text-[15px] lg:text-[17.922px] w-full min-h-[86.4px] max-w-full break-words">
                {value.description}
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

