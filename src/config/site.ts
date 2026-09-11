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
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.690300511891!2d104.92719369999999!3d11.5740451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109514f87f40af5%3A0x3bb83921dbed49e4!2z6YeR6L655aSc5biC!5e0!3m2!1szh-CN!2sus!4v1784814523452!5m2!1szh-CN!2sus',
  // Coordinates match the Google Maps place entry (and the map embed below) so
  // the site, the embedded map and the JSON-LD entity all point to one place.
  lat: 11.5740451,
  lng: 104.9271937,
  plusCode: 'HWFG+JV8',
  addressRegion: 'Phnom Penh',
  postalCode: '12200',
  timezone: 'Asia/Phnom_Penh',
  rating: '4.0',
  reviewCount: '11816',
  // The market only opens on weekends: Friday, Saturday and Sunday.
  openingDays: ['Friday', 'Saturday', 'Sunday'],
  hoursOpen: '17:00',
  hoursClose: '23:00',
  currenciesAccepted: 'USD, KHR',
  paymentAccepted: 'Cash, Credit Card, ABA Pay, QR Code',
  address: 'Preah Sisowath Quay, Phnom Penh, Cambodia',
  country: 'KH',
};
