import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const exts = new Set(['.ts', '.astro', '.mjs', '.js', '.json', '.txt', '.xml', '.svg', '.webmanifest', '.md', '.toml']);
const skip = new Set(['node_modules', '.git', 'dist']);

const REPLACEMENTS = [
  ['cheatapex.net', 'rivalscheat.net'],
  ['cheatapex', 'cheatsrobrun'],
  ['/products/r6/', '/products/r6/'],
  ['/products/r6', '/products/r6'],
  ['/r6-cheats/', '/r6-cheats/'],
  ['/go/r6/', '/go/r6/'],
  ['r6-cheats', 'r6-cheats'],
  ['Apex catalog', 'Marvel Rivals catalog'],
  ['Apex product', 'Marvel Rivals product'],
  ['Apex products', 'Marvel Rivals products'],
  ['Apex cheat', 'Marvel Rivals cheat'],
  ['Apex cheats', 'Marvel Rivals cheats'],
  ['Apex utilities', 'Marvel Rivals utilities'],
  ['Apex forum', 'Marvel Rivals forum'],
  ['Apex tiers', 'Marvel Rivals tiers'],
  ['Apex radar', 'Marvel Rivals radar'],
  ['Apex setup', 'Marvel Rivals setup'],
  ['Apex community', 'Marvel Rivals community'],
  ['Apex PC', 'Marvel Rivals PC'],
  ['Apex offline', 'Marvel Rivals offline'],
  ['Lite', 'Lite'],
  ['Pro', 'Pro'],
  ['Elite', 'Elite'],
  ['Apex loadout', 'PMC loadout'],
  ['Apex multiplayer', 'Marvel Rivals multiplayer'],
  ['products/r6-legends', 'products/escape-from-tarkov'],
  ['Competitive Apex focus', 'Raid and extraction focus'],
  ["tarkov: 'apex'", "tarkov: 'tarkov'"],
  ['(eac ', '(anti-cheat '],
  ['eac guide', 'anti-cheat guide'],
  ['eac sidebar', 'anti-cheat sidebar'],
  ['short_name": "Rivals Cheat"', 'short_name": "Rivals Cheat"'],
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
