'use client';

/**
 * OptimizedImage Component
 * 
 * Wraps Next.js Image component with error handling and placeholder fallback.
 * Implements FR-012: Display placeholder image with alt text fallback when images fail to load.
 * 
 * @component
 * @example
 * ```tsx
 * <OptimizedImage
 *   src="/images/hero/image.png"
 *   alt="Hero image"
 *   width={800}
 *   height={600}
 *   priority
 * />
 * ```
 * 
 * @param {OptimizedImageProps} props - Component props
 * @param {string} props.src - Image source path (relative to public/)
 * @param {string} props.alt - Accessibility description (required)
 * @param {number} props.width - Image width in pixels
 * @param {number} props.height - Image height in pixels
 * @param {boolean} [props.priority=false] - Priority loading (for above-the-fold images)
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.fill=false] - Use fill layout (requires parent with position relative)
 * @param {string} [props.sizes] - Responsive image sizes (for fill layout)
 * 
 * @returns {JSX.Element} Optimized Image component with error handling
 */

import Image from 'next/image';
import { useState } from 'react';
import type { OptimizedImageProps } from '@/types';

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  fill = false,
  sizes,
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false);

  // Placeholder image data URL (1x1 dark background PNG matching site theme)
  const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwNTA1MDUiLz48L3N2Zz4=';

  // Only use placeholder for images >= 40x40 (Next.js recommendation)
  // For fill images, always use placeholder (typically large background images)
  // For fixed-size images, only use if both dimensions are >= 40
  const shouldUsePlaceholder = fill || (width && height && width >= 40 && height >= 40);

  const handleError = () => {
    setHasError(true);
  };

  // If error occurred, show placeholder with alt text
  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-[#050505] ${className}`}
        style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
        role="img"
        aria-label={alt}
      >
        <span className="text-gray-400 text-sm text-center px-4">{alt}</span>
      </div>
    );
  }

  // Use Next.js Image component with error handling
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
        sizes={sizes}
        onError={handleError}
        {...(shouldUsePlaceholder && {
          placeholder: 'blur' as const,
          blurDataURL: placeholderImage,
        })}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      onError={handleError}
      {...(shouldUsePlaceholder && {
        placeholder: 'blur' as const,
        blurDataURL: placeholderImage,
      })}
    />
  );
}

