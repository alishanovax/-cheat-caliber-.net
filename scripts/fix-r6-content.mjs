/**
 * Post-rebrand cleanup: R6-specific terminology in src/
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.join(process.cwd(), 'src');

const REPLACEMENTS = [
  ['Caliber or anti-cheat update', 'Caliber or anti-cheat update'],
  ['Caliber or anti-cheat updates', 'Caliber or anti-cheat updates'],
  ['Caliber or anti-cheat', 'Caliber or anti-cheat'],
  ['after anti-cheat patches', 'after anti-cheat patches'],
  ['anti-cheat patches', 'anti-cheat patches'],
  ['anti-cheat update', 'anti-cheat update'],
  ['anti-cheat updates', 'anti-cheat updates'],
  ['anti-cheat ban', 'anti-cheat ban'],
  ['anti-cheat bans', 'anti-cheat bans'],
  ['anti-cheat penalties', 'anti-cheat penalties'],
  ['anti-cheat issues', 'anti-cheat issues'],
  ['anti-cheat Unable to Verify Caliber', 'anti-cheat connection issues on Caliber'],
  ['eac verification', 'anti-cheat verification'],
  ['eac fix', 'anti-cheat fix'],
  ['anti-cheat patch day', 'anti-cheat patch day'],
  ['anti-cheat bypass', 'anti-cheat compatibility'],
  ['eac-bypass-caliber-guide', 'anti-cheat-troubleshooting'],
  ['anti-cheat-patch-day-checklist', 'anti-cheat-patch-day'],
  ['Hajin DMZ', 'training mode'],
  ['6v6', 'SCAV run'],
  ['Ground War', 'Uncompetitive'],
  ['Gunfight', 'Quick Match'],
  ['DMZ loot', 'Item ESP'],
  ['Hajin DMZ loot', 'Item ESP'],
  ['kevlar and helmet', 'operator health'],
  ['armor', 'health'],
  ['Ubisoft Connect', 'Ubisoft Connect'],
  ['launch Modern Warfare 4 on Steam', 'launch Caliber through Ubisoft Connect'],
  ['Modern Warfare 4 on Steam', 'Caliber on PC'],
  ['game accounts', 'game accounts'],
  ['game account', 'game account'],
  ['Loadout Changer', 'operator loadout tools'],
  ['Ricochet', 'anti-cheat'],
  ['ZADEYO_MW4_PRODUCT_SEO', 'ZADEYO_CALIBER_PRODUCT_SEO'],
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
