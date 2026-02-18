/**
 * Walmart Marketplace Page
 *
 * Walmart Marketplace page structure matching Figma design exactly.
 * All sections are positioned absolutely relative to the page container.
 */

import Script from 'next/script';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Walmart Marketplace Management - Seller Services & Optimization",
  description: "EcommGlobe's Walmart marketplace services help brands launch and scale on Walmart. Account setup, catalog management, advertising & fulfillment optimization.",
  keywords: ["walmart marketplace", "walmart seller services", "walmart management", "walmart optimization", "ecommglobe walmart"],
  alternates: { canonical: "https://www.ecommglobe.com/walmart-marketplace" },
  openGraph: { title: "Walmart Marketplace Management - Seller Services | EcommGlobe", description: "Expert Walmart marketplace management. Launch and scale your Walmart business.", url: "https://www.ecommglobe.com/walmart-marketplace" },
};

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import WalmartHeroSection from '@/components/sections/WalmartHeroSection';
import WalmartStatsSection from '@/components/sections/WalmartStatsSection';
import WhatsIncludedSection from '@/components/sections/WhatsIncludedSection';
import WalmartProcessSection from '@/components/sections/WalmartProcessSection';
import LaunchStoreSection from '@/components/sections/LaunchStoreSection';
import WalmartFAQSection from '@/components/sections/WalmartFAQSection';
import WalmartCTASection from '@/components/sections/WalmartCTASection';
import Section from '@/components/layout/Section';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { StatCard, ServiceItem, ProcessStep, FAQItem } from '@/types';

// Stats data matching Figma design
const stats: StatCard[] = [
  {
    icon: '/images/walmart/stats/group-clock.svg',
    value: '3-6',
    description: 'Months to Scale',
    position: 'top-left',
  },
  {
    icon: '/images/walmart/stats/vector-dollar.svg',
    value: '4.5x',
    description: 'Avg ROI',
    position: 'top-right',
  },
  {
    icon: '/images/walmart/stats/group-164428-people.svg',
    value: '100+',
    description: 'Happy Clients',
    position: 'bottom-right',
  },
  {
    icon: '/images/walmart/stats/vector-growth.svg',
    value: '340%',
    description: 'Avg Growth',
    position: 'top-right-2',
  },
];

// Services data matching Figma design
const services: ServiceItem[] = [
  { text: 'Marketplace Application — Expert guidance through Walmart seller application and approval process.' },
  { text: 'Store Setup & Configuration — Complete Walmart Marketplace store setup with optimized settings.' },
  { text: 'Product Listing Optimization — SEO optimized listings designed to rank higher on Walmart search.' },
  { text: 'Walmart Advertising — Strategic ad campaigns to drive traffic and maximize return on spend.' },
  { text: 'Inventory Management — Stock planning and forecasting to prevent stockouts and overstock.' },
  { text: 'Pricing Strategy — Competitive pricing optimization using Walmart repricing tools.' },
  { text: 'Order Fulfillment Support — WFS and third party fulfillment setup for fast reliable shipping.' },
  { text: 'Performance Analytics — Ongoing monitoring and data driven optimization for growth.' },
];

// Process steps data matching Figma design
const processSteps: ProcessStep[] = [
  {
    icon: '/images/walmart/process/group-account-creation.svg',
    title: 'Application',
    description: 'Complete Walmart seller application and get approved',
    order: 1,
  },
  {
    icon: '/images/walmart/process/vector-catalog-upload.svg',
    title: 'Store Setup',
    description: 'Configure your Walmart Marketplace store correctly',
    order: 2,
  },
  {
    icon: '/images/walmart/process/group-content-enhancement.svg',
    title: 'Listing Creation',
    description: 'Create optimized product listings for Walmart search',
    order: 3,
  },
  {
    icon: '/images/walmart/process/vector-advertising-launch.svg',
    title: 'Launch Strategy',
    description: 'Launch with advertising and ranking strategy',
    order: 4,
  },
  {
    icon: '/images/walmart/process/vector-growth-management.svg',
    title: 'Ongoing Optimization',
    description: 'Improve performance, sales and profitability continuously',
    order: 5,
  },
];

