/**
 * Platform Services Section Component
 * 
 * "Platform-Specific Services" section matching Figma design exactly.
 * Shows 6 service cards in a 3x2 grid layout (desktop).
 * 
 * @component
 * @example
 * ```tsx
 * <PlatformServicesSection services={servicesData} />
 * ```
 * 
 * Features:
 * - Section title with purple accent text
 * - 6 service cards in responsive grid (1/2/3 columns)
 * - Each card includes: service icon, title, description, "Learn More" button with arrow
 * - Gradient background with purple border and inset shadow
 * - Responsive grid layout
 * 
 * @returns {JSX.Element} Platform services section with 6 service cards
 */

import Link from 'next/link';
import { Heading, Text } from '@/components/ui/Typography';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Container from '@/components/layout/Container';
import type { PlatformServicesSectionProps, ServiceCard } from '@/types';

export default function PlatformServicesSection({
  services,
  className = "",
}: PlatformServicesSectionProps) {
  return (
    <div className={className}>
      <Container size="xl">
        <div className="flex flex-col items-center text-center gap-8 md:gap-12 lg:gap-[68px]">
          {/* Section Title */}
          <div className="flex flex-col items-center gap-4 md:gap-8 lg:gap-[68px]">
            <Heading
              as="h2"
              variant="h2"
              className="text-center text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px]"
            >
              <span>Platform </span>
              <br className="md:hidden" />
              <span className="text-[#E1C8FF]">Specific Services</span>
            </Heading>
            <Text
              as="p"
              variant="large"
              color="muted"
              className="text-[16px] md:text-[20px] lg:text-[22px] text-center w-full max-w-[1052px] px-4 -mt-2 md:-mt-4 lg:-mt-6"
            >
              Expert setup and optimization for each marketplace
            </Text>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-[18.75px] w-full max-w-full md:max-w-[1205px] -mx-4 md:-mx-6 lg:-mx-8 px-1 md:px-4">
            {services.map((service: ServiceCard) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

/**
 * Service Card Component
 * Individual service card matching Figma design
 */
function ServiceCard({ service }: { service: ServiceCard }) {
  return (
    <div 
      className="relative border-[#AB78E9] border-[1.297px] border-solid rounded-[7.812px] p-2.5 md:p-[23.436px_31.248px] flex flex-col gap-2 md:gap-[31.248px] items-end overflow-clip shadow-[inset_0px_5.172px_42.427px_0px_rgba(171,120,233,0.32)] w-full"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(145,55,255,0.22), rgba(115,0,255,0.094))',
      }}
    >
      {/* Service Icon */}
      <div className="flex items-start justify-between w-full">
        {service.title === 'Shopify' ? (
          <div className="relative rounded-[12px] w-[70px] h-[70px] md:w-[125px] md:h-[125px] shrink-0 flex items-center justify-center -mt-2">
            <OptimizedImage
              src={service.image.src}
              alt={service.image.alt}
              width={125}
              height={125}
              className="object-contain w-full h-full rounded-[12px]"
            />
          </div>
        ) : service.title === 'Etsy' ? (
          <div className="relative rounded-[12px] w-[60px] h-[60px] md:w-[88px] md:h-[88px] shrink-0 flex items-center justify-center">
            <OptimizedImage
              src={service.image.src}
              alt={service.image.alt}
              width={88}
              height={88}
              className="object-contain w-full h-full rounded-[12px]"
            />
          </div>
        ) : (
          <div className="relative rounded-[12px] w-[70px] h-[70px] md:w-[102px] md:h-[102px] shrink-0 flex items-center justify-center">
            <OptimizedImage
              src={service.image.src}
              alt={service.image.alt}
              width={102}
              height={102}
              className="object-contain w-full h-full rounded-[12px]"
            />
          </div>
        )}
      </div>

      {/* Title and Description */}
      <div className="flex flex-col gap-1.5 md:gap-[7.812px] items-start w-full flex-grow">
        <Heading
          as="h3"
          variant="h4"
          className="text-[16px] md:text-[22px] lg:text-[24px] leading-[1.4] font-poppins font-bold uppercase w-full text-left min-h-[22px] md:min-h-[33.6px] flex items-center whitespace-nowrap"
        >
          {service.title}
        </Heading>
        <Text
          as="p"
          variant="body"
          className="text-[12px] md:text-[16px] lg:text-[18px] leading-[1.5] md:leading-[1.6] text-[#F9F6FF] w-full max-w-full text-left font-red-hat-display font-normal min-h-[50px] md:min-h-[86.4px] break-words"
        >
          {service.description}
        </Text>
      </div>

      {/* Learn More Button */}
      <Link
        href={service.href || `/${service.id}`}
        className="border-[#8539BF] border-[0.986px] border-solid bg-transparent px-3 py-2 md:px-[19.712px] md:py-[14.784px] rounded-[19.712px] shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] not-italic text-[12px] md:text-[16px] text-center text-nowrap text-white uppercase w-full flex gap-[10px] items-center justify-center transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:opacity-80 active:scale-[0.98] cursor-pointer"
      >
        <span>
          {service.buttonText || 'Learn More'}
        </span>
        {service.buttonIcon && (
          <OptimizedImage
            src={service.buttonIcon}
            alt=""
            width={18.749}
            height={18.749}
            className="shrink-0 w-[14px] h-[14px] md:w-[18.749px] md:h-[18.749px]"
          />
        )}
      </Link>
    </div>
  );
}

