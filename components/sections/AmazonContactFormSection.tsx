/**
 * Amazon Contact Form Section Component
 * 
 * Displays "Get Started Today" contact form section with title, intro text, 4 form fields, and submit button.
 * 
 * @component
 * @example
 * ```tsx
 * <AmazonContactFormSection />
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
import type { AmazonContactFormSectionProps } from '@/types';

export default function AmazonContactFormSection({
  title = "Get Started Today",
  introText = "Fill out the form below and we'll get back to you within 24 hours",
  onSubmit,
  className = "",
}: AmazonContactFormSectionProps) {
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
    <div className={`relative backdrop-blur-[4.45px] backdrop-filter bg-[rgba(7,7,7,0.28)] border border-[#ab78e9] border-solid flex flex-col gap-[30px] items-start mx-auto px-[40px] py-[60px] rounded-[18px] max-w-[590px] w-full ${className}`}>
      {/* Title */}
      <Heading
        as="h2"
        variant="h3"
        className="font-poppins font-bold leading-[30px] text-[32px] text-white"
      >
        {title}
      </Heading>

      {/* Intro text */}
      <Text
        as="p"
        variant="body"
        className="capitalize font-lexend font-normal leading-[24px] text-[#bababa] text-[18px] w-full max-w-[510px]"
      >
        {introText}
      </Text>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] w-full max-w-[510px]">
        {/* Name and Email (side by side) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
          <div className="relative h-[60px] w-full">
            <div className="absolute inset-0 bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid rounded-[10px]" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="name"
              className="absolute inset-0 capitalize font-lexend font-normal leading-[40px] px-[20px] text-[18px] text-white bg-transparent border-none outline-none placeholder:text-white placeholder:opacity-70 rounded-[10px]"
            />
          </div>

          <div className="relative h-[60px] w-full">
            <div className="absolute inset-0 bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid rounded-[10px]" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email address"
              className="absolute inset-0 capitalize font-lexend font-normal leading-[40px] px-[20px] text-[18px] text-white bg-transparent border-none outline-none placeholder:text-white placeholder:opacity-70 rounded-[10px]"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="relative h-[60px] w-full">
          <div className="absolute inset-0 bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid rounded-[10px]" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="absolute inset-0 capitalize font-lexend font-normal leading-[40px] px-[20px] text-[18px] text-white bg-transparent border-none outline-none placeholder:text-white placeholder:opacity-70 rounded-[10px]"
          />
        </div>

        {/* Message */}
        <div className="relative h-[171px] w-full">
          <div className="absolute inset-0 bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid rounded-[10px]" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="write message . . ."
            rows={4}
            className="absolute inset-0 capitalize font-lexend font-normal leading-[40px] px-[20px] py-[10px] text-[18px] text-white bg-transparent border-none outline-none resize-none placeholder:text-white placeholder:opacity-70 rounded-[10px]"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="bg-[#8539bf] flex gap-[10px] items-center justify-center px-[25px] py-[20px] rounded-[100px] font-poppins font-bold leading-normal text-[18px] text-white uppercase"
        >
          Request Free Consultation
          <div className="relative shrink-0 size-[16px]">
            <OptimizedImage
              src="/images/icons/arrow-up-right-services.svg"
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
