/**
 * Services Section Component
 * 
 * "Our Services" section matching Figma design exactly.
 * Shows 4 service cards: Amazon, Shopify, Etsy, Walmart.
 * 
 * @component
 * @example
 * ```tsx
 * <ServicesSection />
 * ```
 * 
 * Features:
 * - Section title with purple accent text
 * - 4 service cards in responsive grid (1/2/4 columns)
 * - Each card has service logo, title, description, and arrow icon
 * - Background gradient and decorative elements
 * - Cards are exactly same sized
 * - Arrow icons are clickable and redirect to respective service pages
 * 
 * @returns {JSX.Element} Services section with 4 service cards
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Heading, Text } from '@/components/ui/Typography';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Container from '@/components/layout/Container';

export default function ServicesSection() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: 'Amazon',
      description: 'Seller Central setup, listing optimization, and scalable growth strategies.',
      image: {
        src: '/images/services/amazon-marketing.png',
        alt: 'Amazon service',
        width: 102,
        height: 102,
      },
      iconBg: '#7115FF',
      href: '/amazon-marketing',
    },
    {
      title: 'Shopify',
      description: 'High-converting Shopify stores built for speed and scale.',
      image: {
        src: '/images/logos/shopify-logo.png',
        alt: 'Shopify service',
        width: 102,
        height: 102,
      },
      iconBg: '#070015',
      href: '/shopify-development',
    },
    {
      title: 'Etsy',
      description: 'SEO-optimized Etsy shops designed to boost visibility and sales.',
      image: {
        src: '/images/services/etsy-optimization.png',
        alt: 'Etsy service',
        width: 102,
        height: 102,
      },
      iconBg: '#070015',
      href: '/etsy-optimization',
    },
    {
      title: 'Walmart',
      description: 'Marketplace approval, setup, and performance optimization.',
      image: {
        src: '/images/products/walmart-service.png',
        alt: 'Walmart service',
        width: 102,
        height: 102,
      },
      iconBg: '#070015',
      href: '/walmart-marketplace',
    },
    {
      title: 'eBay',
      description: 'Complete eBay store setup, listing optimization, and growth strategies.',
      image: {
        src: '/images/services/ebay-management.png',
        alt: 'eBay service',
        width: 102,
        height: 102,
      },
      iconBg: '#070015',
      href: '/ebay-management',
    },
    {
      title: 'TikTok Shop',
      description: 'TikTok Shop setup, content strategy, and viral product promotion.',
      image: {
        src: '/images/services/tiktok-shop-setup.png',
        alt: 'TikTok Shop service',
        width: 102,
        height: 102,
      },
      iconBg: '#070015',
      href: '/tiktok-shop',
    },
  ];

  // Responsive cards per view
  const [cardsPerView, setCardsPerView] = useState(4);
  
  // Update cardsPerView based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(4); // Desktop: 4 cards
      }
    };
    
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);
  
  const maxIndex = Math.max(0, services.length - cardsPerView);
  
  // Reset currentIndex if it exceeds maxIndex when cardsPerView changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsPerView, maxIndex, currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Calculate translateX dynamically based on card width and gap
  useEffect(() => {
    const updateTranslateX = () => {
      if (!carouselRef.current) return;
      
      const container = carouselRef.current;
      const firstCard = container.querySelector('.carousel-card') as HTMLElement;
      if (!firstCard) return;
      
      const cardWidth = firstCard.offsetWidth;
      const gap = 12; // gap in pixels (matches the inline style gap)
      const translateValue = -currentIndex * (cardWidth + gap);
      setTranslateX(translateValue);
    };

    updateTranslateX();
    window.addEventListener('resize', updateTranslateX);
    return () => window.removeEventListener('resize', updateTranslateX);
  }, [currentIndex, cardsPerView]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Purple gradient glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Center purple glow - radial gradient */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(132,0,255,0.3) 0%, rgba(132,0,255,0.15) 40%, transparent 70%)',
          }}
        />
        {/* Right purple glow */}
        <div className="absolute right-0 top-[10%] w-[250px] md:w-[500px] h-[350px] md:h-[650px]" style={{ background: 'radial-gradient(ellipse at right center, rgba(145,55,255,0.2) 0%, rgba(115,0,255,0.08) 45%, transparent 80%)' }} />
        {/* Decorative globe - right side */}
        <OptimizedImage src="/images/globe.png" alt="" width={400} height={400} className="absolute right-[-70px] md:right-[-30px] top-[5%] w-[160px] md:w-[270px] lg:w-[350px] opacity-25" />
      </div>

      <Container size="xl" className="py-8 md:py-12 lg:py-16 relative z-10">
        <div className="flex flex-col items-center gap-4 md:gap-8">
          {/* Section Title */}
          <div className="text-center max-w-[885px] px-2">
            <Heading variant="h2" className="text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px]">
              <span>Our </span>
              <span className="text-[#D9B9FF]">Services</span>
            </Heading>
            <Text variant="body" color="muted" className="mt-2 md:mt-4 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px]">
              End-to-end ecommerce solutions designed to maximize your revenue across all major marketplaces
            </Text>
          </div>

          {/* Service Cards Carousel Container */}
          <div className="w-full mt-4 md:mt-10 overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(${translateX}px)`,
                gap: '12px',
              }}
            >
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="carousel-card flex-shrink-0 w-[85%] sm:w-[calc((100%-12px)/2)] lg:w-[calc((100%-36px)/4)]"
                >
                  <div
                className="relative border-[#AB78E9] border border-solid rounded-[12px] md:rounded-[7.812px] p-4 sm:p-5 md:p-[23.436px_31.248px] flex flex-col gap-4 md:gap-[31.248px] overflow-clip shadow-[inset_0px_5.172px_42.427px_0px_rgba(171,120,233,0.32)] h-full min-h-[280px] md:min-h-[320px]"
                style={{
                  backgroundImage: 'linear-gradient(to bottom, rgba(145,55,255,0.22), rgba(115,0,255,0.094))',
                }}
              >
                {/* Service Icon */}
                <div className="flex items-start justify-between w-full">
                  {service.title === 'Etsy' ? (
                    <OptimizedImage
                      src={service.image.src}
                      alt={service.image.alt}
                      width={88}
                      height={88}
                      className="object-contain w-[88px] h-[88px] rounded-[34px]"
                    />
                  ) : service.title === 'Amazon' ? (
                    <div className="relative rounded-[12px] shrink-0 flex items-center justify-center overflow-hidden w-[102px] h-[102px]">
                      <OptimizedImage
                        src={service.image.src}
                        alt={service.image.alt}
                        width={102}
                        height={102}
                        className="object-contain w-full h-full rounded-[12px]"
                      />
                    </div>
                  ) : service.title === 'Walmart' ? (
                    <div className="relative rounded-[12px] shrink-0 flex items-center justify-center overflow-hidden w-[115px] h-[115px] -ml-2">
                      <OptimizedImage
                        src={service.image.src}
                        alt={service.image.alt}
                        width={115}
                        height={115}
                        className="object-contain w-full h-full rounded-[12px]"
                      />
                    </div>
                  ) : (
                    <div className="relative rounded-[12px] shrink-0 flex items-center justify-center overflow-hidden w-[102px] h-[102px]">
                      <OptimizedImage
                        src={service.image.src}
                        alt={service.image.alt}
                        width={102}
                        height={102}
                        className="object-contain w-full h-full rounded-[12px]"
                      />
                    </div>
                  )}
                  
                  {/* Clickable Arrow Icon */}
                  <Link
                    href={service.href}
                    className="size-[39.06px] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200 z-10"
                    style={{ backgroundColor: service.iconBg }}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <Image
                      src="/images/icons/arrow-up-right.svg"
                      alt={`Go to ${service.title} service page`}
                      width={19}
                      height={19}
                      className="object-contain"
                    />
                  </Link>
                </div>

                {/* Title and Description */}
                <div className="flex flex-col gap-1 md:gap-[7.812px] flex-grow">
                  <h3 className="font-poppins font-bold leading-[1.4] not-italic text-[18px] sm:text-[20px] md:text-[24px] text-white uppercase min-h-[28px] md:min-h-[33.6px] flex items-center">
                    {service.title}
                  </h3>
                  <p className="font-red-hat-display font-normal leading-[1.6] text-[#F9F6FF] text-[14px] sm:text-[16px] md:text-[18px] min-h-[60px] md:min-h-[86.4px]">
                    {service.description}
                  </p>
                </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 mt-8" role="group" aria-label="Service cards navigation">
            <button 
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`size-[44px] rotate-180 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#AB78E9] focus:ring-offset-2 rounded-full transition-opacity ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'
              }`}
              aria-label="Previous service cards"
            >
              <Image
                src="/images/icons/arrow-right-circle.svg"
                alt=""
                width={44}
                height={44}
                className="object-contain"
                aria-hidden="true"
              />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`size-[44px] min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#AB78E9] focus:ring-offset-2 rounded-full transition-opacity ${
                currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'
              }`}
              aria-label="Next service cards"
            >
              <Image
                src="/images/icons/arrow-right-circle.svg"
                alt=""
                width={44}
                height={44}
                className="object-contain"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

