/**
 * Walmart Contact Form Section Component
 * 
 * Displays "Get Started Today" contact form section with title, intro text, 4 form fields, and submit button.
 * 
 * @component
 * @example
 * ```tsx
 * <WalmartContactFormSection />
 * ```
 * 
 * Features:
 * - Title and introductory text
 * - Form fields: Name, Email Address, Phone Number, Message (textarea)
 * - Submit button
 * - Form state management (client-side only, no backend submission)
 * 
 * @returns {JSX.Element} Contact form section
 */

'use client';

import { useState } from 'react';
import { Heading, Text } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import type { WalmartContactFormSectionProps } from '@/types';

export default function WalmartContactFormSection({
  title = "Get Started Today",
  introText = "Fill out the form below and we'll get back to you within 24 hours",
  onSubmit,
  className = "",
}: WalmartContactFormSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      const formDataObj = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });
      onSubmit(formDataObj);
    }
  };

  return (
    <div className={`relative lg:absolute backdrop-blur-[4.45px] backdrop-filter bg-[rgba(7,7,7,0.28)] border border-[#ab78e9] border-solid flex flex-col gap-6 lg:gap-[30px] items-start left-0 lg:left-[737px] px-4 sm:px-6 lg:px-[40px] py-8 lg:py-[60px] rounded-[18px] top-0 lg:top-[2622px] w-full max-w-[510px] lg:w-[510px] mx-auto lg:mx-0 mt-12 lg:mt-0 ${className}`}>
      {/* Title */}
      <Heading
        as="h2"
        variant="h3"
        className="font-poppins font-bold leading-tight lg:leading-[30px] text-[24px] sm:text-[28px] lg:text-[32px] text-white w-full"
      >
        {title}
      </Heading>

      {/* Intro text */}
      <Text
        as="p"
        variant="body"
        className="capitalize font-lexend font-normal leading-normal lg:leading-[24px] text-[#bababa] text-[14px] sm:text-[16px] lg:text-[18px] w-full lg:w-[510px]"
      >
        {introText}
      </Text>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-[20px] w-full lg:w-[510px]">
        {/* Name and Email (stack on mobile, side by side on desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[10px] w-full">
          <div className="relative h-[60px] w-full lg:w-[250px]">
            <div className="absolute bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid h-[60px] left-1/2 rounded-[10px] top-0 -translate-x-1/2 w-full lg:w-[250px]" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="name"
              className="absolute capitalize font-lexend font-normal leading-[40px] left-[20px] text-[16px] lg:text-[18px] text-white top-[30.5px] -translate-y-1/2 bg-transparent border-none outline-none w-[calc(100%-40px)] lg:w-[210px] placeholder:text-white placeholder:opacity-70 min-h-[44px]"
            />
          </div>

          <div className="relative h-[60px] w-full lg:w-[250px]">
            <div className="absolute bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid h-[60px] left-1/2 rounded-[10px] top-0 -translate-x-1/2 w-full lg:w-[250px]" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email address"
              className="absolute capitalize font-lexend font-normal leading-[40px] left-[20px] text-[16px] lg:text-[18px] text-white top-[30.5px] -translate-y-1/2 bg-transparent border-none outline-none w-[calc(100%-40px)] lg:w-[210px] placeholder:text-white placeholder:opacity-70 min-h-[44px]"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="relative h-[60px] w-full lg:w-[510px]">
          <div className="absolute bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid h-[60px] left-1/2 rounded-[10px] top-0 -translate-x-1/2 w-full lg:w-[510px]" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="absolute capitalize font-lexend font-normal leading-[40px] left-[20px] text-[16px] lg:text-[18px] text-white top-[30.5px] -translate-y-1/2 bg-transparent border-none outline-none w-[calc(100%-40px)] lg:w-[470px] placeholder:text-white placeholder:opacity-70 min-h-[44px]"
          />
        </div>

        {/* Message */}
        <div className="relative h-[171px] w-full lg:w-[510px]">
          <div className="absolute bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid h-[171px] left-1/2 rounded-[10px] top-0 -translate-x-1/2 w-full lg:w-[510px]" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="write message . . ."
            rows={4}
            className="absolute capitalize font-lexend font-normal leading-[40px] left-[20px] text-[16px] lg:text-[18px] text-white top-[36.5px] -translate-y-1/2 bg-transparent border-none outline-none w-[calc(100%-40px)] lg:w-[470px] h-[120px] resize-none placeholder:text-white placeholder:opacity-70 min-h-[120px]"
          />
        </div>

        {/* Submit Button - Touch-friendly */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="bg-[#8539bf] flex gap-[10px] items-center justify-center px-[25px] py-[20px] rounded-[100px] font-poppins font-bold leading-normal text-[16px] lg:text-[18px] text-white uppercase w-full lg:w-auto min-h-[44px]"
        >
          Request Free Consultation
          <div className="relative shrink-0 size-[16px]">
            <OptimizedImage
              src="/images/walmart/icons/up-right-arrow-11.svg"
              alt=""
              width={16}
              height={16}
              className="object-contain"
            />
          </div>
        </Button>
      </form>
    </div>
  );
}





