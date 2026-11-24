import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const exts = new Set(['.ts', '.astro', '.mjs', '.js', '.json', '.txt', '.xml', '.svg', '.webmanifest', '.md', '.toml']);
const skip = new Set(['node_modules', '.git', 'dist']);

const REPLACEMENTS = [
  ['cheatapex.net', 'cheatseft.org'],
  ['cheatapex', 'cheatsrobrun'],
  ['/products/tarkov/', '/products/tarkov/'],
  ['/products/tarkov', '/products/tarkov'],
  ['/escape-from-tarkov-cheats/', '/escape-from-tarkov-cheats/'],
  ['/go/tarkov/', '/go/tarkov/'],
  ['escape-from-tarkov-cheats', 'escape-from-tarkov-cheats'],
  ['Apex catalog', 'Escape from Tarkov catalog'],
  ['Apex product', 'Escape from Tarkov product'],
  ['Apex products', 'Escape from Tarkov products'],
  ['Apex cheat', 'Escape from Tarkov cheat'],
  ['Apex cheats', 'Escape from Tarkov cheats'],
  ['Apex utilities', 'Escape from Tarkov utilities'],
  ['Apex forum', 'Escape from Tarkov forum'],
  ['Apex tiers', 'Escape from Tarkov tiers'],
  ['Apex radar', 'Escape from Tarkov radar'],
  ['Apex setup', 'Escape from Tarkov setup'],
  ['Apex community', 'Escape from Tarkov community'],
  ['Apex PC', 'Escape from Tarkov PC'],
  ['Apex offline', 'Escape from Tarkov offline'],
  ['Lite', 'Lite'],
  ['Pro', 'Pro'],
  ['Elite', 'Elite'],
  ['Apex loadout', 'PMC loadout'],
  ['Apex multiplayer', 'Escape from Tarkov multiplayer'],
  ['products/tarkov-legends', 'products/escape-from-tarkov'],
  ['Competitive Apex focus', 'Raid and extraction focus'],
  ["tarkov: 'apex'", "tarkov: 'tarkov'"],
  ['(eac ', '(anti-cheat '],
  ['eac guide', 'anti-cheat guide'],
  ['eac sidebar', 'anti-cheat sidebar'],
  ['short_name": "EFT Cheats"', 'short_name": "EFT Cheats"'],
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
