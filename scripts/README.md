# Figma Token Extraction Script

## Overview

This script automatically extracts design tokens (colors, typography, spacing, shadows, border radius) from your Figma design using the Figma API and updates `frontend/lib/tokens.ts`.

## Prerequisites

1. **Node.js 18+** (for built-in fetch API) or install `node-fetch` for older versions
2. **Figma Personal Access Token**

## Setup

### Step 1: Get Figma Access Token

1. Go to https://www.figma.com/developers/api#access-tokens
2. Click "Get personal access token"
3. Generate a new token
4. Copy the token (you'll only see it once!)

### Step 2: Set Environment Variable

**Windows (PowerShell):**
```powershell
$env:FIGMA_ACCESS_TOKEN="your_token_here"
```

**Windows (Command Prompt):**
```cmd
set FIGMA_ACCESS_TOKEN=your_token_here
```

**Mac/Linux:**
```bash
export FIGMA_ACCESS_TOKEN=your_token_here
```

### Step 3: Run the Script

```bash
cd frontend
npm run extract-tokens
```

Or directly:
```bash
node frontend/scripts/extract-figma-tokens.js
```

## What It Extracts

- ✅ **Colors**: Primary, secondary, accent, background, text colors
- ✅ **Typography**: Font families, sizes, weights, line heights
- ✅ **Spacing**: Padding, margins, gaps (common values)
- ✅ **Shadows**: Drop shadows and inner shadows
- ✅ **Border Radius**: Corner radius values
- ✅ **Breakpoints**: Mobile (320px), tablet (768px), desktop (1024px)

## Output

The script will:
1. Connect to Figma API
2. Extract design tokens from the specified file/node
3. Update `frontend/lib/tokens.ts` with extracted values
4. Display a summary of what was extracted

## Troubleshooting

### Error: FIGMA_ACCESS_TOKEN not set
- Make sure you've set the environment variable correctly
- Verify the token is valid and not expired

### Error: API access denied
- Check that your token has access to the Figma file
- Verify the file key and node ID are correct

### Some values are defaults
- The script extracts what it can from the API
- Some values (like spacing) may need manual verification
- Review the extracted tokens and adjust as needed

## Manual Extraction Alternative

If the API extraction doesn't work or you prefer manual extraction:
1. Use `frontend/lib/figma-tokens-template.md` as a guide
2. Manually extract values from Figma
3. Update `frontend/lib/tokens.ts` directly

## Figma File Information

- **File Key**: `NChra4wV2wxqqkE1H26BPe`
- **Node ID**: `51-22`
- **URL**: https://www.figma.com/proto/NChra4wV2wxqqkE1H26BPe/NextGen-Ecomm?page-id=51%3A19&node-id=51-22

