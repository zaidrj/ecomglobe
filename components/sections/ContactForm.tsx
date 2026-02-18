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

import { useState } from 'react';
import Image from 'next/image';
import { Heading } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';

interface SubmitState {
  isLoading: boolean;
  success: boolean;
  error: string | null;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitState, setSubmitState] = useState<SubmitState>({
    isLoading: false,
    success: false,
    error: null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitState({ isLoading: true, success: false, error: null });

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitState({ isLoading: false, success: true, error: null });
          setFormData({ name: '', email: '', phone: '', message: '' });
          setTimeout(() => {
            window.location.href = '/thankyou';
          }, 2000);
        } else {
          setSubmitState({
            isLoading: false,
            success: false,
            error: data.error || 'Failed to send message',
          });
        }
      } catch (error) {
        setSubmitState({
          isLoading: false,
          success: false,
          error: 'An error occurred. Please try again.',
        });
      }
    }
  };

  return (
    <form
      className="backdrop-blur-[4.45px] backdrop-filter bg-[rgba(7,7,7,0.28)] border border-[#AB78E9] border-solid rounded-[18px] p-6 md:p-8 lg:p-[40px_60px] flex flex-col gap-6 md:gap-[30px] w-full max-w-[510px] mx-auto lg:mx-0"
      aria-label="Contact form"
      onSubmit={handleSubmit}
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
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="name"
              aria-required="true"
              className="absolute inset-0 bg-transparent border-none outline-none px-[20px] font-secondary text-[18px] text-white capitalize placeholder:text-white placeholder:opacity-70 focus:ring-0"
            />
            {errors.name && <p className="text-red-400 text-[12px] mt-1">{errors.name}</p>}
          </div>
          <div className="relative h-[60px]">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <div className="absolute inset-0 bg-[rgba(11,11,11,0.41)] border border-[#AB78E9] border-solid rounded-[10px] focus-within:ring-2 focus-within:ring-[#AB78E9] focus-within:ring-offset-2" />
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="email address"
              aria-required="true"
              className="absolute inset-0 bg-transparent border-none outline-none px-[20px] font-secondary text-[18px] text-white capitalize placeholder:text-white placeholder:opacity-70 focus:ring-0"
            />
            {errors.email && <p className="text-red-400 text-[12px] mt-1">{errors.email}</p>}
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
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
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
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            placeholder="write message . . ."
            aria-required="true"
            className="absolute inset-0 bg-transparent border-none outline-none px-[20px] py-[20px] font-secondary text-[18px] text-white capitalize placeholder:text-white placeholder:opacity-70 resize-none focus:ring-0"
          />
          {errors.message && <p className="text-red-400 text-[12px] mt-1">{errors.message}</p>}
        </div>

        {/* Success/Error Messages */}
        {submitState.success && (
          <div className="bg-green-500/20 border border-green-500 rounded-[10px] p-4">
            <p className="text-green-400 text-[14px]">✓ Message sent successfully!</p>
          </div>
        )}
        {submitState.error && (
          <div className="bg-red-500/20 border border-red-500 rounded-[10px] p-4">
            <p className="text-red-400 text-[14px]">✗ {submitState.error}</p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={submitState.isLoading}
          variant="primary"
          size="md"
          className="gap-[10px] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitState.isLoading ? 'sending...' : 'send message'}
          {!submitState.isLoading && (
            <Image
              src="/images/icons/up-right-arrow-11.svg"
              alt=""
              width={16}
              height={16}
              className="object-contain"
              aria-hidden="true"
            />
          )}
        </Button>
      </div>
    </form>
  );
}

