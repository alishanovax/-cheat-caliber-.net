/** Approved Escape from Tarkov media — only these remote URLs are used site-wide. */
export interface SiteCheatImage {
  src: string;
  alt: string;
}

const TARKOV_MEDIA = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/a9f4c0ff-33ca-4a16-975b-30648c04cb8c/1794650282570-d0xc5g-first-person-warehouse-esp-encounter.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/a9f4c0ff-33ca-4a16-975b-30648c04cb8c/1794650292268-rx58dc-images.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793194009013-kv4lg6-ancient-eft-s1.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793194011207-1r44jj-ancient-eft-s2.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/1242b160-0414-44df-95cc-e45319c48f50/1793307615366-ow9g1a-screenshot-3.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/tarkov/1242b160-0414-44df-95cc-e45319c48f50/1793307655446-h9o00o-screenshot-7.webp',
] as const;

export const SITE_CHEAT_IMAGES: SiteCheatImage[] = [
  {
    src: TARKOV_MEDIA[0],
    alt: 'Escape from Tarkov first-person warehouse raid with ESP encounter on PC',
  },
  {
    src: TARKOV_MEDIA[1],
    alt: 'Escape from Tarkov in-raid HUD and tactical overlay on PC',
  },
  {
    src: TARKOV_MEDIA[2],
    alt: 'Escape from Tarkov raid scene with PMC gear and environment detail on PC',
  },
  {
    src: TARKOV_MEDIA[3],
    alt: 'Escape from Tarkov tactical movement through a raid location on PC',
  },
  {
    src: TARKOV_MEDIA[4],
    alt: 'Escape from Tarkov product-style in-match screenshot on PC',
  },
  {
    src: TARKOV_MEDIA[5],
    alt: 'Escape from Tarkov combat screenshot with loot and extraction context on PC',
  },
];

/** Product detail screenshot carousel (three slides). */
export const PRODUCT_GALLERY_IMAGES: SiteCheatImage[] = [
  SITE_CHEAT_IMAGES[0]!,
  SITE_CHEAT_IMAGES[1]!,
  SITE_CHEAT_IMAGES[2]!,
];

export const PRIMARY_CHEAT_IMAGE = SITE_CHEAT_IMAGES[0]!.src;

export function cheatImageForSlug(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash + slug.charCodeAt(i) * (i + 1)) % SITE_CHEAT_IMAGES.length;
  }
  return SITE_CHEAT_IMAGES[hash]!.src;
}

export function cheatImageAltForSrc(src: string): string {
  return SITE_CHEAT_IMAGES.find((img) => img.src === src)?.alt ?? SITE_CHEAT_IMAGES[0]!.alt;
}
