/**
 * Download TikTok Shop Page Images Script
 * Downloads all images from Figma MCP localhost URLs to the public/images/tiktok directory
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Image URLs extracted from Figma MCP for TikTok Shop page (node-id=101-4184)
const images = {
  hero: [
    { url: 'http://localhost:3845/assets/1a8d064a6087e40cb4d08a80bb8c74b1911a8e47.png', name: 'artboard1-copy-ecomm-globe-1.png' },
    { url: 'http://localhost:3845/assets/12183b8c92ba5ebc08d6755e737d3b465cc26a82.png', name: 'tiktok-hero.png' },
    { url: 'http://localhost:3845/assets/99bd788936847d9d8e06940fcb6f70271d0e4de3.png', name: 'rectangle-4600.png' },
    { url: 'http://localhost:3845/assets/3b7fad0a45d8fbee39e1fab306287741c769a390.png', name: 'tiktok-hero-2.png' },
    { url: 'http://localhost:3845/assets/511615645b5bddf18eb882a9dcdd321e39027789.png', name: 'frame-62.png' },
    { url: 'http://localhost:3845/assets/aa3e0a2d70ff8c8fee892b443920d4f68bffb040.png', name: 'rectangle-4602.png' },
  ],
  stats: [
    { url: 'http://localhost:3845/assets/fcad9664fda7987a575da88c217ac84336cf38cd.svg', name: 'group-clock.svg' }, // 3-6 Months icon
    { url: 'http://localhost:3845/assets/98a732dcd4fc3fab03268be9e21b8cad60e50f8a.svg', name: 'vector-dollar.svg' }, // 4.5x ROI icon
    { url: 'http://localhost:3845/assets/3e0f6d024ab48b6a10d4f43c8edd81401a294a5f.svg', name: 'group-164428-people.svg' }, // 100+ Clients icon
    { url: 'http://localhost:3845/assets/8c5f5edf90c380908c303a8407688c286cbff583.svg', name: 'vector-growth.svg' }, // 340% Growth icon
  ],
  process: [
    { url: 'http://localhost:3845/assets/0e404041cfe05bfb90c51fe009ffd42002f2fa8c.svg', name: 'group-account-setup.svg' }, // Account Setup
    { url: 'http://localhost:3845/assets/490dbcaf7ac159181317dd280c1e6717e18c1a73.svg', name: 'group-product-integration.svg' }, // Product Integration
    { url: 'http://localhost:3845/assets/a664a6f17819fae9e07d3ceb1b5e119fee0094bb.svg', name: 'group-content-strategy.svg' }, // Content Strategy
    { url: 'http://localhost:3845/assets/8b68b03cf6bc9454fdd5d2f946b8d10250d59a1f.svg', name: 'vector-creator-outreach.svg' }, // Creator Outreach
    { url: 'http://localhost:3845/assets/8cdc5df12f130c27955cb2fe85cbeb7878f77c2a.svg', name: 'group-scale-optimize.svg' }, // Scale & Optimize
  ],
  logos: [
    { url: 'http://localhost:3845/assets/e86bf9a2a1e7d4bf720fe21b219c15a0a183e595.svg', name: 'logo-13.svg' },
    { url: 'http://localhost:3845/assets/47a651b704a78ad056687fae5076ff3575f4a1a2.svg', name: 'logo-52.svg' },
    { url: 'http://localhost:3845/assets/6789a4e1b396491ba75e4ebf8c4789def9283abf.svg', name: 'logo-89.svg' },
    { url: 'http://localhost:3845/assets/76989080b88a0149f5917a317c12c9b2616f9c35.svg', name: 'logo-15.svg' },
    { url: 'http://localhost:3845/assets/a1df95d07b1b2c46f479b86f1bc68cb39670f5d4.svg', name: 'logo-86.svg' },
    { url: 'http://localhost:3845/assets/f35a40ee81e1a86c8ec238554efa90cdf81d0b7a.svg', name: 'frame.svg' },
  ],
  decorative: [
    { url: 'http://localhost:3845/assets/6a9bf044ee096b672972c7d48cb9ee6bca60dbd2.svg', name: 'ellipse-container.svg' },
    { url: 'http://localhost:3845/assets/c701bcf02e42f0952a6d4f47d9f1355910418022.svg', name: 'rectangle-1.svg' },
    { url: 'http://localhost:3845/assets/3e327214faa2c97001d6861dfd6f07ebf7cc8ac9.svg', name: 'rectangle-5.svg' },
    { url: 'http://localhost:3845/assets/ed14432ce6add25404424eb4fe9f4b2b41955efa.svg', name: 'ellipse-2.svg' },
    { url: 'http://localhost:3845/assets/083091ebf02214a42a78cd39d259da99ac5088a5.svg', name: 'ellipse-4.svg' },
    { url: 'http://localhost:3845/assets/eabe1f468c7cec0bbb755fc1ab79d1ac6454ff1d.svg', name: 'ellipse-3.svg' },
    { url: 'http://localhost:3845/assets/b29f10591c3c7327453e4cd529a838cd32bc7028.svg', name: 'ellipse-9.svg' },
    { url: 'http://localhost:3845/assets/123e38a4b05d45f565a2def2bc945e32f78947a2.svg', name: 'ellipse-7175.svg' },
    { url: 'http://localhost:3845/assets/41988aa604bd1d9c6801b946117d97d99853f6f4.svg', name: 'engine-nine-ellipse.svg' },
  ],
  icons: [
    { url: 'http://localhost:3845/assets/5848a16f543c5b1df30e3111cceb5e4a766720dc.svg', name: 'vector.svg' },
    { url: 'http://localhost:3845/assets/cfd71c76fa1571d91735107b0bbbc5653c13e8cd.svg', name: 'vector-1.svg' },
    { url: 'http://localhost:3845/assets/537629b1c4c696f2b40bf668914910face6fea80.svg', name: 'arrow-right-circle.svg' },
    { url: 'http://localhost:3845/assets/7a8efb39f4703a889aeec16470685a16c4dcef89.svg', name: 'up-right-arrow-11.svg' },
    { url: 'http://localhost:3845/assets/e5b2a96deb05df43e5faa20034bfd1e97f1e28e2.svg', name: 'plus-18.svg' },
    { url: 'http://localhost:3845/assets/c935a8d3824d39871ed9dad62fe6fbb72fd7fd58.svg', name: 'line-151.svg' },
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
  const baseDir = path.join(__dirname, '..', 'public', 'images', 'tiktok');
  
  const directories = ['hero', 'stats', 'process', 'logos', 'decorative', 'icons'];
  directories.forEach(dir => {
    const dirPath = path.join(baseDir, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`Created directory: ${dirPath}`);
    }
  });

  let totalImages = 0;
  let downloadedImages = 0;
  let failedImages = 0;

  for (const [category, imageList] of Object.entries(images)) {
    console.log(`\nDownloading ${category} images...`);
    
    for (const image of imageList) {
      totalImages++;
      const filePath = path.join(baseDir, category, image.name);
      
      try {
        await downloadImage(image.url, filePath);
        console.log(`✓ Downloaded: ${image.name}`);
        downloadedImages++;
      } catch (error) {
        console.error(`✗ Failed to download ${image.name}: ${error.message}`);
        failedImages++;
      }
    }
  }

  console.log(`\n=== Download Summary ===`);
  console.log(`Total images: ${totalImages}`);
  console.log(`Downloaded: ${downloadedImages}`);
  console.log(`Failed: ${failedImages}`);
  
  if (failedImages > 0) {
    console.log(`\n⚠️  Some images failed to download. Please check the URLs and try again.`);
    process.exit(1);
  } else {
    console.log(`\n✅ All images downloaded successfully!`);
  }
}

downloadAllImages().catch(console.error);

