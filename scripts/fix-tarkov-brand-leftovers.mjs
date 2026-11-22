import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const exts = new Set(['.ts', '.astro', '.mjs', '.js', '.json', '.txt', '.xml', '.svg', '.webmanifest', '.md', '.toml']);
const skip = new Set(['node_modules', '.git', 'dist']);

const REPLACEMENTS = [
  ['cheatapex.net', 'r6-cheat.com'],
  ['cheatapex', 'cheatsrobrun'],
  ['/products/r6/', '/products/r6/'],
  ['/products/r6', '/products/r6'],
  ['/r6-cheats/', '/r6-cheats/'],
  ['/go/r6/', '/go/r6/'],
  ['r6-cheats', 'r6-cheats'],
  ['Apex catalog', 'Tom Clancy's Rainbow Six Siege catalog'],
  ['Apex product', 'Tom Clancy's Rainbow Six Siege product'],
  ['Apex products', 'Tom Clancy's Rainbow Six Siege products'],
  ['Apex cheat', 'Rainbow Six Siege cheat'],
  ['Apex cheats', 'Rainbow Six Siege cheats'],
  ['Apex utilities', 'Tom Clancy's Rainbow Six Siege utilities'],
  ['Apex forum', 'Tom Clancy's Rainbow Six Siege forum'],
  ['Apex tiers', 'Tom Clancy's Rainbow Six Siege tiers'],
  ['Apex radar', 'Tom Clancy's Rainbow Six Siege radar'],
  ['Apex setup', 'Tom Clancy's Rainbow Six Siege setup'],
  ['Apex community', 'Tom Clancy's Rainbow Six Siege community'],
  ['Apex PC', 'Tom Clancy's Rainbow Six Siege PC'],
  ['Apex offline', 'Tom Clancy's Rainbow Six Siege offline'],
  ['R6 Lite', 'R6 Lite'],
  ['R6 Pro', 'R6 Pro'],
  ['R6 Elite', 'R6 Elite'],
  ['Apex loadout', 'PMC loadout'],
  ['Apex multiplayer', 'Tom Clancy's Rainbow Six Siege multiplayer'],
  ['products/r6-legends', 'products/escape-from-tarkov'],
  ['Ranked Apex focus', 'Raid and extraction focus'],
  ["tarkov: 'apex'", "tarkov: 'tarkov'"],
  ['(eac ', '(BattlEye '],
  ['eac guide', 'BattlEye guide'],
  ['eac sidebar', 'BattlEye sidebar'],
  ['short_name": "R6 Cheat"', 'short_name": "R6 Cheat"'],
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