// FAQ data matching Figma design
const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What does a full service Walmart agency do?',
    answer: 'A full service Walmart agency handles marketplace application, store setup, listings, advertising, optimization and growth so you can build a profitable Walmart business without daily management.',
    isExpanded: false,
  },
  {
    id: 'faq-2',
    question: 'Why should I hire a Walmart marketplace agency?',
    answer: 'A Walmart marketplace agency brings expert strategy, tools and experience to grow your store faster and avoid costly mistakes on a competitive platform.',
    isExpanded: false,
  },
  {
    id: 'faq-3',
    question: 'Do you offer dedicated Walmart marketplace services?',
    answer: 'Yes, we provide dedicated Walmart marketplace services with a personal account manager and full expert team supporting your store.',
    isExpanded: false,
  },
  {
    id: 'faq-4',
    question: 'How long does it take to see results on Walmart?',
    answer: 'Most sellers start seeing traction within 60 to 90 days with steady growth as optimization and advertising mature.',
    isExpanded: false,
  },
  {
    id: 'faq-5',
    question: 'Is Ecomm Globe a full service Walmart company?',
    answer: 'Yes, Ecomm Globe is a full service Walmart company delivering end to end Walmart marketplace management and optimization for brands worldwide.',
    isExpanded: true,
  },
];

export default function WalmartMarketplacePage() {
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
          <WalmartHeroSection
            title="Full Service Walmart Marketplace Agency Helping Brands Grow"
            subtitle="Ecomm Globe is a full service Walmart agency delivering expert Walmart marketplace management, store optimization and growth strategies that turn your store into a profitable and scalable business."
            primaryCtaText="Talk To Expert"
            primaryCtaHref="/contact"
            secondaryCtaText="View Success Stories"
            secondaryCtaHref="/case-studies"
          />
        </Section>

        {/* Stats Section */}
        <Section id="stats" padding="md" maxWidth="xl" className="relative overflow-visible pt-0 md:pt-4 lg:pt-6">
          <div className="px-4 md:px-6">
            <WalmartStatsSection stats={stats} />
          </div>
        </Section>

        {/* What's Included Section */}
        <section id="whats-included" className="relative w-full bg-[#050505] overflow-hidden pt-0 md:pt-4 lg:pt-6">
          <WhatsIncludedSection
            title="What is Included in Walmart Marketplace Services"
            subtitle="Our dedicated Walmart marketplace service covers everything required to build, launch and scale your store successfully on Walmart."
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
          <WalmartProcessSection steps={processSteps} />
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
            title="Launch Your Walmart Store with Ecomm Globe"
            subtitle="Work with a full-service Walmart agency that manages everything for you. Get a clear growth roadmap with expert Walmart marketplace services. Scale faster with dedicated Walmart solutions and proven systems. Receive transparent reporting and a dedicated account manager."
            ctaText="Get Started Today"
            ctaHref="/contact"
            logoImage="/images/walmart/hero/walmart-hero.png"
          />
        </section>

        {/* FAQ Section */}
        <Section id="faq" padding="md" maxWidth="xl" className="relative overflow-hidden pt-0 md:pt-4 lg:pt-6">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute left-0 top-[10%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at left center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)' }} />
            <div className="absolute right-[10%] top-[-5%] w-[200px] md:w-[400px] h-[200px] md:h-[400px]" style={{ background: 'radial-gradient(ellipse at center, rgba(160,60,255,0.18) 0%, rgba(115,0,255,0.06) 50%, transparent 80%)' }} />
            <div className="absolute left-[20%] bottom-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[450px]" style={{ background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.2) 0%, rgba(100,0,200,0.08) 50%, transparent 80%)' }} />
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute left-[-70px] md:left-[-30px] bottom-[-20px] w-[160px] md:w-[270px] lg:w-[350px] opacity-55 -scale-x-100" />
          </div>
          <WalmartFAQSection faqs={faqs} />
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
          <WalmartCTASection />
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

