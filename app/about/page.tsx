/**
 * About Page
 * 
 * About page structure matching Figma design exactly.
 * All sections are positioned absolutely relative to the page container.
 */

import OptimizedImage from '@/components/ui/OptimizedImage';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import AboutStatsSection from '@/components/sections/AboutStatsSection';
import AboutMissionSection from '@/components/sections/AboutMissionSection';
import AboutValuesSection from '@/components/sections/AboutValuesSection';
import AboutTeamSection from '@/components/sections/AboutTeamSection';
import AboutCTASection from '@/components/sections/AboutCTASection';
import Section from '@/components/layout/Section';
import type { StatItem, ValueCard, TeamMember } from '@/types';

// Stats data matching Figma design
const stats: StatItem[] = [
  { label: 'Major project', value: '100+' },
  { label: 'Clients', value: '150k+' },
  { label: 'awards', value: '23' },
  { label: 'years of work', value: '25' },
];

// Values data matching Figma design
const values: ValueCard[] = [
  {
    id: '1',
    icon: '/images/about/values/carbon-result.svg',
    title: 'Results-Driven',
    description: 'We measure our success by your growth. Every strategy is data-backed and ROI-focused for maximum results.',
  },
  {
    id: '2',
    icon: '/images/about/values/formkit-people.svg',
    title: 'Client-First',
    description: 'Your success is our success. We treat your business like our own and provide white-glove service always.',
  },
  {
    id: '3',
    icon: '/images/about/values/hugeicons-ai-innovation-01.svg',
    title: 'Innovation',
    description: 'We stay ahead of marketplace trends and leverage cutting-edge tools to give you an extra competitive edge.',
  },
  {
    id: '4',
    icon: '/images/about/values/ph-cube-transparent-thin.svg',
    title: 'Transparency',
    description: 'No hidden fees, no surprises. We provide clear reporting and honest communication at all times always.',
  },
];

// Team data matching Figma design
const team: TeamMember[] = [
  {
    id: '1',
    photo: '/images/about/team/image-6.png',
    name: 'Michael Rodriguez',
    role: 'Founder & CEO',
    expertise: 'Amazon & Multi-Channel Strategy',
    description: '10+ years in ecommerce experience, helped 500+ brands scale successfully.',
  },
  {
    id: '2',
    photo: '/images/about/team/image-3.png',
    name: 'Sarah Chen',
    role: 'Head of Platform Operations',
    expertise: 'Shopify & Platform Development',
    description: 'Former Shopify Partner with expertise, built 200+ successful stores.',
  },
  {
    id: '3',
    photo: '/images/about/team/image-5.png',
    name: 'David Thompson',
    role: 'Lead Marketing Strategist',
    expertise: 'PPC & Growth Marketing',
    description: 'Managed $10M+ in ad spend successfully with 5x ROAS consistently.',
  },
  {
    id: '4',
    photo: '/images/about/team/image-4.png',
    name: 'Lisa Martinez',
    role: 'Client Success Director',
    expertise: 'Customer Experience & Support',
    description: '98% client satisfaction rate achieved, 15 years of experience.',
  },
];

export default function AboutPage() {
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
          <AboutHeroSection />
        </Section>

        {/* Stats Section */}
        <Section id="stats" padding="none" maxWidth="lg" className="pt-0 pb-4 md:pb-6 lg:pb-8 overflow-hidden">
          <AboutStatsSection stats={stats} />
        </Section>

        {/* Mission Section */}
        <Section id="mission" padding="md" maxWidth="lg" className="relative overflow-hidden pt-0 md:pt-4 lg:pt-6">
          <AboutMissionSection
            image="/images/about/mission/rectangle-4600.png"
          />
        </Section>

        {/* Values Section */}
        <Section id="values" padding="md" maxWidth="lg" className="relative overflow-hidden pt-0 md:pt-4 lg:pt-6">
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
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute left-[-80px] md:left-[-40px] top-[20%] w-[160px] md:w-[260px] lg:w-[340px] opacity-25 -scale-x-100" />
          </div>
          <AboutValuesSection values={values} />
        </Section>

        {/* Team Section */}
        <Section id="team" padding="md" maxWidth="lg" className="relative overflow-hidden pt-0 md:pt-4 lg:pt-6">
          {/* Purple gradient glow */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Center purple glow - radial gradient */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[600px]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
              }}
            />
          </div>
          <AboutTeamSection team={team} />
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
            {/* Extra glow - right edge */}
            <div className="absolute right-0 bottom-[5%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at right center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)' }} />
            {/* Decorative globe - right side */}
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute right-[-70px] md:right-[-30px] bottom-[-30px] w-[160px] md:w-[270px] lg:w-[350px] opacity-25" />
          </div>
          <AboutCTASection />
        </Section>
      </main>

      {/* Footer - Full Width */}
      <Footer />
    </div>
  );
}

