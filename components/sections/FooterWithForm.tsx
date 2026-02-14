/**
 * Footer With Form Component
 *
 * Form section copied exactly from TikTokSection with updated text,
 * followed by the standard footer.
 *
 * @component
 */
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heading, Text } from '@/components/ui/Typography';
import OptimizedImage from '@/components/ui/OptimizedImage';
import ScrollToSection from '@/components/ui/ScrollToSection';

export default function FooterWithForm({ className = "" }: { className?: string }) {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      setFormState('success');

      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setFormState('idle');
      }, 3000);
    } catch {
      setFormState('error');
      setTimeout(() => {
        setFormState('idle');
      }, 3000);
    }
  };

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Case Studies', href: '/case-studies' },
  ];
  const serviceLinks = [
    { label: 'Amazon', href: '/amazon-marketing' },
    { label: 'Shopify', href: '/shopify-development' },
    { label: 'Etsy', href: '/etsy-optimization' },
    { label: 'Walmart', href: '/walmart-marketplace' },
    { label: 'eBay', href: '/ebay-management' },
    { label: 'TikTok Shop', href: '/tiktok-shop' },
    { label: 'Automation', href: '/ecommerce-automation' },
  ];

  return (
    <footer className={`relative bg-[#050505] overflow-x-hidden w-full ${className}`}>

      {/* ── Form Section (exact TikTokSection layout, changed text only) ── */}
      <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[698.728px] w-full overflow-hidden">
        {/* Purple gradient glow */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[150px] md:w-[300px] h-[200px] md:h-[400px]"
            style={{
              background: 'radial-gradient(ellipse at left center, rgba(132,0,255,0.25) 0%, rgba(132,0,255,0.12) 30%, transparent 70%)',
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[600px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
            }}
          />
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[150px] md:w-[300px] h-[200px] md:h-[400px]"
            style={{
              background: 'radial-gradient(ellipse at right center, rgba(132,0,255,0.25) 0%, rgba(132,0,255,0.12) 30%, transparent 70%)',
            }}
          />
        </div>

        {/* Main container */}
        <div className="relative mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-8 min-h-[500px] md:min-h-[600px] lg:min-h-[698.728px]">

          {/* Decorative ellipses - Hidden on mobile */}
          <div className="hidden lg:block absolute h-[569.965px] left-[calc(50%-386.44px)] top-[67.88px] -translate-x-1/2 w-[73.76px] z-0">
            <OptimizedImage
              src="/images/tiktok/decorative/ellipse-7175.svg"
              alt=""
              width={74}
              height={570}
              className="absolute inset-[-44.12%_-340.91%] w-full h-full"
            />
          </div>

          {/* Engine nine ellipses (decorative) - Hidden on mobile */}
          <div className="hidden lg:flex absolute inset-[20.18%_16.58%_59.59%_73.5%] items-center justify-center z-0">
            <div className="flex-none rotate-[30deg] size-[103.474px]">
              <OptimizedImage
                src="/images/tiktok/decorative/engine-nine-ellipse.svg"
                alt=""
                width={103}
                height={103}
                className="absolute inset-[0_-21.81%_-43.63%_-21.81%] w-full h-full"
              />
            </div>
          </div>

          {/* Brand logo elements */}
          <div className="absolute h-[40.233px] right-[342.24px] top-[192.13px] w-[41.071px] z-0 hidden lg:block">
            <OptimizedImage
              src="/images/tiktok/logos/logo-13.svg"
              alt=""
              width={41}
              height={40}
              className="object-contain w-full h-full"
            />
          </div>

          <div className="absolute h-[42.747px] right-[372.2px] top-[606.83px] w-[41.909px] z-0 hidden lg:block">
            <OptimizedImage
              src="/images/tiktok/logos/logo-52.svg"
              alt=""
              width={42}
              height={43}
              className="object-contain w-full h-full"
            />
          </div>

          <div className="absolute right-[102.59px] size-[33.527px] top-[53.64px] z-0 hidden lg:block">
            <OptimizedImage
              src="/images/tiktok/logos/logo-89.svg"
              alt=""
              width={34}
              height={34}
              className="object-contain w-full h-full"
            />
          </div>

          <div className="absolute h-[40.233px] left-[581.05px] top-[81.29px] w-[41.071px] z-0 hidden lg:block">
            <OptimizedImage
              src="/images/tiktok/logos/logo-15.svg"
              alt=""
              width={41}
              height={40}
              className="object-contain w-full h-full"
            />
          </div>

          <div className="absolute h-[40.233px] left-[50.06px] top-[158.29px] w-[41.071px] z-0 hidden lg:block">
            <OptimizedImage
              src="/images/tiktok/logos/logo-15.svg"
              alt=""
              width={41}
              height={40}
              className="object-contain w-full h-full"
            />
          </div>

          <div className="absolute left-[654.41px] size-[33.527px] top-[406.64px] z-0 hidden lg:block">
            <OptimizedImage
              src="/images/tiktok/logos/logo-86.svg"
              alt=""
              width={34}
              height={34}
              className="object-contain w-full h-full"
            />
          </div>

          <div className="absolute left-[346.41px] size-[33.527px] top-[477.64px] z-0 hidden lg:block">
            <OptimizedImage
              src="/images/tiktok/logos/frame.svg"
              alt=""
              width={34}
              height={34}
              className="object-contain w-full h-full"
            />
          </div>

          {/* TikTok logo main visual - large rotated */}
          <div className="absolute flex items-center justify-center right-[-30px] md:right-[-40px] lg:right-[-58px] size-[120px] md:size-[200px] lg:size-[328.36px] top-[60px] md:top-[80px] lg:top-[112px] rotate-[341.694deg] z-0 opacity-60 md:opacity-80 lg:opacity-100">
            <OptimizedImage
              src="/images/products/tiktok-shop.png"
              alt=""
              width={260}
              height={260}
              className="object-contain w-full h-full"
            />
          </div>

          {/* TikTok logo - small rotated */}
          <div className="absolute flex items-center justify-center left-[20px] md:left-[50px] lg:left-[80px] size-[80px] md:size-[140px] lg:size-[214.982px] top-[350px] md:top-[420px] lg:top-[495px] rotate-[11.121deg] z-0 opacity-60 md:opacity-80 lg:opacity-100">
            <OptimizedImage
              src="/images/products/tiktok-shop.png"
              alt=""
              width={183}
              height={183}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 md:gap-8 lg:gap-12 pt-8 md:pt-12 lg:pt-0 pb-6 md:pb-8 lg:pb-0 min-h-[500px] md:min-h-[600px] lg:min-h-[698.728px]">
            {/* Left side content */}
            <div className="flex flex-col items-center lg:items-start text-white w-full lg:w-auto text-center lg:text-left">
              <Heading
                as="h2"
                variant="h1"
                className="mb-3 md:mb-4 font-lexend text-[28px] sm:text-[32px] md:text-[42px] lg:text-[48px] font-bold leading-tight md:leading-normal"
              >
                Ready to <span className="text-[#e1c8ff]">Scale</span>
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                <span className="text-[#e1c8ff]">Your Store?</span>
              </Heading>

              <Text
                as="p"
                variant="body"
                className="mb-4 md:mb-6 max-w-[564px] font-red-hat-display text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] text-[#c8cdd2]"
              >
                Drop us a message and our team will get back to you within 24 hours with a personalized automation strategy.
              </Text>

              <ScrollToSection
                targetId="calendly"
                className="border-[#7300ff] border border-solid px-4 md:px-[19.712px] py-3 md:py-[14.784px] rounded-full md:rounded-[19.712px] shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-poppins font-bold leading-[1.3] not-italic text-[14px] md:text-[17px] lg:text-[18px] text-center text-white uppercase transition-all duration-200 hover:opacity-90 active:opacity-80 inline-block cursor-pointer"
                style={{
                  backgroundImage: `radial-gradient(ellipse at center, rgba(132,0,255,0.59) 0%, rgba(115,0,255,0) 100%)`,
                }}
              >
                Book Your Free Strategy Call
              </ScrollToSection>
            </div>

            {/* Right side form */}
            <form
              className="relative z-20 w-full lg:w-[510px] rounded-[14px] md:rounded-[18px] border border-[#ab78e9] border-solid bg-[rgba(7,7,7,0.28)] p-5 sm:p-8 md:p-[50px] lg:p-[60px] backdrop-blur-[4.45px] shrink-0 overflow-hidden"
              onSubmit={handleSubmit}
            >
              {/* Submission overlay animation */}
              {(formState === 'submitting' || formState === 'success' || formState === 'error') && (
                <div
                  className={`absolute inset-0 z-30 flex items-center justify-center bg-[rgba(7,7,7,0.95)] backdrop-blur-sm transition-all duration-300 ${
                    formState === 'submitting' ? 'animate-pulse' : 'opacity-100'
                  }`}
                >
                  {formState === 'submitting' && (
                    <div className="flex flex-col items-center gap-4">
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-0 border-4 border-[#ab78e9] border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      <p className="font-poppins font-bold text-[18px] text-white">Submitting...</p>
                    </div>
                  )}
                  {formState === 'success' && (
                    <div className="flex flex-col items-center gap-4 animate-[fadeIn_0.4s_ease-out]">
                      <div className="w-16 h-16 rounded-full bg-[#8539bf] flex items-center justify-center animate-[zoomIn_0.5s_ease-out_0.1s_both]">
                        <svg className="w-10 h-10 text-white animate-[checkmark_0.5s_ease-out_0.2s_both]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-poppins font-bold text-[18px] text-white">Message Sent!</p>
                      <p className="font-lexend text-[14px] text-[#c8cdd2]">We&apos;ll get back to you soon.</p>
                    </div>
                  )}
                  {formState === 'error' && (
                    <div className="flex flex-col items-center gap-4 animate-[fadeIn_0.4s_ease-out]">
                      <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center animate-[zoomIn_0.5s_ease-out_0.1s_both]">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <p className="font-poppins font-bold text-[18px] text-white">Error</p>
                      <p className="font-lexend text-[14px] text-[#c8cdd2]">Please try again.</p>
                    </div>
                  )}
                </div>
              )}
              <p className="font-poppins font-bold leading-[30px] not-italic relative shrink-0 text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] text-white mb-4 sm:mb-6 md:mb-8">
                Get Started
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-[30px] w-full mb-4 sm:mb-5 md:mb-[30px]">
                <div className="relative h-[50px] sm:h-[55px] md:h-[60px] w-full">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="name"
                    disabled={formState === 'submitting'}
                    className="absolute inset-0 capitalize font-lexend font-normal text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] text-white bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid rounded-[8px] md:rounded-[10px] px-4 md:px-[20px] py-0 h-full w-full placeholder:text-white placeholder:opacity-70 outline-none focus:ring-0 focus:border-[#ab78e9] disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  />
                </div>
                <div className="relative h-[50px] sm:h-[55px] md:h-[60px] w-full">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email address"
                    disabled={formState === 'submitting'}
                    className="absolute inset-0 capitalize font-lexend font-normal text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] text-white bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid rounded-[8px] md:rounded-[10px] px-4 md:px-[20px] py-0 h-full w-full placeholder:text-white placeholder:opacity-70 outline-none focus:ring-0 focus:border-[#ab78e9] disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  />
                </div>
              </div>
              <div className="h-[50px] sm:h-[55px] md:h-[60px] relative shrink-0 w-full mb-4 sm:mb-5 md:mb-[30px]">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  disabled={formState === 'submitting'}
                  className="absolute inset-0 capitalize font-lexend font-normal text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] text-white bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid rounded-[8px] md:rounded-[10px] px-4 md:px-[20px] py-0 h-full w-full placeholder:text-white placeholder:opacity-70 outline-none focus:ring-0 focus:border-[#ab78e9] disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                />
              </div>
              <div className="h-[120px] sm:h-[140px] md:h-[171px] relative shrink-0 w-full mb-4 sm:mb-5 md:mb-[30px]">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="write message . . ."
                  disabled={formState === 'submitting'}
                  className="absolute inset-0 capitalize font-lexend font-normal text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] text-white bg-[rgba(11,11,11,0.41)] border border-[#ab78e9] border-solid rounded-[8px] md:rounded-[10px] px-4 md:px-[20px] py-4 md:py-[20px] h-full w-full placeholder:text-white placeholder:opacity-70 resize-none outline-none focus:ring-0 focus:border-[#ab78e9] disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                />
              </div>
              <div className="relative shrink-0 w-full">
                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="bg-[#8539bf] hover:bg-[#9a4dd1] transition-colors rounded-[24px] px-[20px] py-[10px] flex items-center justify-center gap-[20px] w-full cursor-pointer font-primary font-bold text-[16px] text-white uppercase outline-none focus:outline-none active:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? (
                    <>
                      <span className="whitespace-nowrap">Sending...</span>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </>
                  ) : (
                    <>
                      <span className="whitespace-nowrap">send message</span>
                      <Image
                        src="/images/icons/vector-contact.svg"
                        alt=""
                        width={19}
                        height={18}
                        className="inline-block flex-shrink-0"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ── Standard Footer ── */}
      <div className="relative bg-[#06010E]">
        <div className="absolute inset-0 z-[2] w-full h-full">
          <Image src="/images/icons/image-bg.svg" alt="" fill className="object-cover" />
        </div>

        <div className="relative z-[3] max-w-[1440px] mx-auto w-full px-4 md:px-6 lg:px-[135px] py-6 md:py-12 lg:py-[60px]">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-[99px] items-center lg:items-start pb-6 md:pb-12 lg:pb-[60px]">
            <div className="flex flex-col items-center lg:items-start gap-4 md:gap-8 lg:gap-[50px] w-full lg:w-[460px]">
              <div className="h-[100px] md:h-[131px] w-[116px] md:w-[152px] overflow-clip relative">
                <Image src="/images/hero/artboard1-copy-ecomm-globe-1.png" alt="EcommGlobe Logo" width={152} height={131} className="object-contain w-full h-full" />
              </div>
              <div className="flex flex-col items-center lg:items-start gap-3 md:gap-[20px] text-center lg:text-left">
                <Heading variant="small" className="text-[14px] sm:text-[16px] md:text-[18px] uppercase">
                  Ecommerce Marketing & Automation Agency
                </Heading>
                <Text variant="small" color="secondary" className="text-[12px] sm:text-[13px] md:text-[14px]">
                  Get a free audit of your current ecommerce automation strategy. Let us help you identify growth opportunities.
                </Text>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-6 md:gap-12 lg:gap-[80px] flex-1 w-full justify-items-center lg:justify-end lg:pt-8 lg:mt-8">
              <div className="flex flex-col items-center lg:items-start gap-3 md:gap-[20px] text-center lg:text-left">
                <Heading variant="small" className="text-[14px] sm:text-[16px] md:text-[18px] uppercase">Company</Heading>
                <nav className="flex flex-col items-center lg:items-start gap-1 md:gap-[8px] font-body text-[12px] md:text-[14px] text-[#F9F6FF]">
                  {companyLinks.map((link) => (
                    <Link key={link.label} href={link.href} className="hover:text-[#E2A4FF] transition-colors min-h-[36px] md:min-h-[44px] flex items-center">{link.label}</Link>
                  ))}
                </nav>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-3 md:gap-[20px] text-center lg:text-left">
                <Heading variant="small" className="text-[14px] sm:text-[16px] md:text-[18px] uppercase">Services</Heading>
                <nav className="flex flex-col items-center lg:items-start gap-1 md:gap-[8px] font-body text-[12px] md:text-[14px] text-[#F9F6FF]">
                  {serviceLinks.map((link) => (
                    <Link key={link.label} href={link.href} className="hover:text-[#E2A4FF] transition-colors min-h-[36px] md:min-h-[44px] flex items-center">{link.label}</Link>
                  ))}
                </nav>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-3 md:gap-[20px] col-span-2 sm:col-span-1 w-full sm:w-[215px] text-center lg:text-left">
                <Heading variant="small" className="text-[14px] sm:text-[16px] md:text-[18px] uppercase">Have Questions?</Heading>
                <div className="flex flex-col items-center lg:items-start gap-1 md:gap-[8px] font-body text-[12px] md:text-[14px] text-[#F9F6FF]">
                  <p>Email: <span className="text-[#E2A4FF]">info@ecommglobe.com</span></p>
                  <p>Phone: <span className="text-[#E2A4FF]">+123 456 7890</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-[3] border-t border-[#AB78E9] border-opacity-25 w-full">
          <div className="max-w-[1440px] mx-auto w-full px-4 md:px-6 lg:px-[135px] flex flex-col sm:flex-row items-center justify-between py-3 md:py-5 lg:py-[20px] gap-3 md:gap-4">
            <div className="flex items-center gap-2 md:gap-[16px]">
              <Text variant="small" color="secondary" className="text-[11px] sm:text-[12px] md:text-[14px]">
                Copyright &copy; 2025 EcommGlobe
              </Text>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-[16px] flex-wrap justify-center">
              {['Term of use', 'Privacy Policy', 'Cookie Policy'].map((link, index, array) => (
                <div key={link} className="flex items-center gap-2 sm:gap-3 md:gap-[16px]">
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="font-display text-[11px] sm:text-[12px] md:text-[14px] text-[#F9F6FF] hover:text-[#E2A4FF] transition-colors">{link}</a>
                  {index < array.length - 1 && (
                    <div className="hidden sm:flex h-[10px] w-0 items-center justify-center">
                      <Image src="/images/icons/line-10.svg" alt="" width={10} height={10} className="rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
