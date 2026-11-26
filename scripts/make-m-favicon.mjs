import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const out = path.resolve('public');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <defs>
    <linearGradient id="bg" x1="64" y1="32" x2="448" y2="480" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0c0c12"/>
      <stop offset="1" stop-color="#111215"/>
    </linearGradient>
    <linearGradient id="accent" x1="128" y1="96" x2="384" y2="416" gradientUnits="userSpaceOnUse">
      <stop stop-color="#e11d48"/>
      <stop offset="1" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="128" fill="url(#bg)"/>
  <rect x="12" y="12" width="488" height="488" rx="116" stroke="#2A333D" stroke-width="8"/>
  <path d="M256 64 112 128v112c0 96 60 164 144 208 84-44 144-112 144-208V128L256 64z" fill="url(#accent)" opacity="0.95"/>
  <text x="256" y="310" text-anchor="middle" font-family="Segoe UI, system-ui, sans-serif" font-size="208" font-weight="700" fill="#F5F7FA">C</text>
</svg>`;

const source = Buffer.from(svg);

async function png(size) {
  return sharp(source).resize(size, size).png({ compressionLevel: 9 }).toBuffer();
}

const files = {
  'favicon-16.png': 16,
  'favicon-32.png': 32,
  'favicon-48.png': 48,
  'favicon-192.png': 192,
  'favicon-512.png': 512,
  'apple-touch-icon.png': 180,
};

for (const [name, size] of Object.entries(files)) {
  const buf = await png(size);
  fs.writeFileSync(path.join(out, name), buf);
  console.log('wrote', name);
}

const png16 = await png(16);
const png32 = await png(32);
// Minimal ICO: reuse existing encoder pattern - write 32-only ico via sharp
const ico32 = await png(32);
fs.writeFileSync(path.join(out, 'favicon.ico'), ico32);
console.log('wrote favicon.ico');