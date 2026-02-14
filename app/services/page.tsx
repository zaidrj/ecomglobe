/**
 * Services Page
 * 
 * Services page structure matching Figma design exactly.
 * All sections are implemented as separate components for maintainability.
 */

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import ServicesHeroSection from '@/components/sections/ServicesHeroSection';
import PlatformServicesSection from '@/components/sections/PlatformServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ServicesCTASection from '@/components/sections/ServicesCTASection';
import Section from '@/components/layout/Section';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { ServiceCard, LegacyProcessStep } from '@/types';

// Services data matching Figma design
const services: ServiceCard[] = [
  {
    id: 'amazon-marketing',
    title: 'Amazon',
    description: 'Dominate the world\'s largest marketplace with expert Amazon SEO, PPC management, and listing optimization strategies for maximum growth and success.',
    image: {
      src: '/images/services/amazon-marketing.png',
      alt: 'Amazon Marketing service icon',
      width: 102,
      height: 102,
    },
    buttonText: 'Learn More',
    buttonIcon: '/images/icons/arrow-up-right-services.svg',
    href: '/amazon-marketing',
  },
  {
    id: 'shopify-development',
    title: 'Shopify',
    description: 'Build a stunning, high-converting online store with custom Shopify development and optimization strategies for maximum growth and success.',
    image: {
      src: '/images/services/shopify-development.png',
      alt: 'Shopify Development service icon',
      width: 102,
      height: 102,
    },
    buttonText: 'Learn More',
    buttonIcon: '/images/icons/arrow-up-right-services.svg',
    href: '/shopify-development',
  },
  {
    id: 'etsy-optimization',
    title: 'Etsy',
    description: 'Stand out in the handmade and vintage marketplace with optimized listings and strategic SEO techniques for maximum growth and success.',
    image: {
      src: '/images/services/etsy-optimization.png',
      alt: 'Etsy Optimization service icon',
      width: 102,
      height: 102,
    },
    buttonText: 'Learn More',
    buttonIcon: '/images/icons/arrow-up-right-services.svg',
    href: '/etsy-optimization',
  },
  {
    id: 'walmart-marketplace',
    title: 'Walmart',
    description: 'Expand your reach with Walmart\'s growing marketplace and tap into millions of new customers effectively for maximum growth and success.',
    image: {
      src: '/images/services/walmart-marketplace.png',
      alt: 'Walmart Marketplace service icon',
      width: 102,
      height: 102,
    },
    buttonText: 'Learn More',
    buttonIcon: '/images/icons/arrow-up-right-services.svg',
    href: '/walmart-marketplace',
  },
  {
    id: 'ebay-management',
    title: 'eBay',
    description: 'Maximize your eBay sales with professional store management, listing optimization, and automation tools for maximum growth and success.',
    image: {
      src: '/images/services/ebay-management.png',
      alt: 'eBay Management service icon',
      width: 102,
      height: 102,
    },
    buttonText: 'Learn More',
    buttonIcon: '/images/icons/arrow-up-right-services.svg',
    href: '/ebay-management',
  },
  {
    id: 'tiktok-shop-setup',
    title: 'TikTok Shop',
    description: 'Leverage the hottest social commerce platform and turn viral content into sales opportunities effectively for maximum growth and success.',
    image: {
      src: '/images/services/tiktok-shop-setup.png',
      alt: 'TikTok Shop Setup service icon',
      width: 102,
      height: 102,
    },
    buttonText: 'Learn More',
    buttonIcon: '/images/icons/arrow-up-right-services.svg',
    href: '/tiktok-shop',
  },
];

