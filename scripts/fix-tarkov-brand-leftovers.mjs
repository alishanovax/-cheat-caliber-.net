import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const exts = new Set(['.ts', '.astro', '.mjs', '.js', '.json', '.txt', '.xml', '.svg', '.webmanifest', '.md', '.toml']);
const skip = new Set(['node_modules', '.git', 'dist']);

const REPLACEMENTS = [
  ['cheatapex.net', 'cheatcaliber.net'],
  ['cheatapex', 'cheatsrobrun'],
  ['/products/caliber/', '/products/caliber/'],
  ['/products/caliber', '/products/caliber'],
  ['/caliber-cheats/', '/caliber-cheats/'],
  ['/go/caliber/', '/go/caliber/'],
  ['caliber-cheats', 'caliber-cheats'],
  ['Apex catalog', 'Caliber catalog'],
  ['Apex product', 'Caliber product'],
  ['Apex products', 'Caliber products'],
  ['Apex cheat', 'Caliber cheat'],
  ['Apex cheats', 'Caliber cheats'],
  ['Apex utilities', 'Caliber utilities'],
  ['Apex forum', 'Caliber forum'],
  ['Apex tiers', 'Caliber tiers'],
  ['Apex radar', 'Caliber radar'],
  ['Apex setup', 'Caliber setup'],
  ['Apex community', 'Caliber community'],
  ['Apex PC', 'Caliber PC'],
  ['Apex offline', 'Caliber offline'],
  ['Lite', 'Lite'],
  ['Pro', 'Pro'],
  ['Elite', 'Elite'],
  ['Apex loadout', 'operator loadout'],
  ['Apex multiplayer', 'Caliber multiplayer'],
  ['products/caliber-legends', 'products/escape-from-tarkov'],
  ['Competitive Apex focus', 'Raid and extraction focus'],
  ["tarkov: 'apex'", "caliber: 'caliber'"],
  ['(eac ', '(anti-cheat '],
  ['eac guide', 'anti-cheat guide'],
  ['eac sidebar', 'anti-cheat sidebar'],
  ['short_name": "Caliber Cheats"', 'short_name": "Caliber Cheats"'],
];

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(e.name)) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, acc);
    else if (exts.has(path.extname(e.name).toLowerCase())) acc.push(full);
  }
  return acc;
}

let changed = 0;
for (const file of walk(root)) {
  if (file.includes('fix-apex-brand-leftovers.mjs')) continue;
  if (file.includes('rebrand-cheatapex.mjs')) continue;
  if (file.includes('rebrand-cheatsrobrun.mjs')) continue;
  const before = fs.readFileSync(file, 'utf8');
  let after = before;
  for (const [from, to] of REPLACEMENTS) {
    if (after.includes(from)) after = after.split(from).join(to);
  }
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed++;
  }
}
console.log(`Fixed ${changed} files.`);
