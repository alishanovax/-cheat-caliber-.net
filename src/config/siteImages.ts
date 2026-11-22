/** Approved CS:GO media — only these remote URLs are used site-wide. */
export interface SiteCheatImage {
  src: string;
  alt: string;
}

const CSGO_MEDIA = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/cs-go/9795e424-670f-4650-b1df-6d9e99bd6f01/1795371551484-iosq1x-cs5.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/cs-go/9795e424-670f-4650-b1df-6d9e99bd6f01/1795371504938-7fkatv-cs1.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/cs-go/7a5973f7-2cf8-4de3-90ea-2060bf036d16/1795370314892-mdsa2m-cs5.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/cs-go/7a5973f7-2cf8-4de3-90ea-2060bf036d16/1795370250052-9okmnm-cs3.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/cs-go/7a5973f7-2cf8-4de3-90ea-2060bf036d16/1795370230164-gk0v3x-cs2.webp',
] as const;

export const SITE_CHEAT_IMAGES: SiteCheatImage[] = [
  {
    src: CSGO_MEDIA[0],
    alt: 'Counter-Strike: Global Offensive competitive match on Dust II with HUD on PC',
  },
  {
    src: CSGO_MEDIA[1],
    alt: 'CS:GO midnight map gameplay screenshot with tactical overlays on PC',
  },
  {
    src: CSGO_MEDIA[2],
    alt: 'Counter-Strike: Global Offensive in-match firefight screenshot on PC',
  },
  {
    src: CSGO_MEDIA[3],
    alt: 'CS:GO bomb-site engagement with full game UI on PC',
  },
  {
    src: CSGO_MEDIA[4],
    alt: 'Counter-Strike: Global Offensive product-style gameplay view on PC',
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
