import { en } from './en';
import { es } from './es';

export const languages = { en, es } as const;
export type Language = keyof typeof languages;
export type I18nKey = string;

export const defaultLanguage: Language = 'en';

export function getTranslation(key: I18nKey, lang: Language = defaultLanguage) {
  const value = key
    .split('.')
    .reduce<unknown>((acc, part) => {
      if (acc && typeof acc === 'object' && part in acc) {
        return (acc as Record<string, unknown>)[part];
      }
      return undefined;
    }, languages[lang]);

  return typeof value === 'string' ? value : '';
}

export function languageScript() {
  return `
    window.__i18n = ${JSON.stringify(languages)};
    (function() {
      const defaultLanguage = '${defaultLanguage}';
      const html = document.documentElement;
      const getValue = (key, lang) => key.split('.').reduce((acc, part) => acc && acc[part], window.__i18n[lang]) || '';
      const getLanguage = () => localStorage.getItem('language') === 'es' ? 'es' : defaultLanguage;

      window.__applyLanguage = function(lang) {
        const nextLang = lang === 'es' ? 'es' : defaultLanguage;
        html.setAttribute('lang', nextLang);
        html.setAttribute('data-language', nextLang);

        document.querySelectorAll('[data-i18n]').forEach((el) => {
          const value = getValue(el.getAttribute('data-i18n'), nextLang);
          if (value) el.textContent = value;
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
          const value = getValue(el.getAttribute('data-i18n-placeholder'), nextLang);
          if (value) el.setAttribute('placeholder', value);
        });

        document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
          const value = getValue(el.getAttribute('data-i18n-aria-label'), nextLang);
          if (value) el.setAttribute('aria-label', value);
        });

        document.querySelectorAll('[data-i18n-title]').forEach((el) => {
          const value = getValue(el.getAttribute('data-i18n-title'), nextLang);
          if (value) el.setAttribute('title', value);
        });

        document.querySelectorAll('[data-text-en][data-text-es]').forEach((el) => {
          el.textContent = el.getAttribute(nextLang === 'es' ? 'data-text-es' : 'data-text-en') || '';
        });

        document.querySelectorAll('[data-lang-content]').forEach((el) => {
          const isActive = el.getAttribute('data-lang-content') === nextLang;
          el.hidden = !isActive;
        });

        document.querySelectorAll('time[data-date]').forEach((el) => {
          const date = new Date(el.getAttribute('data-date'));
          const locale = getValue('blog.locale', nextLang) || 'en-US';
          el.textContent = date.toLocaleDateString(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'UTC',
          });
        });

        document.querySelectorAll('[data-lang-toggle]').forEach((toggle) => {
          const thumb = toggle.querySelector('[data-lang-thumb]');
          const label = toggle.querySelector('[data-lang-label]');
          toggle.setAttribute('aria-pressed', String(nextLang === 'es'));
          if (thumb) thumb.style.transform = nextLang === 'es' ? 'translateX(28px)' : 'translateX(0)';
          if (label) label.textContent = nextLang === 'es' ? 'ES' : 'EN';
        });

        window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: nextLang } }));
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => window.__applyLanguage(getLanguage()));
      } else {
        window.__applyLanguage(getLanguage());
      }
    })();
  `;
}

declare global {
  interface Window {
    __i18n?: typeof languages;
    __applyLanguage?: (lang: Language) => void;
  }
}
