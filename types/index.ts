/**
 * TypeScript Type Definitions
 * 
 * This file contains all TypeScript interfaces and types for the application.
 * Types are based on the data model defined in specs/figma-design-implementation/data-model.md
 */

import { ReactNode } from 'react';

/**
 * Button Component Props
 */
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

/**
 * Card Component Props
 */
export interface CardProps {
  title?: string;
  description?: string;
  image?: ImageMetadata;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Optimized Image Component Props (wraps Next.js Image)
 */
export interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  fill?: boolean;
  sizes?: string;
}

/**
 * Section Component Props
 */
export interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: 'default' | 'primary' | 'secondary' | 'accent';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

/**
 * Container Component Props
 */
export interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

/**
 * Typography Heading Props
 */
export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  className?: string;
  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'small';
}

/**
 * Typography Text Props
 */
export interface TextProps {
  as?: 'p' | 'span' | 'div';
  children: ReactNode;
  className?: string;
  variant?: 'body' | 'small' | 'large';
  color?: 'primary' | 'secondary' | 'muted';
}

/**
 * Image Metadata
 */
export interface ImageMetadata {
  src: string; // Path relative to public/images/
  alt: string; // Accessibility description
  width: number; // Original width in pixels
  height: number; // Original height in pixels
  section: string; // Which section/component uses this image
  format: 'png' | 'jpg' | 'svg' | 'webp';
  retina?: boolean; // Whether 2x version exists
}

/**
 * Page Layout Configuration
 */
export interface PageLayout {
  sections: SectionConfig[];
}

/**
 * Section Configuration
 */
export interface SectionConfig {
  id: string;
  component: string; // Component name to render
  props?: Record<string, unknown>;
  order: number; // Display order
}

/**
 * Service Card
 * Represents a platform-specific service offering
 */
export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  buttonText?: string;
  buttonIcon?: string;
  href?: string;
}

/**
 * Process Step (Legacy - for Services page)
 * Represents one step in the "Our Process" section
 * @deprecated Use ProcessStep (with string icon) for new pages
 */
export interface LegacyProcessStep {
  id: string;
  title: string;
  description: string;
  icon: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  order: number;
}

/**
 * Platform Services Section Props
 */
export interface PlatformServicesSectionProps {
  services: ServiceCard[];
  className?: string;
}

/**
 * Process Section Props
 */
export interface ProcessSectionProps {
  steps: LegacyProcessStep[];
  className?: string;
}

/**
 * Services Hero Section Props
 */
export interface ServicesHeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  className?: string;
}

/**
 * Services CTA Section Props
 */
export interface ServicesCTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

/**
 * Amazon Marketing Page Types
 */

/**
 * Stat Card
 * Represents a metric/statistic displayed in the stats section
 */
export interface StatCard {
  icon: string;
  value: string;
  description: string;
  position: 'top-left' | 'top-right' | 'top-right-2' | 'bottom-left' | 'bottom-right';
}

/**
 * Service Item
 * Represents one of the services listed in the "What's Included" section
 */
export interface ServiceItem {
  text: string;
}

/**
 * Process Step (Amazon Marketing)
 * Represents one of the 5 steps in the "Our Process" section
 */
export interface AmazonProcessStep {
  icon: string;
  title: string;
  description: string;
  order: number;
}

/**
 * Process Step (Generic - for all platform pages)
 * Represents one of the 5 steps in the "Our Process" section
 * Title may include line breaks (\n) for multi-line titles
 */
export interface ProcessStep {
  icon: string;
  title: string; // May include \n for line breaks
  description: string;
  order: number;
}

/**
 * FAQ Item
 * Represents a frequently asked question in the FAQ section
 */
export interface FAQItem {
  question: string;
  answer: string;
  isExpanded: boolean;
  id: string;
}

/**
 * Contact Form Field
 * Represents a field in the contact form section
 */
export interface ContactFormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder: string;
  required: boolean;
  value: string;
}

/**
 * Content Pages Types
 */

/**
 * Stat Item
 * Represents a statistic displayed in stats sections (used by content pages)
 */
