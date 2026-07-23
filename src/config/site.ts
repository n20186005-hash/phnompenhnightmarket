export const siteConfig = {
  name: 'Phnom Penh Night Market',
  baseUrl: 'https://phnom-penh-night-market.com',
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
