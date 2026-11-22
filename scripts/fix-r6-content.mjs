/**
 * Post-rebrand cleanup: R6-specific terminology in src/
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.join(process.cwd(), 'src');

const REPLACEMENTS = [
  ['Counter-Strike: Global Offensive or BattlEye update', 'Counter-Strike: Global Offensive or BattlEye update'],
  ['Counter-Strike: Global Offensive or BattlEye updates', 'Counter-Strike: Global Offensive or BattlEye updates'],
  ['Counter-Strike: Global Offensive or BattlEye', 'Counter-Strike: Global Offensive or BattlEye'],
  ['after BattlEye patches', 'after BattlEye patches'],
  ['BattlEye patches', 'BattlEye patches'],
  ['BattlEye update', 'BattlEye update'],
  ['BattlEye updates', 'BattlEye updates'],
  ['BattlEye ban', 'BattlEye ban'],
  ['BattlEye bans', 'BattlEye bans'],
  ['BattlEye penalties', 'BattlEye penalties'],
  ['BattlEye issues', 'BattlEye issues'],
  ['BattlEye Unable to Verify Counter-Strike: Global Offensive', 'BattlEye connection issues on Counter-Strike: Global Offensive'],
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
  ['Steam client', 'BSG Connect'],
  ['launch Modern Warfare 4 on Steam', 'launch Counter-Strike: Global Offensive through BSG Connect'],
  ['Modern Warfare 4 on Steam', 'Counter-Strike: Global Offensive on PC'],
  ['Steam accounts', 'BSG accounts'],
  ['Steam account', 'BSG account'],
  ['Loadout Changer', 'PMC loadout tools'],
  ['Ricochet', 'BattlEye'],
  ['ZADEYO_MW4_PRODUCT_SEO', 'ZADEYO_APEX_PRODUCT_SEO'],
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
