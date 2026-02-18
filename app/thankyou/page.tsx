/**
 * Thank You Page
 *
 * Displayed after a successful booking or form submission.
 * Simplified layout: Hero, Video 1 (full width), Video 2 (full width), Closing CTA.
 */

import Script from 'next/script';
import type { Metadata } from 'next';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { Heading, Text } from '@/components/ui/Typography';
import OptimizedImage from '@/components/ui/OptimizedImage';

export const metadata: Metadata = {
  title: 'Thank You - EcommGlobe',
  description:
    'Thank you for booking your free strategy call with EcommGlobe. We look forward to helping you scale your ecommerce business.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] w-full" style={{ overflowX: 'clip' }}>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        {/* Section 1: Hero - Congratulations */}
        <section className="relative w-full bg-[#050505] overflow-visible">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] md:w-[400px] h-[300px] md:h-[600px]"
              style={{ background: 'radial-gradient(ellipse at left center, rgba(132,0,255,0.4) 0%, rgba(132,0,255,0.2) 30%, transparent 70%)' }}
            />
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] md:w-[400px] h-[300px] md:h-[600px]"
              style={{ background: 'radial-gradient(ellipse at right center, rgba(132,0,255,0.4) 0%, rgba(132,0,255,0.2) 30%, transparent 70%)' }}
            />
            <OptimizedImage src="/images/globe.png" alt="" width={500} height={500} className="absolute right-[-80px] md:right-[-40px] top-[10%] w-[200px] md:w-[350px] lg:w-[450px] opacity-55" />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center gap-4 md:gap-6 pt-36 md:pt-48 lg:pt-52 pb-8 md:pb-16">
              {/* Checkmark Icon */}
              <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-gradient-to-br from-[rgba(145,55,255,0.4)] to-[rgba(115,0,255,0.2)] border-2 border-[#AB78E9] flex items-center justify-center mb-2 md:mb-4">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E1C8FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:w-[50px] md:h-[50px]">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <Heading
                variant="display"
                className="capitalize max-w-[900px] text-[28px] sm:text-[32px] md:text-[48px] lg:text-[58px] leading-[1.2] md:leading-tight"
              >
                <span>Congratulations, Your Call is </span>
                <span className="text-[#E1C8FF]">Booked.</span>
              </Heading>

              <Text
                variant="body"
                color="muted"
                className="max-w-[750px] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed"
              >
                This is the first step toward building your hands-off ecommerce business.
              </Text>
            </div>
          </div>
        </section>

        {/* Section 2: Video 1 - Full Width */}
        <section className="relative w-full bg-[#050505] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute left-0 top-[20%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at left center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)' }} />
            <div className="absolute right-0 bottom-[10%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at right center, rgba(145,55,255,0.18) 0%, rgba(115,0,255,0.06) 45%, transparent 80%)' }} />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
            <div className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12">
              <Heading variant="h2" className="text-center text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2]">
                <span>Watch This First: </span>
                <span className="text-[#E1C8FF]">How to Get the Most Out of Our Call</span>
              </Heading>
              <Text as="p" variant="body" color="muted" className="text-center text-[14px] sm:text-[16px] md:text-[20px] leading-relaxed max-w-[800px]">
                This video will walk you through what to expect on the call and what you need to prepare, so we can get right to the details and not waste a single minute.
              </Text>
            </div>

            {/* Video 1 - Full width */}
            <div className="w-full max-w-[960px] mx-auto">
              <div className="relative w-full aspect-[16/9] rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#AB78E9]/30">
                <iframe
                  src="https://www.youtube.com/embed/Pbi_uhTmptY?rel=0&controls=1&fs=0&modestbranding=1&showinfo=0&iv_load_policy=3"
                  width="1920"
                  height="1080"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title="Watch this first - How to get the most out of our call"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Video 2 - Full Width (single video, not side-by-side) */}
        <section className="relative w-full bg-[#050505] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute right-0 top-[15%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at right center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)' }} />
            <div className="absolute left-[20%] bottom-[5%] w-[200px] md:w-[400px] h-[200px] md:h-[400px]" style={{ background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.15) 0%, rgba(100,0,200,0.06) 50%, transparent 80%)' }} />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
            <div className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12">
              <Heading variant="h2" className="text-center text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2]">
                <span>Step 2</span>
              </Heading>
              <Text as="p" variant="body" color="muted" className="text-center text-[14px] sm:text-[16px] md:text-[20px] leading-relaxed max-w-[800px]">
                After watching the above video, watch the below video before our call and discover how my clients are getting 4k a month using our ecom services.
              </Text>
            </div>

            {/* Video 2 - Full width (single video) */}
            <div className="w-full max-w-[960px] mx-auto">
              <div className="relative w-full aspect-[16/9] rounded-[16px] md:rounded-[20px] overflow-hidden border border-[#AB78E9]/30">
                <iframe
                  src="https://www.youtube.com/embed/1wmz5OgeBS8?rel=0&controls=1&fs=0&modestbranding=1&showinfo=0&iv_load_policy=3"
                  width="1920"
                  height="1080"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title="How our clients are getting 4k a month"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Closing */}
        <section className="relative w-full bg-[#050505] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[600px]" style={{ background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)' }} />
          </div>

          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
            <div className="flex flex-col items-center text-center gap-4 md:gap-6">
              <Heading variant="h2" className="text-center text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px] leading-[1.2]">
                <span>Ready to Transform </span>
                <span className="text-[#E1C8FF]">Your Business?</span>
              </Heading>
              <Text as="p" variant="body" color="muted" className="text-center text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-[750px]">
                We&apos;re excited to speak with you and help you build your hands-off e-commerce business. See you on the call!
              </Text>
            </div>
          </div>
        </section>
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

      <Footer />
    </div>
  );
}
