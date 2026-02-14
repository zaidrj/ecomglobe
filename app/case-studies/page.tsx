/**
 * Case Studies Page
 * 
 * Case Studies page structure matching homepage design.
 * Sections are organized sequentially with proper spacing.
 */

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import CaseStudiesHeroSection from '@/components/sections/CaseStudiesHeroSection';
import CaseStudiesStatsSection from '@/components/sections/CaseStudiesStatsSection';
import CaseStudyCard from '@/components/sections/CaseStudyCard';
import Section from '@/components/layout/Section';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { StatItem, CaseStudy } from '@/types';

// Stats data matching Figma design
const stats: StatItem[] = [
  { label: 'Major project', value: '100+' },
  { label: 'Clients', value: '150k+' },
  { label: 'awards', value: '23' },
  { label: 'years of work', value: '25' },
];

// Case studies data matching Figma design
const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'HomeEssentials: $12K to $84K/month on Amazon',
    heroImage: 'https://cdn.pixabay.com/photo/2020/12/16/00/10/home-5835289_1280.jpg', // Kitchen organizer products
    challenge: 'HomeEssentials was struggling to get visibility on Amazon with their kitchen organizer products. Their listings had poor rankings, low conversion rates, and high advertising costs.',
    solutions: [
      'Complete listing optimization with keyword research and A+ content',
      'Strategic PPC campaign management with 4.5x ROAS',
      'Inventory management and FBA optimization',
      'Competitor analysis and pricing strategy',
    ],
    results: {
      revenueGrowth: {
        percentage: '600%',
        description: '$12K/month → $84K/month',
      },
      rankImprovement: {
        percentage: '48%-18%',
        description: '#45,000 → #2,800',
      },
      conversionRate: {
        percentage: '8% to 12.5%',
      },
    },
    testimonial: "EcommGlobe transformed our Amazon presence completely. The results speak for themselves - we've gone from barely making ends meet to being a top seller in our category.",
    author: {
      name: 'Jennifer Miller',
      role: 'Founder, HomeEssentials',
    },
    rating: 5,
  },
  {
    id: '2',
    title: 'TechGear Pro: 0 to $120K/month on Shopify',
    heroImage: 'https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_1280.jpg', // Electronics/tech products
    challenge: 'TechGear Pro needed to launch their electronics brand on Shopify from scratch. They had no online presence, limited technical knowledge, and needed a complete ecommerce solution to compete with established brands.',
    solutions: [
      'Custom Shopify store design and development',
      'Multi-channel integration with Amazon and eBay',
      'Advanced SEO optimization and content strategy',
      'Automated inventory management and order fulfillment',
    ],
    results: {
      revenueGrowth: {
        percentage: 'New Launch',
        description: '$0/month → $120K/month',
      },
      rankImprovement: {
        percentage: 'Top 3',
        description: 'Google rankings in 6 months',
      },
      conversionRate: {
        percentage: '3.2% to 8.7%',
      },
    },
    testimonial: "Starting from zero was daunting, but EcommGlobe built us a world-class Shopify store and got us ranking on Google within months. We're now a trusted brand in the electronics space.",
    author: {
      name: 'Michael Chen',
      role: 'CEO, TechGear Pro',
    },
    rating: 5,
  },
  {
    id: '3',
    title: 'StyleCo Boutique: 200% Growth on Etsy',
    heroImage: 'https://media.istockphoto.com/id/1393966935/photo/old-and-broken-jewelry-and-on-euro-banknotes-on-dark-background-sell-gold-for-money-concept.jpg?s=2048x2048&w=is&k=20&c=NfaglZJ428wD8HgJzc0VsKVPaqQ4Azi7dvGvrghOJg4=', // Handmade jewelry
    challenge: 'StyleCo Boutique was a small handmade jewelry business on Etsy struggling with low visibility, inconsistent sales, and difficulty scaling their operations while maintaining quality.',
    solutions: [
      'Etsy shop optimization and SEO enhancement',
      'Professional product photography and branding',
      'Social media integration and marketing automation',
      'Multi-platform expansion strategy',
    ],
    results: {
      revenueGrowth: {
        percentage: '200%',
        description: '$8K/month → $24K/month',
      },
      rankImprovement: {
        percentage: 'Top 1%',
        description: 'Etsy search rankings',
      },
      conversionRate: {
        percentage: '5.1% to 11.3%',
      },
    },
    testimonial: "EcommGlobe helped us transform from a hobby shop into a real business. Our Etsy shop now ranks at the top, and we've expanded to other platforms without losing our authentic brand identity.",
    author: {
      name: 'Sarah Johnson',
      role: 'Owner, StyleCo Boutique',
    },
    rating: 5,
  },
  {
    id: '4',
    title: 'FitLife Nutrition: $50K to $180K/month on Walmart',
    heroImage: 'https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=2048x2048&w=is&k=20&c=rRlOrFqCQn8kBDwvZnN75XFxiD0CA6S2LkgVKQRYJ3k=', // Fitness/nutrition products
    challenge: 'FitLife Nutrition entered Walmart Marketplace but struggled with complex vendor requirements, inventory management issues, and low brand visibility in the competitive health supplements category.',
    solutions: [
      'Walmart Marketplace onboarding and optimization',
      'Comprehensive product catalog management',
      'Strategic pricing and promotion campaigns',
      'Cross-platform inventory synchronization',
    ],
    results: {
      revenueGrowth: {
        percentage: '260%',
        description: '$50K/month → $180K/month',
      },
      rankImprovement: {
        percentage: 'Top 10',
        description: 'Walmart search results',
      },
      conversionRate: {
        percentage: '6.8% to 14.2%',
      },
    },
    testimonial: "Walmart Marketplace seemed overwhelming at first, but EcommGlobe made the entire process seamless. We've tripled our revenue and become a top-rated seller in just 8 months.",
    author: {
      name: 'David Rodriguez',
      role: 'Founder, FitLife Nutrition',
    },
    rating: 5,
  },
];

export default function CaseStudiesPage() {
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
          <CaseStudiesHeroSection />
        </Section>

        {/* Stats Section */}
        <Section id="stats" padding="none" maxWidth="lg" className="pt-0 pb-4 md:pb-6 lg:pb-8 overflow-hidden">
          <CaseStudiesStatsSection stats={stats} />
        </Section>

        {/* Case Studies Cards Section */}
        <Section id="case-studies" padding="md" maxWidth="lg" className="relative overflow-hidden pt-0 md:pt-4 lg:pt-6">
          <div className="flex flex-col gap-[20px] items-start w-full px-4 md:px-6">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                caseStudy={caseStudy}
                className="w-full"
              />
            ))}
          </div>
        </Section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

