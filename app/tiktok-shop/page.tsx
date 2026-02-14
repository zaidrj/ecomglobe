/**
 * TikTok Shop Page
 *
 * TikTok Shop page structure matching Figma design exactly.
 * All sections are positioned absolutely relative to the page container.
 */

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import TikTokHeroSection from '@/components/sections/TikTokHeroSection';
import TikTokStatsSection from '@/components/sections/TikTokStatsSection';
import TikTokWhatsIncludedSection from '@/components/sections/TikTokWhatsIncludedSection';
import TikTokProcessSection from '@/components/sections/TikTokProcessSection';
import LaunchStoreSection from '@/components/sections/LaunchStoreSection';
import TikTokFAQSection from '@/components/sections/TikTokFAQSection';
import TikTokCTASection from '@/components/sections/TikTokCTASection';
import Section from '@/components/layout/Section';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { StatCard, ServiceItem, ProcessStep, FAQItem } from '@/types';

// Stats data matching Figma design
const stats: StatCard[] = [
  {
    icon: '/images/tiktok/stats/group-clock.svg',
    value: '3-6',
    description: 'Months to Scale',
    position: 'top-left',
  },
  {
    icon: '/images/tiktok/stats/vector-dollar.svg',
    value: '4.5x',
    description: 'Avg ROI',
    position: 'top-right',
  },
  {
    icon: '/images/tiktok/stats/group-164428-people.svg',
    value: '100+',
    description: 'Happy Clients',
    position: 'bottom-right',
  },
  {
    icon: '/images/tiktok/stats/vector-growth.svg',
    value: '340%',
    description: 'Avg Growth',
    position: 'top-right-2',
  },
];

// Services data
const services: ServiceItem[] = [
  { text: 'TikTok Shop Setup \u2014 Complete shop registration, configuration and category approval.' },
  { text: 'Product Listing Creation \u2014 Optimized product pages with compelling descriptions and media.' },
  { text: 'Content Strategy \u2014 Viral content planning and creator collaboration for maximum reach.' },
  { text: 'TikTok Ads Management \u2014 Strategic ad campaigns across in-feed, spark and shop ads formats.' },
  { text: 'Influencer Partnerships \u2014 Connect with creators and affiliates to drive authentic product promotion.' },
  { text: 'Live Shopping Support \u2014 Setup and strategy for TikTok Live selling events.' },
  { text: 'Order Fulfillment Integration \u2014 Seamless fulfillment setup with shipping and logistics partners.' },
  { text: 'Performance Analytics \u2014 Real time tracking, reporting and data driven optimization.' },
];

// Process steps data
const processSteps: ProcessStep[] = [
  {
    icon: '/images/tiktok/process/group-account-setup.svg',
    title: 'Shop Setup',
    description: 'Register and configure your TikTok Shop correctly',
    order: 1,
  },
  {
    icon: '/images/tiktok/process/group-product-integration.svg',
    title: 'Content Planning',
    description: 'Develop a viral content and product strategy',
    order: 2,
  },
  {
    icon: '/images/tiktok/process/group-content-strategy.svg',
    title: 'Product Launch',
    description: 'Create optimized listings and launch campaigns',
    order: 3,
  },
  {
    icon: '/images/tiktok/process/vector-creator-outreach.svg',
    title: 'Creator Outreach',
    description: 'Partner with influencers and affiliates for promotion',
    order: 4,
  },
  {
    icon: '/images/tiktok/process/group-scale-optimize.svg',
    title: 'Scale & Optimize',
    description: 'Grow sales through ads, live shopping and analytics',
    order: 5,
  },
];

// FAQ data
const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What does a full service TikTok Shop agency do?',
    answer: 'A full service TikTok Shop agency handles shop setup, product listings, content strategy, advertising, influencer partnerships and growth so you can build a profitable TikTok business without daily management.',
    isExpanded: false,
  },
  {
    id: 'faq-2',
    question: 'Why should I hire a TikTok Shop agency?',
    answer: 'A TikTok Shop agency brings expert content strategy, advertising skills and creator networks to grow your shop faster and capitalize on social commerce trends.',
    isExpanded: false,
  },
  {
    id: 'faq-3',
    question: 'Do you offer dedicated TikTok Shop services?',
    answer: 'Yes, we provide dedicated TikTok Shop services with a personal account manager and full expert team supporting your store.',
    isExpanded: false,
  },
  {
    id: 'faq-4',
    question: 'How long does it take to see results on TikTok Shop?',
    answer: 'Most sellers start seeing traction within 30 to 60 days as content strategy, creator partnerships and advertising gain momentum.',
    isExpanded: false,
  },
  {
    id: 'faq-5',
    question: 'Is Ecomm Globe a full service TikTok company?',
    answer: 'Yes, Ecomm Globe is a full service TikTok company delivering end to end TikTok Shop management and growth strategy for brands worldwide.',
    isExpanded: true,
  },
];

export default function TikTokShopPage() {
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
          <TikTokHeroSection
            title="Full Service TikTok Shop Agency Helping Brands Grow"
            subtitle="Ecomm Globe is a full service TikTok Shop agency delivering expert TikTok commerce, shop management and growth strategies that turn your store into a profitable and scalable business."
            primaryCtaText="Talk To Expert"
          />
        </Section>

        {/* Stats Section */}
        <Section id="stats" padding="md" maxWidth="xl" className="relative overflow-visible pt-0 md:pt-4 lg:pt-6">
          <div className="px-4 md:px-6">
            <TikTokStatsSection stats={stats} />
          </div>
        </Section>

        {/* What's Included Section */}
        <section id="whats-included" className="relative w-full bg-[#050505] overflow-hidden pt-0 md:pt-4 lg:pt-6">
          <TikTokWhatsIncludedSection
            title="What is Included in TikTok Shop Services"
            subtitle="Our dedicated TikTok Shop service covers everything required to build, launch and scale your store successfully on TikTok."
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
          <TikTokProcessSection steps={processSteps} />
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
            title="Launch Your TikTok Shop with Ecomm Globe"
            subtitle="Work with a full-service TikTok agency that manages everything for you. Get a clear growth roadmap with expert TikTok Shop services. Scale faster with dedicated TikTok solutions and proven systems. Receive transparent reporting and a dedicated account manager."
            ctaText="Limited-time free audit available."
            ctaHref="/contact"
            logoImage="/images/tiktok/hero/tiktok-hero.png"
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
          <TikTokFAQSection faqs={faqs} />
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
          <TikTokCTASection />
        </Section>
      </main>

      {/* Footer - Full Width */}
      <Footer />
    </div>
  );
}
