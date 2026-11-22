import fs from 'node:fs';
import path from 'node:path';

const root = path.join(import.meta.dirname, '..', 'src');
const REPLACEMENTS = [
  ['PMC loadout tools', 'loadout tools'],
  ['PMC raid', 'online matches'],
  ['SCAV run', 'casual matches'],
  ['offline raid', 'practice mode'],
  ['PMC and', 'Player and'],
  ['PMC runs', 'online runs'],
  ['SCAV raids', 'casual matches'],
  ['BattlEye', 'anti-cheat'],
  ['battleye', 'apex-ac'],
  ['BSG', 'platform'],
  [' SCAV', ' casual'],
  ['PMC', 'player'],
];

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (/\.(ts|astro|mjs)$/.test(e.name)) out.push(full);
  }
  return out;
}

for (const file of walk(root)) {
  let c = fs.readFileSync(file, 'utf8');
  const before = c;
  for (const [a, b] of REPLACEMENTS) c = c.split(a).join(b);
  if (c !== before) fs.writeFileSync(file, c, 'utf8');
}

console.log('content cleanup done');
