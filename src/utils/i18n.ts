import en from '../i18n/en.json';
import es from '../i18n/es.json';

export const translations = {
  en,
  es
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  return lang === 'en' ? 'en' : 'es';
}

export function useTranslations(lang: 'en' | 'es') {
  return translations[lang];
}