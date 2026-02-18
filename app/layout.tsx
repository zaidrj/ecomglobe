import Script from "next/script";
import type { Metadata } from "next";
import { Poppins, Lexend, Red_Hat_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Primary font: Poppins (Bold, Regular, Thin)
const poppins = Poppins({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  display: "swap",
});

// Secondary font: Lexend (Bold, SemiBold, Regular, ExtraBold)
const lexend = Lexend({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

// Body font: Red Hat Display (Regular)
const redHatDisplay = Red_Hat_Display({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Display font: Space Grotesk (Regular)
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ecommglobe.com"),
  title: {
    default: "EcommGlobe - Ecommerce Marketing & Automation Agency | EcomGlobe",
    template: "%s | EcommGlobe",
  },
  description: "EcommGlobe (EcomGlobe) is a full-service ecommerce marketing & automation agency. We launch, optimize, and scale your stores on Amazon, Shopify, Etsy, Walmart, eBay & TikTok Shop. Get expert ecommerce services today.",
  keywords: [
    "ecommglobe", "ecomglobe", "ecomm globe", "ecom globe",
    "ecommerce agency", "ecommerce marketing agency", "ecommerce automation",
    "amazon marketing agency", "shopify development agency",
    "etsy optimization", "walmart marketplace management",
    "ebay management", "tiktok shop agency",
    "ecommerce services", "ecommerce growth", "ecom services",
    "online store management", "marketplace management",
    "ecommerce consulting", "ecommerce automation agency",
    "amazon seller services", "shopify store setup",
    "multi-channel ecommerce", "ecommerce scaling",
  ],
  authors: [{ name: "EcommGlobe", url: "https://www.ecommglobe.com" }],
  creator: "EcommGlobe",
  publisher: "EcommGlobe",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ecommglobe.com",
    siteName: "EcommGlobe",
    title: "EcommGlobe - Ecommerce Marketing & Automation Agency",
    description: "Scale your brand across every marketplace. We launch, optimize, and automate your stores on Amazon, Shopify, Etsy, Walmart, eBay & TikTok Shop.",
    images: [
      {
        url: "/images/hero/artboard1-copy-ecomm-globe-1.png",
        width: 1200,
        height: 630,
        alt: "EcommGlobe - Ecommerce Marketing & Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EcommGlobe - Ecommerce Marketing & Automation Agency",
    description: "Scale your brand across every marketplace. Expert ecommerce services for Amazon, Shopify, Etsy, Walmart, eBay & TikTok Shop.",
    images: ["/images/hero/artboard1-copy-ecomm-globe-1.png"],
  },
  alternates: {
    canonical: "https://www.ecommglobe.com",
  },
  category: "Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#050505]" style={{ backgroundColor: '#050505' }}>
      <head>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=915122487675344&ev=PageView&noscript=1"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.ecommglobe.com/#organization",
                  name: "EcommGlobe",
                  alternateName: ["EcomGlobe", "Ecomm Globe", "Ecom Globe"],
                  url: "https://www.ecommglobe.com",
                  logo: "https://www.ecommglobe.com/images/hero/artboard1-copy-ecomm-globe-1.png",
                  description: "Full-service ecommerce marketing & automation agency helping brands scale across Amazon, Shopify, Etsy, Walmart, eBay & TikTok Shop.",
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+14692050582",
                    contactType: "sales",
                    availableLanguage: "English",
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "1500 Fountain Park",
                    addressLocality: "Stafford",
                    addressRegion: "TX",
                    postalCode: "77477",
                    addressCountry: "US",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.ecommglobe.com/#website",
                  url: "https://www.ecommglobe.com",
                  name: "EcommGlobe",
                  publisher: { "@id": "https://www.ecommglobe.com/#organization" },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://www.ecommglobe.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://www.ecommglobe.com/#localbusiness",
                  name: "EcommGlobe",
                  image: "https://www.ecommglobe.com/images/hero/artboard1-copy-ecomm-globe-1.png",
                  telephone: "+14692050582",
                  email: "info@ecommglobe.com",
                  url: "https://www.ecommglobe.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "1500 Fountain Park",
                    addressLocality: "Stafford",
                    addressRegion: "TX",
                    postalCode: "77477",
                    addressCountry: "US",
                  },
                  priceRange: "$$",
                  openingHours: "Mo-Fr 09:00-18:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${lexend.variable} ${redHatDisplay.variable} ${spaceGrotesk.variable} antialiased bg-[#050505] min-h-screen`}
        style={{ backgroundColor: '#050505', minHeight: '100vh' }}
      >
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '915122487675344');
            fbq('track', 'PageView');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
