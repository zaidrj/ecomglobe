/**
 * Amazon Marketing Page
 * 
 * Amazon Marketing page structure matching Figma design exactly.
 * All sections are positioned absolutely relative to the page container.
 */

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import AmazonHeroSection from '@/components/sections/AmazonHeroSection';
import AmazonStatsSection from '@/components/sections/AmazonStatsSection';
import WhatsIncludedSection from '@/components/sections/WhatsIncludedSection';
import AmazonProcessSection from '@/components/sections/AmazonProcessSection';
import LaunchStoreSection from '@/components/sections/LaunchStoreSection';
import AmazonFAQSection from '@/components/sections/AmazonFAQSection';
import AmazonCTASection from '@/components/sections/AmazonCTASection';
import Section from '@/components/layout/Section';
import Container from '@/components/layout/Container';
import { Heading, Text } from '@/components/ui/Typography';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { StatCard, ServiceItem, AmazonProcessStep, FAQItem } from '@/types';

// Stats data matching Figma design
const stats: StatCard[] = [
  {
    icon: '/images/amazon/stats/group-clock.svg',
    value: '3-6',
    description: 'Months to Scale',
    position: 'top-left',
  },
  {
    icon: '/images/amazon/stats/vector-dollar.svg',
    value: '4.5x',
    description: 'Avg ROI',
    position: 'top-right',
  },
  {
    icon: '/images/amazon/stats/group-164428-people.svg',
    value: '100+',
    description: 'Happy Clients',
    position: 'bottom-right',
  },
  {
    icon: '/images/amazon/stats/vector-growth.svg',
    value: '340%',
    description: 'Avg Growth',
    position: 'top-right-2',
  },
];

// Services data
const services: ServiceItem[] = [
  { text: 'Product Research — We find profitable, low risk products using advanced tools and market analysis.' },
  { text: 'Store Setup — Complete Amazon account setup with branding, compliance and category approvals.' },
  { text: 'Listing Creation — SEO optimised listings that increase visibility, clicks and conversions.' },
  { text: 'A Plus Content — Enhanced brand content that builds trust and improves conversion rates.' },
  { text: 'Amazon PPC Management — Smart ad strategies that drive traffic and maximise return on ad spend.' },
  { text: 'Inventory Management — Stock planning and forecasting to avoid overstock and lost sales.' },
  { text: 'Order Fulfilment Support — FBA and FBM setup with smooth fulfilment workflows.' },
  { text: 'Performance Optimisation — Ongoing data driven improvements to grow sales and profit.' },
];

// Process steps data
const processSteps: AmazonProcessStep[] = [
  {
    icon: '/images/amazon/process/group-account-setup.svg',
    title: 'ACCOUNT\nSETUP',
    description: 'Build and configure your Amazon store correctly',
    order: 1,
  },
  {
    icon: '/images/amazon/process/group-product-research.svg',
    title: 'PRODUCT RESEARCH',
    description: 'Find high demand, low competition products',
    order: 2,
  },
  {
    icon: '/images/amazon/process/group-listing-creation.svg',
    title: 'LISTING\nCREATION',
    description: 'Create SEO optimised, high converting product listings',
    order: 3,
  },
  {
    icon: '/images/amazon/process/vector-launch-strategy.svg',
    title: 'LAUNCH\nSTRATEGY',
    description: 'Launch with ads and ranking strategy',
    order: 4,
  },
  {
    icon: '/images/amazon/process/vector-stroke-optimization.svg',
    title: 'ONGOING\nOPTIMISATION',
    description: 'Improve performance, sales and profitability continuously',
    order: 5,
  },
];

