/**
 * Container Component
 * 
 * Provides max-width container for page content matching Figma layout constraints.
 * Responsive: mobile (full width), tablet (768px+), desktop (1024px+)
 * 
 * @component
 * @example
 * ```tsx
 * <Container size="lg">
 *   <p>Content here</p>
 * </Container>
 * ```
 * 
 * @param {ContainerProps} props - Component props
 * @param {ReactNode} props.children - Content to wrap
 * @param {string} [props.className] - Additional CSS classes
 * @param {'sm'|'md'|'lg'|'xl'|'full'} [props.size='lg'] - Container max-width size
 *   - 'sm': 640px max-width
 *   - 'md': 768px max-width
 *   - 'lg': 1200px max-width (Figma design standard)
 *   - 'xl': 1440px max-width (full page width)
 *   - 'full': No max-width constraint
 * 
 * @returns {JSX.Element} Container div with responsive max-width and padding
 */

import { cn } from '@/lib/utils';
import type { ContainerProps } from '@/types';

export default function Container({
  children,
  className,
  size = 'lg',
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-[640px]',
    md: 'max-w-[768px]',
    lg: 'max-w-[1200px]', // Figma design uses 1200px max width
    xl: 'max-w-[1440px]', // Full page width
    full: 'max-w-full',
  };

  return (
    <div
      className={cn(
        // Mobile-first: full width with padding
        'mx-auto w-full px-4',
        // Tablet: increased padding
        'md:px-6',
        // Desktop: max width and padding
        'lg:px-8',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}

