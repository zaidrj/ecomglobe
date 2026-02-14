/**
 * Contact Form Component
 * 
 * "Get Started" contact form matching Figma design exactly.
 * Glass-morphism effect with form fields and submit button.
 * 
 * @component
 * @example
 * ```tsx
 * <ContactForm />
 * ```
 * 
 * Features:
 * - Glass-morphism design (backdrop blur, semi-transparent background)
 * - Form fields: Name, Email, Phone, Message
 * - Responsive layout (stacked on mobile, side-by-side name/email on desktop)
 * - Submit button with arrow icon
 * - Full accessibility support (labels, ARIA, keyboard navigation)
 * - Form validation (required fields)
 * 
 * @returns {JSX.Element} Contact form with glass-morphism styling
 */

'use client';

import Image from 'next/image';
import { Heading } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  return (
    <form 
      className="backdrop-blur-[4.45px] backdrop-filter bg-[rgba(7,7,7,0.28)] border border-[#AB78E9] border-solid rounded-[18px] p-6 md:p-8 lg:p-[40px_60px] flex flex-col gap-6 md:gap-[30px] w-full max-w-[510px] mx-auto lg:mx-0"
      aria-label="Contact form"
      onSubmit={(e) => {
        e.preventDefault();
        // Form submission logic would go here
      }}
    >
      {/* Title */}
      <Heading variant="h3" className="text-[32px] leading-[30px]">
        Get Started
      </Heading>

      {/* Form Fields */}
      <div className="flex flex-col gap-[30px]">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
          <div className="relative h-[60px]">
            <label htmlFor="name" className="sr-only">Name</label>
            <div className="absolute inset-0 bg-[rgba(11,11,11,0.41)] border border-[#AB78E9] border-solid rounded-[10px] focus-within:ring-2 focus-within:ring-[#AB78E9] focus-within:ring-offset-2" />
            <input
              id="name"
              type="text"
              name="name"
              placeholder="name"
              required
              aria-required="true"
              className="absolute inset-0 bg-transparent border-none outline-none px-[20px] font-secondary text-[18px] text-white capitalize placeholder:text-white placeholder:opacity-70 focus:ring-0"
            />
          </div>
          <div className="relative h-[60px]">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <div className="absolute inset-0 bg-[rgba(11,11,11,0.41)] border border-[#AB78E9] border-solid rounded-[10px] focus-within:ring-2 focus-within:ring-[#AB78E9] focus-within:ring-offset-2" />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email address"
              required
              aria-required="true"
              className="absolute inset-0 bg-transparent border-none outline-none px-[20px] font-secondary text-[18px] text-white capitalize placeholder:text-white placeholder:opacity-70 focus:ring-0"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="relative h-[60px]">
          <label htmlFor="phone" className="sr-only">Phone Number</label>
          <div className="absolute inset-0 bg-[rgba(11,11,11,0.41)] border border-[#AB78E9] border-solid rounded-[10px] focus-within:ring-2 focus-within:ring-[#AB78E9] focus-within:ring-offset-2" />
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="absolute inset-0 bg-transparent border-none outline-none px-[20px] font-secondary text-[18px] text-white capitalize placeholder:text-white placeholder:opacity-70 focus:ring-0"
          />
        </div>

        {/* Message */}
        <div className="relative h-[171px]">
          <label htmlFor="message" className="sr-only">Message</label>
          <div className="absolute inset-0 bg-[rgba(11,11,11,0.41)] border border-[#AB78E9] border-solid rounded-[10px] focus-within:ring-2 focus-within:ring-[#AB78E9] focus-within:ring-offset-2" />
          <textarea
            id="message"
            name="message"
            placeholder="write message . . ."
            required
            aria-required="true"
            className="absolute inset-0 bg-transparent border-none outline-none px-[20px] py-[20px] font-secondary text-[18px] text-white capitalize placeholder:text-white placeholder:opacity-70 resize-none focus:ring-0"
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" variant="primary" size="md" className="gap-[10px]">
          send message
          <Image
            src="/images/icons/up-right-arrow-11.svg"
            alt=""
            width={16}
            height={16}
            className="object-contain"
            aria-hidden="true"
          />
        </Button>
      </div>
    </form>
  );
}

