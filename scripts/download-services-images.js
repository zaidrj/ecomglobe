/**
 * Download Services Page Images Script
 * Downloads all images from Figma MCP localhost URLs to the public/images directory
 * Services page specific images
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Image URLs extracted from Figma MCP for Services Page (node-id: 101-2396)
const images = {
  services: [
    // 6 platform service card images
    { url: 'http://localhost:3845/assets/9035066fb9437a31310454062d1051da9a7a7abd.png', name: 'amazon-marketing.png' }, // img11 - Amazon Marketing
    { url: 'http://localhost:3845/assets/2ee4c8ad51f995fa0974ce65eb74887b7f34fc1a.png', name: 'shopify-development.png' }, // img12 - Shopify Development
    { url: 'http://localhost:3845/assets/8b90cb15a120b519a31d182afb91f4fb5679981c.png', name: 'etsy-optimization.png' }, // img13 - Etsy Optimization
    { url: 'http://localhost:3845/assets/a5013c71bb32d665e9d33734bd32354ebf8f0958.png', name: 'walmart-marketplace.png' }, // img14 - Walmart Marketplace
    { url: 'http://localhost:3845/assets/b45a8b924b3aa0d49f76cf10bc98990f40d3fd28.png', name: 'ebay-management.png' }, // img15 - eBay Management
    { url: 'http://localhost:3845/assets/dda04b7c6dd5f39b11c464a6f9b659466981cbc4.png', name: 'tiktok-shop-setup.png' }, // img16 - TikTok Shop Setup
  ],
  process: [
    // Process step icons
    { url: 'http://localhost:3845/assets/0e404041cfe05bfb90c51fe009ffd42002f2fa8c.svg', name: 'discovery-icon.svg' }, // imgGroup - Discovery
    { url: 'http://localhost:3845/assets/e1141b8216e1ceba252beb9e7df85015330a032b.svg', name: 'strategy-icon.svg' }, // imgGroup164427 - Strategy
    { url: 'http://localhost:3845/assets/74b24828f173ed4e695ec9db3add13a93673828b.svg', name: 'setup-icon.svg' }, // imgVectorStroke - Setup
    { url: 'http://localhost:3845/assets/8b68b03cf6bc9454fdd5d2f946b8d10250d59a1f.svg', name: 'launch-icon.svg' }, // imgVector2 - Launch
    { url: 'http://localhost:3845/assets/fbd27fff10d713f41a3da33a2715d22683a95774.svg', name: 'scale-icon.svg' }, // imgGroup1 - Scale
  ],
  hero: [
    { url: 'http://localhost:3845/assets/5756e9467e8bc9d2dc13239d5039a40b2f4939e3.png', name: 'services-hero-frame.png' }, // imgFrame62 - Hero background frame
    { url: 'http://localhost:3845/assets/c2e7c711864c7b9bd125702e7ba98b8eb0ccb57a.png', name: 'services-background.png' }, // imgImage1 - Background image
  ],
  icons: [
    { url: 'http://localhost:3845/assets/3985c19ac31025e40770be0e7f864b107744b5d8.svg', name: 'arrow-up-right-services.svg' }, // imgArrowUpRight - Learn More button icon
  ],
};

function downloadImage(url, filePath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filePath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(filePath);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirect
        file.close();
        fs.unlinkSync(filePath);
        downloadImage(response.headers.location, filePath).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlinkSync(filePath);
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('📥 Downloading services page images from Figma...\n');
  
  const baseDir = path.join(__dirname, '../public/images');
  let downloaded = 0;
  let failed = 0;

  for (const [category, imageList] of Object.entries(images)) {
    const categoryDir = path.join(baseDir, category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    for (const image of imageList) {
      const filePath = path.join(categoryDir, image.name);
      try {
        await downloadImage(image.url, filePath);
        console.log(`✅ Downloaded: ${category}/${image.name}`);
        downloaded++;
      } catch (error) {
        console.warn(`⚠️  Failed to download ${image.name}: ${error.message}`);
        failed++;
      }
    }
  }

  console.log(`\n📊 Summary: ${downloaded} downloaded, ${failed} failed`);
  console.log(`📁 Images saved to: ${baseDir}`);
}

downloadAllImages().catch(console.error);

