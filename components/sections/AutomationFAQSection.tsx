/**
 * Automation FAQ Section
 *
 * FAQ accordion for the ecommerce automation page.
 * Cloned from AmazonFAQSection pattern with automation-specific questions.
 *
 * @component
 */

'use client';

import { useState } from 'react';
import { Heading, Text } from '@/components/ui/Typography';
import ScrollToSection from '@/components/ui/ScrollToSection';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  isExpanded: boolean;
}

const initialFaqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do I need ecommerce experience?',
    answer: 'No. This is designed for ownership, not operation.',
    isExpanded: false,
  },
  {
    id: 'faq-2',
    question: 'Will I manage the store daily?',
    answer: 'No. Our team handles management. You review reports.',
    isExpanded: false,
  },
  {
    id: 'faq-3',
    question: 'Is this passive income?',
    answer: "It's structured, managed ecommerce ownership. We handle execution.",
    isExpanded: false,
  },
  {
    id: 'faq-4',
    question: "What if I don't see results?",
    answer: 'If guarantees are not met under agreed conditions, refund or continued work applies.',
    isExpanded: false,
  },
  {
    id: 'faq-5',
    question: 'How long before launch?',
    answer: 'Typically 2–4 weeks depending on platform and structure.',
    isExpanded: false,
  },
];

export default function AutomationFAQSection() {
  const [faqs, setFaqs] = useState<FAQItem[]>(initialFaqs);

  const toggleFAQ = (id: string) => {
    setFaqs(prevFaqs =>
      prevFaqs.map(faq => {
        if (faq.id === id) {
          return { ...faq, isExpanded: !faq.isExpanded };
        }
        return faq;
      })
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(id);
    }
  };

  return (
    <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14 items-start">
        {/* Left: Title + CTA card */}
        <div className="w-full lg:w-[420px] xl:w-[460px] shrink-0 flex flex-col gap-6 md:gap-8">
          <Heading
            as="h2"
            variant="h1"
            className="text-[28px] sm:text-[32px] md:text-[42px] lg:text-[48px] font-bold leading-[1.2] md:leading-tight"
          >
            <span>Frequently </span>
            <span className="text-[#E1C8FF]">Asked Questions</span>
          </Heading>

          <Text
            as="p"
            variant="body"
            color="muted"
            className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed"
          >
            Everything you need to know about our fully managed ecommerce service.
          </Text>

          {/* Still Have Questions Card */}
          <div className="rounded-[14px] md:rounded-[18px] border border-[#AB78E9]/30 bg-[rgba(115,0,255,0.06)] p-5 md:p-7 flex flex-col gap-3 md:gap-4">
            <h3 className="font-primary font-bold text-[18px] md:text-[22px] text-[#E1C8FF]">
              Still Have Questions?
            </h3>
            <Text
              as="p"
              variant="small"
              color="muted"
              className="text-[13px] md:text-[15px] lg:text-[16px] leading-relaxed"
            >
              Book a free strategy call and we&apos;ll answer every question you have &mdash; no pressure, no obligation.
            </Text>
            <ScrollToSection
              targetId="calendly"
              className="inline-flex items-center gap-2 border-[#7300ff] border border-solid px-5 md:px-6 py-2.5 md:py-3 rounded-full shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold text-[13px] md:text-[15px] text-white uppercase w-fit transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(132,0,255,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80 mt-1 cursor-pointer"
              style={{
                backgroundImage: 'radial-gradient(ellipse at center, rgba(132,0,255,0.59) 0%, rgba(115,0,255,0) 100%)',
              }}
            >
              Book a Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </ScrollToSection>
          </div>
        </div>

        {/* Right: FAQ Items */}
        <div className="flex-1 w-full lg:w-auto flex flex-col gap-[10px]">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`relative bg-[rgba(7,7,7,0.8)] border border-solid rounded-[10px] transition-all duration-300 ease-in-out overflow-hidden ${faq.isExpanded ? 'border-[#AB78E9]' : 'border-[#AB78E9]/40'}`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(faq.id)}
                onKeyDown={(e) => handleKeyDown(e, faq.id)}
                className="w-full flex items-center justify-between gap-4 p-4 md:p-5 bg-transparent border-none cursor-pointer hover:opacity-90 transition-opacity"
                aria-expanded={faq.isExpanded}
                aria-controls={`faq-answer-${faq.id}`}
                aria-labelledby={`faq-question-${faq.id}`}
              >
                <p
                  id={`faq-question-${faq.id}`}
                  className={`font-primary font-medium leading-normal text-[14px] md:text-[16px] flex-1 text-left ${faq.isExpanded ? 'text-[#E1C8FF]' : 'text-white'}`}
                >
                  {faq.question}
                </p>

                <div className={`shrink-0 w-[28px] h-[28px] md:w-[32px] md:h-[32px] rounded-full flex items-center justify-center transition-all duration-300 ${faq.isExpanded ? 'bg-[#AB78E9]' : 'bg-transparent'}`}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-white transition-transform duration-300 ${faq.isExpanded ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </button>

              {faq.isExpanded && (
                <div id={`faq-answer-${faq.id}`} className="px-4 md:px-5 pb-4 md:pb-5">
                  <div className="h-[1px] w-full bg-[#AB78E9] opacity-20 mb-4" />
                  <Text
                    as="p"
                    variant="body"
                    className="font-secondary font-normal leading-[26px] text-[14px] md:text-[16px] text-[#C8CDD2]"
                  >
                    {faq.answer}
                  </Text>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
