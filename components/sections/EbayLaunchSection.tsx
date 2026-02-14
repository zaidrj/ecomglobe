/**
 * Ebay Launch Section Component
 * 
 * Displays "Launch Your Ebay Store" section with title, subtitle, CTA button, and Ebay logo visual.
 * 
 * @component
 * @example
 * ```tsx
 * <EbayLaunchSection />
 * ```
 * 
 * Features:
 * - Title with purple accent on "Ebay"
 * - Subtitle text
 * - CTA button
 * - Ebay logo visual elements
 * - Decorative background elements
 * 
 * @returns {JSX.Element} Launch Store section with CTA and Ebay logo
 */

import { Heading, Text } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { EbayLaunchSectionProps } from '@/types';

export default function EbayLaunchSection({
  title = "Launch Your eBay Store",
  subtitle = "Setup, optimization, integration—done for you.",
  ctaText = "Limited-time free audit available.",
  ctaHref = "#",
  logoImage = "/images/ebay/hero/ebay-hero.png",
  className = "",
}: EbayLaunchSectionProps) {
  return (
    <div className={`absolute h-[698.728px] left-[-6px] top-[2574px] w-[1425.349px] ${className}`}>
      {/* Decorative ellipses */}
      <div className="absolute h-[569.965px] left-[calc(50%-386.44px)] top-[67.88px] -translate-x-1/2 w-[73.76px]">
        <OptimizedImage
          src="/images/ebay/decorative/ellipse-7175.svg"
          alt=""
          width={74}
          height={570}
          className="absolute inset-[-44.12%_-340.91%]"
        />
      </div>

      {/* Engine nine ellipses (decorative) */}
      <div className="absolute flex inset-[20.18%_16.58%_59.59%_73.5%] items-center justify-center">
        <div className="flex-none rotate-[30deg] size-[103.474px]">
          <OptimizedImage
            src="/images/ebay/decorative/engine-nine-ellipse.svg"
            alt=""
            width={103}
            height={103}
            className="absolute inset-[0_-21.81%_-43.63%_-21.81%]"
          />
        </div>
      </div>

      {/* Logo elements */}
      <div className="absolute h-[40.233px] left-[1097.76px] top-[192.13px] w-[41.071px]">
        <OptimizedImage
          src="/images/ebay/logos/logo-13.svg"
          alt=""
          width={41}
          height={40}
          className="object-contain"
        />
      </div>

      <div className="absolute h-[42.747px] left-[1067.8px] top-[606.83px] w-[41.909px]">
        <OptimizedImage
          src="/images/ebay/logos/logo-52.svg"
          alt=""
          width={42}
          height={43}
          className="object-contain"
        />
      </div>

      <div className="absolute left-[1337.41px] size-[33.527px] top-[53.64px]">
        <OptimizedImage
          src="/images/ebay/logos/logo-89.svg"
          alt=""
          width={34}
          height={34}
          className="object-contain"
        />
      </div>

      <div className="absolute h-[40.233px] left-[581.05px] top-[81.29px] w-[41.071px]">
        <OptimizedImage
          src="/images/ebay/logos/logo-15.svg"
          alt=""
          width={41}
          height={40}
          className="object-contain"
        />
      </div>

      <div className="absolute h-[40.233px] left-[50.06px] top-[158.29px] w-[41.071px]">
        <OptimizedImage
          src="/images/ebay/logos/logo-15.svg"
          alt=""
          width={41}
          height={40}
          className="object-contain"
        />
      </div>

      <div className="absolute left-[654.41px] size-[33.527px] top-[406.64px]">
        <OptimizedImage
          src="/images/ebay/logos/logo-86.svg"
          alt=""
          width={34}
          height={34}
          className="object-contain"
        />
      </div>

      <div className="absolute left-[346.41px] size-[33.527px] top-[477.64px]">
        <OptimizedImage
          src="/images/ebay/logos/frame.svg"
          alt=""
          width={34}
          height={34}
          className="object-contain"
        />
      </div>

      {/* Ebay logo main visual */}
      <div className="absolute flex items-center justify-center left-[1068px] size-[328.36px] top-[112px] rotate-[341.694deg]">
        <OptimizedImage
          src={logoImage}
          alt="Ebay logo"
          width={260}
          height={260}
          className="object-contain"
        />
      </div>

      <div className="absolute flex items-center justify-center left-[80px] size-[214.982px] top-[495px] rotate-[11.121deg]">
        <OptimizedImage
          src={logoImage}
          alt="Ebay logo"
          width={183}
          height={183}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-[58.21%] capitalize left-[calc(50%-583.67px)] text-[48px] text-white top-[24.62%] w-[610px]">
        <Heading
          as="h2"
          variant="h1"
          className="mb-0 font-lexend font-bold leading-normal"
        >
          <span>Launch Your </span>
          <span className="text-[#e1c8ff]">eBay </span>
        </Heading>
        <Heading
          as="h2"
          variant="h1"
          className="text-[#e1c8ff] font-lexend font-bold leading-normal"
        >
          Store
        </Heading>
      </div>

      {/* Subtitle */}
      <Text
        as="p"
        variant="body"
        className="absolute bottom-[52.63%] font-red-hat-display font-normal leading-normal left-[calc(50%-580.67px)] text-[#c8cdd2] text-[22px] top-[43.22%] w-[564px]"
      >
        {subtitle}
      </Text>

      {/* CTA Button */}
      <div className="absolute bottom-[42.9%] flex items-center left-[calc(50%-302.72px)] top-[49.95%] -translate-x-1/2 w-[561.905px]">
        <Button
          variant="primary"
          size="sm"
          className="font-poppins font-bold leading-[1.3] text-[18px] text-center text-white uppercase border-[#7300ff] border-[0.986px] border-solid shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)]"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(132,0,255,0.59), rgba(115,0,255,0))',
          }}
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
}





