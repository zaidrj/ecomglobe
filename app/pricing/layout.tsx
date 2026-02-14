import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ecommerce Pricing Plans - Affordable Growth Packages | EcommGlobe",
  description: "Transparent ecommerce pricing plans by EcommGlobe. Choose from Starter, Growth, or Enterprise packages for Amazon, Shopify, Etsy, Walmart, eBay & TikTok Shop services.",
  keywords: ["ecommerce pricing", "ecommerce agency pricing", "amazon marketing pricing", "shopify development pricing", "ecommglobe pricing"],
  alternates: { canonical: "https://www.ecommglobe.com/pricing" },
  openGraph: {
    title: "Ecommerce Pricing Plans | EcommGlobe",
    description: "Affordable ecommerce growth packages. Starter, Growth & Enterprise plans for all marketplaces.",
    url: "https://www.ecommglobe.com/pricing",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
