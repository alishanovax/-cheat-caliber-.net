/** Approved Marvel Rivals media — only these remote URLs are used site-wide. */
export interface SiteCheatImage {
  src: string;
  alt: string;
}

const MARVEL_RIVALS_MEDIA = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/marvel-rivals/f2609d45-0e57-4a51-9200-e519edcad54a/1795387373259-mos4di-screenshot-2026-11-23-031527.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/marvel-rivals/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793193984809-2hjndd-phoenix-marvel-s2.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/marvel-rivals/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793193982458-7tofpj-phoenix-marvel-s1.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/marvel-rivals/f2609d45-0e57-4a51-9200-e519edcad54a/1795386797756-23z56w-screenshot-2026-11-23-032550.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/marvel-rivals/f2609d45-0e57-4a51-9200-e519edcad54a/1795386882037-7mxuyq-screenshot-2026-11-23-032159.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/marvel-rivals/f2609d45-0e57-4a51-9200-e519edcad54a/1795386849550-jmrfd8-screenshot-2026-11-23-032325.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/marvel-rivals/f2609d45-0e57-4a51-9200-e519edcad54a/1795387033028-kpx1mv-screenshot-2026-11-23-031926.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/marvel-rivals/f2609d45-0e57-4a51-9200-e519edcad54a/1795387042722-tz30v0-screenshot-2026-11-23-031858.webp',
] as const;

export const SITE_CHEAT_IMAGES: SiteCheatImage[] = [
  {
    src: MARVEL_RIVALS_MEDIA[0],
    alt: 'Marvel Rivals team fight screenshot on PC',
  },
  {
    src: MARVEL_RIVALS_MEDIA[1],
    alt: 'Marvel Rivals Phoenix hero in Season 2 gameplay',
  },
  {
    src: MARVEL_RIVALS_MEDIA[2],
    alt: 'Marvel Rivals Phoenix hero ability combat scene',
  },
  {
    src: MARVEL_RIVALS_MEDIA[3],
    alt: 'Marvel Rivals objective map gameplay screenshot',
  },
  {
    src: MARVEL_RIVALS_MEDIA[4],
    alt: 'Marvel Rivals hero clash in a competitive match',
  },
  {
    src: MARVEL_RIVALS_MEDIA[5],
    alt: 'Marvel Rivals in-match HUD and squad view',
  },
  {
    src: MARVEL_RIVALS_MEDIA[6],
    alt: 'Marvel Rivals 6v6 team composition screenshot',
  },
  {
    src: MARVEL_RIVALS_MEDIA[7],
    alt: 'Marvel Rivals map rotation gameplay on PC',
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