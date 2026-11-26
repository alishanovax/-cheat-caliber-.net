/** Approved Caliber media — only these remote URLs are used site-wide. */
export interface SiteCheatImage {
  src: string;
  alt: string;
}

const CALIBER_MEDIA = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/caliber/02ab714e-de37-423b-81f2-afd7f7fd8d28/1794298177763-bj2j0u-images.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/caliber/02ab714e-de37-423b-81f2-afd7f7fd8d28/1794298146252-b173nd-images.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/caliber/02ab714e-de37-423b-81f2-afd7f7fd8d28/1794298089921-aj61qe-caliber-blog-undetected-eac.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/caliber/02ab714e-de37-423b-81f2-afd7f7fd8d28/1794298075962-b6h2q1-caliber-blog-cheats-know-before.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/caliber/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793194043626-ybprbf-cals1.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/caliber/02ab714e-de37-423b-81f2-afd7f7fd8d28/1794298155792-k63tgc-screenshot-2022-04-08-213716-min.webp',
] as const;

export const SITE_CHEAT_IMAGES: SiteCheatImage[] = [
  {
    src: CALIBER_MEDIA[0],
    alt: 'Caliber tactical firefight with operators and weapons on PC',
  },
  {
    src: CALIBER_MEDIA[1],
    alt: 'Caliber in-match HUD and squad combat screenshot on PC',
  },
  {
    src: CALIBER_MEDIA[2],
    alt: 'Caliber gameplay with tactical operators and map detail on PC',
  },
  {
    src: CALIBER_MEDIA[3],
    alt: 'Caliber team fight with environmental cover and objective pressure on PC',
  },
  {
    src: CALIBER_MEDIA[4],
    alt: 'Caliber operator loadout and combat scene on PC',
  },
  {
    src: CALIBER_MEDIA[5],
    alt: 'Caliber third-person squad engagement screenshot on PC',
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
