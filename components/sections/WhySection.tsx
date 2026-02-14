/**
 * Why Section Component
 * 
 * "Why EcommGlobe?" section matching Figma design exactly.
 * Two-column layout with image on left and text on right.
 * 
 * @component
 * @example
 * ```tsx
 * <WhySection />
 * ```
 * 
 * Features:
 * - Two-column layout (stacked on mobile, side-by-side on desktop)
 * - Large image on left (562px desktop)
 * - Title with purple accent text
 * - 4 benefit bullet points with checkmarks
 * - Responsive image sizing
 * 
 * @returns {JSX.Element} Why section with image and benefits list
 */

import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import OptimizedImage from '@/components/ui/OptimizedImage';

export default function WhySection() {
  const benefits = [
    'Ecommerce-only experts',
    'Launch-to-scale solutions',
    'No tech headaches',
    'Data-driven growth',
  ];

  return (
    <Container size="lg" className="py-6 md:py-10 lg:py-12 relative z-10 px-4 md:px-6">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-12">
        {/* Left: Image */}
        <div className="w-full lg:w-[562px] h-[250px] sm:h-[300px] md:h-[400px] lg:h-[562px] relative rounded-[16px] md:rounded-[24px] overflow-hidden shrink-0">
          <OptimizedImage
            src="/images/products/why-ecomm-globe.png"
            alt="Business professionals with holographic display showing data visualizations and ecommerce metrics"
            width={562}
            height={562}
            className="object-cover w-full h-full"
            fill
            sizes="(max-width: 1024px) 100vw, 562px"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-3 md:gap-6 flex-1 text-center lg:text-left">
          <Heading variant="h2" className="capitalize text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px]">
            <span>Why </span>
            <span className="text-[#E1C8FF]">
              Ecomm
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Globe?
            </span>
          </Heading>

          <Text variant="body" color="muted" className="flex flex-col gap-1.5 md:gap-2 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px]">
            {benefits.map((benefit, index) => (
              <span key={index}>✔ {benefit}</span>
            ))}
          </Text>
        </div>
      </div>
    </Container>
  );
}

