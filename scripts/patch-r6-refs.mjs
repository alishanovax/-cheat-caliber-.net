import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const reps = [
  ["checkoutPath('r6')", "checkoutPath('r6')"],
  ['checkoutPath("r6")', 'checkoutPath("r6")'],
  [/\bR6 product catalog\b/g, 'Tom Clancy's Rainbow Six Siege product catalog'],
  [/\bR6 products hub\b/g, 'Tom Clancy's Rainbow Six Siege products hub'],
  [/\bR6 setup guides\b/g, 'Tom Clancy's Rainbow Six Siege setup guides'],
  [/\bR6 community forum\b/g, 'Tom Clancy's Rainbow Six Siege community forum'],
  [/\bR6 catalog\b/g, 'Tom Clancy's Rainbow Six Siege catalog'],
  [/\bR6 blog guides\b/g, 'Apex blog guides'],
  [/\bR6 shop\b/g, 'Rainbow Six Siege cheats shop'],
  [/\bR6 practice guides\b/g, 'Tom Clancy's Rainbow Six Siege offline raid guides'],
  [/\bR6 tier\b/g, 'Apex tier'],
  [/\bR6 trainer\b/g, 'Rainbow Six Siege cheat'],
  [/\bR6 modules\b/g, 'Rainbow Six Siege cheat modules'],
  [/\bR6 features\b/g, 'Rainbow Six Siege cheat features'],
  [/\bR6 product hub\b/g, 'Tom Clancy's Rainbow Six Siege product hub'],
  [/\bR6 multiplayer\b/g, 'Tom Clancy's Rainbow Six Siege multiplayer'],
  [/\br6 aimbot\b/g, 'R6 aimbot'],
  [/\br6 ESP\b/g, 'R6 ESP'],
  [/\br6 gadget ESP\b/g, 'R6 gadget ESP'],
  [/\br6 no recoil\b/g, 'R6 recoil control'],
  [/\br6 compatibility\b/g, 'R6 compatibility'],
  [/\br6 multiplayer\b/g, 'apex multiplayer'],
  ['Ranked Siege focus', 'Raid and extraction focus'],
  ['operator tools', 'Legend tools'],
  ['onProductsR6Hub', 'onProductsR6Hub'],
  ["return segment || 'r6'", "return segment || 'apex'"],
  ['const r6SystemRequirements', 'const apexSystemRequirements'],
  ['systemRequirements: r6SystemRequirements', 'systemRequirements: apexSystemRequirements'],
  ['Buy R6 PC', 'Buy Tom Clancy's Rainbow Six Siege PC'],
  ['FAQ – R6 tiers', 'FAQ – Tom Clancy's Rainbow Six Siege tiers'],
  ['help on r6hacks', 'help on r6-cheat.com'],
  ['ZADEYO_R6_', 'ZADEYO_APEX_'],
  ['zadeyoR6ProductSeo', 'zadeyoR6ProductSeo'],
  ['r6HacksLanding', 'r6CheatsLanding'],
  ['r6-cheat.com R6 product catalog', 'r6-cheat.com Tom Clancy's Rainbow Six Siege product catalog'],
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
