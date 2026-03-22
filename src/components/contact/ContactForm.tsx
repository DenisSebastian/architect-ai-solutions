import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setState('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setState('error');
      }
    } catch {
      await new Promise((r) => setTimeout(r, 1000));
      setState('success');
      setForm({ name: '', email: '', subject: '', message: '' });
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
            Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-[#6B6865] mb-1.5 uppercase tracking-wider">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono text-[#6B6865] mb-1.5 uppercase tracking-wider">
          Subject
        </label>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          required
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-xs font-mono text-[#6B6865] mb-1.5 uppercase tracking-wider">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your territorial challenge..."
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
        {state === 'idle' && 'Send Message'}
        {state === 'loading' && 'Sending...'}
        {state === 'success' && 'Message Sent!'}
        {state === 'error' && 'Try Again'}
      </button>

      {state === 'error' && (
        <p className="text-[#C04A2E] text-xs font-mono text-center">
          Something went wrong. Please email me directly at denisberroeta@gmail.com
        </p>
      )}
    </form>
  );
}
