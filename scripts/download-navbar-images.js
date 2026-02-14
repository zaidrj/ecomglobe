const fs = require('fs');
const path = require('path');
const http = require('http'); // Use http for localhost

const imagesToDownload = [
  // Dropdown chevron icon
  { url: "http://localhost:3845/assets/5848a16f543c5b1df30e3111cceb5e4a766720dc.svg", path: path.join(__dirname, "..", "public", "images", "navbar", "vector-dropdown.svg") },
  // Contact button icon (verify if already exists)
  { url: "http://localhost:3845/assets/cfd71c76fa1571d91735107b0bbbc5653c13e8cd.svg", path: path.join(__dirname, "..", "public", "images", "navbar", "vector-contact.svg") },
];

async function downloadImage(imageUrl, destinationPath) {
  const dir = path.dirname(destinationPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    http.get(imageUrl, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${imageUrl}' (${response.statusCode})`));
        return;
      }
      const fileStream = fs.createWriteStream(destinationPath);
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        console.log(`✓ Downloaded: ${destinationPath}`);
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlink(destinationPath, () => reject(err)); // Delete the file if an error occurs
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('Downloading navbar images...');
  for (const image of imagesToDownload) {
    try {
      await downloadImage(image.url, image.path);
    } catch (error) {
      console.error(`✗ Error downloading ${image.url}: ${error.message}`);
    }
  }
  console.log('\n✓ All navbar images downloaded!');
}

downloadAllImages();

