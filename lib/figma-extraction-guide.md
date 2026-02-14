# Figma Design Token Extraction Guide

## Figma URL
https://www.figma.com/design/hVMt6RgUxEtSWBVAMGdCeg/NextGen-Ecomm--Copy-?node-id=51-22&m=dev

## How to Extract Design Tokens from Figma

### 1. Colors
1. Open the Figma file
2. Select any element with a color
3. In the right panel, click on the color swatch
4. Copy the hex code (e.g., #FF5733)
5. Document all unique colors used in the design:
   - Primary colors
   - Secondary colors
   - Accent colors
   - Background colors
   - Text colors (primary, secondary)
   - Border colors
   - Any other color variations

### 2. Typography
1. Select text elements in Figma
2. In the right panel, note:
   - **Font Family**: Name of the font (e.g., Inter, Roboto, Arial)
   - **Font Size**: Size in pixels (convert to rem: px / 16)
   - **Font Weight**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
   - **Line Height**: Value or percentage
   - **Letter Spacing**: Value in px or em
3. Document all text styles used:
   - Headings (H1, H2, H3, etc.)
   - Body text
   - Small text
   - Large text
   - Any custom text styles

### 3. Spacing
1. Select elements and check spacing in the right panel:
   - **Padding**: Internal spacing
   - **Margin**: External spacing
   - **Gap**: Space between flex/grid items
2. Document spacing scale:
   - Smallest spacing (e.g., 4px, 8px)
   - Common spacing values (16px, 24px, 32px, 48px, 64px)
   - Convert to rem: divide by 16

### 4. Breakpoints
1. Check if Figma has responsive variants:
   - Mobile view (usually 375px or 320px)
   - Tablet view (usually 768px)
   - Desktop view (usually 1024px or 1920px)
2. Document the breakpoints used in the design

### 5. Shadows
1. Select elements with shadows
2. In the right panel, Effects section:
   - Note shadow type (drop shadow, inner shadow)
   - Copy shadow values: offset-x, offset-y, blur, spread, color
   - Format: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`

### 6. Border Radius
1. Select elements with rounded corners
2. In the right panel, note the border radius value
3. Document all radius values used (small, medium, large)

## Quick Extraction Checklist

- [ ] Primary color hex code
- [ ] Secondary color hex code
- [ ] Accent color hex code
- [ ] Background color hex code
- [ ] Text primary color hex code
- [ ] Text secondary color hex code
- [ ] Primary font family name
- [ ] Secondary font family name (if different)
- [ ] All font sizes used (convert px to rem)
- [ ] Font weights used (400, 500, 600, 700)
- [ ] Line heights used
- [ ] Spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px - convert to rem)
- [ ] Mobile breakpoint (usually 320px or 375px)
- [ ] Tablet breakpoint (usually 768px)
- [ ] Desktop breakpoint (usually 1024px or 1920px)
- [ ] Small shadow value
- [ ] Medium shadow value
- [ ] Large shadow value
- [ ] Small border radius (e.g., 4px)
- [ ] Medium border radius (e.g., 8px)
- [ ] Large border radius (e.g., 16px)

## After Extraction

Update `frontend/lib/tokens.ts` with the extracted values, replacing all TODO comments with actual values from Figma.

