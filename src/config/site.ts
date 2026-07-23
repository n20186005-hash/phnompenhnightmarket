// Resolve the canonical base URL from an environment variable at build time,
// falling back to the production domain. Keeps canonical/hreflang/OG metadata
// consistent across the site and avoids hardcoding a (possibly wrong) domain.
function resolveBaseUrl(): string {
  const fromEnv =
    (typeof process !== 'undefined' && process.env && process.env.CURRENT_SITE_DOMAIN) ||
    (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env.CURRENT_SITE_DOMAIN);
  const raw = (typeof fromEnv === 'string' && fromEnv.length > 0 ? fromEnv : 'phnompenhnightmarket.com')
    .replace(/^https?:\/\//, '')
    .replace(/\/+$/, '');
  return raw.length > 0 ? `https://${raw}` : 'https://phnompenhnightmarket.com';
}

export const siteConfig = {
  name: 'Phnom Penh Night Market',
  baseUrl: resolveBaseUrl(),
  slug: 'phnom-penh-night-market',
  locales: ['km', 'en', 'zh'] as const,
};

export const ogLocale: Record<string, string> = {
  km: 'km_KH',
  en: 'en_US',
  zh: 'zh_CN',
};

// Public, factual attraction data used by JSON-LD and shared components.
export const attraction = {
  mapsUrl: 'https://maps.app.goo.gl/NvGWZpudXheDzjjp9',
  embedUrl: 'https://www.google.com/maps?q=11.574045,104.924613&output=embed',
  lat: 11.574045,
  lng: 104.924613,
  plusCode: 'HWFG+JV8',
  rating: '4.0',
  reviewCount: '11816',
  hoursOpen: '17:00',
  hoursClose: '23:00',
  address: 'Preah Sisowath Quay, Phnom Penh, Cambodia',
  country: 'KH',
};
