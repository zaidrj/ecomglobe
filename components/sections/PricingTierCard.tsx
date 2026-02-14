/**
 * Pricing Tier Card Component
 * 
 * Displays a single pricing tier card with name, price, description, features, and CTA button.
 * 
 * @component
 */

import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { PricingTier, PricingPeriod } from '@/types';

interface PricingTierCardProps {
  tier: PricingTier;
  period: PricingPeriod;
  className?: string;
}

export default function PricingTierCard({
  tier,
  period,
  className = "",
}: PricingTierCardProps) {
  return (
    <div
      className={`border-[#ab78e9] border-[0.929px] border-solid content-stretch flex flex-col gap-[20px] sm:gap-[30px] items-start justify-between p-6 sm:p-[37px] rounded-[14.865px] shrink-0 h-full ${
        tier.isHighlighted ? 'bg-[#160629]' : 'bg-transparent'
      } ${className}`}
    >
      {/* Header */}
      <div className="h-auto relative shrink-0 w-full">
        <div className="flex flex-col font-lexend font-bold justify-center leading-normal left-0 text-[20px] sm:text-[24px] lg:text-[28px] text-nowrap text-white mb-3">
          <p className="leading-none">{tier.name}</p>
        </div>
        <p className="font-red-hat-display font-normal leading-relaxed left-0 opacity-60 text-[14px] sm:text-[15px] lg:text-[16px] text-white w-full">
          {tier.description}
        </p>
      </div>

      {/* Features section */}
      <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-full">
        <div className="flex flex-col font-lexend font-normal justify-center leading-[0] relative shrink-0 text-[13px] sm:text-[14px] lg:text-[14.865px] text-white w-full">
          <p className="leading-none">What's included:</p>
        </div>
        <div className="h-0 relative shrink-0 w-full">
          <OptimizedImage
            src="/images/pricing/decorative/line-60.svg"
            alt=""
            width={297}
            height={1}
            className="absolute inset-[-0.93px_0_0_0]"
          />
        </div>
      </div>

      {/* Features list */}
      <div className="content-stretch flex flex-col gap-[12px] sm:gap-[14px] lg:gap-[18px] items-start leading-[0] relative shrink-0 w-full flex-grow">
        {tier.features.map((feature, index) => (
          <div
            key={index}
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full"
          >
            <p
              className={`[grid-area:1_/_1] font-red-hat-display font-normal leading-[20px] sm:leading-[22.298px] ml-[24px] sm:ml-[26px] lg:ml-[27.87px] mt-0 relative text-[12px] sm:text-[13px] lg:text-[14.865px] ${
                feature.enabled ? 'text-white' : 'text-[#7f7f7f]'
              }`}
            >
              {feature.text}
            </p>
            <div className="[grid-area:1_/_1] ml-0 mt-[2px] sm:mt-[1.86px] overflow-clip relative size-[16px] sm:size-[17px] lg:size-[18.582px]">
              <OptimizedImage
                src={
                  feature.enabled
                    ? '/images/pricing/icons/checkmark-enabled.svg'
                    : '/images/pricing/icons/checkmark-disabled.svg'
                }
                alt={feature.enabled ? 'Included' : 'Not included'}
                width={19}
                height={19}
                className="absolute inset-[10%]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Link
        href="/contact"
        className={`content-stretch flex items-center justify-center px-[19.712px] py-[14.784px] relative rounded-[19.712px] shrink-0 w-full min-h-[44px] transition-all duration-200 active:opacity-80 inline-block cursor-pointer ${
          tier.isHighlighted
            ? 'border-[#7300ff] border-[0.986px] border-solid shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] not-italic text-[15.77px] md:text-[18px] text-center text-nowrap text-white uppercase hover:shadow-[0px_0px_30px_5px_rgba(132,0,255,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)]'
            : 'border-[#ab78e9] border-[0.986px] border-solid bg-transparent shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] not-italic text-[15.77px] md:text-[18px] text-center text-nowrap text-[#c8cdd2] uppercase hover:shadow-[0px_0px_30px_5px_rgba(171,120,233,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)]'
        }`}
        style={
          tier.isHighlighted
            ? {
                backgroundImage: `radial-gradient(ellipse at center, rgba(132,0,255,0.59) 0%, rgba(115,0,255,0) 100%)`,
              }
            : undefined
        }
      >
        {tier.ctaText}
      </Link>
    </div>
  );
}

