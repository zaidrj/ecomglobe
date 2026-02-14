/**
 * Testimonials Section Component
 * 
 * "What Our Clients Say" section matching Figma design exactly.
 * Shows 3 testimonial cards with profile images, quotes, names, and companies.
 * 
 * @component
 * @example
 * ```tsx
 * <TestimonialsSection />
 * ```
 * 
 * Features:
 * - Section title with purple accent text
 * - 3 testimonial cards in responsive grid (1/2/3 columns)
 * - Each card includes: profile image, quote icon, testimonial text, name, company
 * - Purple-tinted card background with border
 * - Decorative line at bottom of each card
 * - Responsive card heights
 * 
 * @returns {JSX.Element} Testimonials section with 3 testimonial cards
 */

import { Heading, Text } from '@/components/ui/Typography';
import Container from '@/components/layout/Container';
import OptimizedImage from '@/components/ui/OptimizedImage';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: '"EcommGlobe helped us scale from $50k to $500k in annual revenue within 12 months. Their multi-channel approach was a game-changer for our business growth and success."',
      name: 'Sarah Johnson',
      company: 'HomeDecor Plus',
      image: {
        src: '/images/testimonials/sarah-johnson.png',
        alt: 'Sarah Johnson',
        width: 71,
        height: 71,
      },
    },
    {
      quote: '"The automation setup saved us 20+ hours per week. We can finally focus on product development instead of manual order processing and inventory management."',
      name: 'Michael Chen',
      company: 'TechGear Store',
      image: {
        src: '/images/testimonials/michael-chen.png',
        alt: 'Michael Chen',
        width: 71,
        height: 71,
      },
    },
    {
      quote: '"Their Amazon PPC optimization reduced our ad costs by 40% while increasing sales significantly. Highly recommend their services to any ecommerce business!"',
      name: 'Emily Rodriguez',
      company: 'Artisan Crafts Co.',
      image: {
        src: '/images/testimonials/emily-rodriguez.png',
        alt: 'Emily Rodriguez',
        width: 72,
        height: 71,
      },
    },
  ];

  return (
    <Container size="lg" className="py-8 md:py-12 lg:py-16 relative z-10 px-4 md:px-6">
      <div className="flex flex-col items-center gap-4 md:gap-8">
        {/* Section Title */}
        <Heading variant="h2" className="text-center max-w-[531px] text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px] px-2">
          <span>What Our </span>
          <span className="text-[#D9B9FF]">Clients Say</span>
        </Heading>

        {/* Subtitle */}
        <Text variant="body" color="muted" className="text-center max-w-[885px] mt-1 md:mt-2 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] px-2">
          Real results from real businesses we&apos;ve helped scale
        </Text>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[18.842px] w-full mt-4 md:mt-10 justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-[rgba(115,0,255,0.08)] border-[#AB78E9] border border-solid rounded-[14px] md:rounded-[18.837px] p-5 md:p-[31.08px] h-auto min-h-[300px] md:min-h-[400px] lg:min-h-[480px]"
            >
              {/* Profile Image */}
              <div className="mb-4 md:mb-8">
                <OptimizedImage
                  src={testimonial.image.src}
                  alt={`${testimonial.name}, ${testimonial.company}`}
                  width={testimonial.image.width}
                  height={testimonial.image.height}
                  className="rounded-full object-cover w-[50px] h-[50px] md:w-[71px] md:h-[71px]"
                />
              </div>

              {/* Quote Icon */}
              <div className="h-[20px] w-[22px] md:h-[25.43px] md:w-[28.256px] mb-3 md:mb-4">
                <OptimizedImage
                  src="/images/icons/hero-title.svg"
                  alt="Quote icon"
                  width={28}
                  height={25}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Quote */}
              <Text variant="body" className="mb-4 md:mb-8 text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed">
                {testimonial.quote}
              </Text>

              {/* Name and Company with Vertical Purple Line */}
              <div className="relative pl-3 md:pl-4">
                {/* Vertical Purple Line */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-[1px]"
                  style={{
                    backgroundColor: '#AB78E9',
                  }}
                />
                
                {/* Name */}
                <Text variant="small" className="text-white mb-1 md:mb-2 text-[13px] md:text-[14px]">
                  {testimonial.name}
                </Text>

                {/* Company */}
                <Text variant="small" color="muted" className="text-[12px] md:text-[14px]">
                  {testimonial.company}
                </Text>
              </div>

              {/* Decorative Line - Hidden on mobile */}
              <div className="hidden md:block absolute bottom-[32.356px] left-[31.55px] h-[69.698px] w-0">
                <OptimizedImage
                  src="/images/icons/vector-451.svg"
                  alt=""
                  width={1}
                  height={70}
                  className="absolute inset-[0_-0.47px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

