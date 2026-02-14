/**
 * About Hero Section Component
 * 
 * Hero section for About page matching homepage hero structure exactly.
 * Includes "About EcommGlobe" heading with purple accent, subtitle, marketplace logos, and CTA buttons.
 * 
 * @component
 */

import Image from 'next/image';
import Link from 'next/link';
import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface AboutHeroSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function AboutHeroSection({
  title = "About EcommGlobe",
  subtitle = "We're not just another agency — we're your dedicated growth partner. Since 2020, we've helped over 100 brands launch, scale, and dominate across Amazon, Shopify, Etsy, Walmart, eBay, and TikTok Shop.",
  className = "",
}: AboutHeroSectionProps) {
  return (
    <div className={`relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-visible px-4 md:px-0 w-full ${className}`}>

      {/* Decorative background elements - Hidden on mobile/tablet for cleaner look */}
      <div className="absolute inset-0 opacity-70 hidden lg:block">
        <div className="absolute h-[636px] left-1/2 top-[69px] -translate-x-1/2 w-[937px]" />
      </div>

      {/* Ellipse decorations - Hidden on mobile/tablet */}
      <div className="hidden lg:flex absolute h-[680px] items-center justify-center left-[45.83%] top-[2158px] -translate-x-1/2 w-[643px] rotate-90">
        <Image
          src="/images/icons/ellipse-9.svg"
          alt=""
          width={680}
          height={643}
          className="absolute inset-[-49.88%_-47.17%]"
        />
      </div>

      {/* Rectangle decorations - Vertical lines - Hidden on mobile/tablet */}
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

      <Container size="xl" className="relative z-10">
        <div className="flex flex-col items-center text-center gap-3 md:gap-6 pt-32 md:pt-44 lg:pt-48">
          {/* Main Headline */}
          <Heading 
            variant="display" 
            className="capitalize max-w-[877px] text-[28px] sm:text-[32px] md:text-[48px] lg:text-[58px] leading-[1.2] md:leading-tight px-2"
          >
            <span>About </span>
            <span className="text-[#E1C8FF]">EcommGlobe</span>
          </Heading>

          {/* Subheadline Text with Icons positioned on left and right */}
          <div className="relative w-full max-w-[1200px] mt-1 md:mt-4 overflow-visible">
            {/* Icons Container - Hidden on mobile and tablet, shown on desktop */}
            <div className="hidden lg:block absolute inset-0 h-[323px] -top-[70px] overflow-visible">
              {/* Ellipse 5 and 6 - Decorative elements behind icons */}
              {/* Ellipse 5 - Larger ellipse behind icons */}
              <div className="absolute h-[148px] left-1/2 -translate-x-1/2 top-[115px] w-[1173px] z-0">
                <OptimizedImage
                  src="/images/icons/ellipse-5.svg"
                  alt=""
                  width={1173}
                  height={148}
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              {/* Ellipse 6 - Smaller ellipse behind icons */}
              <div className="absolute h-[118px] left-1/2 -translate-x-1/2 top-[130px] w-[994px] z-0">
                <OptimizedImage
                  src="/images/icons/ellipse-6.svg"
                  alt=""
                  width={994}
                  height={118}
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              
              {/* Left pair - Amazon and Shopify */}
              <div className="absolute left-0 z-10">
                {/* Amazon Logo - Left side, top */}
                <div className="absolute flex items-center justify-center size-[116.385px] top-[30px] rotate-[342.838deg]">
                  <OptimizedImage
                    src="/images/logos/amazon-logo.png"
                    alt="Amazon marketplace logo"
                    width={93}
                    height={93}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Shopify Logo - Left side, below Amazon */}
                <div className="absolute flex items-center justify-center size-[123.315px] top-[110px] left-[80px] rotate-[19.91deg]">
                  <OptimizedImage
                    src="/images/logos/shopify-logo.png"
                    alt="Shopify marketplace logo"
                    width={96}
                    height={96}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* Right pair - TikTok and Walmart */}
              <div className="absolute right-0 z-10">
                {/* Walmart Logo - Right side, top */}
                <div className="absolute flex items-center justify-center size-[126.551px] top-[30px] right-0 rotate-[12.588deg]">
                  <OptimizedImage
                    src="/images/logos/walmart-logo.png"
                    alt="Walmart marketplace logo"
                    width={106}
                    height={106}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* TikTok Logo - Right side, below Walmart */}
                <div className="absolute flex items-center justify-center size-[103.482px] top-[110px] right-[80px] rotate-[341.694deg]">
                  <OptimizedImage
                    src="/images/products/tiktok-shop.png"
                    alt="TikTok Shop marketplace logo"
                    width={82}
                    height={82}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Subheadline Text - Centered */}
            <Text 
              variant="body" 
              color="muted" 
              className="max-w-[755px] mx-auto text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] px-2 md:px-4 relative z-10 leading-relaxed"
            >
              {subtitle}
            </Text>
          </div>

          {/* Mobile Marketplace Logos - Shown only on mobile */}
          <div className="flex md:hidden items-center justify-center gap-4 mt-2">
            <div className="size-[45px] flex items-center justify-center">
              <OptimizedImage
                src="/images/logos/amazon-logo.png"
                alt="Amazon"
                width={45}
                height={45}
                className="object-contain"
              />
            </div>
            <div className="size-[45px] flex items-center justify-center">
              <OptimizedImage
                src="/images/logos/shopify-logo.png"
                alt="Shopify"
                width={45}
                height={45}
                className="object-contain"
              />
            </div>
            <div className="size-[45px] flex items-center justify-center">
              <OptimizedImage
                src="/images/logos/walmart-logo.png"
                alt="Walmart"
                width={45}
                height={45}
                className="object-contain"
              />
            </div>
            <div className="size-[45px] flex items-center justify-center">
              <OptimizedImage
                src="/images/products/tiktok-shop.png"
                alt="TikTok Shop"
                width={45}
                height={45}
                className="object-contain"
              />
            </div>
          </div>

          {/* CTA Buttons - Matching Figma exactly, positioned after subtext */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-[23.655px] items-center mt-4 md:mt-4 w-full sm:w-auto">
            {/* First Button - Book Your Free Strategy Call */}
            <Link
              href="/contact"
              className="border-[#7300ff] border border-solid px-4 md:px-[19.712px] py-3 md:py-[14.784px] rounded-full md:rounded-[19.712px] shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] not-italic text-[14px] md:text-[18px] text-center text-white uppercase w-full sm:w-auto transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(132,0,255,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80 inline-block cursor-pointer relative z-10"
              style={{
                backgroundImage: `radial-gradient(ellipse at center, rgba(132,0,255,0.59) 0%, rgba(115,0,255,0) 100%)`,
              }}
            >
              Book Your Free Strategy Call
            </Link>
            {/* Second Button - Get Your Free Platform Audit */}
            <Link
              href="/contact"
              className="border-[#ab78e9] border border-solid bg-transparent px-4 md:px-[19.712px] py-3 md:py-[14.784px] rounded-full md:rounded-[19.712px] shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] not-italic text-[14px] md:text-[18px] text-center text-[#c8cdd2] uppercase w-full sm:w-auto transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(171,120,233,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80 inline-block cursor-pointer relative z-10"
            >
              Get Your Free Platform Audit
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