// FAQ data
const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What does a full service Amazon agency do?',
    answer: 'A full service Amazon agency handles product research, store setup, listings, PPC, optimisation and growth, so you can build a profitable Amazon business without daily management.',
    isExpanded: false,
  },
  {
    id: 'faq-2',
    question: 'Why should I hire an Amazon marketing agency?',
    answer: 'An Amazon marketing agency brings expert strategy, tools and experience to grow your store faster and avoid costly mistakes.',
    isExpanded: false,
  },
  {
    id: 'faq-3',
    question: 'Do you offer dedicated Amazon marketing services?',
    answer: 'Yes, we provide dedicated Amazon marketing services with a personal account manager and a full expert team supporting your store.',
    isExpanded: false,
  },
  {
    id: 'faq-4',
    question: 'How long does it take to see results on Amazon?',
    answer: 'Most clients start seeing traction within 60 to 90 days, with steady growth as optimisation and advertising mature.',
    isExpanded: false,
  },
  {
    id: 'faq-5',
    question: 'Is Ecomm Globe a full service Amazon company?',
    answer: 'Yes, Ecomm Globe is a full service Amazon company delivering end to end Amazon marketing service and account management for brands worldwide.',
    isExpanded: true,
  },
];

export default function AmazonMarketingPage() {
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
          <AmazonHeroSection
            title="Full Service Amazon Marketing Agency Helping Brands Grow"
            subtitle="Ecomm Globe is a full service Amazon agency delivering expert Amazon marketing service, Amazon account management and growth strategies that turn your store into a profitable and scalable business."
            primaryCtaText="Talk To Expert"
            primaryCtaHref="/contact"
            secondaryCtaText="View Success Stories"
            secondaryCtaHref="/case-studies"
          />
        </Section>

        {/* Stats Section */}
        <Section id="stats" padding="md" maxWidth="lg" className="relative overflow-hidden pt-0 md:pt-4 lg:pt-6">
          <AmazonStatsSection stats={stats} />
        </Section>

        {/* What's Included Section */}
        <section id="whats-included" className="relative w-full bg-[#050505] overflow-hidden pt-0 md:pt-4 lg:pt-6">
          <WhatsIncludedSection
            title="What is Included in Amazon Account Management Services"
            subtitle="Our dedicated Amazon account management service cover everything required to build, launch and scale your store successfully on Amazon."
            services={services}
          />
        </section>

        {/* Our Process Section */}
        <Section id="process" padding="md" maxWidth="lg" className="relative overflow-hidden pt-0 md:pt-4 lg:pt-6">
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
            <div className="absolute left-0 top-[10%] w-[280px] md:w-[550px] h-[400px] md:h-[700px]" style={{ background: 'radial-gradient(ellipse at left center, rgba(132,0,255,0.25) 0%, rgba(115,0,255,0.1) 40%, transparent 75%)' }} />
            {/* Decorative globe - left side (flipped) */}
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute left-[-80px] md:left-[-40px] top-[20%] w-[160px] md:w-[260px] lg:w-[340px] opacity-55 -scale-x-100" />
          </div>
          <AmazonProcessSection steps={processSteps} />
        </Section>

        {/* Launch Store Section - Full width without side padding */}
        <section id="launch" className="relative w-full py-16 md:py-20 lg:py-24 bg-[#050505] overflow-hidden">
          {/* Full-width purple gradient background */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.15) 0%, rgba(132,0,255,0.08) 40%, transparent 70%)',
            }}
          />
          <LaunchStoreSection
            title="Launch Your Amazon Store with Ecomm Globe"
            subtitle="Work with a full-service Amazon agency that manages everything for you. Get a clear growth roadmap with expert Amazon account management services. Scale faster with dedicated Amazon marketing services and proven systems. Receive transparent reporting and a dedicated account manager."
            ctaText="Get Started Today"
            ctaHref="/contact"
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
          <AmazonFAQSection faqs={faqs} />
        </Section>

        {/* Final CTA Section */}
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
            {/* Extra glow - right edge */}
            <div className="absolute right-0 bottom-[5%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at right center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)' }} />
            {/* Decorative globe - right side */}
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute right-[-70px] md:right-[-30px] bottom-[-30px] w-[160px] md:w-[270px] lg:w-[350px] opacity-55" />
          </div>
          <AmazonCTASection />
        </Section>
      </main>

      {/* Footer - Full Width */}
      <Footer />
    </div>
  );
}
