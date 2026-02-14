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
  title: "EcommGlobe - Ecommerce Marketing & Automation Agency",
  description: "Scale your brand across every marketplace. We launch, optimize, and automate your stores on Amazon, Shopify, Etsy, Walmart, eBay & TikTok Shop.",
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
