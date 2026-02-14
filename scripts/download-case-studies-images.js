/**
 * Download Case Studies Page Images Script
 * Downloads all images from Figma MCP localhost URLs to the public/images/case-studies directory
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Image URLs extracted from Figma MCP for Case Studies page (node-id=101-4482)
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
  stats: [
    { url: 'http://localhost:3845/assets/d8d86b2a9afa8d59d9215c9a8c4831b0f5e2f692.svg', name: 'vector-divider.svg' },
  ],
  caseStudies: [
    { url: 'http://localhost:3845/assets/ac09ff5aa15cfa8e6e4c4ee013b148b2b2915c09.png', name: 'frame-76.png' },
  ],
  icons: [
    { url: 'http://localhost:3845/assets/5a7b3424bf880fc61231e877f6222538a908dd22.svg', name: 'checkmark.svg' },
    { url: 'http://localhost:3845/assets/f2e45adacea081463f72532533bbbf602e424719.svg', name: 'star.svg' },
    { url: 'http://localhost:3845/assets/62f13eff179cf7183e67fc4a58da03cb09d2ddfc.svg', name: 'vector-219.svg' },
  ],
  decorative: [
    { url: 'http://localhost:3845/assets/5848a16f543c5b1df30e3111cceb5e4a766720dc.svg', name: 'vector.svg' },
    { url: 'http://localhost:3845/assets/cfd71c76fa1571d91735107b0bbbc5653c13e8cd.svg', name: 'vector-1.svg' },
  ],
};

// Base directory for images
const baseDir = path.join(__dirname, '..', 'public', 'images', 'case-studies');

// Create directory structure
const directories = [
  path.join(baseDir, 'hero'),
  path.join(baseDir, 'stats'),
  path.join(baseDir, 'case-studies'),
  path.join(baseDir, 'icons'),
  path.join(baseDir, 'decorative'),
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
  console.log('Starting Case Studies page image downloads...\n');

  const downloadPromises = [];

  // Download hero images
  images.hero.forEach((img) => {
    const filePath = path.join(baseDir, 'hero', img.name);
    downloadPromises.push(downloadImage(img.url, filePath).catch((err) => {
      console.error(`Error downloading ${img.name}:`, err.message);
    }));
  });

  // Download stats images
  images.stats.forEach((img) => {
    const filePath = path.join(baseDir, 'stats', img.name);
    downloadPromises.push(downloadImage(img.url, filePath).catch((err) => {
      console.error(`Error downloading ${img.name}:`, err.message);
    }));
  });

  // Download case study images
  images.caseStudies.forEach((img) => {
    const filePath = path.join(baseDir, 'case-studies', img.name);
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

  await Promise.all(downloadPromises);

  console.log('\nCase Studies page image downloads complete!');
  console.log(`Images saved to: ${baseDir}`);
}

// Run the download
downloadAllImages().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});

