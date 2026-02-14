/**
 * Services Hero Section Component
 * 
 * Hero section for services page matching Figma design exactly.
 * Includes "Our Services" heading, subtitle, and "Get Free Consultation" CTA button.
 * 
 * @component
 * @example
 * ```tsx
 * <ServicesHeroSection />
 * ```
 * 
 * Features:
 * - Large heading with purple accent on "Services"
 * - Subtitle text
 * - CTA button with glow shadow
 * - Background frame image with gradient overlay
 * - Decorative elements (ellipses, rectangles)
 * 
 * @returns {JSX.Element} Services hero section with heading, subtitle, and CTA
 */

import { Heading, Text } from '@/components/ui/Typography';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Container from '@/components/layout/Container';

export default function ServicesHeroSection() {
  return (
    <div className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-visible">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute h-[636px] left-1/2 top-[69px] -translate-x-1/2 w-[937px]" />
      </div>

      {/* Ellipse Container */}
      <div className="absolute h-[338.62px] left-[61.72px] top-0 w-[1341.233px] hidden lg:block">
        <OptimizedImage
          src="/images/icons/ellipse-container.svg"
          alt=""
          width={1341}
          height={339}
          className="absolute inset-0"
        />
      </div>

      {/* Rectangle decorations */}
      <div className="absolute flex h-[503.376px] items-center justify-center left-[calc(75%+25.73px)] top-[201.7px] w-[332.824px] rotate-90 hidden lg:flex">
        <OptimizedImage
          src="/images/icons/rectangle-1.svg"
          alt=""
          width={503}
          height={503}
          className="absolute inset-[-28.68%_-18.96%]"
        />
      </div>

      <div className="absolute flex h-[503.376px] items-center justify-center left-[23px] top-[197px] w-[322.889px] rotate-[270deg] hidden lg:flex">
        <OptimizedImage
          src="/images/icons/rectangle-5.svg"
          alt=""
          width={503}
          height={503}
          className="absolute inset-[-29.56%_-18.96%]"
        />
      </div>

      {/* Ellipse decorations */}
      <div className="absolute flex h-[679.723px] items-center justify-center left-[calc(100%-51.95px)] top-[113.11px] -translate-x-1/2 w-[119.221px] rotate-[270deg] hidden lg:flex">
        <OptimizedImage
          src="/images/icons/ellipse-2.svg"
          alt=""
          width={680}
          height={120}
          className="absolute inset-[-269.03%_-47.19%]"
        />
      </div>

      <div className="absolute flex h-[679.723px] items-center justify-center left-[65.03px] top-[113.11px] -translate-x-1/2 w-[119.221px] rotate-90 hidden lg:flex">
        <OptimizedImage
          src="/images/icons/ellipse-4.svg"
          alt=""
          width={680}
          height={120}
          className="absolute inset-[-269.03%_-47.19%]"
        />
      </div>

      {/* Main content */}
      <Container size="xl" className="relative z-10">
        <div className="flex flex-col items-center text-center gap-3 md:gap-6 pt-32 md:pt-44 lg:pt-48 pb-8 md:pb-20 lg:pb-24 px-4 md:px-0">
          {/* Heading */}
          <Heading
            as="h1"
            variant="display"
            className="capitalize max-w-[877px] text-[28px] sm:text-[32px] md:text-[48px] lg:text-[58px] leading-[1.2] md:leading-tight px-2"
          >
            <span>Our </span>
            <span className="text-[#E1C8FF]">Services</span>
          </Heading>

          {/* Subtitle - Responsive typography */}
          <Text
            as="p"
            variant="large"
            color="muted"
            className="max-w-[755px] mx-auto text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] px-2 md:px-4 font-red-hat-display font-normal leading-relaxed"
          >
            Comprehensive ecommerce solutions to launch, manage, and scale your business across all major marketplaces
          </Text>

          {/* CTA Button */}
          <div className="mt-4 md:mt-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="border-[#7300ff] border border-solid px-4 md:px-[19.712px] py-3 md:py-[14.784px] rounded-full md:rounded-[19.712px] shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] not-italic text-[14px] md:text-[18px] text-center text-white uppercase w-full sm:w-auto transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(132,0,255,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80 inline-block cursor-pointer relative z-10"
              style={{
                backgroundImage: `radial-gradient(ellipse at center, rgba(132,0,255,0.59) 0%, rgba(115,0,255,0) 100%)`,
              }}
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Background frame image */}
          <div className="relative w-full max-w-[1192px] mt-8 md:mt-12 lg:mt-16 mx-auto">
            <div className="relative overflow-hidden rounded-tl-[10px] rounded-tr-[10px] w-full aspect-[1192/504]">
              <OptimizedImage
                src="/images/hero/services-hero-frame.png"
                alt="Services hero background"
                width={1192}
                height={504}
                priority
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[53.846%] to-[#000000] rounded-tl-[10px] rounded-tr-[10px]" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

