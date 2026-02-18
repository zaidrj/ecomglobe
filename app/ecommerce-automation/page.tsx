/**
 * Ecommerce Automation Page
 *
 * Landing page for the ecommerce automation service.
 * Sections: Hero, Calendly Widget, Strategy Call Stats, Testimonials, Footer with Form.
 */

import type { Metadata } from 'next';
import Section from '@/components/layout/Section';
import Navbar from '@/components/sections/Navbar';
import AutomationHeroSection from '@/components/sections/AutomationHeroSection';
import CalendlyWidget from '@/components/sections/CalendlyWidget';
import StrategyCallSection from '@/components/sections/StrategyCallSection';
import CallProcessSection from '@/components/sections/CallProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import OptimizedImage from '@/components/ui/OptimizedImage';

export const metadata: Metadata = {
  title: 'Ecommerce Automation Services - Automate & Scale Your Online Store',
  description:
    'EcommGlobe ecommerce automation services help you automate operations across Amazon, Shopify, Etsy, Walmart, eBay & TikTok Shop. Book a free strategy call and achieve $4,000+ in sales in 60 days.',
  keywords: ["ecommerce automation", "ecommerce automation agency", "automated ecommerce", "ecommerce scaling", "ecommglobe automation"],
  alternates: { canonical: "https://www.ecommglobe.com/ecommerce-automation" },
  openGraph: {
    title: "Ecommerce Automation Services | EcommGlobe",
    description: "Automate your ecommerce operations and scale your online business. Free strategy call available.",
    url: "https://www.ecommglobe.com/ecommerce-automation",
  },
};

export default function EcommerceAutomationPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] w-full" style={{ overflowX: 'clip' }}>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      {/* Navbar */}
      <Navbar hideLinks />

      {/* Main content */}
      <main id="main-content">
        {/* Hero Section */}
        <Section id="hero" padding="none" maxWidth="xl" className="pb-4 md:pb-8 lg:pb-10 relative overflow-visible">
          {/* Purple gradient glows */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[400px] md:h-[800px]"
              style={{
                background:
                  'radial-gradient(ellipse at left center, rgba(132,0,255,0.4) 0%, rgba(132,0,255,0.2) 30%, transparent 70%)',
              }}
            />
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[400px] md:h-[800px]"
              style={{
                background:
                  'radial-gradient(ellipse at right center, rgba(132,0,255,0.4) 0%, rgba(132,0,255,0.2) 30%, transparent 70%)',
              }}
            />
            {/* Decorative globe - right side */}
            <OptimizedImage
              src="/images/globe.png"
              alt=""
              width={500}
              height={500}
              className="absolute right-[-80px] md:right-[-40px] top-[10%] w-[200px] md:w-[350px] lg:w-[450px] opacity-25"
            />
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
          <AutomationHeroSection />
        </Section>

        {/* Calendly Booking Section */}
        <Section id="calendly" padding="sm" maxWidth="lg" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[900px] h-[350px] md:h-[750px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
              }}
            />
            {/* Extra glow - top right */}
            <div
              className="absolute right-[-80px] top-[0%] w-[350px] md:w-[600px] h-[350px] md:h-[600px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(132,0,255,0.2) 0%, rgba(100,0,200,0.08) 50%, transparent 80%)',
              }}
            />
            {/* Extra glow - bottom left */}
            <div
              className="absolute left-[-60px] bottom-[0%] w-[300px] md:w-[550px] h-[300px] md:h-[550px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(145,55,255,0.18) 0%, rgba(115,0,255,0.06) 50%, transparent 80%)',
              }}
            />
          </div>
          <CalendlyWidget />
        </Section>

        {/* Strategy Call Section */}
        <Section id="strategy" padding="sm" maxWidth="lg" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[900px] h-[400px] md:h-[800px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
              }}
            />
            {/* Extra glow - left edge */}
            <div
              className="absolute left-0 top-[10%] w-[280px] md:w-[550px] h-[400px] md:h-[700px]"
              style={{
                background:
                  'radial-gradient(ellipse at left center, rgba(132,0,255,0.25) 0%, rgba(115,0,255,0.1) 40%, transparent 75%)',
              }}
            />
            {/* Extra glow - right edge */}
            <div
              className="absolute right-0 bottom-[5%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]"
              style={{
                background:
                  'radial-gradient(ellipse at right center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)',
              }}
            />
          </div>
          <StrategyCallSection />
        </Section>

        {/* Call Process Section */}
        <Section id="call-process" padding="sm" maxWidth="lg" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[900px] h-[400px] md:h-[800px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(132,0,255,0.25) 0%, rgba(132,0,255,0.12) 40%, transparent 70%)',
              }}
            />
            {/* Extra glow - top right corner */}
            <div
              className="absolute right-[-40px] top-[-5%] w-[320px] md:w-[600px] h-[320px] md:h-[600px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(132,0,255,0.22) 0%, rgba(100,0,200,0.08) 50%, transparent 80%)',
              }}
            />
            {/* Extra glow - bottom left */}
            <div
              className="absolute left-[-20px] bottom-[-5%] w-[280px] md:w-[520px] h-[280px] md:h-[520px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(145,55,255,0.18) 0%, rgba(115,0,255,0.06) 50%, transparent 80%)',
              }}
            />
            {/* Decorative globe - left side (flipped) */}
            <OptimizedImage
              src="/images/globe.png"
              alt=""
              width={400}
              height={400}
              className="absolute left-[-80px] md:left-[-40px] top-[20%] w-[160px] md:w-[260px] lg:w-[340px] opacity-25 -scale-x-100"
            />
          </div>
          <CallProcessSection />
        </Section>

        {/* Testimonials Section */}
        <Section id="testimonials" padding="sm" maxWidth="lg" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[900px] h-[400px] md:h-[800px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
              }}
            />
            {/* Extra glow - left edge */}
            <div
              className="absolute left-0 top-[15%] w-[280px] md:w-[520px] h-[350px] md:h-[650px]"
              style={{
                background:
                  'radial-gradient(ellipse at left center, rgba(132,0,255,0.22) 0%, rgba(115,0,255,0.1) 40%, transparent 75%)',
              }}
            />
            {/* Extra glow - top right */}
            <div
              className="absolute right-[-30px] top-[0%] w-[250px] md:w-[480px] h-[250px] md:h-[480px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(145,55,255,0.16) 0%, rgba(115,0,255,0.05) 50%, transparent 80%)',
              }}
            />
            {/* Decorative globe - right side */}
            <OptimizedImage
              src="/images/globe.png"
              alt=""
              width={400}
              height={400}
              className="absolute right-[-70px] md:right-[-30px] bottom-[-30px] w-[160px] md:w-[270px] lg:w-[350px] opacity-25"
            />
          </div>
          <TestimonialsSection />
        </Section>
      </main>
    </div>
  );
}
