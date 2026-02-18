/**
 * Navbar Component
 * 
 * Top navigation bar with modern glassmorphic design.
 * Includes logo, navigation menu with Services dropdown, and Contact US button.
 * Fixed position at top of page with responsive mobile menu.
 * 
 * @component
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import OptimizedImage from '@/components/ui/OptimizedImage';
import ServicesDropdown from './ServicesDropdown';
import { 
  NavigationItem, 
  ServiceOption, 
  getActiveNavItem 
} from '@/types';

// Navigation items configuration
const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '/', hasDropdown: false },
  { id: 'services', label: 'Services', href: '/services', hasDropdown: true },
  { id: 'case-studies', label: 'Case Studies', href: '/case-studies', hasDropdown: false },
  { id: 'about', label: 'About', href: '/about', hasDropdown: false },
  { id: 'pricing', label: 'Pricing', href: '/pricing', hasDropdown: false },
];

// Service options for dropdown
const serviceOptions: ServiceOption[] = [
  { id: 'amazon', label: 'Amazon Marketing', href: '/amazon-marketing', platform: 'amazon' },
  { id: 'shopify', label: 'Shopify Development', href: '/shopify-development', platform: 'shopify' },
  { id: 'etsy', label: 'Etsy Optimization', href: '/etsy-optimization', platform: 'etsy' },
  { id: 'walmart', label: 'Walmart Marketplace', href: '/walmart-marketplace', platform: 'walmart' },
  { id: 'ebay', label: 'eBay Management', href: '/ebay-management', platform: 'ebay' },
  { id: 'tiktok', label: 'TikTok Shop Setup', href: '/tiktok-shop', platform: 'tiktok' },
];

export default function Navbar({ className = "", hideLinks = false }: { className?: string; hideLinks?: boolean }) {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Detect mobile/desktop for dropdown interaction
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close menus on pathname change
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Get active navigation item
  const activeNavItem = getActiveNavItem(pathname);

  // Desktop dropdown handlers
  const handleServicesMouseEnter = () => {
    if (!isMobile) {
      setIsDropdownOpen(true);
    }
  };

  const handleServicesMouseLeave = () => {
    if (!isMobile) {
      setIsDropdownOpen(false);
    }
  };

  const handleServicesClick = () => {
    if (isMobile) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsMobileServicesOpen(false);
    }
  };

  // Mobile services toggle
  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <>
      <nav 
        className={`absolute top-0 left-0 right-0 z-50 ${className}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1440px] mx-auto px-4 lg:px-[135px] py-4 lg:py-[28px]">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <div className="h-[100px] lg:h-[131px] w-[116px] lg:w-[152px] overflow-clip relative shrink-0">
              <Link href="/" aria-label="EcommGlobe Home">
                <OptimizedImage
                  src="/images/hero/artboard1-copy-ecomm-globe-1.png"
                  alt="EcommGlobe Logo"
                  width={152}
                  height={131}
                  className="object-contain w-full h-full"
                  priority
                />
              </Link>
            </div>

            {/* Navigation Menu - Center (Desktop only) */}
            {!hideLinks && <nav
              className="hidden lg:flex border border-[#ab78e9] border-solid h-[47px] rounded-[30px] px-4 items-center justify-center relative backdrop-blur-sm bg-white/5"
              aria-label="Main navigation"
              style={{ width: '650px' }}
            >
              <div className="flex items-center justify-evenly w-full">
                {navigationItems.map((item, index) => {
                  const isActive = activeNavItem === item.id;
                  const isServices = item.id === 'services';
                  
                  return (
                    <div key={item.id} className="flex items-center">
                      {index > 0 && (
                        <span 
                          className="font-primary font-thin text-[#ab78e9] text-[16px] flex items-center justify-center mx-4"
                          aria-hidden="true"
                        >
                          |
                        </span>
                      )}
                      <div className="relative flex items-center">
                        <Link
                          href={item.href}
                          className={`font-primary text-[18px] hover:text-[#E1C8FF] transition-colors outline-none focus:outline-none active:outline-none rounded px-2 flex items-center justify-center whitespace-nowrap ${
                            isActive ? 'font-bold text-white' : 'font-regular text-white'
                          }`}
                          aria-current={isActive ? 'page' : undefined}
                          onMouseEnter={isServices ? handleServicesMouseEnter : undefined}
                          onMouseLeave={isServices ? handleServicesMouseLeave : undefined}
                          onClick={isServices ? handleServicesClick : undefined}
                          aria-expanded={isServices ? isDropdownOpen : undefined}
                          aria-haspopup={isServices ? 'menu' : undefined}
                          aria-controls={isServices ? 'services-dropdown' : undefined}
                        >
                          <span className="flex items-center justify-center gap-[6px]">
                            {item.label}
                            {item.hasDropdown && (
                              <span className={`inline-block transition-transform duration-300 ${isDropdownOpen ? 'rotate-0' : 'rotate-180'}`}>
                                <Image
                                  src="/images/navbar/vector-dropdown.svg"
                                  alt=""
                                  width={10}
                                  height={6}
                                  className="block"
                                />
                              </span>
                            )}
                          </span>
                        </Link>
                        {isServices && (
                          <ServicesDropdown
                            isOpen={isDropdownOpen}
                            onToggle={setIsDropdownOpen}
                            onClose={() => setIsDropdownOpen(false)}
                            services={serviceOptions}
                            className="left-0"
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </nav>}

            {/* Right side - Contact button (desktop) & Hamburger (mobile) */}
            {!hideLinks && <div className="flex items-center gap-4">
              {/* Contact US Button - Desktop only */}
              <Link
                href="/contact"
                className="hidden lg:flex bg-[#8539bf] hover:bg-[#9a4dd1] transition-colors rounded-[24px] px-[20px] py-[10px] items-center justify-center gap-[20px] cursor-pointer font-primary font-bold text-[16px] text-white uppercase outline-none focus:outline-none active:outline-none"
              >
                <span className="whitespace-nowrap">Contact US</span>
                <Image
                  src="/images/icons/vector-contact.svg"
                  alt=""
                  width={19}
                  height={18}
                  className="inline-block flex-shrink-0"
                />
              </Link>

              {/* Mobile Menu Button - Hamburger/Close */}
              <button 
                className="lg:hidden relative z-[60] w-8 h-8 flex items-center justify-center transition-all duration-300" 
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                onClick={toggleMobileMenu}
              >
                <div className="w-5 h-4 relative flex flex-col justify-center items-center">
                  {/* Hamburger to X animation */}
                  <span 
                    className={`absolute h-0.5 w-5 bg-white rounded-full transition-all duration-300 ease-out ${
                      isMobileMenuOpen ? 'rotate-45 top-[8px]' : 'top-[1px]'
                    }`}
                  />
                  <span 
                    className={`absolute h-0.5 w-5 bg-white rounded-full transition-all duration-300 ease-out top-[8px] ${
                      isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                    }`}
                  />
                  <span 
                    className={`absolute h-0.5 w-5 bg-white rounded-full transition-all duration-300 ease-out ${
                      isMobileMenuOpen ? '-rotate-45 top-[8px]' : 'top-[15px]'
                    }`}
                  />
                </div>
              </button>
            </div>}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {!hideLinks && <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />}

      {/* Mobile Menu Panel - Glassmorphic Half Page */}
      {!hideLinks && <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[400px] z-[60] lg:hidden transform transition-transform duration-500 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Glassmorphic Background */}
        <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-b from-[#1a0a2e]/95 via-[#0d0515]/90 to-[#050505]/95 border-l border-white/10">
          {/* Decorative gradient orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-5 w-40 h-40 bg-[#8539bf]/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#ab78e9]/10 rounded-full blur-3xl" />
        </div>

        {/* Menu Content */}
        <div className="relative h-full flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
          {/* Close hint line at top */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full" />

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col gap-2" aria-label="Mobile navigation">
            {navigationItems.map((item, index) => {
              const isActive = activeNavItem === item.id;
              const isServices = item.id === 'services';
              const isPricing = item.id === 'pricing';
              
              return (
                <div key={item.id}>
                  <div 
                    className="animate-fadeSlideIn"
                    style={{ animationDelay: `${index * 75}ms` }}
                  >
                    {isServices ? (
                      // Services with expandable dropdown
                      <div>
                        <button
                          onClick={toggleMobileServices}
                          className={`w-full flex items-center justify-between py-4 px-4 rounded-2xl transition-all duration-300 group ${
                            isActive 
                              ? 'bg-white/10 border border-[#ab78e9]/50' 
                              : 'hover:bg-white/5 border border-transparent'
                          }`}
                          aria-expanded={isMobileServicesOpen}
                        >
                          <span className={`font-primary text-xl ${isActive ? 'text-white font-semibold' : 'text-white/90'}`}>
                            {item.label}
                          </span>
                          <svg 
                            className={`w-5 h-5 text-[#ab78e9] transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {/* Services Sub-menu */}
                        <div 
                          className={`overflow-hidden transition-all duration-500 ease-out ${
                            isMobileServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="pl-4 pt-2 pb-2 space-y-1">
                            {serviceOptions.map((service, sIndex) => (
                              <Link
                                key={service.id}
                                href={service.href}
                                className="flex items-center gap-3 py-3 px-4 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                                style={{ animationDelay: `${sIndex * 50}ms` }}
                              >
                                <span className="w-2 h-2 rounded-full bg-[#ab78e9] group-hover:bg-[#8539bf] transition-colors" />
                                <span className="font-primary text-base">{service.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Regular nav items
                      <Link
                        href={item.href}
                        className={`flex items-center py-4 px-4 rounded-2xl transition-all duration-300 group ${
                          isActive 
                            ? 'bg-white/10 border border-[#ab78e9]/50' 
                            : 'hover:bg-white/5 border border-transparent'
                        }`}
                      >
                        <span className={`font-primary text-xl ${isActive ? 'text-white font-semibold' : 'text-white/90 group-hover:text-white'}`}>
                          {item.label}
                        </span>
                        {isActive && (
                          <span className="ml-auto w-2 h-2 rounded-full bg-[#ab78e9]" />
                        )}
                      </Link>
                    )}
                  </div>

                  {/* Contact Button - Right after Pricing */}
                  {isPricing && (
                    <div 
                      className="animate-fadeSlideIn mt-4"
                      style={{ animationDelay: `${(index + 1) * 75}ms` }}
                    >
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 border-[#7300ff] border border-solid px-5 py-2.5 rounded-full shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)] font-primary font-bold text-base text-center text-white uppercase transition-all duration-200 hover:shadow-[0px_0px_30px_5px_rgba(132,0,255,0.6),0px_20.698px_38.735px_-48px_rgba(132,0,255,0.5)] active:opacity-80"
                        style={{
                          backgroundImage: `radial-gradient(ellipse at center, rgba(132,0,255,0.59) 0%, rgba(115,0,255,0) 100%)`,
                        }}
                      >
                        <span>Contact US</span>
                        <Image
                          src="/images/icons/vector-contact.svg"
                          alt=""
                          width={16}
                          height={15}
                          className="inline-block shrink-0"
                        />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Social Links / Footer */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-white/40 text-sm font-primary">© 2024 EcommGlobe</span>
          </div>
        </div>
      </div>}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
