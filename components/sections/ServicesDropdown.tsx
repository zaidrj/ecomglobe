/**
 * Services Dropdown Component
 * 
 * Dropdown menu for Services navigation link.
 * Displays all service options (Amazon, Shopify, Etsy, etc.)
 * 
 * @component
 */

'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ServiceOption } from '@/types';

export interface ServicesDropdownProps {
  isOpen: boolean;
  onToggle: (open: boolean) => void;
  onClose: () => void;
  services: ServiceOption[];
  className?: string;
}

export default function ServicesDropdown({
  isOpen,
  onToggle,
  onClose,
  services,
  className = '',
}: ServicesDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close on route change
  useEffect(() => {
    const handleRouteChange = () => {
      onClose();
    };
    // Note: Next.js App Router doesn't have a built-in route change event
    // We'll handle this in the Navbar component using pathname changes
  }, [onClose]);

  const handleServiceClick = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <div
      ref={dropdownRef}
      className={`absolute top-full left-0 mt-2 bg-[rgba(31,24,53,0.95)] border border-[#ab78e9] rounded-[11px] py-2 min-w-[234px] z-50 shadow-lg transition-all duration-200 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
      } ${className}`}
      role="menu"
      aria-label="Services menu"
      id="services-dropdown"
    >
      {services.map((service) => (
        <Link
          key={service.id}
          href={service.href}
          onClick={(e) => {
            e.preventDefault();
            handleServiceClick(service.href);
          }}
          className="block px-[14px] py-2 text-white hover:bg-[rgba(171,120,233,0.2)] transition-colors font-primary text-[18px]"
          role="menuitem"
        >
          {service.label}
        </Link>
      ))}
    </div>
  );
}

