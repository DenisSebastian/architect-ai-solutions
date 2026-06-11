import { useEffect, useState } from 'react';
import { en } from '../../i18n/en';
import { es } from '../../i18n/es';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvznbqzb';
const translations = { en, es };
type Language = keyof typeof translations;

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [language, setLanguage] = useState<Language>('en');
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const t = translations[language].contact.form;

  useEffect(() => {
    const currentLanguage = () =>
      document.documentElement.getAttribute('data-language') === 'es' ? 'es' : 'en';
    setLanguage(currentLanguage());
    const onLanguageChange = (event: Event) => {
      const detail = (event as CustomEvent<{ language: Language }>).detail;
      setLanguage(detail?.language === 'es' ? 'es' : 'en');
    };
    window.addEventListener('languagechange', onLanguageChange);
    return () => window.removeEventListener('languagechange', onLanguageChange);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: form.subject,
        }),
      });

      if (res.ok) {
        setState('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }

    setTimeout(() => setState('idle'), 5000);
  };

  const inputClass =
    'w-full bg-[#F5F4EF] border border-black/10 rounded-lg px-4 py-2.5 text-[#1A1917] text-sm placeholder-[#6B6865]/50 focus:outline-none focus:border-[#2B5C3F] focus:ring-1 focus:ring-[#2B5C3F22] transition-all duration-200 font-mono';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono text-[#6B6865] mb-1.5 uppercase tracking-wider">
            {t.name}
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t.namePlaceholder}
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-[#6B6865] mb-1.5 uppercase tracking-wider">
            {t.email}
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t.emailPlaceholder}
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-[#6B6865] mb-1.5 uppercase tracking-wider">
          {t.subject}
        </label>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder={t.subjectPlaceholder}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-[#6B6865] mb-1.5 uppercase tracking-wider">
          {t.message}
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={t.messagePlaceholder}
          required
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={state === 'loading' || state === 'success'}
        className="relative overflow-hidden group px-6 py-3 rounded-lg bg-[#2B5C3F] text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#1A3D28] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(43,92,63,0.3)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {state === 'loading' && (
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        )}
        {state === 'success' && (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        )}
        {state === 'idle' && (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        )}
        {state === 'idle' && t.send}
        {state === 'loading' && t.sending}
        {state === 'success' && t.sent}
        {state === 'error' && t.tryAgain}
      </button>

      {state === 'error' && (
        <p className="text-[#C04A2E] text-xs font-mono text-center">
          {t.error}
        </p>
      )}
    </form>
  );
}
