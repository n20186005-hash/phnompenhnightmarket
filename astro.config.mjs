import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
function resolveBaseUrl() {
  const env = process.env.CURRENT_SITE_DOMAIN;
  const raw = (env ?? 'phnompenhnightmarket.com').replace(/^https?:\/\//, '').replace(/\/+$/, '');
  return raw.length > 0 ? `https://${raw}` : 'https://phnompenhnightmarket.com';
}

export default defineConfig({
  site: resolveBaseUrl(),
  output: 'static',
  i18n: {
    defaultLocale: 'km',
    locales: ['km', 'en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
