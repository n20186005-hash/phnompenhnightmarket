import km from './km.json';
import en from './en.json';
import zh from './zh.json';
import { siteConfig } from '../config/site';

export const defaultLang = 'km';
export const languagesList = ['km', 'en', 'zh'] as const;

export const languages: Record<string, string> = {
  km: 'ខ្មែរ',
  en: 'English',
  zh: '中文',
};

// Order shown in the language switcher (default first).
export const langOrder: string[] = ['km', 'en', 'zh'];

const ui: Record<string, any> = { km, en, zh };

export function getLangFromUrl(url: URL): string {
  const seg = url.pathname.split('/').filter(Boolean);
  const lang = seg[0];
  return (languagesList as readonly string[]).includes(lang) ? lang : defaultLang;
}

export function getI18n(url: URL) {
  const lang = getLangFromUrl(url);
  const messages = ui[lang];
  const t = (key: string): string => {
    const found = key
      .split('.')
      .reduce<any>((o, i) => (o == null ? undefined : o[i]), messages);
    return found ?? '';
  };
  return { lang, messages, t };
}

export function buildAlternates(path = ''): Record<string, string> {
  const base = siteConfig.baseUrl;
  const segments = path.replace(/^\/+/, '').replace(/\/+$/, '').split('/').filter(Boolean);
  // The incoming path may already start with a locale segment (e.g. /en/...),
  // so strip it before rebuilding each locale's URL. Otherwise prefixes double up.
  if (segments.length > 0 && (languagesList as readonly string[]).includes(segments[0])) {
    segments.shift();
  }
  const rest = segments.join('/');
  const mk = (l: string) => {
    const prefix = l === defaultLang ? '' : `/${l}`;
    const tail = rest ? `/${rest}` : '';
    const suffix = `${prefix}${tail}`;
    return `${base}${suffix.length > 0 ? suffix : '/'}`;
  };
  return {
    km: mk('km'),
    en: mk('en'),
    zh: mk('zh'),
    xDefault: mk('km'),
  };
}

export function htmlLangAttr(lang: string): string {
  if (lang === 'zh') return 'zh-CN';
  if (lang === 'km') return 'km';
  return lang;
}
