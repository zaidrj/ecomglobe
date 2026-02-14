/**
 * Stats Section Component
 * 
 * Statistics display section matching Figma design exactly.
 * Shows 4 stats: Projects, Clients, Awards, Years.
 * 
 * @component
 * @example
 * ```tsx
 * <StatsSection />
 * ```
 * 
 * Features:
 * - 4 statistics displayed in grid (mobile) or flex (desktop)
 * - Responsive typography (12px mobile → 19px desktop labels, 32px → 61px values)
 * - Divider lines between stats (hidden on mobile)
 * - Uppercase labels with letter spacing
 * 
 * @returns {JSX.Element} Statistics section with 4 stat items
 */

import Image from 'next/image';
import Container from '@/components/layout/Container';

export default function StatsSection() {
  const stats = [
    { label: 'Project', value: '100+' }, // 7 chars to match "Project" (7 letters)
    { label: 'Client', value: '150+' }, // 6 chars to match "Client" (6 letters)
    { label: 'Award', value: '23+' }, // 5 chars to match "Award" (5 letters)
    { label: 'Years', value: '05+' }, // 4 chars to match "Year" (4 letters)
  ];

  return (
    <div className="relative w-full">
      {/* Purple gradient glows on left and right - full viewport width */}
      <div 
        className="absolute pointer-events-none z-0"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          height: '100%',
          top: 0,
        }}
      >
        {/* Left purple glow - radial gradient */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] md:w-[400px] h-[300px] md:h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at left center, rgba(132,0,255,0.4) 0%, rgba(132,0,255,0.2) 30%, transparent 70%)',
          }}
        />
        {/* Right purple glow - radial gradient */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] md:w-[400px] h-[300px] md:h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at right center, rgba(132,0,255,0.4) 0%, rgba(132,0,255,0.2) 30%, transparent 70%)',
          }}
        />
      </div>
      <Container size="lg" className="pt-0 pb-2 md:pb-4 lg:pb-6 px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:flex items-center gap-3 sm:gap-4 md:gap-8 lg:gap-[57px] justify-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-2 lg:gap-[57px]">
              <div className="font-secondary font-normal flex flex-col items-center justify-center text-center relative">
                {/* Value - Positioned above (on top) */}
                <p className="mt-0 relative text-[28px] sm:text-[32px] md:text-[48px] lg:text-[60.981px] text-white text-center whitespace-nowrap">
                  {stat.value}
                </p>
                {/* Label - Positioned below value */}
                <p className="mt-1 md:mt-2 relative text-[#C8CDD2] text-[8px] sm:text-[10px] md:text-[16px] lg:text-[19.057px] tracking-[1px] sm:tracking-[2px] md:tracking-[7px] lg:tracking-[9.5283px] uppercase text-center">
                  {stat.label}
                </p>
              </div>
              {/* Divider - Hidden on mobile, visible on tablet+ */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block h-[74.321px] relative shrink-0 w-0">
                  <Image
                    src="/images/icons/vector-218.svg"
                    alt=""
                    width={1}
                    height={74}
                    className="absolute inset-[0_-0.48px]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

