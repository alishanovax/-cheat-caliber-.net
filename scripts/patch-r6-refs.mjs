import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const reps = [
  ["checkoutPath('caliber')", "checkoutPath('caliber')"],
  ['checkoutPath("caliber")', 'checkoutPath("caliber")'],
  [/\bR6 product catalog\b/g, 'Caliber product catalog'],
  [/\bR6 products hub\b/g, 'Caliber products hub'],
  [/\bR6 setup guides\b/g, 'Caliber setup guides'],
  [/\bR6 community forum\b/g, 'Caliber community forum'],
  [/\bR6 catalog\b/g, 'Caliber catalog'],
  [/\bR6 blog guides\b/g, 'Apex blog guides'],
  [/\bR6 shop\b/g, 'Caliber cheats shop'],
  [/\bR6 practice guides\b/g, 'Caliber training mode guides'],
  [/\bR6 tier\b/g, 'Apex tier'],
  [/\bR6 trainer\b/g, 'Caliber cheat'],
  [/\bR6 modules\b/g, 'Caliber cheat modules'],
  [/\bR6 features\b/g, 'Caliber cheat features'],
  [/\bR6 product hub\b/g, 'Caliber product hub'],
  [/\bR6 multiplayer\b/g, 'Caliber multiplayer'],
  [/\br6 aimbot\b/g, 'Caliber aimbot'],
  [/\br6 ESP\b/g, 'Caliber ESP'],
  [/\br6 ability ESP\b/g, 'Caliber ability ESP'],
  [/\br6 no recoil\b/g, 'Caliber recoil control'],
  [/\br6 compatibility\b/g, 'Caliber compatibility'],
  [/\br6 multiplayer\b/g, 'apex multiplayer'],
  ['Competitive Siege focus', 'Raid and extraction focus'],
  ['operator tools', 'Legend tools'],
  ['onProductsR6Hub', 'onProductsR6Hub'],
  ["return segment || 'r6'", "return segment || 'apex'"],
  ['const r6SystemRequirements', 'const apexSystemRequirements'],
  ['systemRequirements: r6SystemRequirements', 'systemRequirements: apexSystemRequirements'],
  ['Buy R6 PC', 'Buy Caliber PC'],
  ['FAQ – R6 tiers', 'FAQ – Caliber tiers'],
  ['help on r6hacks', 'help on cheatcaliber.net'],
  ['ZADEYO_R6_', 'ZADEYO_APEX_'],
  ['zadeyoCaliberProductSeo', 'zadeyoCaliberProductSeo'],
  ['r6HacksLanding', 'caliberCheatsLanding'],
  ['cheatcaliber.net R6 product catalog', 'cheatcaliber.net Caliber product catalog'],
  ['go-caliber-', 'go-apex-'],
  ['id={`go-caliber-', 'id={`go-apex-'],
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
  if (file.includes('patch-caliber-refs.mjs') || file.includes('migrate-apex')) continue;
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
