/**
 * CTA Section Component
 * 
 * "Free Ecommerce Platform Audit" section matching Figma design exactly.
 * Includes title, bullet points, and CTA button.
 * 
 * @component
 * @example
 * ```tsx
 * <CTASection />
 * ```
 * 
 * Features:
 * - Large display heading with purple accent text
 * - 3 benefit bullet points with checkmarks
 * - Primary CTA button
 * - Centered layout with responsive typography
 * 
 * @returns {JSX.Element} CTA section with title, benefits, and button
 */

import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import Link from 'next/link';

export default function CTASection() {
  const benefits = [
    'Best platform for your product',
    'Growth & automation roadmap',
    'Clear next steps',
  ];

  return (
    <Container size="lg" className="pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-16 lg:pb-20 relative z-10 px-4 md:px-6">
      <div className="flex flex-col items-center text-center gap-4 md:gap-8 max-w-[877px] mx-auto">
        {/* Title */}
        <Heading variant="display" className="capitalize text-[24px] sm:text-[28px] md:text-[48px] lg:text-[58px] px-2">
          <span>Free Ecommerce </span>
          <span className="text-[#D9B9FF]">Platform Audit</span>
        </Heading>

        {/* Benefits */}
        <div className="flex flex-col gap-1.5 md:gap-3 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px]">
          {benefits.map((benefit, index) => (
            <Text key={index} variant="body" color="muted" className="flex items-center justify-center gap-2">
              <span className="text-[#AB78E9] text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px]">✓</span>
              <span>{benefit}</span>
            </Text>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-3 md:mt-8 w-full sm:w-auto">
          <Link
            href="/contact"
            className="border-[#7300ff] border border-solid px-4 md:px-[19.712px] py-3 md:py-[14.784px] rounded-full md:rounded-[19.712px] shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] not-italic text-[14px] md:text-[18px] text-center text-white uppercase w-full sm:w-auto transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(132,0,255,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80 inline-block cursor-pointer relative z-10"
            style={{
              backgroundImage: `radial-gradient(ellipse at center, rgba(132,0,255,0.59) 0%, rgba(115,0,255,0) 100%)`,
            }}
          >
            Book Your Free Strategy Call
          </Link>
        </div>
      </div>
    </Container>
  );
}

