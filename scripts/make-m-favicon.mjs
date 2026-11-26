import sharp from 'sharp';
import fs from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'public');

/** Path-based C (not <text>) so Sharp rasterizes correctly in PNG/ICO. */
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
  <path fill="#F5F7FA" d="M308 180c-45.6 0-85.6 23.2-108 58.4v-37.6c26.4-37.6 70.4-60.8 120-60.8 81.6 0 147.2 66.4 147.2 147.2S389.6 434.4 308 434.4c-49.6 0-93.6-23.2-120-60.8v-37.6c22.4 35.2 62.4 58.4 108 58.4 61.6 0 112-50.4 112-112.4S369.6 180 308 180z"/>
</svg>`;

const source = Buffer.from(svg);

function encodeIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);
  let o = 6;
  let dataOffset = headerSize;
  const parts = [header];
  for (const buf of pngBuffers) {
    const w = buf.readUInt32BE(16);
    const h = buf.readUInt32BE(20);
    header.writeUInt8(w >= 256 ? 0 : w, o);
    header.writeUInt8(h >= 256 ? 0 : h, o + 1);
    header.writeUInt16LE(1, o + 4);
    header.writeUInt16LE(32, o + 6);
    header.writeUInt32LE(buf.length, o + 8);
    header.writeUInt32LE(dataOffset, o + 12);
    o += 16;
    dataOffset += buf.length;
    parts.push(buf);
  }
  return Buffer.concat(parts);
}

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
  fs.writeFileSync(path.join(out, name), await png(size));
  console.log('wrote', name);
}

const ico = encodeIco([await png(16), await png(32)]);
fs.writeFileSync(path.join(out, 'favicon.ico'), ico);
console.log('wrote favicon.ico');