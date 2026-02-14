/**
 * Download FAQ Background Image Script
 * Downloads rectangle-4602.png from Figma MCP for FAQ section
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

const url = 'http://localhost:3845/assets/aa3e0a2d70ff8c8fee892b443920d4f68bffb040.png';
const filePath = path.join(__dirname, '..', 'public', 'images', 'amazon', 'hero', 'rectangle-4602.png');

// Ensure directory exists
const dir = path.dirname(filePath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const file = fs.createWriteStream(filePath);

console.log('Downloading FAQ background image (rectangle-4602.png)...');

http.get(url, (response) => {
  if (response.statusCode === 200) {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('✅ Successfully downloaded: rectangle-4602.png');
      console.log(`   Saved to: ${filePath}`);
    });
  } else {
    console.error(`❌ Failed to download: HTTP ${response.statusCode}`);
    file.close();
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
}).on('error', (err) => {
  console.error(`❌ Error downloading image: ${err.message}`);
  file.close();
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
});

