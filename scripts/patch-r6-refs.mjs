import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const reps = [
  ["checkoutPath('r6')", "checkoutPath('csgo')"],
  ['checkoutPath("r6")', 'checkoutPath("csgo")'],
  [/\bR6 product catalog\b/g, 'Counter-Strike: Global Offensive product catalog'],
  [/\bR6 products hub\b/g, 'Counter-Strike: Global Offensive products hub'],
  [/\bR6 setup guides\b/g, 'Counter-Strike: Global Offensive setup guides'],
  [/\bR6 community forum\b/g, 'Counter-Strike: Global Offensive community forum'],
  [/\bR6 catalog\b/g, 'Counter-Strike: Global Offensive catalog'],
  [/\bR6 blog guides\b/g, 'Apex blog guides'],
  [/\bR6 shop\b/g, 'CS:GO cheats shop'],
  [/\bR6 practice guides\b/g, 'Counter-Strike: Global Offensive offline raid guides'],
  [/\bR6 tier\b/g, 'Apex tier'],
  [/\bR6 trainer\b/g, 'CS:GO cheat'],
  [/\bR6 modules\b/g, 'CS:GO cheat modules'],
  [/\bR6 features\b/g, 'CS:GO cheat features'],
  [/\bR6 product hub\b/g, 'Counter-Strike: Global Offensive product hub'],
  [/\bR6 multiplayer\b/g, 'Counter-Strike: Global Offensive multiplayer'],
  [/\br6 aimbot\b/g, 'CS:GO aimbot'],
  [/\br6 ESP\b/g, 'CS:GO ESP'],
  [/\br6 weapon ESP\b/g, 'CS:GO weapon ESP'],
  [/\br6 no recoil\b/g, 'CS:GO recoil control'],
  [/\br6 compatibility\b/g, 'CS:GO compatibility'],
  [/\br6 multiplayer\b/g, 'apex multiplayer'],
  ['Competitive Siege focus', 'Raid and extraction focus'],
  ['operator tools', 'Legend tools'],
  ['onProductsR6Hub', 'onProductsApexHub'],
  ["return segment || 'r6'", "return segment || 'apex'"],
  ['const r6SystemRequirements', 'const apexSystemRequirements'],
  ['systemRequirements: r6SystemRequirements', 'systemRequirements: apexSystemRequirements'],
  ['Buy R6 PC', 'Buy Counter-Strike: Global Offensive PC'],
  ['FAQ – R6 tiers', 'FAQ – Counter-Strike: Global Offensive tiers'],
  ['help on r6hacks', 'help on csgo-cheat.org'],
  ['ZADEYO_R6_', 'ZADEYO_APEX_'],
  ['zadeyoR6ProductSeo', 'zadeyoCsgoProductSeo'],
  ['r6HacksLanding', 'csgoCheatsLanding'],
  ['csgo-cheat.org R6 product catalog', 'csgo-cheat.org Counter-Strike: Global Offensive product catalog'],
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