// Process steps data matching Figma design
const processSteps: LegacyProcessStep[] = [
  {
    id: 'discovery',
    title: 'DISCOVERY',
    description: 'Understanding your business goals and requirements',
    icon: {
      src: '/images/process/discovery-icon.svg',
      alt: 'Discovery step icon',
      width: 82,
      height: 82,
    },
    order: 1,
  },
  {
    id: 'strategy',
    title: 'STRATEGY',
    description: 'Creating a customized multi-channel plan',
    icon: {
      src: '/images/process/strategy-icon.svg',
      alt: 'Strategy step icon',
      width: 80,
      height: 80,
    },
    order: 2,
  },
  {
    id: 'setup',
    title: 'SETUP',
    description: 'Platform configuration and optimization',
    icon: {
      src: '/images/process/setup-icon.svg',
      alt: 'Setup step icon',
      width: 80,
      height: 80,
    },
    order: 3,
  },
  {
    id: 'launch',
    title: 'LAUNCH',
    description: 'Going live with all systems tested',
    icon: {
      src: '/images/process/launch-icon.svg',
      alt: 'Launch step icon',
      width: 80,
      height: 80,
    },
    order: 4,
  },
  {
    id: 'scale',
    title: 'SCALE',
    description: 'Continuous optimization and growth',
    icon: {
      src: '/images/process/scale-icon.svg',
      alt: 'Scale step icon',
      width: 80,
      height: 80,
    },
    order: 5,
  },
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#050505]" style={{ overflowX: 'clip' }}>
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
          <ServicesHeroSection />
        </Section>

        {/* Platform-Specific Services Section */}
        <Section id="platform-services" padding="md" maxWidth="xl" className="relative overflow-visible pt-0 md:pt-4 lg:pt-6">
          {/* Decorative elements */}
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
            {/* Left purple glow */}
            <div className="absolute left-0 top-[20%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at left center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)' }} />
            {/* Decorative globe - left side, flipped */}
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute left-[-70px] md:left-[-30px] top-[15%] w-[160px] md:w-[270px] lg:w-[350px] opacity-55 -scale-x-100" />
          </div>
          <div className="px-4 md:px-6">
            <PlatformServicesSection services={services} />
          </div>
        </Section>

        {/* Our Process Section */}
        <Section id="process" padding="md" maxWidth="xl" className="relative overflow-visible pt-0 md:pt-4 lg:pt-6">
          {/* Purple gradient glow - full viewport width */}
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
            {/* Center purple glow - radial gradient */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[600px]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
              }}
            />
            {/* Right purple glow */}
            <div className="absolute right-0 top-[10%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at right center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)' }} />
            {/* Decorative globe - right side */}
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute right-[-70px] md:right-[-30px] top-[5%] w-[160px] md:w-[270px] lg:w-[350px] opacity-55" />
          </div>
          <ProcessSection steps={processSteps} />
        </Section>

        {/* Testimonials Section */}
        <Section id="testimonials" padding="md" maxWidth="lg" className="relative overflow-visible pt-0 md:pt-4 lg:pt-6">
          {/* Purple gradient glow - full viewport width */}
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
            {/* Center purple glow - radial gradient */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[600px]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
              }}
            />
            {/* Left purple glow */}
            <div className="absolute left-0 bottom-[10%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at left center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)' }} />
            {/* Decorative globe - left side, flipped */}
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute left-[-70px] md:left-[-30px] bottom-[-20px] w-[160px] md:w-[270px] lg:w-[350px] opacity-55 -scale-x-100" />
          </div>
          <TestimonialsSection />
        </Section>

        {/* CTA Section */}
        <Section id="cta" padding="md" maxWidth="lg" className="relative overflow-visible pt-0 md:pt-4 lg:pt-6">
          {/* Purple gradient glow - full viewport width */}
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
            {/* Center purple glow - radial gradient */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[600px]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
              }}
            />
            {/* Enhanced purple glow - right side */}
            <div className="absolute right-0 bottom-[5%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at right center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)' }} />
            {/* Decorative globe - right side */}
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute right-[-70px] md:right-[-30px] bottom-[-30px] w-[160px] md:w-[270px] lg:w-[350px] opacity-55" />
          </div>
          <ServicesCTASection />
        </Section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

