import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact EcommGlobe - Get Your Free Ecommerce Strategy Call",
  description: "Contact EcommGlobe for a free ecommerce strategy call. Reach us by phone at +14692050582, email info@ecommglobe.com, or visit us at 1500 Fountain Park, Stafford, TX 77477.",
  keywords: ["contact ecommglobe", "ecommerce consultation", "free strategy call", "ecommerce agency contact", "ecomglobe contact"],
  alternates: { canonical: "https://www.ecommglobe.com/contact" },
  openGraph: {
    title: "Contact EcommGlobe - Free Ecommerce Strategy Call",
    description: "Get in touch with EcommGlobe. Book your free strategy call and start scaling your ecommerce business today.",
    url: "https://www.ecommglobe.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
