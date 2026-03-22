import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 7, suffix: '+', label: 'Years\nExperience' },
  { value: 15, suffix: '+', label: 'Projects\nDelivered' },
  { value: 3, suffix: '', label: 'Advanced\nDegrees' },
  { value: 8, suffix: '+', label: 'Courses\nTaught' },
  { value: 50, suffix: 'K+', label: 'km² Analyzed' },
  { value: 95, suffix: '%', label: 'Client\nSatisfaction' },
];

function Counter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-1 p-4 rounded-xl border border-white/5 bg-[#111827]/50 hover:border-[#00d4aa33] transition-all duration-300 group"
    >
      <div className="font-heading font-bold text-3xl text-[#00d4aa] tabular-nums group-hover:text-[#f1f5f9] transition-colors duration-300">
        {count}
        <span className="text-[#3b82f6]">{suffix}</span>
      </div>
      <div className="text-[#94a3b8] text-xs text-center leading-tight whitespace-pre-line font-mono">
        {label}
      </div>
    </div>
  );
}

export default function AnimatedCounters() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {stats.map((s) => (
        <Counter key={s.label} {...s} />
      ))}
    </div>
  );
}
