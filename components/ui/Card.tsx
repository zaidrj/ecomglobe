/**
 * Card Component
 * 
 * Matches Figma card design exactly (service cards, testimonial cards).
 * Uses design tokens for colors, borders, shadows, and spacing.
 * Includes keyboard navigation support for clickable cards.
 * 
 * @component
 * @example
 * ```tsx
 * <Card
 *   title="Service Name"
 *   description="Service description"
 *   image={{ src: '/images/service.png', alt: 'Service', width: 102, height: 102 }}
 *   onClick={handleClick}
 * />
 * ```
 * 
 * @param {CardProps} props - Component props
 * @param {string} [props.title] - Card title (uppercase, Poppins Bold, 24px)
 * @param {string} [props.description] - Card description (Red Hat Display, 18px)
 * @param {ImageMetadata} [props.image] - Card image metadata
 * @param {ReactNode} [props.children] - Additional card content
 * @param {string} [props.className] - Additional CSS classes
 * @param {() => void} [props.onClick] - Click handler (makes card clickable)
 * 
 * @returns {JSX.Element} Card element with gradient background, border, and inset shadow
 */

import { cn } from '@/lib/utils';
import OptimizedImage from './OptimizedImage';
import type { CardProps } from '@/types';

export default function Card({
  title,
  description,
  image,
  children,
  className,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'relative overflow-clip rounded-[7.812px]', // Figma: 7.812px border radius
        'bg-gradient-to-b from-[rgba(145,55,255,0.22)] to-[rgba(115,0,255,0.094)]',
        'border-[#AB78E9] border-[1.297px] border-solid',
        'shadow-[inset_0px_5.172px_42.427px_0px_rgba(171,120,233,0.32)]', // Figma inset shadow
        'px-[31.248px] py-[23.436px]', // Figma padding
        'flex flex-col gap-[31.248px]', // Figma gap
        'transition-all duration-200',
        onClick && 'cursor-pointer hover:scale-[1.02] hover:shadow-lg', // Hover state (per FR-015)
        onClick && 'active:scale-[0.98]', // Active state (per FR-015)
        onClick && 'focus-within:outline-none focus-within:ring-2 focus-within:ring-[#AB78E9] focus-within:ring-offset-2', // Focus state (per FR-015)
        className
      )}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {image && (
        <div className="relative rounded-[12px] size-[101.557px] overflow-hidden">
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="object-cover"
          />
        </div>
      )}

      {(title || description) && (
        <div className="flex flex-col gap-[7.812px]">
          {title && (
            <h3 className="font-primary font-bold leading-[1.4] not-italic text-[24px] text-white uppercase">
              {title}
            </h3>
          )}
          {description && (
            <p className="font-body font-normal leading-[1.6] text-[#F9F6FF] text-[18px]">
              {description}
            </p>
          )}
        </div>
      )}

      {children}
    </div>
  );
}

