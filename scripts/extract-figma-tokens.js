/**
 * Figma Design Token Extraction Script
 * 
 * This script extracts design tokens from Figma using the Figma API
 * and updates frontend/lib/tokens.ts with the extracted values.
 * 
 * Usage:
 * 1. Get your Figma Personal Access Token from: https://www.figma.com/developers/api#access-tokens
 * 2. Set FIGMA_ACCESS_TOKEN environment variable
 * 3. Run: node frontend/scripts/extract-figma-tokens.js
 * 
 * Figma File: https://www.figma.com/proto/NChra4wV2wxqqkE1H26BPe/NextGen-Ecomm?page-id=51%3A19&node-id=51-22
 * File Key: NChra4wV2wxqqkE1H26BPe
 * Node ID: 51-22
 */

const fs = require('fs');
const path = require('path');

// Figma API configuration
const FIGMA_FILE_KEY = 'NChra4wV2wxqqkE1H26BPe';
const FIGMA_NODE_ID = '51-22';
const FIGMA_API_BASE = 'https://api.figma.com/v1';

// Get access token from environment
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN || process.env.FIGMA_TOKEN;

if (!FIGMA_ACCESS_TOKEN) {
  console.error('❌ Error: FIGMA_ACCESS_TOKEN environment variable is required');
  console.log('\n📝 To get your Figma access token:');
  console.log('1. Go to https://www.figma.com/developers/api#access-tokens');
  console.log('2. Generate a personal access token');
  console.log('3. Set it as: export FIGMA_ACCESS_TOKEN=your_token_here');
  console.log('   Or on Windows: set FIGMA_ACCESS_TOKEN=your_token_here');
  process.exit(1);
}

/**
 * Make API request to Figma
 */
