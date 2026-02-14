/**
 * Design Tokens
 * 
 * This file contains all design tokens extracted from Figma using MCP.
 * Tokens extracted on: 2025-01-27
 * 
 * Figma URL: https://www.figma.com/design/hVMt6RgUxEtSWBVAMGdCeg/NextGen-Ecomm--Copy-?node-id=51-22&m=dev
 * File Key: hVMt6RgUxEtSWBVAMGdCeg
 * Node ID: 51-22
 */

export interface DesignTokens {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    purple: {
      light: string;
      medium: string;
      dark: string;
    };
    pink: {
      light: string;
      medium: string;
    };
    text: {
      primary: string;
      secondary: string;
      muted: string;
    };
    border: string;
    white: string;
  };
  typography: {
    fontFamily: {
      primary: string;
      secondary: string;
      body: string;
      display: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
    fontWeight: {
      thin: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
    };
    lineHeight: {
      tight: string;
      normal: string;
      relaxed: string;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    glow: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
}

/**
 * Design tokens extracted from Figma using MCP
 * All values extracted from actual Figma design
 */
export const tokens: DesignTokens = {
  colors: {
    primary: '#06010E', // Primary dark background
    secondary: '#050505', // Main background
    accent: '#8539BF', // Primary accent/purple button
    background: '#050505', // Main page background
    purple: {
      light: '#E1C8FF', // Light purple accent text
      medium: '#AB78E9', // Medium purple (borders, accents)
      dark: '#7300FF', // Dark purple (buttons, highlights)
    },
    pink: {
      light: '#F9F6FF', // Light pink/white text
      medium: '#BB7CE4', // Medium pink
    },
    text: {
      primary: '#FFFFFF', // White text
      secondary: '#F9F6FF', // Light text
      muted: '#C8CDD2', // Muted gray text
    },
    border: '#AB78E9', // Purple border color
    white: '#FFFFFF', // Pure white
  },
  typography: {
    fontFamily: {
      primary: "'Poppins', sans-serif", // Primary font (Bold, Regular, Thin)
      secondary: "'Lexend', sans-serif", // Secondary font (Bold, SemiBold, Regular, ExtraBold)
      body: "'Red Hat Display', sans-serif", // Body text font
      display: "'Space Grotesk', sans-serif", // Display font
    },
    fontSize: {
      xs: '0.875rem', // 14px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.375rem', // 22px
      '2xl': '1.5rem', // 24px
      '3xl': '2rem', // 32px
      '4xl': '3rem', // 48px
      '5xl': '3.625rem', // 58px
    },
    fontWeight: {
      thin: 100, // Poppins Thin
      normal: 400, // Regular
      medium: 500, // Medium
      semibold: 600, // SemiBold
      bold: 700, // Bold
      extrabold: 800, // ExtraBold
    },
    lineHeight: {
      tight: '1.3',
      normal: '1.4',
      relaxed: '1.6',
    },
  },
  spacing: {
    xs: '0.375rem', // 6px
    sm: '0.625rem', // 10px
    md: '1rem', // 16px
    lg: '1.25rem', // 20px
    xl: '1.875rem', // 30px
    '2xl': '2.5rem', // 40px
    '3xl': '3.125rem', // 50px
    '4xl': '6.1875rem', // 99px
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
  shadows: {
    sm: '0px 5.172px 42.427px 0px rgba(171, 120, 233, 0.32)', // Inset shadow for cards
    md: '0px 20.698px 38.735px -48px rgba(132, 0, 255, 0.33)', // Button shadow
    lg: '0px 20.698px 38.735px -48px rgba(132, 0, 255, 0.33)', // Large glow shadow
    glow: '0px 20.698px 38.735px -48px rgba(132, 0, 255, 0.33)', // Purple glow effect
  },
  borderRadius: {
    sm: '0.4375rem', // 7px
    md: '0.6875rem', // 11px
    lg: '1.125rem', // 18px
    xl: '1.5rem', // 24px
    full: '6.1875rem', // 99px (rounded buttons)
  },
};

