/**
 * Post-rebrand cleanup: R6-specific terminology in src/
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.join(process.cwd(), 'src');

const REPLACEMENTS = [
  ['Tom Clancy's Rainbow Six Siege or BattlEye update', 'Tom Clancy's Rainbow Six Siege or BattlEye update'],
  ['Tom Clancy's Rainbow Six Siege or BattlEye updates', 'Tom Clancy's Rainbow Six Siege or BattlEye updates'],
  ['Tom Clancy's Rainbow Six Siege or BattlEye', 'Tom Clancy's Rainbow Six Siege or BattlEye'],
  ['after BattlEye patches', 'after BattlEye patches'],
  ['BattlEye patches', 'BattlEye patches'],
  ['BattlEye update', 'BattlEye update'],
  ['BattlEye updates', 'BattlEye updates'],
  ['BattlEye ban', 'BattlEye ban'],
  ['BattlEye bans', 'BattlEye bans'],
  ['BattlEye penalties', 'BattlEye penalties'],
  ['BattlEye issues', 'BattlEye issues'],
  ['BattlEye Unable to Verify Tom Clancy's Rainbow Six Siege', 'BattlEye connection issues on Tom Clancy's Rainbow Six Siege'],
  ['eac verification', 'BattlEye verification'],
  ['eac fix', 'BattlEye fix'],
  ['BattlEye patch day', 'BattlEye patch day'],
  ['BattlEye bypass', 'BattlEye compatibility'],
  ['eac-bypass-r6-guide', 'battleye-troubleshooting'],
  ['battleye-patch-day-checklist', 'battleye-patch-day'],
  ['Hajin DMZ', 'offline raid'],
  ['6v6', 'SCAV run'],
  ['Ground War', 'Unranked'],
  ['Gunfight', 'Quick Match'],
  ['DMZ loot', 'Item ESP'],
  ['Hajin DMZ loot', 'Item ESP'],
  ['kevlar and helmet', 'operator health'],
  ['armor', 'health'],
  ['Ubisoft Connect', 'Ubisoft Connect'],
  ['launch Modern Warfare 4 on Steam', 'launch Tom Clancy's Rainbow Six Siege through Ubisoft Connect'],
  ['Modern Warfare 4 on Steam', 'Tom Clancy's Rainbow Six Siege on PC'],
  ['Ubisoft accounts', 'Ubisoft accounts'],
  ['Ubisoft account', 'Ubisoft account'],
  ['Loadout Changer', 'PMC loadout tools'],
  ['Ricochet', 'BattlEye'],
  ['ZADEYO_MW4_PRODUCT_SEO', 'ZADEYO_R6_PRODUCT_SEO'],
  ['mw4SystemRequirements', 'r6SystemRequirements'],
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(ts|astro|mjs)$/.test(entry.name)) out.push(full);
  }
  return out;
}

let changed = 0;
for (const file of walk(root)) {
  let text = fs.readFileSync(file, 'utf8');
  let next = text;
  for (const [from, to] of REPLACEMENTS) {
    if (next.includes(from)) next = next.split(from).join(to);
  }
  if (next !== text) {
    fs.writeFileSync(file, next);
    changed++;
    console.log(path.relative(process.cwd(), file));
  }
}
console.log(`Updated ${changed} files.`);
