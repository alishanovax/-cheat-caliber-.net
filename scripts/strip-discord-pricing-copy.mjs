import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const files = [
  'src/data/blog/posts.ts',
  'src/data/caliberCheatsLanding.ts',
  'src/config/pageSeo.ts',
];

const replacements = [
  ['Discord #elite channel', 'the support page'],
  ['Discord #status', 'the status banner'],
  ['direct dev support on Discord', 'setup guidance in the portal'],
  ['Discord support', 'email support'],
  ['Open Discord', 'Email support'],
  ['open Discord', 'email support'],
  ['Discord with', 'Email support with'],
  ['Patch notes hit Discord before the blog.', 'Check the status banner and blog after patches.'],
  ['Discord support wants', 'Email support needs'],
  ['operator support, Discord #status,', 'operator support, status banner,'],
  ['$35 (31 days of access) and Lifetime for $150 (unlimited access)', 'plans shown at checkout'],
  ['Monthly for $35', 'plans at checkout'],
  ['Lifetime for $150', 'plans at checkout'],
];

for (const rel of files) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) continue;
  let text = fs.readFileSync(file, 'utf8');
  let next = text;
  for (const [from, to] of replacements) {
    next = next.split(from).join(to);
  }
  if (next !== text) {
    fs.writeFileSync(file, next);
    console.log('updated', rel);
  }
}
