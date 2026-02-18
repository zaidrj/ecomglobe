/**
 * Home Page
 *
 * Main page structure matching Figma design exactly.
 * All sections are implemented as separate components for maintainability.
 */

import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "EcommGlobe - #1 Ecommerce Marketing & Automation Agency | EcomGlobe",
  description: "EcommGlobe is the leading ecommerce marketing and automation agency. We help brands launch, optimize, and scale on Amazon, Shopify, Etsy, Walmart, eBay & TikTok Shop. Get your free strategy call today.",
  alternates: { canonical: "https://www.ecommglobe.com" },
  openGraph: {
    title: "EcommGlobe - #1 Ecommerce Marketing & Automation Agency",
    description: "Scale your brand across every marketplace. Expert ecommerce services for Amazon, Shopify, Etsy, Walmart, eBay & TikTok Shop.",
    url: "https://www.ecommglobe.com",
  },
};

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
          <OptimizedImage src="/images/globe.png" alt="" width={500} height={500} className="absolute right-[-80px] md:right-[-40px] top-[10%] w-[200px] md:w-[350px] lg:w-[450px] opacity-55" />
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
      <section id="stats" className="relative w-full bg-[#050505]">
        {/* Globe overlapping stats and features sections - left side */}
        <OptimizedImage
          src="/images/globe.png"
          alt=""
          width={500}
          height={500}
          className="absolute left-[-80px] md:left-[-40px] bottom-[-350px] md:bottom-[-480px] lg:bottom-[-620px] w-[200px] md:w-[350px] lg:w-[450px] opacity-55 -scale-x-100 z-20 pointer-events-none"
        />
        <StatsSection />
      </section>

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
      <section id="why" className="relative w-full bg-[#050505] overflow-hidden">
        <WhySection />
      </section>

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
          <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute right-[-70px] md:right-[-30px] bottom-[-30px] w-[160px] md:w-[270px] lg:w-[350px] opacity-55" />
        </div>
        <CTASection />
      </Section>

      </main>

      {/* Tawk.to Chat Widget */}
      <Script strategy="afterInteractive">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/6994d3fc7d69841c3c151385/1jhmlo4te';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `}
      </Script>

      {/* Footer - Full Width */}
      <Footer />
    </div>
  );
}
