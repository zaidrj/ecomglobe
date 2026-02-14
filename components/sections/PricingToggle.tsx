/**
 * Pricing Toggle Component
 * 
 * Toggle component for switching between monthly and yearly pricing.
 * 
 * @component
 */

'use client';

import { useState } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { PricingPeriod } from '@/types';

interface PricingToggleProps {
  period: PricingPeriod;
  onPeriodChange: (period: PricingPeriod) => void;
  className?: string;
}

export default function PricingToggle({
  period,
  onPeriodChange,
  className = "",
}: PricingToggleProps) {
  return (
    <div className={`relative lg:absolute content-stretch flex gap-[20px] sm:gap-[24px] lg:gap-[27.872px] h-[44px] sm:h-[50px] lg:h-[52px] items-center justify-center left-0 lg:left-1/2 pl-[16px] sm:pl-[20px] lg:pl-[24.156px] pr-0 py-0 rounded-[9.291px] top-0 lg:top-[480px] -translate-x-0 lg:-translate-x-1/2 w-full max-w-[280px] lg:w-[204px] min-h-[44px] mx-auto lg:mx-0 bg-[#1b0a31] border-[#312245] border-[1.858px] border-solid ${className}`}>
      {/* Monthly button */}
      <button
        type="button"
        onClick={() => onPeriodChange('monthly')}
        className={`capitalize flex flex-col font-inter font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] sm:text-[13px] lg:text-[14.865px] text-nowrap min-h-[44px] min-w-[44px] px-3 sm:px-4 transition-colors ${
          period === 'monthly'
            ? 'text-white'
            : 'text-[#e2a4ff]'
        }`}
        aria-label="Monthly pricing"
      >
        <span className="leading-none">monthly</span>
      </button>

      {/* Yearly button */}
      <button
        type="button"
        onClick={() => onPeriodChange('yearly')}
        className={`capitalize flex flex-col font-inter font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] sm:text-[13px] lg:text-[14.865px] text-nowrap min-h-[44px] min-w-[44px] px-3 sm:px-4 lg:px-4 py-[14px] sm:py-[16px] lg:py-[18.582px] rounded-br-[9.291px] rounded-tr-[9.291px] transition-colors ${
          period === 'yearly'
            ? 'bg-[#e2a4ff] text-[#1b0a31]'
            : 'bg-transparent text-white'
        }`}
        aria-label="Yearly pricing"
      >
        <span className="leading-none">Yearly</span>
      </button>
    </div>
  );
}

