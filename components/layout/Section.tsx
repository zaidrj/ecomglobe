/**
 * Section Component
 * 
 * Wrapper for page sections with consistent spacing and background options.
 * Matches Figma section spacing and styling.
 * 
 * @component
 * @example
 * ```tsx
 * <Section id="hero" padding="lg" maxWidth="xl" background="default">
 *   <h1>Hero Content</h1>
 * </Section>
 * ```
 * 
 * @param {SectionProps} props - Component props
 * @param {string} [props.id] - Section ID for anchor links
 * @param {string} [props.className] - Additional CSS classes
 * @param {ReactNode} props.children - Section content
 * @param {'default'|'primary'|'secondary'|'accent'} [props.background='default'] - Background color
 *   - 'default': #050505 (secondary background)
 *   - 'primary': #06010E (primary background)
 *   - 'secondary': #050505 (same as default)
 *   - 'accent': #8539BF (purple accent)
 * @param {'none'|'sm'|'md'|'lg'|'xl'} [props.padding='lg'] - Vertical padding
 *   - 'none': No padding
 *   - 'sm': 32px mobile, 48px tablet, 64px desktop
 *   - 'md': 48px mobile, 64px tablet, 80px desktop
 *   - 'lg': 64px mobile, 80px tablet, 96px desktop (Figma standard)
 *   - 'xl': 80px mobile, 96px tablet, 128px desktop
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.maxWidth='lg'] - Inner container max-width
 * 
 * @returns {JSX.Element} Section element with background, padding, and inner container
 */

import { cn } from '@/lib/utils';
import type { SectionProps } from '@/types';

export default function Section({
  id,
  className,
  children,
  background = 'default',
  padding = 'lg',
  maxWidth = 'lg',
}: SectionProps) {
  const backgroundClasses = {
    default: 'bg-[#050505]', // Secondary background
    primary: 'bg-[#06010E]', // Primary background
    secondary: 'bg-[#050505]',
    accent: 'bg-[#8539BF]',
  };

  const paddingClasses = {
    none: '',
    sm: 'py-8 md:py-12 lg:py-16', // Mobile: 32px, Tablet: 48px, Desktop: 64px
    md: 'py-12 md:py-16 lg:py-20', // Mobile: 48px, Tablet: 64px, Desktop: 80px
    lg: 'py-16 md:py-20 lg:py-24', // Mobile: 64px, Tablet: 80px, Desktop: 96px (Figma uses ~60px-120px)
    xl: 'py-20 md:py-24 lg:py-32', // Mobile: 80px, Tablet: 96px, Desktop: 128px
  };

  const maxWidthClasses = {
    sm: 'max-w-[640px]',
    md: 'max-w-[768px]',
    lg: 'max-w-[1200px]',
    xl: 'max-w-[1440px]',
    full: 'max-w-full',
  };

  return (
    <section
      id={id}
      className={cn(
        'relative w-full',
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', maxWidthClasses[maxWidth])}>
        {children}
      </div>
    </section>
  );
}