export interface StatItem {
  label: string; // e.g., "Major project"
  value: string; // e.g., "100+"
}

/**
 * Case Study
 * Represents a case study card on the Case Studies page
 */
export interface CaseStudy {
  id: string;
  title: string;
  heroImage: string; // Path to case study hero image
  challenge: string; // Challenge description text
  solutions: string[]; // Array of solution items (4 items)
  results: {
    revenueGrowth: {
      percentage: string; // e.g., "600%"
      description: string; // e.g., "$12K/month → $84K/month"
    };
    rankImprovement: {
      percentage: string; // e.g., "48%-18%"
      description: string; // e.g., "#45,000 → #2,800"
    };
    conversionRate: {
      percentage: string; // e.g., "8% to 12.5%"
    };
  };
  testimonial: string; // Quote text
  author: {
    name: string;
    role: string;
  };
  rating: number; // 5 stars
}

/**
 * Team Member
 * Represents a team member on the About page
 */
export interface TeamMember {
  id: string;
  photo: string; // Path to team member photo
  name: string;
  role: string; // e.g., "Founder & CEO"
  expertise: string; // e.g., "Amazon & Multi-Channel Strategy"
  description: string; // Brief description
}

/**
 * Value Card
 * Represents a company value card on the About page
 */
export interface ValueCard {
  id: string;
  icon: string; // Path to icon image
  title: string; // e.g., "Results-Driven"
  description: string;
}

/**
 * Pricing Period
 * Represents the billing period for pricing
 */
export type PricingPeriod = 'monthly' | 'yearly';

/**
 * Pricing Feature
 * Represents a feature in a pricing tier
 */
export interface PricingFeature {
  text: string;
  enabled: boolean; // true = checkmark, false = disabled/gray
}

/**
 * Pricing Tier
 * Represents a pricing plan on the Pricing page
 */
export interface PricingTier {
  id: string;
  name: string; // "Starter", "Growth", "Enterprise"
  price: {
    monthly: string; // e.g., "$2500"
    yearly?: string; // Optional yearly price
  };
  description: string; // e.g., "Perfect for new sellers getting started"
  features: PricingFeature[];
  isHighlighted: boolean; // Growth tier has highlighted button
  ctaText: string; // e.g., "Get started", "Scale faster", "Lets talk"
}

/**
 * Pricing Page Data
 * Represents the complete pricing page state
 */
export interface PricingPageData {
  period: PricingPeriod;
  tiers: PricingTier[];
}

/**
 * Contact Method
 * Represents a contact method card on the Contact page
 */
export interface ContactMethod {
  id: string;
  icon: string; // Path to icon image
  title: string; // "Email Us", "Call Us", "Visit Us", "Business Hours"
  info: string; // Contact information
  context: string; // Additional context (e.g., "We respond within 24 hours")
}

/**
 * Contact Process Step
 * Represents a step in the "What's Next" process on the Contact page
 */
export interface ContactProcessStep {
  id: string;
  order: number;
  icon: string; // Path to icon image (arrow-right-circle, rotated)
  title: string; // e.g., "We Review Your Information"
  description: string; // Step description
}

/**
 * Contact Form Data
 * Represents form submission data on the Contact page
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  revenue: string; // Selected revenue range
  platform: string; // Selected platform interest
  services: string[]; // Selected service checkboxes
  message: string;
}

/**
 * Contact Form Field (Extended)
 * Extended version of ContactFormField for Contact page with additional validation
 */
export interface ContactFormFieldExtended {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'checkbox';
  required: boolean;
  placeholder?: string;
  validation?: {
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
  };
}

/**
 * Platform Type
 * Represents the platform for service pages
 */
export type Platform = 'shopify' | 'etsy' | 'walmart' | 'ebay' | 'tiktok';

/**
 * Platform Page Config
 * Configuration for a platform service page
 */
export interface PlatformPageConfig {
  platform: Platform;
  route: string;
  heroTitle: string;
  heroSubtitle: string;
  launchTitle: string;
  imageBasePath: string;
}

/**
 * Page Section
 * Represents a distinct section of a platform service page
 */
