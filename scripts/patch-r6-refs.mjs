import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const reps = [
  ["checkoutPath('tarkov')", "checkoutPath('tarkov')"],
  ['checkoutPath("tarkov")', 'checkoutPath("tarkov")'],
  [/\bR6 product catalog\b/g, 'Escape from Tarkov product catalog'],
  [/\bR6 products hub\b/g, 'Escape from Tarkov products hub'],
  [/\bR6 setup guides\b/g, 'Escape from Tarkov setup guides'],
  [/\bR6 community forum\b/g, 'Escape from Tarkov community forum'],
  [/\bR6 catalog\b/g, 'Escape from Tarkov catalog'],
  [/\bR6 blog guides\b/g, 'Apex blog guides'],
  [/\bR6 shop\b/g, 'Escape from Tarkov cheats shop'],
  [/\bR6 practice guides\b/g, 'Escape from Tarkov offline raid guides'],
  [/\bR6 tier\b/g, 'Apex tier'],
  [/\bR6 trainer\b/g, 'Escape from Tarkov cheat'],
  [/\bR6 modules\b/g, 'Escape from Tarkov cheat modules'],
  [/\bR6 features\b/g, 'Escape from Tarkov cheat features'],
  [/\bR6 product hub\b/g, 'Escape from Tarkov product hub'],
  [/\bR6 multiplayer\b/g, 'Escape from Tarkov multiplayer'],
  [/\br6 aimbot\b/g, 'Escape from Tarkov aimbot'],
  [/\br6 ESP\b/g, 'Escape from Tarkov ESP'],
  [/\br6 ability ESP\b/g, 'Escape from Tarkov ability ESP'],
  [/\br6 no recoil\b/g, 'Escape from Tarkov recoil control'],
  [/\br6 compatibility\b/g, 'Escape from Tarkov compatibility'],
  [/\br6 multiplayer\b/g, 'apex multiplayer'],
  ['Competitive Siege focus', 'Raid and extraction focus'],
  ['operator tools', 'Legend tools'],
  ['onProductsR6Hub', 'onProductsR6Hub'],
  ["return segment || 'r6'", "return segment || 'apex'"],
  ['const r6SystemRequirements', 'const apexSystemRequirements'],
  ['systemRequirements: r6SystemRequirements', 'systemRequirements: apexSystemRequirements'],
  ['Buy R6 PC', 'Buy Escape from Tarkov PC'],
  ['FAQ – R6 tiers', 'FAQ – Escape from Tarkov tiers'],
  ['help on r6hacks', 'help on cheatseft.org'],
  ['ZADEYO_R6_', 'ZADEYO_APEX_'],
  ['zadeyoTarkovProductSeo', 'zadeyoTarkovProductSeo'],
  ['r6HacksLanding', 'tarkovCheatsLanding'],
  ['cheatseft.org R6 product catalog', 'cheatseft.org Escape from Tarkov product catalog'],
  ['go-tarkov-', 'go-apex-'],
  ['id={`go-tarkov-', 'id={`go-apex-'],
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
  if (file.includes('patch-tarkov-refs.mjs') || file.includes('migrate-apex')) continue;
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
