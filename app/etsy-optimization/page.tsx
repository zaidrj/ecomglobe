/**
 * Etsy Optimization Page
 * 
 * Etsy Optimization page structure matching Figma design exactly.
 * All sections are positioned absolutely relative to the page container.
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Etsy Optimization Agency - Shop Setup & SEO Services",
  description: "EcommGlobe's Etsy optimization services help sellers increase visibility and sales. Shop setup, SEO optimization, listing optimization & advertising management for Etsy sellers.",
  keywords: ["etsy optimization", "etsy seo", "etsy shop setup", "etsy marketing", "etsy seller services", "ecommglobe etsy"],
  alternates: { canonical: "https://www.ecommglobe.com/etsy-optimization" },
  openGraph: { title: "Etsy Optimization Agency - Shop Setup & SEO | EcommGlobe", description: "Professional Etsy optimization services. Increase visibility and sales on Etsy.", url: "https://www.ecommglobe.com/etsy-optimization" },
};

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import EtsyHeroSection from '@/components/sections/EtsyHeroSection';
import EtsyStatsSection from '@/components/sections/EtsyStatsSection';
import WhatsIncludedSection from '@/components/sections/WhatsIncludedSection';
import EtsyProcessSection from '@/components/sections/EtsyProcessSection';
import LaunchStoreSection from '@/components/sections/LaunchStoreSection';
import EtsyFAQSection from '@/components/sections/EtsyFAQSection';
import EtsyCTASection from '@/components/sections/EtsyCTASection';
import Section from '@/components/layout/Section';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { StatCard, ServiceItem, ProcessStep, FAQItem } from '@/types';

// Stats data matching Figma design
const stats: StatCard[] = [
  {
    icon: '/images/etsy/stats/group-clock.svg',
    value: '3-6',
    description: 'Months to Scale',
    position: 'top-left',
  },
  {
    icon: '/images/etsy/stats/vector-dollar.svg',
    value: '4.5x',
    description: 'Avg ROI',
    position: 'top-right',
  },
  {
    icon: '/images/etsy/stats/group-164428-people.svg',
    value: '100+',
    description: 'Happy Clients',
    position: 'bottom-right',
  },
  {
    icon: '/images/etsy/stats/vector-growth.svg',
    value: '340%',
    description: 'Avg Growth',
    position: 'top-right-2',
  },
];

// Services data
const services: ServiceItem[] = [
  { text: 'Shop Setup & Branding — Complete Etsy shop setup with professional branding and category optimization.' },
  { text: 'Listing Optimization — SEO optimized titles, tags and descriptions to boost visibility and clicks.' },
  { text: 'Product Photography Guidance — Expert advice on product images that attract buyers and increase conversions.' },
  { text: 'Etsy SEO Strategy — Advanced keyword research and ranking strategies tailored for Etsy search.' },
  { text: 'Pricing Strategy — Competitive pricing analysis to maximize profit while staying competitive.' },
  { text: 'Review Management — Strategies to build positive reviews and maintain strong seller ratings.' },
  { text: 'Advertising Management — Etsy Ads campaign setup and optimization for maximum return on spend.' },
  { text: 'Performance Analytics — Ongoing data tracking and reporting to identify growth opportunities.' },
];

// Process steps data
const processSteps: ProcessStep[] = [
  {
    icon: '/images/etsy/process/group-shop-audit.svg',
    title: 'Shop Audit',
    description: 'Review your current Etsy shop and identify opportunities',
    order: 1,
  },
  {
    icon: '/images/etsy/process/group-seo-research.svg',
    title: 'SEO Research',
    description: 'Find high traffic keywords for your niche',
    order: 2,
  },
  {
    icon: '/images/etsy/process/group-listing-optimization.svg',
    title: 'Listing Optimization',
    description: 'Optimize titles, tags, descriptions and images',
    order: 3,
  },
  {
    icon: '/images/etsy/process/vector-visual-enhancement.svg',
    title: 'Launch Strategy',
    description: 'Promote listings with ads and ranking tactics',
    order: 4,
  },
  {
    icon: '/images/etsy/process/vector-marketing-setup.svg',
    title: 'Ongoing Growth',
    description: 'Monitor performance and continuously optimize',
    order: 5,
  },
];

// FAQ data
const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What does a full service Etsy agency do?',
    answer: 'A full service Etsy agency handles shop setup, listing optimization, SEO, advertising and growth strategy so you can build a profitable Etsy business without daily management.',
    isExpanded: false,
  },
  {
    id: 'faq-2',
    question: 'Why should I hire an Etsy optimization agency?',
    answer: 'An Etsy optimization agency brings expert SEO, listing and marketing skills to grow your shop faster and avoid costly mistakes.',
    isExpanded: false,
  },
  {
    id: 'faq-3',
    question: 'Do you offer dedicated Etsy optimization services?',
    answer: 'Yes, we provide dedicated Etsy optimization services with a personal account manager and full expert team supporting your shop.',
    isExpanded: false,
  },
  {
    id: 'faq-4',
    question: 'How long does it take to see results on Etsy?',
    answer: 'Most sellers start seeing improved visibility and sales within 30 to 60 days as listing optimization and advertising take effect.',
    isExpanded: false,
  },
  {
    id: 'faq-5',
    question: 'Is Ecomm Globe a full service Etsy company?',
    answer: 'Yes, Ecomm Globe is a full service Etsy company delivering end to end Etsy optimization and shop management for sellers worldwide.',
    isExpanded: true,
  },
];

export default function EtsyOptimizationPage() {
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
          <EtsyHeroSection
            title="Full Service Etsy Optimization Agency Helping Brands Grow"
            subtitle="Ecomm Globe is a full service Etsy agency delivering expert Etsy optimization, store management and growth strategies that turn your shop into a profitable and scalable business."
            primaryCtaText="Talk To Expert"
            primaryCtaHref="/contact"
            secondaryCtaText="View Success Stories"
            secondaryCtaHref="/case-studies"
          />
        </Section>

        {/* Stats Section */}
        <Section id="stats" padding="md" maxWidth="xl" className="relative overflow-visible pt-0 md:pt-4 lg:pt-6">
          <div className="px-4 md:px-6">
            <EtsyStatsSection stats={stats} />
          </div>
        </Section>

        {/* What's Included Section */}
        <section id="whats-included" className="relative w-full bg-[#050505] overflow-hidden pt-0 md:pt-4 lg:pt-6">
          <WhatsIncludedSection
            title="What is Included in Etsy Optimization Services"
            subtitle="Our dedicated Etsy optimization service covers everything required to build, launch and scale your shop successfully on Etsy."
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
          <EtsyProcessSection steps={processSteps} />
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
            title="Launch Your Etsy Shop with Ecomm Globe"
            subtitle="Work with a full-service Etsy agency that manages everything for you. Get a clear growth roadmap with expert Etsy optimization services. Scale faster with dedicated Etsy solutions and proven systems. Receive transparent reporting and a dedicated account manager."
            ctaText="Get Started Today"
            ctaHref="/contact"
            logoImage="/images/etsy/hero/etsy-hero.png"
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
          <EtsyFAQSection faqs={faqs} />
        </Section>

        {/* Final CTA Section */}
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
            {/* Extra glow - right edge */}
            <div className="absolute right-0 bottom-[5%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at right center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)' }} />
            {/* Decorative globe - right side */}
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute right-[-70px] md:right-[-30px] bottom-[-30px] w-[160px] md:w-[270px] lg:w-[350px] opacity-55" />
          </div>
          <EtsyCTASection />
        </Section>
      </main>

      {/* Footer - Full Width */}
      <Footer />
    </div>
  );
}

