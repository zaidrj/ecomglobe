/**
 * eBay Management Page
 *
 * eBay Management page structure matching Figma design exactly.
 * All sections are positioned absolutely relative to the page container.
 */

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import EbayHeroSection from '@/components/sections/EbayHeroSection';
import EbayStatsSection from '@/components/sections/EbayStatsSection';
import EbayWhatsIncludedSection from '@/components/sections/EbayWhatsIncludedSection';
import EbayProcessSection from '@/components/sections/EbayProcessSection';
import LaunchStoreSection from '@/components/sections/LaunchStoreSection';
import EbayFAQSection from '@/components/sections/EbayFAQSection';
import EbayCTASection from '@/components/sections/EbayCTASection';
import Section from '@/components/layout/Section';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { StatCard, ServiceItem, ProcessStep, FAQItem } from '@/types';

// Stats data matching Figma design
const stats: StatCard[] = [
  {
    icon: '/images/ebay/stats/group-clock.svg',
    value: '3-6',
    description: 'Months to Scale',
    position: 'top-left',
  },
  {
    icon: '/images/ebay/stats/vector-dollar.svg',
    value: '4.5x',
    description: 'Avg ROI',
    position: 'top-right',
  },
  {
    icon: '/images/ebay/stats/group-164428-people.svg',
    value: '100+',
    description: 'Happy Clients',
    position: 'bottom-right',
  },
  {
    icon: '/images/ebay/stats/vector-growth.svg',
    value: '340%',
    description: 'Avg Growth',
    position: 'top-right-2',
  },
];

// Services data
const services: ServiceItem[] = [
  { text: 'Store Setup & Design — Professional eBay store setup with custom branding and category structure.' },
  { text: 'Listing Optimization — SEO optimized titles, descriptions and item specifics for better visibility.' },
  { text: 'eBay SEO Strategy — Advanced keyword research and ranking strategies for eBay search algorithm.' },
  { text: 'Promoted Listings Management — Strategic ad campaigns to boost visibility and drive more sales.' },
  { text: 'Inventory Management — Stock tracking, multi-channel sync and restocking automation.' },
  { text: 'Pricing Optimization — Competitive pricing strategies using market analysis and repricing tools.' },
  { text: 'Returns & Customer Service — Professional handling of returns, disputes and buyer communications.' },
  { text: 'Performance Analytics — Ongoing monitoring, reporting and data driven growth strategies.' },
];

// Process steps data
const processSteps: ProcessStep[] = [
  {
    icon: '/images/ebay/process/vector-store-setup.svg',
    title: 'Store Setup',
    description: 'Create and configure your eBay store professionally',
    order: 1,
  },
  {
    icon: '/images/ebay/process/group-listing-creation.svg',
    title: 'Product Research',
    description: 'Identify profitable products and market opportunities',
    order: 2,
  },
  {
    icon: '/images/ebay/process/vector-stroke-automation.svg',
    title: 'Listing Creation',
    description: 'Build optimized listings that rank and convert',
    order: 3,
  },
  {
    icon: '/images/ebay/process/vector-marketing-launch.svg',
    title: 'Launch Strategy',
    description: 'Launch with promoted listings and ranking tactics',
    order: 4,
  },
  {
    icon: '/images/ebay/process/group-scale-optimize.svg',
    title: 'Ongoing Optimization',
    description: 'Continuously improve performance and profitability',
    order: 5,
  },
];

// FAQ data
const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What does a full service eBay agency do?',
    answer: 'A full service eBay agency handles store setup, listing optimization, SEO, advertising, customer service and growth strategy so you can build a profitable eBay business without daily management.',
    isExpanded: false,
  },
  {
    id: 'faq-2',
    question: 'Why should I hire an eBay management agency?',
    answer: 'An eBay management agency brings expert strategy, tools and experience to grow your store faster and avoid costly mistakes.',
    isExpanded: false,
  },
  {
    id: 'faq-3',
    question: 'Do you offer dedicated eBay management services?',
    answer: 'Yes, we provide dedicated eBay management services with a personal account manager and full expert team supporting your store.',
    isExpanded: false,
  },
  {
    id: 'faq-4',
    question: 'How long does it take to see results on eBay?',
    answer: 'Most sellers start seeing improved visibility and sales within 30 to 60 days as listing optimization and advertising take effect.',
    isExpanded: false,
  },
  {
    id: 'faq-5',
    question: 'Is Ecomm Globe a full service eBay company?',
    answer: 'Yes, Ecomm Globe is a full service eBay company delivering end to end eBay management and store optimization for sellers worldwide.',
    isExpanded: true,
  },
];

export default function EbayManagementPage() {
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
            <OptimizedImage src="/images/globe.png" alt="" width={500} height={500} className="absolute right-[-80px] md:right-[-40px] top-[10%] w-[200px] md:w-[350px] lg:w-[450px] opacity-25" />
          </div>
          <EbayHeroSection
            title="Full Service eBay Management Agency Helping Brands Grow"
            subtitle="Ecomm Globe is a full service eBay agency delivering expert eBay management, store optimization and growth strategies that turn your store into a profitable and scalable business."
            primaryCtaText="Talk To Expert"
            primaryCtaHref="/contact"
            secondaryCtaText="View Success Stories"
            secondaryCtaHref="/case-studies"
          />
        </Section>

        {/* Stats Section */}
        <Section id="stats" padding="md" maxWidth="xl" className="relative overflow-visible pt-0 md:pt-4 lg:pt-6">
          <div className="px-4 md:px-6">
            <EbayStatsSection stats={stats} />
          </div>
        </Section>

        {/* What's Included Section */}
        <section id="whats-included" className="relative w-full bg-[#050505] overflow-hidden pt-0 md:pt-4 lg:pt-6">
          <EbayWhatsIncludedSection
            title="What is Included in eBay Management Services"
            subtitle="Our dedicated eBay management service covers everything required to build, launch and scale your store successfully on eBay."
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
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute left-[-80px] md:left-[-40px] top-[20%] w-[160px] md:w-[260px] lg:w-[340px] opacity-25 -scale-x-100" />
          </div>
          <EbayProcessSection steps={processSteps} />
        </Section>

        {/* Launch Store Section */}
        <section id="launch" className="relative w-full py-16 md:py-20 lg:py-24 bg-[#050505] overflow-hidden">
          {/* Full-width purple gradient background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.15) 0%, rgba(132,0,255,0.08) 40%, transparent 70%)',
            }}
          />
          <LaunchStoreSection
            title="Launch Your eBay Store with Ecomm Globe"
            subtitle="Work with a full-service eBay agency that manages everything for you. Get a clear growth roadmap with expert eBay management services. Scale faster with dedicated eBay solutions and proven systems. Receive transparent reporting and a dedicated account manager."
            ctaText="Get Started Today"
            ctaHref="/contact"
            logoImage="/images/ebay/hero/ebay-hero.png"
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
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute left-[-70px] md:left-[-30px] bottom-[-20px] w-[160px] md:w-[270px] lg:w-[350px] opacity-25 -scale-x-100" />
          </div>
          <EbayFAQSection faqs={faqs} />
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
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute right-[-70px] md:right-[-30px] bottom-[-30px] w-[160px] md:w-[270px] lg:w-[350px] opacity-25" />
          </div>
          <EbayCTASection />
        </Section>
      </main>

      {/* Footer - Full Width */}
      <Footer />
    </div>
  );
}
