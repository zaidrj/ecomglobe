/**
 * Ebay Stats Section Component
 * 
 * Displays 4 stat cards positioned around the hero image matching Figma design exactly.
 * Stats: 3-6 Months to Scale, 4.5x Avg ROI, 100+ Happy Clients, 340% Avg Growth
 * 
 * @component
 * @example
 * ```tsx
 * <EbayStatsSection stats={statsData} />
 * ```
 * 
 * Features:
 * - 4 stat cards with icons, values, and descriptions
 * - Positioned around hero image (top-left, top-right, bottom-left, bottom-right)
 * - Responsive layout that adapts on mobile
 * 
 * @returns {JSX.Element} Stats section with 4 metric cards
 */

'use client';

import OptimizedImage from '@/components/ui/OptimizedImage';
import { Heading, Text } from '@/components/ui/Typography';
import type { EbayStatsSectionProps } from '@/types';

export default function EbayStatsSection({
  stats,
  className = "",
}: EbayStatsSectionProps) {
  // Find stats by position
  const topLeftStat = stats.find(s => s.position === 'top-left');
  const topRightStat = stats.find(s => s.position === 'top-right');
  const topRight2Stat = stats.find(s => s.position === 'top-right-2');
  const bottomRightStat = stats.find(s => s.position === 'bottom-right');

  return (
    <div className={`relative w-full max-w-[1192px] mx-auto min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] py-8 ${className}`}>
      {/* Background frame - Hidden on mobile, shown on desktop */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none rounded-tl-[10px] rounded-tr-[10px]">
        <OptimizedImage
          src="/images/ebay/hero/frame-62.png"
          alt=""
          width={1192}
          height={504}
          className="absolute h-[129%] left-[-0.02%] top-[-4.7%] w-full object-contain object-center"
        />
      </div>

      {/* Stats Grid - Responsive layout for mobile */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-0 pt-8 md:pt-0">
        {/* Top Left Stat Card */}
        {topLeftStat && (
          <div className="relative lg:absolute bg-[rgba(31,24,53,0.69)] border border-[#ab78e9] border-solid flex flex-col gap-2 md:gap-[6px] items-center justify-between lg:left-[71px] p-4 md:p-[20px] rounded-[17px] lg:top-[280px] h-full lg:h-auto">
            <div className="h-[40px] md:h-[50.186px] relative shrink-0 w-[40px] md:w-[46.013px] flex items-center justify-center">
              <OptimizedImage
                src={topLeftStat.icon}
                alt={topLeftStat.description}
                width={46}
                height={50}
                className="object-contain w-full h-full"
              />
            </div>
            <Heading
              as="h3"
              variant="h3"
              className="font-poppins font-semibold leading-[1.4] text-[24px] md:text-[32px] lg:text-[36px] text-center text-white uppercase"
            >
              {topLeftStat.value}
            </Heading>
            <Text
              as="p"
              variant="body"
              className="font-red-hat-display font-normal leading-[1.6] text-[#f9f6ff] text-[14px] md:text-[16px] lg:text-[18px] text-center w-full md:w-[132px]"
            >
              {topLeftStat.description}
            </Text>
          </div>
        )}

        {/* Top Right Stat Card (4.5x) */}
        {topRightStat && (
          <div className="relative lg:absolute bg-[rgba(31,24,53,0.69)] border border-[#ab78e9] border-solid flex flex-col gap-2 md:gap-[6px] items-center justify-between lg:left-[171px] p-4 md:p-[20px] rounded-[17px] lg:top-[-22px] h-full lg:h-auto">
            <div className="h-[40px] md:h-[56px] relative shrink-0 w-[40px] md:w-[34px] flex items-center justify-center">
              <OptimizedImage
                src={topRightStat.icon}
                alt={topRightStat.description}
                width={34}
                height={56}
                className="object-contain w-full h-full"
              />
            </div>
            <Heading
              as="h3"
              variant="h3"
              className="font-poppins font-semibold leading-[1.4] text-[24px] md:text-[32px] lg:text-[36px] text-center text-white uppercase"
            >
              {topRightStat.value}
            </Heading>
            <Text
              as="p"
              variant="body"
              className="font-red-hat-display font-normal leading-[1.6] text-[#f9f6ff] text-[14px] md:text-[16px] lg:text-[18px] text-center w-full md:w-[104px]"
            >
              {topRightStat.description}
            </Text>
          </div>
        )}

        {/* Top Right 2 Stat Card (340%) */}
        {topRight2Stat && (
          <div className="relative lg:absolute bg-[rgba(31,24,53,0.69)] border border-[#ab78e9] border-solid flex flex-col gap-2 md:gap-[6px] items-center justify-between lg:left-[915px] p-4 md:p-[20px] rounded-[17px] lg:top-[-20px] h-full lg:h-auto">
            <div className="h-[40px] md:h-[34px] relative shrink-0 w-[40px] md:w-[56px] flex items-center justify-center">
              <OptimizedImage
                src={topRight2Stat.icon}
                alt={topRight2Stat.description}
                width={56}
                height={34}
                className="object-contain w-full h-full"
              />
            </div>
            <Heading
              as="h3"
              variant="h3"
              className="font-poppins font-semibold leading-[1.4] text-[24px] md:text-[32px] lg:text-[36px] text-center text-white uppercase"
            >
              {topRight2Stat.value}
            </Heading>
            <Text
              as="p"
              variant="body"
              className="font-red-hat-display font-normal leading-[1.6] text-[#f9f6ff] text-[14px] md:text-[16px] lg:text-[18px] text-center w-full md:w-[114px]"
            >
              {topRight2Stat.description}
            </Text>
          </div>
        )}

        {/* Bottom Right Stat Card */}
        {bottomRightStat && (
          <div className="relative lg:absolute bg-[rgba(31,24,53,0.69)] border border-[#ab78e9] border-solid flex flex-col gap-2 md:gap-[6px] items-center justify-between lg:left-[994px] p-4 md:p-[20px] rounded-[17px] lg:top-[283px] h-full lg:h-auto">
            <div className="h-[40px] md:h-[46.947px] relative shrink-0 w-[40px] md:w-[64px] flex items-center justify-center">
              <OptimizedImage
                src={bottomRightStat.icon}
                alt={bottomRightStat.description}
                width={64}
                height={47}
                className="object-contain w-full h-full"
              />
            </div>
            <Heading
              as="h3"
              variant="h3"
              className="font-poppins font-semibold leading-[1.4] text-[24px] md:text-[32px] lg:text-[36px] text-center text-white uppercase"
            >
              {bottomRightStat.value}
            </Heading>
            <Text
              as="p"
              variant="body"
              className="font-red-hat-display font-normal leading-[1.6] text-[#f9f6ff] text-[14px] md:text-[16px] lg:text-[18px] text-center w-full md:w-[132px]"
            >
              {bottomRightStat.description}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
}





