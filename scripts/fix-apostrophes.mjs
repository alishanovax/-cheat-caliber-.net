import fs from 'node:fs';
import path from 'node:path';

const root = path.join(process.cwd(), 'src');

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, files);
    else if (/\.(ts|astro|mjs)$/.test(name)) files.push(full);
  }
  return files;
}

let changed = 0;
for (const file of walk(root)) {
  let text = fs.readFileSync(file, 'utf8');
  const next = text.replace(/Tom Clancy's/g, 'Tom Clancy\u2019s');
  if (next !== text) {
    fs.writeFileSync(file, next);
    changed++;
  }
}
console.log(`Fixed apostrophes in ${changed} files.`);