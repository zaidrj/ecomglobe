/**
 * Download Contact Page Images Script
 * Downloads all images from Figma MCP localhost URLs to the public/images/contact directory
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Image URLs extracted from Figma MCP for Contact page (node-id=101-6460)
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
    { url: 'http://localhost:3845/assets/e66cb7e010be541236feb2675e0d4fe41311cd2c.svg', name: 'rectangle-2.svg' },
    { url: 'http://localhost:3845/assets/123e38a4b05d45f565a2def2bc945e32f78947a2.svg', name: 'ellipse-7175.svg' },
  ],
  methods: [
    { url: 'http://localhost:3845/assets/1ff5c971a4badb2d897a222da3f1cb849b77c6f2.svg', name: 'ic-outline-email.svg' },
    { url: 'http://localhost:3845/assets/723fd980d5dbe6ffc1b79621f4db3d558c587be7.svg', name: 'material-symbols-call-outline-sharp.svg' },
    { url: 'http://localhost:3845/assets/a915755cbe20f00391ed30baca40020d4a5b48c6.svg', name: 'mingcute-location-line.svg' },
    { url: 'http://localhost:3845/assets/ee44fc3842c071eea251f83193ce8bc2db984b2a.svg', name: 'mingcute-time-line.svg' },
  ],
  form: [
    { url: 'http://localhost:3845/assets/460895e9cd43ea031afa83a5fd81a680c359e6f4.svg', name: 'vector-dropdown.svg' },
    { url: 'http://localhost:3845/assets/7a8efb39f4703a889aeec16470685a16c4dcef89.svg', name: 'up-right-arrow-11.svg' },
  ],
  process: [
    { url: 'http://localhost:3845/assets/e922927bd5c8d6738aea6e5fe2cb7f1d11d3593d.svg', name: 'arrow-right-circle.svg' },
  ],
  decorative: [
    { url: 'http://localhost:3845/assets/c2e7c711864c7b9bd125702e7ba98b8eb0ccb57a.png', name: 'image-1.png' },
    { url: 'http://localhost:3845/assets/5848a16f543c5b1df30e3111cceb5e4a766720dc.svg', name: 'vector.svg' },
    { url: 'http://localhost:3845/assets/cfd71c76fa1571d91735107b0bbbc5653c13e8cd.svg', name: 'vector-1.svg' },
  ],
};

// Base directory for images
const baseDir = path.join(__dirname, '..', 'public', 'images', 'contact');

// Create directory structure
const directories = [
  path.join(baseDir, 'hero'),
  path.join(baseDir, 'methods'),
  path.join(baseDir, 'form'),
  path.join(baseDir, 'process'),
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
  console.log('Starting Contact page image downloads...\n');

  const downloadPromises = [];

  // Download hero images
  images.hero.forEach((img) => {
    const filePath = path.join(baseDir, 'hero', img.name);
    downloadPromises.push(downloadImage(img.url, filePath).catch((err) => {
      console.error(`Error downloading ${img.name}:`, err.message);
    }));
  });

  // Download contact method icons
  images.methods.forEach((img) => {
    const filePath = path.join(baseDir, 'methods', img.name);
    downloadPromises.push(downloadImage(img.url, filePath).catch((err) => {
      console.error(`Error downloading ${img.name}:`, err.message);
    }));
  });

  // Download form icons
  images.form.forEach((img) => {
    const filePath = path.join(baseDir, 'form', img.name);
    downloadPromises.push(downloadImage(img.url, filePath).catch((err) => {
      console.error(`Error downloading ${img.name}:`, err.message);
    }));
  });

  // Download process icons
  images.process.forEach((img) => {
    const filePath = path.join(baseDir, 'process', img.name);
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

  console.log('\nContact page image downloads complete!');
  console.log(`Images saved to: ${baseDir}`);
}

// Run the download
downloadAllImages().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});

