/**
 * Footer Component
 * 
 * Footer section matching Figma design exactly.
 * Includes logo, description, navigation links, contact info, and copyright.
 * 
 * @component
 * @example
 * ```tsx
 * <Footer />
 * ```
 * 
 * Features:
 * - Background image/pattern
 * - Logo and company description
 * - Three navigation columns: Company, Services, Contact
 * - Contact information (email, phone)
 * - Copyright and legal links (Terms, Privacy, Cookies)
 * - Responsive layout (stacked on mobile, columns on desktop)
 * - Touch-friendly link sizes (min 44x44px)
 * 
 * @returns {JSX.Element} Footer with logo, navigation, and copyright
 */

import Image from 'next/image';
import Link from 'next/link';
import { Heading, Text } from '@/components/ui/Typography';

export default function Footer({ className = "" }: { className?: string }) {
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
    { label: 'Automation', href: '/services' },
  ];

  return (
    <footer className={`relative bg-[#06010E] overflow-x-hidden w-full ${className}`}>
      {/* Background Image - Full Width */}
      <div className="absolute inset-0 z-[2] w-full h-full">
        <Image
          src="/images/icons/image-bg.svg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-[3] max-w-[1440px] mx-auto w-full px-4 md:px-6 lg:px-[135px] py-6 md:py-12 lg:py-[60px]">
         {/* Main Footer Content */}
         <div className="flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-[99px] items-center lg:items-start pb-6 md:pb-12 lg:pb-[60px]">
           {/* Left Column */}
           <div className="flex flex-col items-center lg:items-start gap-4 md:gap-8 lg:gap-[50px] w-full lg:w-[460px]">
            {/* Logo */}
            <div className="h-[100px] md:h-[131px] w-[116px] md:w-[152px] overflow-clip relative">
              <Image
                src="/images/hero/artboard1-copy-ecomm-globe-1.png"
                alt="EcommGlobe Logo"
                width={152}
                height={131}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col items-center lg:items-start gap-3 md:gap-[20px] text-center lg:text-left">
              <Heading variant="small" className="text-[14px] sm:text-[16px] md:text-[18px] uppercase">
                Ecommerce Marketing & Automation Agency
              </Heading>
              <Text variant="small" color="secondary" className="text-[12px] sm:text-[13px] md:text-[14px]">
                Get a free audit of your current ecommerce automation strategy. Let us help you identify growth opportunities.
              </Text>
              <Link
                href="/contact"
                className="border-[#7300ff] border border-solid px-4 md:px-[19.712px] py-2.5 md:py-[14.784px] rounded-full md:rounded-[19.712px] shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold leading-[1.3] not-italic text-[13px] sm:text-[14px] md:text-[18px] text-center text-white uppercase w-fit transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(132,0,255,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80 inline-block cursor-pointer"
                style={{
                  backgroundImage: `radial-gradient(ellipse at center, rgba(132,0,255,0.59) 0%, rgba(115,0,255,0) 100%)`,
                }}
              >
                Request Free Audit
              </Link>
            </div>
          </div>

           {/* Right Columns */}
           <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-6 md:gap-12 lg:gap-[80px] flex-1 w-full justify-items-center lg:justify-end lg:pt-8 lg:mt-8">
            {/* Company Column */}
            <div className="flex flex-col items-center lg:items-start gap-3 md:gap-[20px] text-center lg:text-left">
              <Heading variant="small" className="text-[14px] sm:text-[16px] md:text-[18px] uppercase">
                Company
              </Heading>
               <nav className="flex flex-col items-center lg:items-start gap-1 md:gap-[8px] font-body text-[12px] md:text-[14px] text-[#F9F6FF]">
                 {companyLinks.map((link) => (
                   <Link 
                     key={link.label} 
                     href={link.href} 
                     className="hover:text-[#E2A4FF] transition-colors min-h-[36px] md:min-h-[44px] flex items-center"
                     aria-label={link.label}
                   >
                     {link.label}
                   </Link>
                 ))}
               </nav>
            </div>

            {/* Services Column */}
            <div className="flex flex-col items-center lg:items-start gap-3 md:gap-[20px] text-center lg:text-left">
              <Heading variant="small" className="text-[14px] sm:text-[16px] md:text-[18px] uppercase">
                Services
              </Heading>
               <nav className="flex flex-col items-center lg:items-start gap-1 md:gap-[8px] font-body text-[12px] md:text-[14px] text-[#F9F6FF]">
                 {serviceLinks.map((link) => (
                   <Link 
                     key={link.label} 
                     href={link.href} 
                     className="hover:text-[#E2A4FF] transition-colors min-h-[36px] md:min-h-[44px] flex items-center"
                     aria-label={link.label}
                   >
                     {link.label}
                   </Link>
                 ))}
               </nav>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col items-center lg:items-start gap-3 md:gap-[20px] col-span-2 sm:col-span-1 w-full sm:w-[215px] text-center lg:text-left">
              <Heading variant="small" className="text-[14px] sm:text-[16px] md:text-[18px] uppercase">
                Have Questions?
              </Heading>
               <div className="flex flex-col items-center lg:items-start gap-1 md:gap-[8px] font-body text-[12px] md:text-[14px] text-[#F9F6FF]">
                 <p>
                   Email: <span className="text-[#E2A4FF]">info@ecommglobe.com</span>
                 </p>
                 <p>
                   Phone: <span className="text-[#E2A4FF]">+123 456 7890</span>
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-[1] border-t border-[#AB78E9] border-opacity-25 w-full">
        <div className="max-w-[1440px] mx-auto w-full px-4 md:px-6 lg:px-[135px] flex flex-col sm:flex-row items-center justify-between py-3 md:py-5 lg:py-[20px] gap-3 md:gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 md:gap-[16px]">
            <Text variant="small" color="secondary" className="text-[11px] sm:text-[12px] md:text-[14px]">
              Copyright © 2025 EcommGlobe
            </Text>
            <div className="hidden sm:flex h-[10px] w-0 items-center justify-center">
              <Image
                src="/images/icons/line-10.svg"
                alt=""
                width={10}
                height={10}
                className="rotate-90"
              />
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-[16px] flex-wrap justify-center">
            {['Term of use', 'Privacy Policy', 'Cookie Policy'].map((link, index, array) => (
              <div key={link} className="flex items-center gap-2 sm:gap-3 md:gap-[16px]">
                <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="font-display text-[11px] sm:text-[12px] md:text-[14px] text-[#F9F6FF] hover:text-[#E2A4FF] transition-colors">
                  {link}
                </a>
                {index < array.length - 1 && (
                  <div className="hidden sm:flex h-[10px] w-0 items-center justify-center">
                    <Image
                      src="/images/icons/line-10.svg"
                      alt=""
                      width={10}
                      height={10}
                      className="rotate-90"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

