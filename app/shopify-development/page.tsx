/**
 * Shopify Development Page
 * 
 * Shopify Development page structure matching Figma design exactly.
 * All sections are positioned absolutely relative to the page container.
 */

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import ShopifyHeroSection from '@/components/sections/ShopifyHeroSection';
import ShopifyStatsSection from '@/components/sections/ShopifyStatsSection';
import WhatsIncludedSection from '@/components/sections/WhatsIncludedSection';
import ShopifyProcessSection from '@/components/sections/ShopifyProcessSection';
import LaunchStoreSection from '@/components/sections/LaunchStoreSection';
import ShopifyFAQSection from '@/components/sections/ShopifyFAQSection';
import ShopifyCTASection from '@/components/sections/ShopifyCTASection';
import Section from '@/components/layout/Section';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { StatCard, ServiceItem, ProcessStep, FAQItem } from '@/types';

// Stats data matching Figma design
const stats: StatCard[] = [
  {
    icon: '/images/shopify/stats/group-clock.svg',
    value: '3-6',
    description: 'Months to Scale',
    position: 'top-left',
  },
  {
    icon: '/images/shopify/stats/vector-dollar.svg',
    value: '4.5x',
    description: 'Avg ROI',
    position: 'top-right',
  },
  {
    icon: '/images/shopify/stats/group-164428-people.svg',
    value: '100+',
    description: 'Happy Clients',
    position: 'bottom-right',
  },
  {
    icon: '/images/shopify/stats/vector-growth.svg',
    value: '340%',
    description: 'Avg Growth',
    position: 'top-right-2',
  },
];

// Services data
const services: ServiceItem[] = [
  { text: 'Custom Theme Development — Bespoke Shopify themes designed to match your brand and convert visitors.' },
  { text: 'Store Setup & Configuration — Complete Shopify store setup with payment, shipping and app integrations.' },
  { text: 'Product Page Optimization — High converting product pages with SEO friendly content and imagery.' },
  { text: 'App Integration — Seamless integration of essential Shopify apps for automation and growth.' },
  { text: 'Speed Optimization — Performance tuning to ensure fast load times and better search rankings.' },
  { text: 'Conversion Rate Optimization — Data driven improvements to increase sales and average order value.' },
  { text: 'Migration Support — Smooth migration from other platforms to Shopify without data loss.' },
  { text: 'Ongoing Maintenance — Continuous support, updates and improvements to keep your store running.' },
];

// Process steps data
const processSteps: ProcessStep[] = [
  {
    icon: '/images/shopify/process/group-discovery.svg',
    title: 'Discovery',
    description: 'Understand your brand, goals and target audience',
    order: 1,
  },
  {
    icon: '/images/shopify/process/vector-design.svg',
    title: 'Design',
    description: 'Create a custom Shopify theme that reflects your brand',
    order: 2,
  },
  {
    icon: '/images/shopify/process/group-development.svg',
    title: 'Development',
    description: 'Build and configure your store with all features',
    order: 3,
  },
  {
    icon: '/images/shopify/process/vector-stroke-testing.svg',
    title: 'Launch',
    description: 'Go live with testing, QA and performance optimization',
    order: 4,
  },
  {
    icon: '/images/shopify/process/vector-launch-support.svg',
    title: 'Growth',
    description: 'Ongoing optimization, marketing and scaling support',
    order: 5,
  },
];

// FAQ data
const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What does a full service Shopify agency do?',
    answer: 'A full service Shopify agency handles store design, development, optimization, app integration and growth strategy so you can build a profitable online store without technical hassle.',
    isExpanded: false,
  },
  {
    id: 'faq-2',
    question: 'Why should I hire a Shopify development agency?',
    answer: 'A Shopify development agency brings expert design, development and marketing skills to launch your store faster and avoid costly mistakes.',
    isExpanded: false,
  },
  {
    id: 'faq-3',
    question: 'Do you offer dedicated Shopify development services?',
    answer: 'Yes, we provide dedicated Shopify development services with a personal project manager and full expert team supporting your store.',
    isExpanded: false,
  },
  {
    id: 'faq-4',
    question: 'How long does it take to build a Shopify store?',
    answer: 'Most Shopify stores are ready within 2 to 4 weeks depending on complexity, customization needs and content preparation.',
    isExpanded: false,
  },
  {
    id: 'faq-5',
    question: 'Is Ecomm Globe a full service Shopify company?',
    answer: 'Yes, Ecomm Globe is a full service Shopify company delivering end to end Shopify development and store management for brands worldwide.',
    isExpanded: true,
  },
];

