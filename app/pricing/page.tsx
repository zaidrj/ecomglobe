/**
 * Pricing Page
 * 
 * Pricing page structure matching homepage design.
 * Sections are organized sequentially with proper spacing.
 */

'use client';

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import PricingHeroSection from '@/components/sections/PricingHeroSection';
import PricingTierCard from '@/components/sections/PricingTierCard';
import PricingCTASection from '@/components/sections/PricingCTASection';
import Section from '@/components/layout/Section';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { PricingTier } from '@/types';

// Pricing tiers data matching Figma design
const tiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: {
      monthly: '$2500',
      yearly: '$2000',
    },
    description: 'Perfect for new sellers getting started',
    features: [
      { text: 'Single platform setup', enabled: true },
      { text: 'Basic listing optimization', enabled: true },
      { text: 'Up to 25 product listings', enabled: true },
      { text: '30 days of support', enabled: true },
      { text: 'Performance analytics', enabled: true },
      { text: 'Email support', enabled: true },
      { text: 'Setup guide & training', enabled: true },
      { text: 'Multi-channel integration', enabled: false },
      { text: 'Advanced advertising', enabled: false },
      { text: 'Dedicated account manager', enabled: false },
      { text: 'Priority support', enabled: false },
      { text: 'Custom integrations', enabled: false },
    ],
    isHighlighted: false,
    ctaText: 'Get started',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: {
      monthly: '$5,000',
      yearly: '$4,000',
    },
    description: 'For established brands ready to scale',
    features: [
      { text: '2-3 platform setup', enabled: true },
      { text: 'Advanced marketing integration', enabled: true },
      { text: 'Up to 100 product listings', enabled: true },
      { text: '90 days of support + training', enabled: true },
      { text: 'Multi-channel inventory sync', enabled: true },
      { text: 'Monthly optimization', enabled: true },
      { text: 'PPC campaign management', enabled: true },
      { text: 'A/B testing & CRO', enabled: true },
      { text: 'Priority email & chat support', enabled: true },
      { text: 'Quarterly strategy calls', enabled: true },
      { text: 'Unlimited platforms', enabled: false },
      { text: 'Dedicated account manager', enabled: false },
    ],
    isHighlighted: true,
    ctaText: 'Scale faster',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: {
      monthly: 'Custom',
    },
    description: 'Maximum growth for established brands',
    features: [
      { text: 'Unlimited platform setup', enabled: true },
      { text: 'Full automation suite', enabled: true },
      { text: 'Unlimited product listings', enabled: true },
      { text: 'Dedicated account manager', enabled: true },
      { text: 'Ongoing optimization', enabled: true },
      { text: 'Advanced analytics & reporting', enabled: true },
      { text: 'Custom integrations', enabled: true },
      { text: 'Creator partnerships (TikTok)', enabled: true },
      { text: 'White-glove migration', enabled: true },
      { text: '24/7 priority support', enabled: true },
      { text: 'Weekly strategy calls', enabled: true },
      { text: 'Team training sessions', enabled: true },
    ],
    isHighlighted: false,
    ctaText: 'Lets talk',
  },
];

export default function PricingPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] w-full" style={{ overflowX: 'clip' }}>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      {/* Navbar */}
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
          <PricingHeroSection />
        </Section>

        {/* Pricing Tiers Section */}
        <Section id="pricing-tiers" padding="md" maxWidth="lg" className="relative overflow-hidden pt-0 md:pt-4 lg:pt-6">
          <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-4 sm:gap-[9.957px] items-stretch justify-center w-full px-4 md:px-6 lg:px-[9.957px]">
            {tiers.map((tier) => (
              <PricingTierCard
                key={tier.id}
                tier={tier}
                period="monthly"
                className="w-full sm:w-[calc(50%-4.5px)] lg:w-[330px] flex-grow"
              />
            ))}
          </div>
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
            {/* Enhanced purple glow - right side */}
            <div className="absolute right-0 bottom-[5%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at right center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)' }} />
            {/* Decorative globe - right side */}
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute right-[-70px] md:right-[-30px] bottom-[-30px] w-[160px] md:w-[270px] lg:w-[350px] opacity-55" />
          </div>
          <PricingCTASection />
        </Section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