export interface PageSection {
  id: string;
  name: string;
  component: string;
  order: number;
  platform?: Platform; // Optional for backward compatibility with Amazon page
}

/**
 * Amazon Marketing Page Component Props
 */

/**
 * Amazon Hero Section Props
 */
export interface AmazonHeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

/**
 * Amazon Stats Section Props
 */
export interface AmazonStatsSectionProps {
  stats: StatCard[];
  className?: string;
}

/**
 * Whats Included Section Props
 */
export interface WhatsIncludedSectionProps {
  title?: string;
  subtitle?: string;
  services: ServiceItem[];
  className?: string;
}

/**
 * Amazon Process Section Props
 */
export interface AmazonProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps: AmazonProcessStep[];
  className?: string;
}

/**
 * Launch Store Section Props
 */
export interface LaunchStoreSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  logoImage?: string;
  className?: string;
}

/**
 * Amazon Contact Form Section Props
 */
export interface AmazonContactFormSectionProps {
  title?: string;
  introText?: string;
  onSubmit?: (data: FormData) => void;
  className?: string;
}

/**
 * Amazon FAQ Section Props
 */
export interface AmazonFAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  allowMultipleOpen?: boolean;
  className?: string;
}

/**
 * Amazon CTA Section Props
 */
export interface AmazonCTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

/**
 * Platform Service Pages Component Props
 * Component props interfaces for all 5 platform service pages
 */

// Shopify Development Page Components
export interface ShopifyHeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export interface ShopifyStatsSectionProps {
  stats: StatCard[];
  className?: string;
}

export interface ShopifyWhatsIncludedSectionProps {
  title?: string;
  subtitle?: string;
  services: ServiceItem[];
  className?: string;
}

export interface ShopifyProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
}

export interface ShopifyLaunchSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  logoImage?: string;
  className?: string;
}

export interface ShopifyContactFormSectionProps {
  title?: string;
  introText?: string;
  onSubmit?: (data: FormData) => void;
  className?: string;
}

export interface ShopifyFAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  allowMultipleOpen?: boolean;
  className?: string;
}

export interface ShopifyCTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

// Etsy Optimization Page Components
export interface EtsyHeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export interface EtsyStatsSectionProps {
  stats: StatCard[];
  className?: string;
}

export interface EtsyWhatsIncludedSectionProps {
  title?: string;
  subtitle?: string;
  services: ServiceItem[];
  className?: string;
}

export interface EtsyProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
}

export interface EtsyLaunchSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  logoImage?: string;
  className?: string;
}

export interface EtsyContactFormSectionProps {
  title?: string;
  introText?: string;
  onSubmit?: (data: FormData) => void;
  className?: string;
}

export interface EtsyFAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  allowMultipleOpen?: boolean;
  className?: string;
}

export interface EtsyCTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

// Walmart Marketplace Page Components
export interface WalmartHeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export interface WalmartStatsSectionProps {
  stats: StatCard[];
  className?: string;
}

export interface WalmartWhatsIncludedSectionProps {
  title?: string;
  subtitle?: string;
  services: ServiceItem[];
  className?: string;
}

export interface WalmartProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
}

export interface WalmartLaunchSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  logoImage?: string;
  className?: string;
}

export interface WalmartContactFormSectionProps {
  title?: string;
  introText?: string;
  onSubmit?: (data: FormData) => void;
  className?: string;
}

export interface WalmartFAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  allowMultipleOpen?: boolean;
  className?: string;
}

export interface WalmartCTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

// eBay Management Page Components
export interface EbayHeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export interface EbayStatsSectionProps {
  stats: StatCard[];
  className?: string;
}

export interface EbayWhatsIncludedSectionProps {
  title?: string;
  subtitle?: string;
  services: ServiceItem[];
  className?: string;
}

export interface EbayProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
}

export interface EbayLaunchSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  logoImage?: string;
  className?: string;
}

export interface EbayContactFormSectionProps {
  title?: string;
  introText?: string;
  onSubmit?: (data: FormData) => void;
  className?: string;
}

export interface EbayFAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  allowMultipleOpen?: boolean;
  className?: string;
}

