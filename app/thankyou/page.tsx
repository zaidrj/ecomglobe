/**
 * Thank You Page
 *
 * Displayed after a successful booking or form submission.
 * Includes confirmation message, next steps, and navigation back to home.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/layout/Section';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import OptimizedImage from '@/components/ui/OptimizedImage';

export const metadata: Metadata = {
  title: 'Thank You - EcommGlobe',
  description:
    'Thank you for booking your free strategy call with EcommGlobe. We look forward to helping you scale your ecommerce business.',
};

const nextSteps = [
  {
    step: '01',
    title: 'Check Your Email',
    description: 'You\'ll receive a confirmation email with your call details and a calendar invite.',
  },
  {
    step: '02',
    title: 'Prepare Your Questions',
    description: 'Think about your current challenges and goals so we can make the most of our time together.',
  },
  {
    step: '03',
    title: 'Join the Call',
    description: 'Our senior consultant will walk you through a personalized automation strategy for your business.',
  },
];

export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] w-full" style={{ overflowX: 'clip' }}>
      {/* Skip to main content */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main id="main-content">
        {/* Hero / Confirmation Section */}
        <Section id="thankyou-hero" padding="none" maxWidth="xl" className="relative overflow-visible">
          {/* Purple gradient glows */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] md:w-[400px] h-[300px] md:h-[600px]"
              style={{
                background:
                  'radial-gradient(ellipse at left center, rgba(132,0,255,0.4) 0%, rgba(132,0,255,0.2) 30%, transparent 70%)',
              }}
            />
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] md:w-[400px] h-[300px] md:h-[600px]"
              style={{
                background:
                  'radial-gradient(ellipse at right center, rgba(132,0,255,0.4) 0%, rgba(132,0,255,0.2) 30%, transparent 70%)',
              }}
            />
            {/* Decorative globe - right side */}
            <OptimizedImage src="/images/globe.png" alt="" width={500} height={500} className="absolute right-[-80px] md:right-[-40px] top-[10%] w-[200px] md:w-[350px] lg:w-[450px] opacity-25" />
          </div>

          {/* Decorative ellipse container - Desktop only */}
          <div className="hidden lg:block absolute h-[338.62px] left-[61.72px] top-0 w-[1341.233px] z-0">
            <OptimizedImage
              src="/images/icons/ellipse-container.svg"
              alt=""
              width={1341}
              height={339}
              className="absolute inset-0"
            />
          </div>

          <Container size="lg" className="relative z-10">
            <div className="flex flex-col items-center text-center gap-4 md:gap-6 pt-36 md:pt-48 lg:pt-52 pb-8 md:pb-16 px-4">
              {/* Checkmark Icon */}
              <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-gradient-to-br from-[rgba(145,55,255,0.4)] to-[rgba(115,0,255,0.2)] border-2 border-[#AB78E9] flex items-center justify-center mb-2 md:mb-4"
                style={{ animation: 'zoomIn 0.5s ease-out' }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#E1C8FF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-[50px] md:h-[50px]"
                  style={{ animation: 'checkmark 0.6s ease-out 0.3s both' }}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              {/* Main Headline */}
              <Heading
                variant="display"
                className="capitalize max-w-[800px] text-[28px] sm:text-[32px] md:text-[48px] lg:text-[58px] leading-[1.2] md:leading-tight"
              >
                <span>Thank </span>
                <span className="text-[#E1C8FF]">You!</span>
              </Heading>

              {/* Sub Text */}
              <Text
                variant="body"
                color="muted"
                className="max-w-[650px] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed"
              >
                Your strategy call has been booked successfully. We&apos;re excited to help you automate and scale your ecommerce business.
              </Text>
            </div>
          </Container>
        </Section>

        {/* Next Steps Section */}
        <Section id="next-steps" padding="md" maxWidth="lg" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[600px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
              }}
            />
            {/* Enhanced purple glow - left side */}
            <div className="absolute left-0 top-[15%] w-[280px] md:w-[520px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at left center, rgba(132,0,255,0.22) 0%, rgba(115,0,255,0.1) 40%, transparent 75%)' }} />
            {/* Decorative globe - left side (flipped) */}
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute left-[-80px] md:left-[-40px] top-[20%] w-[160px] md:w-[260px] lg:w-[340px] opacity-25 -scale-x-100" />
          </div>

          <Container size="lg" className="relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center gap-6 md:gap-10">
              {/* Section Title */}
              <Heading
                variant="h2"
                className="text-center text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px]"
              >
                <span>What Happens </span>
                <span className="text-[#D9B9FF]">Next?</span>
              </Heading>

              {/* Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-[900px]">
                {nextSteps.map((item) => (
                  <div
                    key={item.step}
                    className="relative bg-[rgba(115,0,255,0.08)] border border-[#AB78E9] rounded-[14px] md:rounded-[18px] p-6 md:p-8 flex flex-col gap-3 md:gap-4"
                  >
                    {/* Step Number */}
                    <span className="font-secondary font-bold text-[40px] md:text-[48px] text-[#AB78E9]/30 leading-none">
                      {item.step}
                    </span>

                    {/* Title */}
                    <Heading variant="h4" className="text-[18px] md:text-[22px]">
                      {item.title}
                    </Heading>

                    {/* Description */}
                    <Text variant="small" color="muted" className="text-[13px] md:text-[15px] leading-relaxed">
                      {item.description}
                    </Text>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-[23.655px] items-center mt-4 md:mt-8 w-full sm:w-auto">
                <Link
                  href="/"
                  className="border-[#7300ff] border border-solid px-4 md:px-[19.712px] py-3 md:py-[14.784px] rounded-full md:rounded-[19.712px] shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] not-italic text-[14px] md:text-[18px] text-center text-white uppercase w-full sm:w-auto transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(132,0,255,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80 inline-block cursor-pointer relative z-10"
                  style={{
                    backgroundImage: `radial-gradient(ellipse at center, rgba(132,0,255,0.59) 0%, rgba(115,0,255,0) 100%)`,
                  }}
                >
                  Back to Home
                </Link>
                <Link
                  href="/case-studies"
                  className="border-[#ab78e9] border border-solid bg-transparent px-4 md:px-[19.712px] py-3 md:py-[14.784px] rounded-full md:rounded-[19.712px] shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] not-italic text-[14px] md:text-[18px] text-center text-[#c8cdd2] uppercase w-full sm:w-auto transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(171,120,233,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80 inline-block cursor-pointer relative z-10"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
