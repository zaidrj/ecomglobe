/**
 * Download Missing Decorative Images
 * 
 * Downloads all missing decorative images (ellipse-container, rectangle-1, rectangle-5, ellipse-2, ellipse-4)
 * for About, Case Studies, Pricing, and Contact pages from Figma MCP.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// Base URL for Figma MCP assets
const BASE_URL = 'http://localhost:3845/assets';

// Image mappings: [Figma asset hash, target path]
// Note: Script should be run from frontend/ directory
const images = [
  // Shared decorative images (used across multiple pages)
  {
    url: `${BASE_URL}/6a9bf044ee096b672972c7d48cb9ee6bca60dbd2.svg`,
    paths: [
      'public/images/about/decorative/ellipse-container.svg',
      'public/images/case-studies/decorative/ellipse-container.svg',
      'public/images/pricing/decorative/ellipse-container.svg',
      'public/images/contact/decorative/ellipse-container.svg',
    ],
  },
  {
    url: `${BASE_URL}/c701bcf02e42f0952a6d4f47d9f1355910418022.svg`,
    paths: [
      'public/images/about/decorative/rectangle-1.svg',
      'public/images/case-studies/decorative/rectangle-1.svg',
      'public/images/pricing/decorative/rectangle-1.svg',
      'public/images/contact/decorative/rectangle-1.svg',
    ],
  },
  {
    url: `${BASE_URL}/3e327214faa2c97001d6861dfd6f07ebf7cc8ac9.svg`,
    paths: [
      'public/images/about/decorative/rectangle-5.svg',
      'public/images/case-studies/decorative/rectangle-5.svg',
      'public/images/pricing/decorative/rectangle-5.svg',
      'public/images/contact/decorative/rectangle-5.svg',
    ],
  },
  {
    url: `${BASE_URL}/ed14432ce6add25404424eb4fe9f4b2b41955efa.svg`,
    paths: [
      'public/images/about/decorative/ellipse-2.svg',
      'public/images/case-studies/decorative/ellipse-2.svg',
      'public/images/pricing/decorative/ellipse-2.svg',
      'public/images/contact/decorative/ellipse-2.svg',
    ],
  },
  {
    url: `${BASE_URL}/083091ebf02214a42a78cd39d259da99ac5088a5.svg`,
    paths: [
      'public/images/about/decorative/ellipse-4.svg',
      'public/images/case-studies/decorative/ellipse-4.svg',
      'public/images/pricing/decorative/ellipse-4.svg',
      'public/images/contact/decorative/ellipse-4.svg',
    ],
  },
];

/**
 * Download a file from URL and save to path
 */
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Check if file already exists
    if (fs.existsSync(filePath)) {
      console.log(`✓ Already exists: ${filePath}`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(filePath);
    
    http.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${filePath}`);
          resolve();
        });
      } else if (response.statusCode === 404) {
        file.close();
        fs.unlinkSync(filePath); // Delete empty file
        console.error(`✗ Not found (404): ${url}`);
        reject(new Error(`404: ${url}`));
      } else {
        file.close();
        fs.unlinkSync(filePath); // Delete empty file
        console.error(`✗ Error ${response.statusCode}: ${url}`);
        reject(new Error(`HTTP ${response.statusCode}: ${url}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      console.error(`✗ Network error: ${url}`, err.message);
      reject(err);
    });
  });
}

/**
 * Download all images
 */
async function downloadAllImages() {
  console.log('Downloading missing decorative images...\n');

  const downloadPromises = [];

  for (const image of images) {
    for (const targetPath of image.paths) {
      downloadPromises.push(
        downloadFile(image.url, targetPath).catch((err) => {
          // Continue with other downloads even if one fails
          console.error(`Failed to download ${targetPath}:`, err.message);
        })
      );
    }
  }

  await Promise.all(downloadPromises);

  console.log('\n✓ All decorative images downloaded!');
}

// Run the script
downloadAllImages().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});