export interface EbayCTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

// TikTok Shop Page Components
export interface TikTokHeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export interface TikTokStatsSectionProps {
  stats: StatCard[];
  className?: string;
}

export interface TikTokWhatsIncludedSectionProps {
  title?: string;
  subtitle?: string;
  services: ServiceItem[];
  className?: string;
}

export interface TikTokProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
}

export interface TikTokLaunchSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  logoImage?: string;
  className?: string;
}

export interface TikTokContactFormSectionProps {
  title?: string;
  introText?: string;
  onSubmit?: (data: FormData) => void;
  className?: string;
}

export interface TikTokFAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  allowMultipleOpen?: boolean;
  className?: string;
}

export interface TikTokCTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

// ============================================================================
// Navbar Update Types (005-navbar-update)
// ============================================================================

/**
 * Navigation Item
 * Represents a single navigation link in the navbar
 */
export interface NavigationItem {
  id: string;              // Unique identifier (e.g., "home", "services")
  label: string;           // Display text (e.g., "Home", "Services")
  href: string;            // URL path (e.g., "/", "/services")
  hasDropdown?: boolean;   // Whether link has dropdown menu (true for Services)
}

/**
 * Service Option
 * Represents a service option in the Services dropdown menu
 */
export interface ServiceOption {
  id: string;        // Unique identifier (e.g., "amazon", "shopify")
  label: string;     // Display text (e.g., "Amazon Marketing", "Shopify Development")
  href: string;      // URL path to service page (e.g., "/amazon-marketing")
  platform: string;  // Platform identifier (e.g., "amazon", "shopify", "etsy", "walmart", "ebay", "tiktok")
}

/**
 * Services Dropdown State
 * Represents the state of the Services dropdown menu
 */
export interface ServicesDropdownState {
  isOpen: boolean;                              // Whether dropdown is currently open
  triggeredBy?: 'hover' | 'click' | 'keyboard'; // How dropdown was opened (for analytics/UX)
}

/**
 * Active Page State
 * Represents the current page state for active link indication
 */
export interface ActivePageState {
  currentPath: string;        // Current pathname from usePathname()
  activeNavItem: string | null; // ID of active navigation item (e.g., "home", "services")
  isServicePage: boolean;     // Whether current page is a service page
}

/**
 * Navbar Component Props
 */
export interface NavbarProps {
  className?: string;  // Optional additional CSS classes for positioning/styling
}

/**
 * Services Dropdown Component Props
 */
export interface ServicesDropdownProps {
  isOpen: boolean;                    // Whether dropdown is currently open
  onToggle: (open: boolean) => void;  // Callback to toggle dropdown state
  onClose: () => void;                // Callback to close dropdown
  services: ServiceOption[];          // Array of service options to display
  className?: string;                 // Optional additional CSS classes
}

/**
 * Navigation Link Props (Internal)
 */
export interface NavigationLinkProps {
  href: string;              // URL path
  label: string;            // Display text
  isActive: boolean;         // Whether link is active (current page)
  hasDropdown?: boolean;     // Whether link has dropdown menu
  onMouseEnter?: () => void; // Hover handler for dropdown (desktop)
  onMouseLeave?: () => void; // Hover handler for dropdown (desktop)
  onClick?: () => void;     // Click handler for dropdown (mobile/tablet)
}

/**
 * Check if current pathname matches a service page
 */
export function isServicePage(pathname: string): boolean {
  const servicePaths = [
    '/amazon-marketing',
    '/shopify-development',
    '/etsy-optimization',
    '/walmart-marketplace',
    '/ebay-management',
    '/tiktok-shop',
  ];
  return servicePaths.some(path => pathname.startsWith(path));
}

/**
 * Get active navigation item ID based on current pathname
 */
export function getActiveNavItem(pathname: string): string | null {
  if (pathname === '/') return 'home';
  if (pathname === '/services' || isServicePage(pathname)) return 'services';
  if (pathname === '/case-studies') return 'case-studies';
  if (pathname === '/about') return 'about';
  if (pathname === '/pricing') return 'pricing';
  return null;
}

