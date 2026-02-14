/**
 * Typography Components
 * 
 * Heading and Text components matching Figma typography exactly.
 * Uses design tokens for font families, sizes, weights, and line heights.
 */

import { cn } from '@/lib/utils';
import type { HeadingProps, TextProps } from '@/types';

/**
 * Heading Component
 * Matches Figma heading styles (Lexend font family)
 * 
 * @component
 * @example
 * ```tsx
 * <Heading variant="h1" as="h1">
 *   Main Title
 * </Heading>
 * ```
 * 
 * @param {HeadingProps} props - Component props
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'} [props.as='h2'] - HTML heading element
 * @param {ReactNode} props.children - Heading text
 * @param {string} [props.className] - Additional CSS classes
 * @param {'display'|'h1'|'h2'|'h3'|'h4'|'small'} [props.variant='h2'] - Typography variant
 *   - 'display': 58px, bold (main hero headings)
 *   - 'h1': 48px, bold, tracking -0.3px
 *   - 'h2': 48px, semibold, tracking -0.3px
 *   - 'h3': 32px, bold
 *   - 'h4': 24px, bold, line-height 1.4
 *   - 'small': 18px, extrabold (footer headings)
 * 
 * @returns {JSX.Element} Heading element with Lexend font and white text
 */
export function Heading({
  as: Component = 'h2',
  children,
  className,
  variant = 'h2',
}: HeadingProps) {
  const variantClasses = {
    display: 'text-[58px] leading-[normal] font-bold', // 58px = 3.625rem
    h1: 'text-[48px] leading-[58px] font-bold tracking-[-0.3px]', // 48px = 3rem
    h2: 'text-[48px] leading-[58px] font-semibold tracking-[-0.3px]', // 48px = 3rem
    h3: 'text-[32px] leading-[normal] font-bold', // 32px = 2rem
    h4: 'text-[24px] leading-[1.4] font-bold', // 24px = 1.5rem
    small: 'text-[18px] leading-[1.4] font-extrabold', // 18px for footer headings
  };

  return (
    <Component
      className={cn(
        'font-secondary text-white', // Lexend font, white text
        variantClasses[variant],
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Text Component
 * Matches Figma body text styles (Red Hat Display font family)
 * Implements FR-013: Text truncation with ellipsis for long content
 * 
 * @component
 * @example
 * ```tsx
 * <Text variant="body" color="muted">
 *   Body text content
 * </Text>
 * ```
 * 
 * @param {TextProps} props - Component props
 * @param {'p'|'span'|'div'} [props.as='p'] - HTML element type
 * @param {ReactNode} props.children - Text content
 * @param {string} [props.className] - Additional CSS classes
 * @param {'body'|'small'|'large'} [props.variant='body'] - Text size variant
 *   - 'body': 22px, normal line-height (main body text)
 *   - 'small': 18px, line-height 1.6
 *   - 'large': 22px, normal line-height (same as body)
 * @param {'primary'|'secondary'|'muted'} [props.color='primary'] - Text color
 *   - 'primary': #FFFFFF (white)
 *   - 'secondary': #F9F6FF (light text)
 *   - 'muted': #C8CDD2 (muted gray)
 * 
 * @returns {JSX.Element} Text element with Red Hat Display font and truncation support
 */
export function Text({
  as: Component = 'p',
  children,
  className,
  variant = 'body',
  color = 'primary',
}: TextProps) {
  const variantClasses = {
    body: 'text-[22px] leading-[normal]', // 22px = 1.375rem
    small: 'text-[18px] leading-[1.6]', // 18px = 1.125rem
    large: 'text-[22px] leading-[normal]', // 22px = 1.375rem
  };

  const colorClasses = {
    primary: 'text-white', // #FFFFFF
    secondary: 'text-[#F9F6FF]', // Light text
    muted: 'text-[#C8CDD2]', // Muted gray
  };

  return (
    <Component
      className={cn(
        'font-body', // Red Hat Display font
        'overflow-hidden text-ellipsis', // Truncate long text with ellipsis (per FR-013)
        variantClasses[variant],
        colorClasses[color],
        className
      )}
    >
      {children}
    </Component>
  );
}

