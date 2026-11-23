import fs from 'node:fs';
import path from 'node:path';

const root = path.join(process.cwd(), 'src');
const REPLACEMENTS = [
  ['Marvel Rivals and anti-cheat receive', 'Marvel Rivals and anti-cheat receive'],
  ['Easy Anti-Hack or Marvel Rivals', 'anti-cheat or Marvel Rivals'],
  ['Easy Anti-Hack', 'anti-cheat'],
  ['Easy Anti-Hack', 'anti-cheat'],
  ['anti-cheat patch-day', 'anti-cheat patch-day'],
  ['After anti-cheat Ban', 'After anti-cheat ban'],
  ['anti-cheat and report', 'anti-cheat and report'],
  ['anti-cheat does not', 'anti-cheat does not'],
  ['anti-cheat risk', 'anti-cheat risk'],
  ['account-only anti-cheat', 'account-only anti-cheat'],
  ['anti-cheat cases', 'anti-cheat cases'],
  ['anti-cheat bans', 'anti-cheat bans'],
  ['anti-cheat ban', 'anti-cheat ban'],
  ['anti-cheat Unable to verify', 'anti-cheat connection issues on'],
  ['anti-cheat cannot verify', 'anti-cheat cannot verify'],
  ['if anti-cheat cannot', 'if anti-cheat cannot'],
  ['from the loader or Steam', 'from the loader or Ubisoft Connect'],
  ['launch Marvel Rivals on Steam', 'launch Marvel Rivals through Ubisoft Connect'],
  ['Marvel Rivals on Steam', 'Marvel Rivals on PC'],
  ['for Steam players', 'for PC players'],
  ['on Steam PC', 'on PC'],
  ['Steam PC', 'PC'],
  ['Steam platform', 'PC platform'],
  ['Gearbox, 2K and Steam', 'BSG'],
  ['Steam locker', 'in-game inventory'],
  ['Steam inventory', 'in-game inventory'],
  ['Steam review', 'BSG review'],
  ['Steam restrictions', 'Ubisoft account restrictions'],
  ['Steam ban appeals', 'BSG ban appeals'],
  ['Steam game file verification', 'Ubisoft Connect file verification'],
  ['through Steam', 'through Ubisoft Connect'],
  ['normal Steam launch', 'normal Ubisoft Connect launch'],
  ['into the Steam folder', 'into the game folder'],
  ['Loot-shooter action on Steam', 'Tactical shooter action on PC'],
  ['Mw4 Hacks', 'Rivals Cheat'],
];

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const f = path.join(dir, e.name);
    if (e.isDirectory()) walk(f, out);
    else if (/\.(ts|astro)$/.test(e.name)) out.push(f);
  }
  return out;
}

let n = 0;
for (const file of walk(root)) {
  const before = fs.readFileSync(file, 'utf8');
  let after = before;
  for (const [a, b] of REPLACEMENTS) after = after.split(a).join(b);
  if (after !== before) {
    fs.writeFileSync(file, after);
    n++;
  }
}
console.log(`Platform cleanup: ${n} files.`);
