/**
 * Features Section Component
 * 
 * "Everything You Need to Sell & Scale" section matching Figma design exactly.
 * Shows 3 feature cards: Store Setup, Automation, Optimization.
 * 
 * @component
 * @example
 * ```tsx
 * <FeaturesSection />
 * ```
 * 
 * Features:
 * - Section title with purple accent text
 * - 3 feature cards with icons, titles, and descriptions
 * - Arrow icons between cards (hidden on mobile)
 * - Responsive grid layout (1 column mobile → 3 columns desktop)
 * 
 * @returns {JSX.Element} Features section with 3 feature cards
 */

import Image from 'next/image';
import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';

export default function FeaturesSection() {
  const features = [
    {
      icon: '/images/icons/vector-1.svg',
      title: 'Store Setup',
      description: 'Launch high-converting stores across major platforms.',
      iconWidth: 82,
      iconHeight: 72,
    },
    {
      icon: '/images/icons/vector-2.svg',
      title: 'Automation',
      description: 'Inventory, orders, and systems fully synced.',
      iconWidth: 75,
      iconHeight: 76,
    },
    {
      icon: '/images/icons/vector-3.svg',
      title: 'Optimization',
      description: 'SEO, performance tracking, and scaling strategies.',
      iconWidth: 80,
      iconHeight: 80,
    },
  ];

  return (
    <Container size="lg" className="py-6 md:py-10 lg:py-12 relative z-10 px-4 md:px-6">
      <div className="flex flex-col items-center gap-4 md:gap-8">
        {/* Section Title */}
        <Heading variant="h2" className="text-center max-w-[1052px] text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] px-2">
          <span>Everything You Need to </span>
          <span className="text-[#E1C8FF]">Sell & Scale</span>
        </Heading>

          {/* Subtitle */}
          <Text variant="body" color="muted" className="text-center max-w-[885px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] px-2">
            Whether you&apos;re launching or scaling, we handle everything end-to-end.
          </Text>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center w-full mt-4 md:mt-10 gap-6 md:gap-4 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-2 md:gap-[10px] w-full md:w-[250px] lg:w-[284px] relative">
              {/* Icon - Properly sized with correct aspect ratio from Figma */}
              <div className="relative shrink-0 flex items-center justify-center mx-auto w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px]">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={feature.iconWidth}
                  height={feature.iconHeight}
                  className="object-contain max-w-full max-h-full"
                />
              </div>

              {/* Title */}
              <h3 className="font-primary font-extrabold leading-[1.4] text-[20px] sm:text-[22px] md:text-[26px] lg:text-[28px] text-center text-white uppercase w-full">
                {feature.title}
              </h3>

              {/* Description */}
              <Text variant="small" color="secondary" className="text-center text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px]">
                {feature.description}
              </Text>

              {/* Arrow between cards - Hidden on mobile, visible on tablet+ */}
              {index < features.length - 1 && (
                <div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 size-[32px] md:size-[38px] lg:size-[44px]">
                  <Image
                    src="/images/icons/arrow-right-circle.svg"
                    alt=""
                    width={44}
                    height={44}
                    className="object-contain w-full h-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

