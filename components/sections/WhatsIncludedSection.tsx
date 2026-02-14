/**
 * What's Included Section Component
 *
 * Displays "What's Included" section with title, subtitle, service cards on left and image on right.
 *
 * @component
 */

import { Heading, Text } from '@/components/ui/Typography';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { WhatsIncludedSectionProps } from '@/types';

export default function WhatsIncludedSection({
  title = "What's Included",
  subtitle = "Whether you're launching or scaling, we handle everything end-to-end.",
  services,
  className = "",
}: WhatsIncludedSectionProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Purple glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute left-0 top-[10%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at left center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)' }} />
        <div className="absolute right-0 bottom-[5%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at right center, rgba(145,55,255,0.18) 0%, rgba(115,0,255,0.06) 45%, transparent 80%)' }} />
        <div className="absolute left-[30%] bottom-[-5%] w-[200px] md:w-[400px] h-[200px] md:h-[400px]" style={{ background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.15) 0%, rgba(100,0,200,0.06) 50%, transparent 80%)' }} />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
        {/* Title + Subtitle centered */}
        <div className="flex flex-col items-center gap-4 md:gap-6 mb-6 md:mb-10">
          <Heading variant="h2" className="text-center text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2] md:leading-tight max-w-[900px]">
            {title}
          </Heading>

          {subtitle && (
            <Text
              as="p"
              variant="body"
              color="muted"
              className="text-center text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-[850px]"
            >
              {subtitle}
            </Text>
          )}
        </div>

        {/* Two-column: Image left, Cards right */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10 items-stretch">
          {/* Left: Image */}
          <div className="w-full lg:w-[420px] xl:w-[480px] shrink-0 min-h-[250px] sm:min-h-[300px] md:min-h-[400px] relative rounded-[16px] md:rounded-[24px] overflow-hidden">
            <OptimizedImage
              src="/images/amazon/hero/rectangle-4600.png"
              alt="Amazon account management services"
              width={480}
              height={600}
              className="object-cover absolute inset-0 w-full h-full scale-[1.3]"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>

          {/* Right: Service Cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {services.map((service, index) => {
              const parts = service.text.split(' — ');
              const hasDescription = parts.length > 1;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 md:p-5 rounded-[12px] md:rounded-[14px] border border-[#AB78E9]/30 bg-[rgba(115,0,255,0.06)]"
                >
                  <span className="text-[#AB78E9] text-[18px] md:text-[20px] mt-0.5 shrink-0">✔</span>
                  <div className="flex flex-col gap-1">
                    <span className="font-primary font-semibold text-white text-[15px] md:text-[17px] lg:text-[18px]">
                      {hasDescription ? parts[0] : service.text}
                    </span>
                    {hasDescription && (
                      <span className="text-[#C8CDD2] text-[13px] md:text-[15px] lg:text-[16px] leading-relaxed">
                        {parts[1]}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
