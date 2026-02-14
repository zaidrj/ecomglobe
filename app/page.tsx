/**
 * Home Page
 * 
 * Main page structure matching Figma design exactly.
 * All sections are implemented as separate components for maintainability.
 */

import Section from '@/components/layout/Section';
import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import WhySection from '@/components/sections/WhySection';
import TikTokSection from '@/components/sections/TikTokSection';
import ContactForm from '@/components/sections/ContactForm';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';
import OptimizedImage from '@/components/ui/OptimizedImage';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#050505] w-full" style={{ overflowX: 'clip' }}>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      {/* Navbar - Absolute positioned at top */}
      <Navbar />

      {/* Main content */}
      <main id="main-content">

      {/* Hero Section */}
      <Section id="hero" padding="none" maxWidth="xl" className="pb-8 md:pb-20 lg:pb-24 relative overflow-visible">
        {/* Purple gradient glows on left and right */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
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
          {/* Decorative globe - right side */}
          <OptimizedImage src="/images/globe.png" alt="" width={500} height={500} className="absolute right-[-80px] md:right-[-40px] top-[10%] w-[200px] md:w-[350px] lg:w-[450px] opacity-25" />
        </div>
        {/* Ellipse Container - Vertical lines (Vector 6, 7, 8, etc.) - Hidden on mobile/tablet */}
        <div className="hidden lg:block absolute h-[338.62px] left-[61.72px] top-0 w-[1341.233px] z-0">
          <OptimizedImage
            src="/images/icons/ellipse-container.svg"
            alt=""
            width={1341}
            height={339}
            className="absolute inset-0"
          />
        </div>
        <HeroSection />
      </Section>

      {/* Stats Section */}
      <Section id="stats" padding="none" maxWidth="lg" className="pt-0 pb-4 md:pb-6 lg:pb-8 overflow-hidden">
        <StatsSection />
      </Section>

      {/* Everything You Need Section */}
      <Section id="features" padding="sm" maxWidth="lg" className="relative overflow-hidden">
        {/* Purple gradient glows */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Center purple glow */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[250px] md:h-[500px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
            }}
          />
          {/* Right edge glow */}
          <div className="absolute right-[-80px] top-[0%] w-[350px] md:w-[600px] h-[350px] md:h-[600px]" style={{ background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.2) 0%, rgba(100,0,200,0.08) 50%, transparent 80%)' }} />
          {/* Left edge glow */}
          <div className="absolute left-[-60px] bottom-[5%] w-[300px] md:w-[550px] h-[300px] md:h-[550px]" style={{ background: 'radial-gradient(ellipse at left center, rgba(145,55,255,0.22) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)' }} />
          {/* Top-right scattered glow */}
          <div className="absolute right-[10%] top-[-5%] w-[200px] md:w-[400px] h-[200px] md:h-[400px]" style={{ background: 'radial-gradient(ellipse at center, rgba(160,60,255,0.18) 0%, rgba(115,0,255,0.06) 50%, transparent 80%)' }} />
          {/* Bottom-center glow */}
          <div className="absolute left-[30%] bottom-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[450px]" style={{ background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.2) 0%, rgba(100,0,200,0.08) 50%, transparent 80%)' }} />
        </div>
        <FeaturesSection />
      </Section>

      {/* Why EcommGlobe Section */}
      <Section id="why" padding="sm" maxWidth="lg" className="relative overflow-hidden pt-4 md:pt-10 lg:pt-12">
        {/* Ellipse 3 - Decorative glow behind section - Hidden on mobile/tablet */}
        <div className="hidden lg:flex absolute items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[850px] z-0 opacity-60">
          <div className="flex-none rotate-180 w-full h-full">
            <OptimizedImage
              src="/images/icons/ellipse-3.svg"
              alt=""
              width={1300}
              height={850}
              className="absolute inset-[-31.98%_-21.09%] w-full h-full"
            />
          </div>
        </div>
        {/* Purple gradient glow */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Left purple glow - radial gradient */}
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[150px] md:w-[300px] h-[200px] md:h-[400px]"
            style={{
              background: 'radial-gradient(ellipse at left center, rgba(132,0,255,0.25) 0%, rgba(132,0,255,0.12) 30%, transparent 70%)',
            }}
          />
          {/* Center purple glow - radial gradient */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[600px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
            }}
          />
          {/* Decorative globe - left side (flipped) */}
          <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute left-[-80px] md:left-[-40px] top-[20%] w-[160px] md:w-[260px] lg:w-[340px] opacity-25 -scale-x-100" />
        </div>
        <WhySection />
      </Section>

      {/* TikTok Shop Section with Contact Form - Full width without side padding */}
      <section id="tiktok" className="relative w-full py-16 md:py-20 lg:py-24 bg-[#050505] overflow-hidden">
        {/* Full-width purple gradient background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.15) 0%, rgba(132,0,255,0.08) 40%, transparent 70%)',
          }}
        />
        <TikTokSection />
      </section>

      {/* Services Section */}
      <section id="services" className="relative w-full bg-[#050505] overflow-hidden pt-0 md:pt-4 lg:pt-6">
        <ServicesSection />
      </section>

      {/* Testimonials Section */}
      <Section id="testimonials" padding="md" maxWidth="lg" className="relative overflow-hidden pt-0 md:pt-4 lg:pt-6">
        {/* Purple gradient glow */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Center purple glow - radial gradient */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[600px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
            }}
          />
          {/* Extra glow - left edge */}
          <div className="absolute left-0 top-[15%] w-[280px] md:w-[520px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at left center, rgba(132,0,255,0.22) 0%, rgba(115,0,255,0.1) 40%, transparent 75%)' }} />
        </div>
        <TestimonialsSection />
      </Section>

      {/* CTA Section */}
      <Section id="cta" padding="md" maxWidth="lg" className="relative overflow-hidden pt-0 md:pt-4 lg:pt-6">
        {/* Purple gradient glow */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Center purple glow - radial gradient */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[600px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
            }}
          />
          {/* Decorative globe - right side */}
          <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute right-[-70px] md:right-[-30px] bottom-[-30px] w-[160px] md:w-[270px] lg:w-[350px] opacity-25" />
        </div>
        <CTASection />
      </Section>

      </main>

      {/* Footer - Full Width */}
      <Footer />
    </div>
  );
}