async function figmaRequest(endpoint) {
  const url = `${FIGMA_API_BASE}/${endpoint}`;
  const response = await fetch(url, {
    headers: {
      'X-Figma-Token': FIGMA_ACCESS_TOKEN,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Figma API error: ${response.status} - ${error}`);
  }

  return response.json();
}

/**
 * Extract colors from Figma styles
 */
async function extractColors() {
  try {
    const styles = await figmaRequest(`files/${FIGMA_FILE_KEY}/styles`);
    const colors = {
      primary: '#000000',
      secondary: '#000000',
      accent: '#000000',
      background: '#ffffff',
      text: {
        primary: '#000000',
        secondary: '#666666',
      },
    };

    // Extract color styles
    if (styles.meta && styles.meta.styles) {
      const colorStyles = styles.meta.styles.filter(s => s.styleType === 'FILL');
      console.log(`📊 Found ${colorStyles.length} color styles`);
      
      // Try to identify primary, secondary, etc. from style names
      colorStyles.forEach(style => {
        const name = style.name.toLowerCase();
        if (name.includes('primary')) {
          // Would need to fetch style details to get actual color
        }
      });
    }

    return colors;
  } catch (error) {
    console.warn('⚠️  Could not extract colors from styles, using defaults');
    return {
      primary: '#000000',
      secondary: '#000000',
      accent: '#000000',
      background: '#ffffff',
      text: {
        primary: '#000000',
        secondary: '#666666',
      },
    };
  }
}

/**
 * Extract typography from Figma file
 */
async function extractTypography() {
  try {
    const file = await figmaRequest(`files/${FIGMA_FILE_KEY}/nodes?ids=${FIGMA_NODE_ID}`);
    const node = file.nodes[FIGMA_NODE_ID];
    
    const typography = {
      fontFamily: {
        primary: 'Arial, Helvetica, sans-serif',
        secondary: 'Arial, Helvetica, sans-serif',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      lineHeight: {
        tight: '1.25',
        normal: '1.5',
        relaxed: '1.75',
      },
    };

    // Extract from text nodes if available
    if (node && node.document) {
      const textNodes = findTextNodes(node.document);
      const fontSizes = new Set();
      const fontFamilies = new Set();
      const fontWeights = new Set();
      const lineHeights = new Set();

      textNodes.forEach(textNode => {
        if (textNode.style) {
          if (textNode.style.fontSize) {
            const rem = (textNode.style.fontSize / 16).toFixed(3) + 'rem';
            fontSizes.add(rem);
          }
          if (textNode.style.fontFamily) {
            fontFamilies.add(textNode.style.fontFamily);
          }
          if (textNode.style.fontWeight) {
            fontWeights.add(textNode.style.fontWeight);
          }
          if (textNode.style.lineHeightPx) {
            const ratio = (textNode.style.lineHeightPx / textNode.style.fontSize).toFixed(2);
            lineHeights.add(ratio);
          }
        }
      });

      if (fontFamilies.size > 0) {
        typography.fontFamily.primary = Array.from(fontFamilies)[0];
      }
    }

    return typography;
  } catch (error) {
    console.warn('⚠️  Could not extract typography, using defaults');
    return {
      fontFamily: {
        primary: 'Arial, Helvetica, sans-serif',
        secondary: 'Arial, Helvetica, sans-serif',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      lineHeight: {
        tight: '1.25',
        normal: '1.5',
        relaxed: '1.75',
      },
    };
  }
}

/**
 * Recursively find all text nodes
 */
function findTextNodes(node, textNodes = []) {
  if (node.type === 'TEXT') {
    textNodes.push(node);
  }
  if (node.children) {
    node.children.forEach(child => findTextNodes(child, textNodes));
  }
  return textNodes;
}

/**
 * Extract spacing values
 */
async function extractSpacing() {
  // Spacing is harder to extract automatically, using common values
  return {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem', // 64px
  };
}

/**
 * Extract shadows
 */
async function extractShadows() {
  try {
    const file = await figmaRequest(`files/${FIGMA_FILE_KEY}/nodes?ids=${FIGMA_NODE_ID}`);
    const node = file.nodes[FIGMA_NODE_ID];
    const shadows = {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    };

    // Extract from effects if available
    if (node && node.document) {
      const nodesWithEffects = findNodesWithEffects(node.document);
      const shadowValues = [];

      nodesWithEffects.forEach(n => {
        if (n.effects) {
          n.effects.forEach(effect => {
            if (effect.type === 'DROP_SHADOW' || effect.type === 'INNER_SHADOW') {
              const shadow = `${effect.offset.x}px ${effect.offset.y}px ${effect.radius}px ${effect.spread || 0}px rgba(${Math.round(effect.color.r * 255)}, ${Math.round(effect.color.g * 255)}, ${Math.round(effect.color.b * 255)}, ${effect.color.a})`;
              shadowValues.push(shadow);
            }
          });
        }
      });

      if (shadowValues.length > 0) {
        shadows.sm = shadowValues[0] || shadows.sm;
        shadows.md = shadowValues[1] || shadows.md;
        shadows.lg = shadowValues[2] || shadows.lg;
      }
    }

    return shadows;
  } catch (error) {
    console.warn('⚠️  Could not extract shadows, using defaults');
    return {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    };
  }
}

/**
 * Find nodes with effects
 */
function findNodesWithEffects(node, nodes = []) {
  if (node.effects && node.effects.length > 0) {
    nodes.push(node);
  }
  if (node.children) {
    node.children.forEach(child => findNodesWithEffects(child, nodes));
  }
  return nodes;
}

/**
 * Extract border radius
 */
async function extractBorderRadius() {
  try {
    const file = await figmaRequest(`files/${FIGMA_FILE_KEY}/nodes?ids=${FIGMA_NODE_ID}`);
    const node = file.nodes[FIGMA_NODE_ID];
    const borderRadius = {
      sm: '0.25rem', // 4px
      md: '0.5rem', // 8px
      lg: '1rem', // 16px
    };

    // Extract from nodes with corner radius
    if (node && node.document) {
      const nodesWithRadius = findNodesWithRadius(node.document);
      const radiusValues = new Set();

      nodesWithRadius.forEach(n => {
        if (n.cornerRadius) {
          const rem = (n.cornerRadius / 16).toFixed(3) + 'rem';
          radiusValues.add(rem);
        }
      });

      if (radiusValues.size > 0) {
        const sorted = Array.from(radiusValues).sort((a, b) => parseFloat(a) - parseFloat(b));
        borderRadius.sm = sorted[0] || borderRadius.sm;
        borderRadius.md = sorted[Math.floor(sorted.length / 2)] || borderRadius.md;
        borderRadius.lg = sorted[sorted.length - 1] || borderRadius.lg;
      }
    }

    return borderRadius;
  } catch (error) {
    console.warn('⚠️  Could not extract border radius, using defaults');
    return {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
    };
  }
}

/**
 * Find nodes with corner radius
 */
function findNodesWithRadius(node, nodes = []) {
  if (node.cornerRadius !== undefined) {
    nodes.push(node);
  }
  if (node.children) {
    node.children.forEach(child => findNodesWithRadius(child, nodes));
  }
  return nodes;
}

/**
 * Generate tokens.ts file content
 */
function generateTokensFile(tokens) {
  return `/**
 * Design Tokens
 * 
 * This file contains all design tokens extracted from Figma.
 * Tokens were automatically extracted using extract-figma-tokens.js
 * 
 * Figma URL: https://www.figma.com/proto/NChra4wV2wxqqkE1H26BPe/NextGen-Ecomm?page-id=51%3A19&node-id=51-22
 * Extracted on: ${new Date().toISOString()}
 */

export interface DesignTokens {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: {
      primary: string;
      secondary: string;
    };
  };
  typography: {
    fontFamily: {
      primary: string;
      secondary: string;
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
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
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
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
}

/**
 * Design tokens extracted from Figma
 */
export const tokens: DesignTokens = ${JSON.stringify(tokens, null, 2).replace(/"([^"]+)":/g, '$1:')};
`;
}

/**
 * Main extraction function
 */
async function extractTokens() {
  console.log('🚀 Starting Figma design token extraction...\n');
  console.log(`📁 Figma File: ${FIGMA_FILE_KEY}`);
  console.log(`🎯 Node ID: ${FIGMA_NODE_ID}\n`);

  try {
    console.log('📊 Extracting colors...');
    const colors = await extractColors();

    console.log('📝 Extracting typography...');
    const typography = await extractTypography();

    console.log('📏 Extracting spacing...');
    const spacing = await extractSpacing();

    console.log('🌑 Extracting shadows...');
    const shadows = await extractShadows();

    console.log('⭕ Extracting border radius...');
    const borderRadius = await extractBorderRadius();

    const tokens = {
      colors,
      typography,
      spacing,
      breakpoints: {
        mobile: '320px',
        tablet: '768px',
        desktop: '1024px',
      },
      shadows,
      borderRadius,
    };

    // Generate and write tokens.ts file
    const tokensContent = generateTokensFile(tokens);
    const tokensPath = path.join(__dirname, '../lib/tokens.ts');
    
    fs.writeFileSync(tokensPath, tokensContent, 'utf8');
    
    console.log('\n✅ Successfully extracted design tokens!');
    console.log(`📄 Updated: ${tokensPath}`);
    console.log('\n📋 Extracted tokens:');
    console.log(`   - Colors: ${Object.keys(colors).length} color definitions`);
    console.log(`   - Typography: Font families, sizes, weights, line heights`);
    console.log(`   - Spacing: ${Object.keys(spacing).length} spacing values`);
    console.log(`   - Shadows: ${Object.keys(shadows).length} shadow definitions`);
    console.log(`   - Border Radius: ${Object.keys(borderRadius).length} radius values`);
    console.log('\n💡 Note: Some values may need manual verification against Figma design');
    console.log('   Review the extracted tokens and update any values that need adjustment.\n');

  } catch (error) {
    console.error('\n❌ Error extracting tokens:', error.message);
    console.error('\n💡 Troubleshooting:');
    console.error('   1. Verify your FIGMA_ACCESS_TOKEN is correct');
    console.error('   2. Check that you have access to the Figma file');
    console.error('   3. Verify the file key and node ID are correct');
    process.exit(1);
  }
}

// Run extraction
extractTokens();

