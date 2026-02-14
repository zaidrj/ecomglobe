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
      <body
        className={`${poppins.variable} ${lexend.variable} ${redHatDisplay.variable} ${spaceGrotesk.variable} antialiased bg-[#050505] min-h-screen`}
        style={{ backgroundColor: '#050505', minHeight: '100vh' }}
      >
        {children}
      </body>
    </html>
  );
}
