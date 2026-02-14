# Figma Design Token Extraction Template

**Figma URL**: https://www.figma.com/design/hVMt6RgUxEtSWBVAMGdCeg/NextGen-Ecomm--Copy-?node-id=51-22&m=dev

## Instructions
1. Open the Figma design in your browser or Figma desktop app
2. Fill in the values below by inspecting elements in Figma
3. Copy the completed values into `frontend/lib/tokens.ts`

---

## Colors

### Primary Color
- **Hex Code**: `#________`
- **Usage**: (e.g., buttons, links, primary actions)
- **Location in Figma**: 

### Secondary Color
- **Hex Code**: `#________`
- **Usage**: 
- **Location in Figma**: 

### Accent Color
- **Hex Code**: `#________`
- **Usage**: 
- **Location in Figma**: 

### Background Color
- **Hex Code**: `#________`
- **Usage**: 
- **Location in Figma**: 

### Text Primary Color
- **Hex Code**: `#________`
- **Usage**: 
- **Location in Figma**: 

### Text Secondary Color
- **Hex Code**: `#________`
- **Usage**: 
- **Location in Figma**: 

### Additional Colors (if any)
- Color Name: `#________`
- Color Name: `#________`

---

## Typography

### Font Families

#### Primary Font
- **Font Name**: 
- **Fallback**: 
- **Usage**: 

#### Secondary Font (if different)
- **Font Name**: 
- **Fallback**: 
- **Usage**: 

### Font Sizes (convert px to rem: px ÷ 16)

- **xs**: `____px` = `____rem`
- **sm**: `____px` = `____rem`
- **base**: `____px` = `____rem`
- **lg**: `____px` = `____rem`
- **xl**: `____px` = `____rem`
- **2xl**: `____px` = `____rem`
- **3xl**: `____px` = `____rem`
- **4xl**: `____px` = `____rem`

### Font Weights Used
- [ ] 400 (normal)
- [ ] 500 (medium)
- [ ] 600 (semibold)
- [ ] 700 (bold)
- [ ] Other: _____

### Line Heights
- **tight**: `____` (e.g., 1.25)
- **normal**: `____` (e.g., 1.5)
- **relaxed**: `____` (e.g., 1.75)

---

## Spacing (convert px to rem: px ÷ 16)

- **xs**: `____px` = `____rem`
- **sm**: `____px` = `____rem`
- **md**: `____px` = `____rem`
- **lg**: `____px` = `____rem`
- **xl**: `____px` = `____rem`
- **2xl**: `____px` = `____rem`
- **3xl**: `____px` = `____rem`

Common spacing values to check:
- Padding values used
- Margin values used
- Gap values in flex/grid layouts

---

## Breakpoints

- **Mobile**: `____px` (usually 320px or 375px)
- **Tablet**: `____px` (usually 768px)
- **Desktop**: `____px` (usually 1024px or 1920px)

---

## Shadows

### Small Shadow
- **Value**: `0 ____px ____px ____px rgba(____, ____, ____, ____)`
- **Example element**: 

### Medium Shadow
- **Value**: `0 ____px ____px ____px rgba(____, ____, ____, ____)`
- **Example element**: 

### Large Shadow
- **Value**: `0 ____px ____px ____px rgba(____, ____, ____, ____)`
- **Example element**: 

---

## Border Radius

- **sm**: `____px` = `____rem`
- **md**: `____px` = `____rem`
- **lg**: `____px` = `____rem`

---

## How to Extract in Figma

### For Colors:
1. Select element with color
2. Right panel → Fill section
3. Click color swatch → Copy hex code

### For Typography:
1. Select text element
2. Right panel → Text section
3. Note: Font family, size (px), weight, line height

### For Spacing:
1. Select element
2. Right panel → Layout section
3. Note: Padding, Margin, Gap values

### For Shadows:
1. Select element with shadow
2. Right panel → Effects section
3. Note: Drop shadow values (x, y, blur, spread, color)

### For Border Radius:
1. Select element
2. Right panel → Corner radius
3. Note the value in px

---

## After Extraction

1. Copy all values from this template
2. Update `frontend/lib/tokens.ts` replacing all TODO comments
3. Verify all values are in correct format (hex for colors, rem for sizes/spacing)
4. Test the tokens by using them in components

