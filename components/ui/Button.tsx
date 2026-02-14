/**
 * Button Component
 * 
 * Matches Figma button styles exactly with all variants.
 * Uses design tokens for colors, typography, spacing, and border radius.
 * Includes hover, focus, and active states for accessibility (WCAG 2.1 Level AA).
 * 
 * @component
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click Me
 * </Button>
 * ```
 * 
 * @param {ButtonProps} props - Component props
 * @param {'primary'|'secondary'|'outline'|'ghost'} [props.variant='primary'] - Button style variant
 *   - 'primary': Purple background (#8539BF) with glow shadow
 *   - 'secondary': Purple border with transparent background
 *   - 'outline': Purple border with transparent background
 *   - 'ghost': Transparent background
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Button size
 *   - 'sm': 15.77px text, 19.712px border radius
 *   - 'md': 18px text, 19.712px border radius (Figma standard)
 *   - 'lg': 18px text, 99px border radius (rounded buttons)
 * @param {ReactNode} props.children - Button label/content
 * @param {() => void} [props.onClick] - Click handler
 * @param {boolean} [props.disabled=false] - Disabled state
 * @param {'button'|'submit'|'reset'} [props.type='button'] - Button type
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.fullWidth=false] - Full width button
 * 
 * @returns {JSX.Element} Button element with Figma styling and interactive states
 */

import { cn } from '@/lib/utils';
import type { ButtonProps } from '@/types';

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  type = 'button',
  className,
  fullWidth = false,
  style,
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-[#8539BF] text-white uppercase shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)]',
    secondary: 'border-[#AB78E9] border-[0.986px] border-solid text-[#C8CDD2] uppercase shadow-[0px_20.698px_38.735px_-48px_rgba(132,0,255,0.33)]',
    outline: 'border-[#AB78E9] border-[0.986px] border-solid bg-transparent text-white uppercase',
    ghost: 'bg-transparent text-white',
  };

  const sizeClasses = {
    sm: 'px-[19.712px] py-[14.784px] text-[15.77px] rounded-[19.712px]',
    md: 'px-[19.712px] py-[14.784px] text-[18px] rounded-[19.712px]', // Figma: 18px text, 19.712px border radius
    lg: 'px-[40px] py-[18px] text-[18px] rounded-[99px]', // Figma: rounded buttons use 99px radius
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={cn(
        'font-primary font-bold leading-[1.3] not-italic text-center text-nowrap',
        'inline-flex items-center justify-center gap-[10px]',
        'transition-all duration-200',
        'hover:opacity-90 hover:scale-[1.02]', // Hover state (per FR-015)
        'active:opacity-80 active:scale-[0.98]', // Active state (per FR-015)
        'focus:outline-none focus:ring-2 focus:ring-[#AB78E9] focus:ring-offset-2 focus:ring-offset-[#050505]', // Focus state (per FR-015)
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
        'min-h-[44px] min-w-[44px]', // Touch-friendly size (per T049)
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className
      )}
    >
      {children}
    </button>
  );
}