export default function ShopifyDevelopmentPage() {
  return (
    <div className="bg-[#050505] relative size-full min-h-screen" style={{ overflowX: 'clip' }}>
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
          <ShopifyHeroSection
            title="Full Service Shopify Development Agency Helping Brands Grow"
            subtitle="Ecomm Globe is a full service Shopify agency delivering expert Shopify development, store management and growth strategies that turn your store into a profitable and scalable business."
            primaryCtaText="Talk To Expert"
            primaryCtaHref="/contact"
            secondaryCtaText="View Success Stories"
            secondaryCtaHref="/case-studies"
          />
        </Section>

        {/* Stats Section */}
        <Section id="stats" padding="md" maxWidth="xl" className="relative overflow-visible pt-0 md:pt-4 lg:pt-6">
          <div className="px-4 md:px-6">
            <ShopifyStatsSection stats={stats} />
          </div>
        </Section>

        {/* What's Included Section */}
        <section id="whats-included" className="relative w-full bg-[#050505] overflow-hidden pt-0 md:pt-4 lg:pt-6">
          <WhatsIncludedSection
            title="What is Included in Shopify Development Services"
            subtitle="Our dedicated Shopify development service covers everything required to build, launch and scale your store successfully on Shopify."
            services={services}
          />
        </section>

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
            {/* Extra glow - left edge */}
            <div className="absolute left-0 top-[10%] w-[280px] md:w-[550px] h-[400px] md:h-[700px]" style={{ background: 'radial-gradient(ellipse at left center, rgba(132,0,255,0.25) 0%, rgba(115,0,255,0.1) 40%, transparent 75%)' }} />
            {/* Decorative globe - left side (flipped) */}
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute left-[-80px] md:left-[-40px] top-[20%] w-[160px] md:w-[260px] lg:w-[340px] opacity-55 -scale-x-100" />
          </div>
          <ShopifyProcessSection steps={processSteps} />
        </Section>

        {/* Launch Store Section */}
        <section className="py-16 md:py-20 lg:py-24 bg-[#050505] overflow-hidden relative">
          {/* Full-width purple gradient background */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[600px]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
              }}
            />
          </div>
          <LaunchStoreSection
            title="Launch Your Shopify Store with Ecomm Globe"
            subtitle="Work with a full-service Shopify agency that manages everything for you. Get a clear growth roadmap with expert Shopify development services. Scale faster with dedicated Shopify solutions and proven systems. Receive transparent reporting and a dedicated project manager."
            ctaText="Get Started Today"
            ctaHref="/contact"
            logoImage="/images/shopify/hero/shopify-hero.png"
          />
        </section>

        {/* FAQ Section */}
        <Section id="faq" padding="md" maxWidth="xl" className="relative overflow-hidden pt-0 md:pt-4 lg:pt-6">
          {/* Purple glows and globe */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute left-0 top-[10%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at left center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)' }} />
            <div className="absolute right-[10%] top-[-5%] w-[200px] md:w-[400px] h-[200px] md:h-[400px]" style={{ background: 'radial-gradient(ellipse at center, rgba(160,60,255,0.18) 0%, rgba(115,0,255,0.06) 50%, transparent 80%)' }} />
            <div className="absolute left-[20%] bottom-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[450px]" style={{ background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.2) 0%, rgba(100,0,200,0.08) 50%, transparent 80%)' }} />
            {/* Decorative globe - left side, flipped */}
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute left-[-70px] md:left-[-30px] bottom-[-20px] w-[160px] md:w-[270px] lg:w-[350px] opacity-55 -scale-x-100" />
          </div>
          <ShopifyFAQSection faqs={faqs} />
        </Section>

        {/* Final CTA Section */}
        <Section id="cta" padding="md" maxWidth="lg" className="relative overflow-hidden pt-0 md:pt-4 lg:pt-6">
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
            {/* Extra glow - right edge */}
            <div className="absolute right-0 bottom-[5%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at right center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)' }} />
            {/* Decorative globe - right side */}
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute right-[-70px] md:right-[-30px] bottom-[-30px] w-[160px] md:w-[270px] lg:w-[350px] opacity-55" />
          </div>
          <ShopifyCTASection />
        </Section>
      </main>

      {/* Footer - Full Width */}
      <Footer />
    </div>
  );
}

