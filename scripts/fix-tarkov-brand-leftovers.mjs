import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const exts = new Set(['.ts', '.astro', '.mjs', '.js', '.json', '.txt', '.xml', '.svg', '.webmanifest', '.md', '.toml']);
const skip = new Set(['node_modules', '.git', 'dist']);

const REPLACEMENTS = [
  ['cheatapex.net', 'csgo-cheat.org'],
  ['cheatapex', 'cheatsrobrun'],
  ['/products/cs-go/', '/products/cs-go/'],
  ['/products/cs-go', '/products/cs-go'],
  ['/cs-go-cheats/', '/cs-go-cheats/'],
  ['/go/cs-go/', '/go/cs-go/'],
  ['cs-go-cheats', 'cs-go-cheats'],
  ['Apex catalog', 'Counter-Strike: Global Offensive catalog'],
  ['Apex product', 'Counter-Strike: Global Offensive product'],
  ['Apex products', 'Counter-Strike: Global Offensive products'],
  ['Apex cheat', 'CS:GO cheat'],
  ['Apex cheats', 'CS:GO cheats'],
  ['Apex utilities', 'Counter-Strike: Global Offensive utilities'],
  ['Apex forum', 'Counter-Strike: Global Offensive forum'],
  ['Apex tiers', 'Counter-Strike: Global Offensive tiers'],
  ['Apex radar', 'Counter-Strike: Global Offensive radar'],
  ['Apex setup', 'Counter-Strike: Global Offensive setup'],
  ['Apex community', 'Counter-Strike: Global Offensive community'],
  ['Apex PC', 'Counter-Strike: Global Offensive PC'],
  ['Apex offline', 'Counter-Strike: Global Offensive offline'],
  ['CS:GO Lite', 'CS:GO Lite'],
  ['CS:GO Pro', 'CS:GO Pro'],
  ['CS:GO Elite', 'CS:GO Elite'],
  ['Apex loadout', 'PMC loadout'],
  ['Apex multiplayer', 'Counter-Strike: Global Offensive multiplayer'],
  ['products/cs-go-legends', 'products/escape-from-tarkov'],
  ['Competitive Apex focus', 'Raid and extraction focus'],
  ["tarkov: 'apex'", "tarkov: 'tarkov'"],
  ['(eac ', '(BattlEye '],
  ['eac guide', 'BattlEye guide'],
  ['eac sidebar', 'BattlEye sidebar'],
  ['short_name": "CSGO Cheats"', 'short_name": "CSGO Cheats"'],
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
