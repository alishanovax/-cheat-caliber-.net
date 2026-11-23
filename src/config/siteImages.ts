/** Approved Rainbow Six Siege media — only these remote URLs are used site-wide. */
export interface SiteCheatImage {
  src: string;
  alt: string;
}

const R6_MEDIA = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/05c202fe-8171-4881-bc3a-b25833919850/1793895886073-hgicom-1r61.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/05c202fe-8171-4881-bc3a-b25833919850/1793890761432-79v2k6-r6s5.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793467008010-7f5ql2-5.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793466989730-wh94c1-1.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793466995758-0n86gr-2.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/r6/f8fb1df6-697d-4d9b-b239-91326d061bf8/1793467030413-2xvj89-8.webp',
] as const;

export const SITE_CHEAT_IMAGES: SiteCheatImage[] = [
  {
    src: R6_MEDIA[0],
    alt: 'Rainbow Six Siege ranked match gameplay on PC',
  },
  {
    src: R6_MEDIA[1],
    alt: 'Rainbow Six Siege tactical firefight screenshot',
  },
  {
    src: R6_MEDIA[2],
    alt: 'R6 Siege operator engagement in destructible environment',
  },
  {
    src: R6_MEDIA[3],
    alt: 'Rainbow Six Siege bombsite round with full HUD on PC',
  },
  {
    src: R6_MEDIA[4],
    alt: 'Rainbow Six Siege competitive match screenshot on PC',
  },
  {
    src: R6_MEDIA[5],
    alt: 'R6 Siege in-match tactical view on PC',
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
