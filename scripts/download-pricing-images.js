/**
 * Download Pricing Page Images Script
 * Downloads all images from Figma MCP localhost URLs to the public/images/pricing directory
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Image URLs extracted from Figma MCP for Pricing page (node-id=101-5858)
const images = {
  hero: [
    { url: 'http://localhost:3845/assets/1a8d064a6087e40cb4d08a80bb8c74b1911a8e47.png', name: 'artboard1-copy-ecomm-globe-1.png' },
    { url: 'http://localhost:3845/assets/6a9bf044ee096b672972c7d48cb9ee6bca60dbd2.svg', name: 'ellipse-container.svg' },
    { url: 'http://localhost:3845/assets/c701bcf02e42f0952a6d4f47d9f1355910418022.svg', name: 'rectangle-1.svg' },
    { url: 'http://localhost:3845/assets/3e327214faa2c97001d6861dfd6f07ebf7cc8ac9.svg', name: 'rectangle-5.svg' },
    { url: 'http://localhost:3845/assets/ed14432ce6add25404424eb4fe9f4b2b41955efa.svg', name: 'ellipse-2.svg' },
    { url: 'http://localhost:3845/assets/083091ebf02214a42a78cd39d259da99ac5088a5.svg', name: 'ellipse-4.svg' },
    { url: 'http://localhost:3845/assets/eabe1f468c7cec0bbb755fc1ab79d1ac6454ff1d.svg', name: 'ellipse-3.svg' },
    { url: 'http://localhost:3845/assets/b29f10591c3c7327453e4cd529a838cd32bc7028.svg', name: 'ellipse-9.svg' },
  ],
  icons: [
    { url: 'http://localhost:3845/assets/5a55858a54066aad5c796eb4eebe0b5eaf6d467e.svg', name: 'checkmark-enabled.svg' },
    { url: 'http://localhost:3845/assets/1fd229984fa2d9d703884b51f228e7ecf2392162.svg', name: 'checkmark-disabled.svg' },
  ],
  decorative: [
    { url: 'http://localhost:3845/assets/c2e7c711864c7b9bd125702e7ba98b8eb0ccb57a.png', name: 'image-1.png' },
    { url: 'http://localhost:3845/assets/e94a4f7a4b464a1cdc42ff96b7b8b37320ccd01c.svg', name: 'bg.svg' },
    { url: 'http://localhost:3845/assets/ff002794933b0759a48d6f3e6cb668ca49432648.svg', name: 'line-60.svg' },
    { url: 'http://localhost:3845/assets/824fa2350b0ac7637b3d77290bae7c8f43b77d6f.svg', name: 'line-61.svg' },
    { url: 'http://localhost:3845/assets/880c318027eecf1722b5a465e51808bed6d46cbf.svg', name: 'line-62.svg' },
  ],
  toggle: [
    { url: 'http://localhost:3845/assets/5848a16f543c5b1df30e3111cceb5e4a766720dc.svg', name: 'vector.svg' },
  ],
};

// Base directory for images
const baseDir = path.join(__dirname, '..', 'public', 'images', 'pricing');

// Create directory structure
const directories = [
  path.join(baseDir, 'hero'),
  path.join(baseDir, 'icons'),
  path.join(baseDir, 'decorative'),
  path.join(baseDir, 'toggle'),
];

directories.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Download function
function downloadImage(url, filePath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filePath);

    protocol
      .get(url, (response) => {
        if (response.statusCode === 200) {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${path.basename(filePath)}`);
            resolve();
          });
        } else if (response.statusCode === 302 || response.statusCode === 301) {
          // Handle redirects
          file.close();
          fs.unlinkSync(filePath);
          downloadImage(response.headers.location, filePath).then(resolve).catch(reject);
        } else {
          file.close();
          fs.unlinkSync(filePath);
          reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        }
      })
      .on('error', (err) => {
        file.close();
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
        reject(err);
      });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting Pricing page image downloads...\n');

  const downloadPromises = [];

  // Download hero images
  images.hero.forEach((img) => {
    const filePath = path.join(baseDir, 'hero', img.name);
    downloadPromises.push(downloadImage(img.url, filePath).catch((err) => {
      console.error(`Error downloading ${img.name}:`, err.message);
    }));
  });

  // Download icons
  images.icons.forEach((img) => {
    const filePath = path.join(baseDir, 'icons', img.name);
    downloadPromises.push(downloadImage(img.url, filePath).catch((err) => {
      console.error(`Error downloading ${img.name}:`, err.message);
    }));
  });

  // Download decorative images
  images.decorative.forEach((img) => {
    const filePath = path.join(baseDir, 'decorative', img.name);
    downloadPromises.push(downloadImage(img.url, filePath).catch((err) => {
      console.error(`Error downloading ${img.name}:`, err.message);
    }));
  });

  // Download toggle images
  images.toggle.forEach((img) => {
    const filePath = path.join(baseDir, 'toggle', img.name);
    downloadPromises.push(downloadImage(img.url, filePath).catch((err) => {
      console.error(`Error downloading ${img.name}:`, err.message);
    }));
  });

  await Promise.all(downloadPromises);

  console.log('\nPricing page image downloads complete!');
  console.log(`Images saved to: ${baseDir}`);
}

// Run the download
downloadAllImages().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});

