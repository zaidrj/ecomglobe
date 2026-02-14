/**
 * Shopify Hero Section Component
 * 
 * Hero section for Shopify Development page matching Figma design exactly.
 * Includes "Shopify Store Development" heading, subtitle, two CTA buttons, and decorative Shopify logo elements.
 * 
 * @component
 * @example
 * ```tsx
 * <ShopifyHeroSection />
 * ```
 * 
 * Features:
 * - Large heading with purple accent
 * - Subtitle text
 * - Two CTA buttons ("Get Started Today" and "View Success Stories")
 * - Decorative Shopify logo elements positioned around hero
 * - Background decorative elements (ellipses, rectangles)
 * 
 * @returns {JSX.Element} Shopify Development hero section with heading, subtitle, and CTAs
 */

import { Heading, Text } from '@/components/ui/Typography';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Container from '@/components/layout/Container';
import Link from 'next/link';
import type { ShopifyHeroSectionProps } from '@/types';

export default function ShopifyHeroSection({
  title = "Shopify Store Development",
  subtitle = "Launch, optimize, and scale your Shopify business with our comprehensive suite of Shopify-specific services. From store setup to theme customization, we handle everything.",
  primaryCtaText = "Get Started Today",
  primaryCtaHref = "/contact",
  secondaryCtaText = "View Success Stories",
  secondaryCtaHref = "/case-studies",
  className = "",
}: ShopifyHeroSectionProps) {
  return (
    <div className={`relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-visible px-4 md:px-0 w-full ${className}`}>
      {/* Decorative background elements - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block absolute h-[636px] left-1/2 opacity-70 top-[69px] -translate-x-1/2 w-[937px]" />

      {/* Ellipse Container - Hidden on mobile */}
      <div className="hidden lg:block absolute h-[338.62px] left-[61.72px] top-[4.65px] w-[1341.233px]">
        <OptimizedImage
          src="/images/icons/ellipse-container.svg"
          alt=""
          width={1341}
          height={339}
          className="absolute inset-0"
        />
      </div>

      {/* Rectangle decorations - Hidden on mobile */}
      <div className="hidden lg:flex absolute h-[503.376px] items-center justify-center left-[calc(75%+25.73px)] top-[201.7px] w-[332.824px] rotate-90">
        <OptimizedImage
          src="/images/icons/rectangle-1.svg"
          alt=""
          width={503}
          height={503}
          className="absolute inset-[-28.68%_-18.96%]"
        />
      </div>

      <div className="hidden lg:flex absolute h-[503.376px] items-center justify-center left-[23px] top-[197px] w-[322.889px] rotate-[270deg]">
        <OptimizedImage
          src="/images/icons/rectangle-5.svg"
          alt=""
          width={503}
          height={503}
          className="absolute inset-[-29.56%_-18.96%]"
        />
      </div>

      {/* Ellipse decorations - Hidden on mobile */}
      <div className="hidden lg:flex absolute h-[679.723px] items-center justify-center left-[calc(100%-51.95px)] top-[113.11px] -translate-x-1/2 w-[119.221px] rotate-[270deg]">
        <OptimizedImage
          src="/images/icons/ellipse-2.svg"
          alt=""
          width={680}
          height={120}
          className="absolute inset-[-269.03%_-47.19%]"
        />
      </div>

      <div className="hidden lg:flex absolute h-[679.723px] items-center justify-center left-[65.03px] top-[113.11px] -translate-x-1/2 w-[119.221px] rotate-90">
        <OptimizedImage
          src="/images/icons/ellipse-4.svg"
          alt=""
          width={680}
          height={120}
          className="absolute inset-[-269.03%_-47.19%]"
        />
      </div>

      {/* Shopify logo decorative elements - Hidden on mobile */}
      <div className="hidden lg:flex absolute h-[427.418px] items-center justify-center left-[-129px] top-[683px] w-[427.05px] rotate-[34.046deg]">
        <OptimizedImage
          src="/images/shopify/hero/shopify-hero.png"
          alt=""
          width={308}
          height={308}
          className="opacity-[0.66]"
        />
      </div>

      <div className="hidden lg:flex absolute h-[363.9px] items-center justify-center left-[calc(83.33%-75px)] top-[198px] w-[362.833px] rotate-[348.383deg]">
        <OptimizedImage
          src="/images/shopify/hero/shopify-hero.png"
          alt=""
          width={308}
          height={308}
          className="opacity-[0.66]"
        />
      </div>

      {/* Main content - Responsive positioning */}
      <Container size="xl" className="relative z-10">
        <div className="flex flex-col items-center text-center gap-3 md:gap-6 pt-32 md:pt-44 lg:pt-48">
          {/* Heading - Responsive text size */}
          <Heading
            as="h1"
            variant="display"
            className="capitalize text-[28px] sm:text-[32px] md:text-[48px] lg:text-[58px] leading-[1.2] md:leading-tight px-2 max-w-[877px] font-lexend font-bold text-white mx-auto"
          >
            {title}
          </Heading>

          {/* Subtitle - Responsive text size and spacing */}
          <Text
            as="p"
            variant="large"
            color="muted"
            className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] text-center max-w-[755px] px-2 md:px-4 font-red-hat-display font-normal leading-relaxed text-[#c8cdd2] mx-auto"
          >
            {subtitle}
          </Text>

          {/* CTA Buttons - Matching Figma exactly, positioned after subtext */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-[23.655px] items-center mt-4 md:mt-4 w-full sm:w-auto">
            {/* First Button - Get Started Today */}
            <Link
              href={primaryCtaHref}
              className="border-[#7300ff] border border-solid px-4 md:px-[19.712px] py-3 md:py-[14.784px] rounded-full md:rounded-[19.712px] shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] not-italic text-[14px] md:text-[18px] text-center text-white uppercase w-full sm:w-auto transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(132,0,255,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80 inline-block cursor-pointer relative z-10"
              style={{
                backgroundImage: `radial-gradient(ellipse at center, rgba(132,0,255,0.59) 0%, rgba(115,0,255,0) 100%)`,
              }}
            >
              {primaryCtaText}
            </Link>

            {/* Second Button - View Success Stories */}
            <Link
              href={secondaryCtaHref}
              className="border-[#ab78e9] border border-solid bg-transparent px-4 md:px-[19.712px] py-3 md:py-[14.784px] rounded-full md:rounded-[19.712px] shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] not-italic text-[14px] md:text-[18px] text-center text-[#c8cdd2] uppercase w-full sm:w-auto transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(171,120,233,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80 inline-block cursor-pointer relative z-10"
            >
              {secondaryCtaText}
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

