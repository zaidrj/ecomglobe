/**
 * Contact Page
 * 
 * Contact page structure matching homepage design.
 * Sections are organized sequentially with proper spacing.
 */

'use client';

import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import ContactHeroSection from '@/components/sections/ContactHeroSection';
import ContactMethodsSection from '@/components/sections/ContactMethodsSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import ContactProcessSection from '@/components/sections/ContactProcessSection';
import Section from '@/components/layout/Section';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { ContactMethod, ContactProcessStep } from '@/types';

// Contact methods data matching Figma design
const contactMethods: ContactMethod[] = [
  {
    id: '1',
    icon: '/images/contact/methods/ic-outline-email.svg',
    title: 'Email Us',
    info: 'info@ecommglobe.com',
    context: 'We respond within 24 hours',
  },
  {
    id: '2',
    icon: '/images/contact/methods/material-symbols-call-outline-sharp.svg',
    title: 'Call Us',
    info: '+1 (555) 123-4567',
    context: 'Mon-Fri, 9AM-6PM EST',
  },
  {
    id: '3',
    icon: '/images/contact/methods/mingcute-location-line.svg',
    title: 'Visit Us',
    info: '123 Commerce Street',
    context: 'New York, NY 10001',
  },
  {
    id: '4',
    icon: '/images/contact/methods/mingcute-time-line.svg',
    title: 'Business Hours',
    info: 'Monday - Friday',
    context: '9:00 AM - 6:00 PM EST',
  },
];

// Process steps data matching Figma design
const processSteps: ContactProcessStep[] = [
  {
    id: '1',
    order: 1,
    icon: '/images/contact/process/arrow-right-circle.svg',
    title: 'We Review Your Information',
    description: 'Our team analyzes your business details and goals',
  },
  {
    id: '2',
    order: 2,
    icon: '/images/contact/process/arrow-right-circle.svg',
    title: 'Strategy Call Scheduled',
    description: "We'll reach out within 24 hours to schedule a free consultation",
  },
  {
    id: '3',
    order: 3,
    icon: '/images/contact/process/arrow-right-circle.svg',
    title: 'Custom Plan Created',
    description: 'We develop a personalized growth strategy for your business',
  },
  {
    id: '4',
    order: 4,
    icon: '/images/contact/process/arrow-right-circle.svg',
    title: 'Get Started',
    description: 'Once approved, we begin implementing your ecommerce strategy',
  },
];

export default function ContactPage() {
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
            <OptimizedImage src="/images/globe.png" alt="" width={500} height={500} className="absolute right-[-80px] md:right-[-40px] top-[10%] w-[200px] md:w-[350px] lg:w-[450px] opacity-25" />
          </div>
          <ContactHeroSection />
        </Section>

        {/* Contact Methods Section */}
        <Section id="contact-methods" padding="md" maxWidth="lg" className="relative overflow-hidden pt-0 md:pt-4 lg:pt-6">
          <ContactMethodsSection methods={contactMethods} />
        </Section>

        {/* Contact Form and Process Section */}
        <Section id="form-process" padding="md" maxWidth="lg" className="relative overflow-hidden pt-0 md:pt-4 lg:pt-6">
          {/* Purple gradient glow */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Center purple glow - radial gradient */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[600px]"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
              }}
            />
            {/* Enhanced purple glow - left side */}
            <div className="absolute left-0 top-[10%] w-[280px] md:w-[550px] h-[400px] md:h-[700px]" style={{ background: 'radial-gradient(ellipse at left center, rgba(132,0,255,0.25) 0%, rgba(115,0,255,0.1) 40%, transparent 75%)' }} />
            {/* Decorative globe - left side (flipped) */}
            <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute left-[-80px] md:left-[-40px] top-[20%] w-[160px] md:w-[260px] lg:w-[340px] opacity-25 -scale-x-100" />
          </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between relative z-10 px-4 md:px-6">
            <div className="w-full lg:w-[541px]">
              <ContactProcessSection steps={processSteps} />
            </div>
            <div className="w-full lg:w-[625px]">
              <ContactFormSection />
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

