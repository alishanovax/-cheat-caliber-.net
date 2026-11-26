/** Primary Zadeyo affiliate checkout (go link + product path). */
export const CALIBER_CHECKOUT_URL =
  'https://zadeyo.com/go/ALISHA?to=%2Fproducts%2Fcaliber-novaxware&sf=zadeyo';

export const CHECKOUT_URLS = {
  caliber: CALIBER_CHECKOUT_URL,
  skinChanger: CALIBER_CHECKOUT_URL,
  hwidSpoofer: CALIBER_CHECKOUT_URL,
  ugc: CALIBER_CHECKOUT_URL,
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/caliber', CHECKOUT_URLS.caliber],
  ['/go/caliber/', CHECKOUT_URLS.caliber],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
