import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const reps = [
  ["checkoutPath('r6')", "checkoutPath('r6')"],
  ['checkoutPath("r6")', 'checkoutPath("r6")'],
  [/\bR6 product catalog\b/g, 'Marvel Rivals product catalog'],
  [/\bR6 products hub\b/g, 'Marvel Rivals products hub'],
  [/\bR6 setup guides\b/g, 'Marvel Rivals setup guides'],
  [/\bR6 community forum\b/g, 'Marvel Rivals community forum'],
  [/\bR6 catalog\b/g, 'Marvel Rivals catalog'],
  [/\bR6 blog guides\b/g, 'Apex blog guides'],
  [/\bR6 shop\b/g, 'Marvel Rivals cheats shop'],
  [/\bR6 practice guides\b/g, 'Marvel Rivals offline raid guides'],
  [/\bR6 tier\b/g, 'Apex tier'],
  [/\bR6 trainer\b/g, 'Marvel Rivals cheat'],
  [/\bR6 modules\b/g, 'Marvel Rivals cheat modules'],
  [/\bR6 features\b/g, 'Marvel Rivals cheat features'],
  [/\bR6 product hub\b/g, 'Marvel Rivals product hub'],
  [/\bR6 multiplayer\b/g, 'Marvel Rivals multiplayer'],
  [/\br6 aimbot\b/g, 'Marvel Rivals aimbot'],
  [/\br6 ESP\b/g, 'Marvel Rivals ESP'],
  [/\br6 ability ESP\b/g, 'Marvel Rivals ability ESP'],
  [/\br6 no recoil\b/g, 'Marvel Rivals recoil control'],
  [/\br6 compatibility\b/g, 'Marvel Rivals compatibility'],
  [/\br6 multiplayer\b/g, 'apex multiplayer'],
  ['Competitive Siege focus', 'Raid and extraction focus'],
  ['operator tools', 'Legend tools'],
  ['onProductsR6Hub', 'onProductsR6Hub'],
  ["return segment || 'r6'", "return segment || 'apex'"],
  ['const r6SystemRequirements', 'const apexSystemRequirements'],
  ['systemRequirements: r6SystemRequirements', 'systemRequirements: apexSystemRequirements'],
  ['Buy R6 PC', 'Buy Marvel Rivals PC'],
  ['FAQ – R6 tiers', 'FAQ – Marvel Rivals tiers'],
  ['help on r6hacks', 'help on rivalscheat.net'],
  ['ZADEYO_R6_', 'ZADEYO_APEX_'],
  ['zadeyoR6ProductSeo', 'zadeyoR6ProductSeo'],
  ['r6HacksLanding', 'r6CheatsLanding'],
  ['rivalscheat.net R6 product catalog', 'rivalscheat.net Marvel Rivals product catalog'],
  ['go-r6-', 'go-apex-'],
  ['id={`go-r6-', 'id={`go-apex-'],
];

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name === 'node_modules' || name === 'dist' || name === '.git') continue;
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, files);
    else if (/\.(ts|astro|mjs|txt|toml)$/.test(name)) files.push(full);
  }
  return files;
}

let changed = 0;
for (const file of walk(ROOT)) {
  if (file.includes('patch-r6-refs.mjs') || file.includes('migrate-apex')) continue;
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  for (const [from, to] of reps) {
    text = typeof from === 'string' ? text.split(from).join(to) : text.replace(from, to);
  }
  if (text !== before) {
    fs.writeFileSync(file, text);
    changed++;
  }
}
console.log(`Patched ${changed} files.`);
