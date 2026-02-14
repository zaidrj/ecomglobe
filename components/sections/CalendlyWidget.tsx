/**
 * Calendly Widget Section Component
 *
 * Embeds a Calendly inline scheduling widget for booking strategy calls.
 * Uses Calendly's official embed script so postMessage events fire properly.
 * Listens for calendly.event_scheduled to auto-redirect to /thankyou.
 *
 * @component
 */

'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';

export default function CalendlyWidget() {
  const router = useRouter();
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Load Calendly embed script once
    if (!scriptLoaded.current) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
      scriptLoaded.current = true;
    }

    // Listen for Calendly event_scheduled to redirect
    function handleMessage(event: MessageEvent) {
      if (event.data?.event === 'calendly.event_scheduled') {
        router.push('/thankyou');
      }
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [router]);

  return (
    <Container size="lg" className="py-6 md:py-8 lg:py-10 relative z-10 px-4 md:px-6">
      <div className="flex flex-col items-center gap-4 md:gap-8">
        {/* Section Title */}
        <Heading
          variant="h2"
          className="text-center max-w-[700px] text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px] px-2"
        >
          <span>Schedule Your </span>
          <span className="text-[#D9B9FF]">Free Strategy Call</span>
        </Heading>

        <Text
          variant="body"
          color="muted"
          className="text-center max-w-[600px] text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] px-2"
        >
          Pick a time that works for you. Our senior consultant will walk you through everything.
        </Text>

        {/* Calendly Inline Widget */}
        <div className="w-full max-w-[900px] mt-4 md:mt-8 rounded-[18px] overflow-hidden border border-[#AB78E9] bg-[rgba(115,0,255,0.08)]">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/jasim-rahim07/30min"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    </Container>
  );
}
