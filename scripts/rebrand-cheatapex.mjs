/**
 * apexlegendcheats.net template → bo7cheats.org
 * Run: node scripts/rebrand-cheatapex.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');

const TEXT_EXTS = new Set([
  '.ts',
  '.tsx',
  '.astro',
  '.mjs',
  '.js',
  '.json',
  '.md',
  '.txt',
  '.svg',
  '.html',
  '.webmanifest',
  '.css',
  '.toml',
]);

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.astro']);

const REPLACEMENTS = [
  ['https://apexlegendcheats.net', 'https://bo7cheats.org'],
  ['apexlegendcheats.net', 'bo7cheats.org'],
  ['apexlegendcheats-net', 'bo7cheats-org'],
  ["FAVICON_VERSION = 'bo7-2026'", "FAVICON_VERSION = 'bo7cheats-b-2026'"],
  ["name = \"apexlegendcheats-net\"", 'name = "bo7cheats-org"'],
  ['"name": "apexlegendcheats-net"', '"name": "bo7cheats-org"'],
  ['Return to bo7-cheats.net homepage', 'Return to bo7cheats.org homepage'],
  ['Return to apexlegendcheats.net homepage', 'Return to bo7cheats.org homepage'],
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function applyText(content) {
  let next = content;
  for (const [from, to] of REPLACEMENTS) {
    if (next.includes(from)) next = next.split(from).join(to);
  }
  return next;
}

const APEX_IMAGE_URLS = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003238685-a4vmq5-apex1.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003231696-t0c5xq-apex2.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003225576-4eg561-apex3.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003210157-cwvxth-apex5.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/05c202fe-8171-4881-bc3a-b25833919850/1794003184194-lufz35-apex10.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/apex/7a5973f7-2cf8-4de3-90ea-2060bf036d16/1793916474479-fq0411-ap4.webp',
];

const IMAGE_ALTS = [
  'Black Ops 7 PC PMC raid combat with squad positions on the map',
  'Black Ops 7 competitive firefight screenshot with full HUD on PC',
  'Black Ops 7 third-person combat during a team engagement on PC',
  'Black Ops 7 gameplay scene with raid maps and extraction pressure on PC',
  'Black Ops 7 product-style in-match view on PC',
  'Black Ops 7 squad fight with tactical overlay on PC',
];

function patchSiteImages() {
  const file = path.join(root, 'src', 'config', 'siteImages.ts');
  const lines = [
    '/** Approved Black Ops 7 media — only these remote URLs are used site-wide. */',
    'export interface SiteCheatImage {',
    '  src: string;',
    '  alt: string;',
    '}',
    '',
    'const R6_MEDIA = [',
    ...APEX_IMAGE_URLS.map((u) => `  '${u}',`),
    '] as const;',
    '',
    'export const SITE_CHBSGT_IMAGES: SiteCheatImage[] = [',
    ...APEX_IMAGE_URLS.map(
      (src, i) => `  {\n    src: R6_MEDIA[${i}],\n    alt: '${IMAGE_ALTS[i]}',\n  },`,
    ),
    '];',
    '',
    '/** Product detail screenshot carousel (three slides). */',
    'export const PRODUCT_GALLERY_IMAGES: SiteCheatImage[] = [',
    '  SITE_CHBSGT_IMAGES[0]!,',
    '  SITE_CHBSGT_IMAGES[1]!,',
    '  SITE_CHBSGT_IMAGES[2]!,',
    '];',
    '',
    'export const PRIMARY_CHBSGT_IMAGE = SITE_CHBSGT_IMAGES[0]!.src;',
    '',
    'export function cheatImageForSlug(slug: string): string {',
    '  let hash = 0;',
    '  for (let i = 0; i < slug.length; i++) {',
    '    hash = (hash + slug.charCodeAt(i) * (i + 1)) % SITE_CHBSGT_IMAGES.length;',
    '  }',
    '  return SITE_CHBSGT_IMAGES[hash]!.src;',
    '}',
    '',
    'export function cheatImageAltForSrc(src: string): string {',
    '  return SITE_CHBSGT_IMAGES.find((img) => img.src === src)?.alt ?? SITE_CHBSGT_IMAGES[0]!.alt;',
    '}',
    '',
  ];
  fs.writeFileSync(file, lines.join('\n'));
  console.log('patched siteImages.ts');
}

patchSiteImages();

const selfName = 'rebrand-cheatapex.mjs';
const files = walk(root).filter((f) => TEXT_EXTS.has(path.extname(f).toLowerCase()));
let changed = 0;
for (const file of files) {
  if (path.basename(file) === selfName) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = applyText(before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed++;
    console.log('updated', path.relative(root, file));
  }
}

console.log(`Done. Updated ${changed} text files.`);
console.log('Tip: run node scripts/vocab-hack-to-cheats.mjs for cheats-only wording.');
