/**
 * About Mission Section Component
 * 
 * Mission section for About page matching Figma design exactly.
 * Displays mission title, description, and image.
 * 
 * @component
 */

import { Heading, Text } from '@/components/ui/Typography';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface AboutMissionSectionProps {
  title?: string;
  description?: string;
  image: string;
  className?: string;
}

export default function AboutMissionSection({
  title = "Our Mission",
  description = "To empower ecommerce entrepreneurs and brands to achieve explosive growth by mastering multi-channel selling. We believe every product deserves to be seen, and every seller deserves expert guidance.",
  image,
  className = "",
}: AboutMissionSectionProps) {
  return (
    <div className={`relative w-full max-w-[1201px] mx-auto px-4 md:px-6 ${className}`}>
      {/* Mission container - Responsive layout */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-12 items-center lg:items-start w-full">
        {/* Image - Left side on desktop, top on mobile */}
        <div className="relative rounded-[16px] md:rounded-[24px] w-full lg:w-[562px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[562px] shrink-0">
          <OptimizedImage
            src={image}
            alt="Our Mission"
            width={562}
            height={562}
            className="object-cover w-full h-full rounded-[16px] md:rounded-[24px]"
            fill
            sizes="(max-width: 1024px) 100vw, 562px"
          />
        </div>

        {/* Content - Right side on desktop, bottom on mobile */}
        <div className="flex flex-col gap-3 md:gap-6 flex-1 text-center lg:text-left">
          {/* Title */}
          <Heading
            as="h2"
            variant="h2"
            className="capitalize text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px]"
          >
            <span>Our </span>
            <span className="text-[#E1C8FF]">Mission</span>
          </Heading>

          {/* Description */}
          <Text
            as="p"
            variant="body"
            color="muted"
            className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed"
          >
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
}

