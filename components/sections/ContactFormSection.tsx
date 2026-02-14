/**
 * Contact Form Section Component
 * 
 * Contact form section for Contact page matching Figma design exactly.
 * Includes form fields with validation and error messages.
 * 
 * @component
 */

'use client';

import { useState } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Button from '@/components/ui/Button';
import type { ContactFormData } from '@/types';

interface ContactFormSectionProps {
  className?: string;
}

export default function ContactFormSection({
  className = "",
}: ContactFormSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    revenue: '',
    platform: '',
    services: [],
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (field: keyof ContactFormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    // Validate required fields
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit it
      console.log('Form submitted:', formData);
      // TODO: Implement actual form submission
    }
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const services = [
    'Store Setup',
    'Listing Optimization',
    'PPC Management',
    'Multi Channel Integration',
    'Content Creation',
    'Analytics & Reporting',
  ];

  return (
    <div className={`relative w-full ${className}`}>
      {/* Form container - Responsive layout */}
      <div className="relative backdrop-blur-[4.45px] backdrop-filter bg-[rgba(7,7,7,0.28)] border border-[#ab78e9] border-solid rounded-[18px] w-full p-4 sm:p-6 lg:p-0">
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 lg:p-[39px] space-y-4 md:space-y-6">
          {/* Form title */}
          <h2 className="font-poppins font-bold leading-tight not-italic text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-white">
            Send us a message
          </h2>
          <p className="capitalize font-lexend font-normal text-[#bababa] text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed">
            Fill out the form below and we'll get back to you within 24 hours
          </p>

          {/* Name and Email row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="capitalize flex flex-col font-lexend font-normal justify-center leading-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid h-[44px] sm:h-[50px] md:h-[55px] lg:h-[60px] rounded-[10px] w-full px-4 sm:px-5 text-[#e1c8ff] text-[14px] sm:text-[15px] lg:text-[16px] min-h-[44px]"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-400 text-[12px] mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="capitalize flex flex-col font-lexend font-normal justify-center leading-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid h-[44px] sm:h-[50px] md:h-[55px] lg:h-[60px] rounded-[10px] w-full px-4 sm:px-5 text-[#e1c8ff] text-[14px] sm:text-[15px] lg:text-[16px] min-h-[44px]"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-[12px] mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Phone and Company row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="capitalize flex flex-col font-lexend font-normal justify-center leading-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-white mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid h-[44px] sm:h-[50px] md:h-[55px] lg:h-[60px] rounded-[10px] w-full px-4 sm:px-5 text-[#e1c8ff] text-[14px] sm:text-[15px] lg:text-[16px] min-h-[44px]"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label className="capitalize flex flex-col font-lexend font-normal justify-center leading-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-white mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                className="bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid h-[44px] sm:h-[50px] md:h-[55px] lg:h-[60px] rounded-[10px] w-full px-4 sm:px-5 text-[#e1c8ff] text-[14px] sm:text-[15px] lg:text-[16px] min-h-[44px]"
                placeholder="Your Business"
              />
            </div>
          </div>

          {/* Revenue and Platform row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="capitalize flex flex-col font-lexend font-normal justify-center leading-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-white mb-2">
                Current Monthly Revenue
              </label>
              <div className="relative">
                <select
                  value={formData.revenue}
                  onChange={(e) => handleChange('revenue', e.target.value)}
                  className="bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid h-[44px] sm:h-[50px] md:h-[55px] lg:h-[60px] rounded-[10px] w-full px-4 sm:px-5 text-[#e1c8ff] text-[14px] sm:text-[15px] lg:text-[16px] min-h-[44px] appearance-none pr-10"
                >
                  <option value="">Select Range</option>
                  <option value="0-10k">$0 - $10K</option>
                  <option value="10k-50k">$10K - $50K</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="100k+">$100K+</option>
                </select>
                <div className="absolute flex h-[5.37px] items-center justify-center right-4 top-1/2 -translate-y-1/2 w-[10px] pointer-events-none">
                  <OptimizedImage
                    src="/images/contact/form/vector-dropdown.svg"
                    alt=""
                    width={10}
                    height={6}
                    className="rotate-180"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="capitalize flex flex-col font-lexend font-normal justify-center leading-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-white mb-2">
                Interested Platform
              </label>
              <div className="relative">
                <select
                  value={formData.platform}
                  onChange={(e) => handleChange('platform', e.target.value)}
                  className="bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid h-[44px] sm:h-[50px] md:h-[55px] lg:h-[60px] rounded-[10px] w-full px-4 sm:px-5 text-[#e1c8ff] text-[14px] sm:text-[15px] lg:text-[16px] min-h-[44px] appearance-none pr-10"
                >
                  <option value="">Select Platform</option>
                  <option value="amazon">Amazon</option>
                  <option value="shopify">Shopify</option>
                  <option value="etsy">Etsy</option>
                  <option value="walmart">Walmart</option>
                  <option value="ebay">eBay</option>
                  <option value="tiktok">TikTok Shop</option>
                </select>
                <div className="absolute flex h-[5.37px] items-center justify-center right-4 top-1/2 -translate-y-1/2 w-[10px] pointer-events-none">
                  <OptimizedImage
                    src="/images/contact/form/vector-dropdown.svg"
                    alt=""
                    width={10}
                    height={6}
                    className="rotate-180"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Services checkboxes */}
          <div>
            <label className="capitalize flex flex-col font-lexend font-normal justify-center leading-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-white mb-2">
              Which services are you interested in? *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-2 min-h-[44px]">
                  <input
                    type="checkbox"
                    id={service}
                    checked={formData.services.includes(service)}
                    onChange={() => toggleService(service)}
                    className="bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid rounded-[4px] shrink-0 size-[19px] min-h-[19px] min-w-[19px]"
                  />
                  <label
                    htmlFor={service}
                    className="capitalize flex flex-col font-lexend font-normal justify-center leading-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-white cursor-pointer"
                  >
                    {service}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Message textarea */}
          <div>
            <label className="capitalize flex flex-col font-lexend font-normal justify-center leading-normal text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-white mb-2">
              Tell us about your business and goals *
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              rows={4}
              className="bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid rounded-[10px] w-full px-4 sm:px-5 py-3 text-[#e1c8ff] text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed min-h-[100px] resize-y"
              placeholder="What products do you sell? What are you main challenges? What are your revenue goals?"
            />
            {errors.message && (
              <p className="text-red-400 text-[12px] mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="bg-[#8539bf] content-stretch flex gap-[10px] items-center justify-center px-4 md:px-[23px] lg:px-[25px] py-3 md:py-[18px] lg:py-[20px] rounded-full md:rounded-[100px] shrink-0 w-full lg:w-auto min-h-[44px]"
          >
            <span className="font-poppins font-bold leading-normal not-italic relative shrink-0 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-white uppercase">
              Send message
            </span>
            <OptimizedImage
              src="/images/contact/form/up-right-arrow-11.svg"
              alt=""
              width={16}
              height={16}
              className="relative shrink-0 size-[14px] sm:size-[15px] lg:size-[16px]"
            />
          </Button>
        </form>
      </div>
    </div>
  );
}

