/**
 * Download Figma Images Script
 * Downloads all images from Figma MCP localhost URLs to the public/images directory
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Image URLs extracted from Figma MCP
const images = {
  hero: [
    { url: 'http://localhost:3845/assets/1a8d064a6087e40cb4d08a80bb8c74b1911a8e47.png', name: 'artboard1-copy-ecomm-globe-1.png' },
    { url: 'http://localhost:3845/assets/3600b903140df64b58847cd0b9bf5d8dfd3111d8.png', name: 'testimonial-1.png' },
    { url: 'http://localhost:3845/assets/42945f3b732733dee14e6734458b4bd30e656882.png', name: 'testimonial-2.png' },
    { url: 'http://localhost:3845/assets/414a1811b5b87c31dc43ccb2bef1b1decfe66cbd.png', name: 'testimonial-3.png' },
  ],
  products: [
    { url: 'http://localhost:3845/assets/f30032c09a98a0b7b5981f8f37a6d8b1f8c36114.png', name: 'amazon-service.png' },
    { url: 'http://localhost:3845/assets/2ee4c8ad51f995fa0974ce65eb74887b7f34fc1a.png', name: 'shopify-service.png' },
    { url: 'http://localhost:3845/assets/8b90cb15a120b519a31d182afb91f4fb5679981c.png', name: 'etsy-service.png' },
    { url: 'http://localhost:3845/assets/a5013c71bb32d665e9d33734bd32354ebf8f0958.png', name: 'walmart-service.png' },
    { url: 'http://localhost:3845/assets/e21ffb2543415bcdb8851a4f448ba3e7308798ac.png', name: 'why-ecomm-globe.png' },
    { url: 'http://localhost:3845/assets/386691a92b186c7de96615c51c5b726f0dd7eddf.png', name: 'tiktok-shop.png' },
  ],
  logos: [
    { url: 'http://localhost:3845/assets/0559c2c0234fea06a53f371af07f880413ef8071.png', name: 'shopify-logo.png' },
    { url: 'http://localhost:3845/assets/d1012ce5cbd4435c80b5fef334edf7ed0700fee7.png', name: 'amazon-logo.png' },
    { url: 'http://localhost:3845/assets/e71f280a2cbd0409910959dac1c14a4fe3e42106.png', name: 'walmart-logo.png' },
    { url: 'http://localhost:3845/assets/e86bf9a2a1e7d4bf720fe21b219c15a0a183e595.svg', name: 'logo-13.svg' },
    { url: 'http://localhost:3845/assets/47a651b704a78ad056687fae5076ff3575f4a1a2.svg', name: 'logo-52.svg' },
    { url: 'http://localhost:3845/assets/6789a4e1b396491ba75e4ebf8c4789def9283abf.svg', name: 'logo-89.svg' },
    { url: 'http://localhost:3845/assets/76989080b88a0149f5917a317c12c9b2616f9c35.svg', name: 'logo-15.svg' },
    { url: 'http://localhost:3845/assets/a1df95d07b1b2c46f479b86f1bc68cb39670f5d4.svg', name: 'logo-86.svg' },
    { url: 'http://localhost:3845/assets/f35a40ee81e1a86c8ec238554efa90cdf81d0b7a.svg', name: 'frame.svg' },
  ],
  icons: [
    { url: 'http://localhost:3845/assets/5848a16f543c5b1df30e3111cceb5e4a766720dc.svg', name: 'vector.svg' },
    { url: 'http://localhost:3845/assets/3f93ec96f20ce5367a47fcdbf413207654ac0aaf.svg', name: 'image-bg.svg' },
    { url: 'http://localhost:3845/assets/30834fcec115d783f0105c6720b9e7b20f13e38c.svg', name: 'line-10.svg' },
    { url: 'http://localhost:3845/assets/b29f10591c3c7327453e4cd529a838cd32bc7028.svg', name: 'ellipse-9.svg' },
    { url: 'http://localhost:3845/assets/d8d86b2a9afa8d59d9215c9a8c4831b0f5e2f692.svg', name: 'vector-218.svg' },
    { url: 'http://localhost:3845/assets/e06491ece9267fab01868aef2eb53eb3ca63d629.svg', name: 'hero-title.svg' },
    { url: 'http://localhost:3845/assets/a57b8ec8434256db1f9425b39e95249c3c851ce6.svg', name: 'vector-451.svg' },
    { url: 'http://localhost:3845/assets/7299023c89eacece7bcf6ce9cb4a2dbc311d636f.svg', name: 'vector-1.svg' },
    { url: 'http://localhost:3845/assets/537629b1c4c696f2b40bf668914910face6fea80.svg', name: 'arrow-right-circle.svg' },
    { url: 'http://localhost:3845/assets/cc31426e9f1e293b691ab95251376681902f2d91.svg', name: 'vector-2.svg' },
    { url: 'http://localhost:3845/assets/e6f91f80600b2c0fb71b20d8af4cb4b38439fbf5.svg', name: 'vector-3.svg' },
    { url: 'http://localhost:3845/assets/123e38a4b05d45f565a2def2bc945e32f78947a2.svg', name: 'ellipse-7175.svg' },
    { url: 'http://localhost:3845/assets/41988aa604bd1d9c6801b946117d97d99853f6f4.svg', name: 'engine-nine-ellipse.svg' },
    { url: 'http://localhost:3845/assets/7a8efb39f4703a889aeec16470685a16c4dcef89.svg', name: 'up-right-arrow-11.svg' },
    { url: 'http://localhost:3845/assets/8b2d11187d1c161b9354be2a2e5f5a39b90646a3.svg', name: 'arrow-up-right.svg' },
    { url: 'http://localhost:3845/assets/3ea8bdb658e433b3aeeea4969e469b830824bce2.svg', name: 'arrow-up-right-1.svg' },
    { url: 'http://localhost:3845/assets/797ebf7a756ca4096cdd6e81c6360486d191828b.svg', name: 'arrow-up-right-2.svg' },
    { url: 'http://localhost:3845/assets/b8365e8b99a9014a35acd1cf517d751f2ab19909.svg', name: 'arrow-up-right-3.svg' },
    { url: 'http://localhost:3845/assets/7c06d9c3efb992d55254f56751aff039a12d4302.svg', name: 'arrow-right-circle-1.svg' },
    { url: 'http://localhost:3845/assets/21b4ca77aacc6d172a4402faf822cc9d147a8790.svg', name: 'arrow-right-circle-2.svg' },
    { url: 'http://localhost:3845/assets/6a9bf044ee096b672972c7d48cb9ee6bca60dbd2.svg', name: 'ellipse-container.svg' },
    { url: 'http://localhost:3845/assets/c701bcf02e42f0952a6d4f47d9f1355910418022.svg', name: 'rectangle-1.svg' },
    { url: 'http://localhost:3845/assets/3e327214faa2c97001d6861dfd6f07ebf7cc8ac9.svg', name: 'rectangle-5.svg' },
    { url: 'http://localhost:3845/assets/ed14432ce6add25404424eb4fe9f4b2b41955efa.svg', name: 'ellipse-2.svg' },
    { url: 'http://localhost:3845/assets/083091ebf02214a42a78cd39d259da99ac5088a5.svg', name: 'ellipse-4.svg' },
    { url: 'http://localhost:3845/assets/eabe1f468c7cec0bbb755fc1ab79d1ac6454ff1d.svg', name: 'ellipse-3.svg' },
    { url: 'http://localhost:3845/assets/564c3d1e3e8d41cca7b15b14002e2feab75fb235.svg', name: 'ellipse-5.svg' },
    { url: 'http://localhost:3845/assets/bbb683c8c300830a17934c10ff47f52c39fc3161.svg', name: 'ellipse-6.svg' },
    { url: 'http://localhost:3845/assets/cfd71c76fa1571d91735107b0bbbc5653c13e8cd.svg', name: 'vector-contact.svg' },
  ],
  testimonials: [
    { url: 'http://localhost:3845/assets/3600b903140df64b58847cd0b9bf5d8dfd3111d8.png', name: 'sarah-johnson.png' },
    { url: 'http://localhost:3845/assets/42945f3b732733dee14e6734458b4bd30e656882.png', name: 'michael-chen.png' },
    { url: 'http://localhost:3845/assets/414a1811b5b87c31dc43ccb2bef1b1decfe66cbd.png', name: 'emily-rodriguez.png' },
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
  console.log('📥 Downloading images from Figma...\n');
  
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

