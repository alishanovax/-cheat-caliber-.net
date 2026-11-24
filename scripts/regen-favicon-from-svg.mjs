import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const src = path.join(root, 'public', 'favicon.svg');
const out = path.join(root, 'public');

const files = {
  'favicon-16.png': 16,
  'favicon-32.png': 32,
  'favicon-48.png': 48,
  'apple-touch-icon.png': 180,
  'favicon-192.png': 192,
  'favicon-512.png': 512,
};

for (const [name, size] of Object.entries(files)) {
  await sharp(src).resize(size, size).png({ compressionLevel: 9 }).toFile(path.join(out, name));
  console.log('wrote', name);
}

const png32 = await sharp(src).resize(32, 32).png().toBuffer();
const png16 = await sharp(src).resize(16, 16).png().toBuffer();

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

fs.writeFileSync(path.join(out, 'favicon.ico'), encodeIco([png16, png32]));
console.log('wrote favicon.ico');