import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'R', level: 100, label: 'Expert', color: '#276DC3' },
  { name: 'Python', level: 82, label: 'Advanced', color: '#3776AB' },
  { name: 'Rust', level: 50, label: 'Intermediate', color: '#CE422B' },
  { name: 'Google Earth Engine', level: 95, label: 'Expert', color: '#4CAF50' },
  { name: 'Deep Learning', level: 85, label: 'Advanced', color: '#EE4C2C' },
  { name: 'GIS / Spatial Analysis', level: 97, label: 'Expert', color: '#00d4aa' },
  { name: 'Remote Sensing', level: 95, label: 'Expert', color: '#f59e0b' },
  { name: 'Drone / Photogrammetry', level: 78, label: 'Advanced', color: '#8B5CF6' },
  { name: 'SQL / PostGIS', level: 80, label: 'Advanced', color: '#336791' },
];

function SkillBar({
  name,
  level,
  label,
  color,
}: {
  name: string;
  level: number;
  label: string;
  color: string;
}) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[#f1f5f9] text-sm font-medium">{name}</span>
        <div className="flex items-center gap-2">
          <span className="text-[#94a3b8] text-xs font-mono">{label}</span>
          <span
            className="text-xs font-mono font-bold tabular-nums"
            style={{ color }}
          >
            {level}%
          </span>
        </div>
      </div>
      <div className="h-1.5 bg-[#1e293b] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: `linear-gradient(to right, ${color}88, ${color})`,
            boxShadow: `0 0 8px ${color}44`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillBars() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
      {skills.map((s) => (
        <SkillBar key={s.name} {...s} />
      ))}
    </div>
  );
}
