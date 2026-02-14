/**
 * Etsy What's Included Section Component
 * 
 * Displays "What's Included" section with title, subtitle, and bulleted list of 7 services.
 * 
 * @component
 * @example
 * ```tsx
 * <EtsyWhatsIncludedSection services={servicesData} />
 * ```
 * 
 * Features:
 * - Title with purple accent on "Included"
 * - Subtitle text
 * - Bulleted list of 7 Etsy services
 * - Background image on left side
 * 
 * @returns {JSX.Element} What's Included section with service list
 */

import { Heading, Text } from '@/components/ui/Typography';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { EtsyWhatsIncludedSectionProps } from '@/types';

export default function EtsyWhatsIncludedSection({
  title = "What's Included",
  subtitle = "Comprehensive services to ensure your success",
  services,
  className = "",
}: EtsyWhatsIncludedSectionProps) {
  return (
    <div className={`absolute h-[562px] left-[120px] top-[1220px] w-[1201px] ${className}`}>
      {/* Background image */}
      <div className="absolute left-0 rounded-[24px] size-[562px] top-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <OptimizedImage
            src="/images/etsy/hero/rectangle-4600.png"
            alt="What's included background"
            width={562}
            height={562}
            className="absolute h-[126.87%] left-[-17.61%] top-[-13.47%] w-[135.06%]"
          />
        </div>
      </div>

      {/* Title */}
      <Heading
        as="h2"
        variant="h1"
        className="absolute capitalize left-[calc(50%+44.5px)] text-[48px] text-white top-[17.79%] w-[416px] font-lexend font-bold leading-normal"
      >
        <span>What's </span>
        <span className="text-[#e1c8ff]">Included</span>
      </Heading>

      {/* Subtitle */}
      <Text
        as="p"
        variant="body"
        className="absolute font-red-hat-display font-normal leading-normal left-[calc(50%+47.5px)] text-[#c8cdd2] text-[22px] top-[166px] w-[570px]"
      >
        {subtitle}
      </Text>

      {/* Services list */}
      <ul className="absolute block font-red-hat-display font-normal leading-normal left-[calc(50%+47.5px)] text-[#c8cdd2] text-[22px] top-[40.75%] w-[564px]">
        {services.map((service, index) => (
          <li key={index} className="mb-0 ms-[33px]">
            <span className="leading-normal">{service.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

