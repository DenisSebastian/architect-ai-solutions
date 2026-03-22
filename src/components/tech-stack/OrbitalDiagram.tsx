import { useEffect, useRef, useState } from 'react';

const rings = [
  {
    label: 'Core Languages',
    radius: 81,
    speed: 0.0004,
    techs: [
      { name: 'R', color: '#276DC3', emoji: 'R' },
      { name: 'Python', color: '#3776AB', emoji: 'Py' },
      { name: 'SQL', color: '#f59e0b', emoji: 'SQL' },
      { name: 'Rust', color: '#CE422B', emoji: 'Rs' },
    ],
  },
  {
    label: 'AI / ML',
    radius: 140,
    speed: 0.00028,
    techs: [
      { name: 'PyTorch', color: '#EE4C2C', emoji: '🔥' },
      { name: 'TensorFlow', color: '#FF6F00', emoji: 'TF' },
      { name: 'scikit-learn', color: '#F7931E', emoji: 'SK' },
      { name: 'XGBoost', color: '#00d4aa', emoji: 'XG' },
      { name: 'HuggingFace', color: '#FFD21E', emoji: '🤗' },
    ],
  },
  {
    label: 'Geospatial',
    radius: 198,
    speed: 0.0002,
    techs: [
      { name: 'GEE', color: '#4CAF50', emoji: 'GEE' },
      { name: 'QGIS', color: '#589632', emoji: 'QG' },
      { name: 'PostGIS', color: '#336791', emoji: 'PG' },
      { name: 'GeoPandas', color: '#139C5A', emoji: 'GP' },
      { name: 'MapLibre', color: '#3b82f6', emoji: 'ML' },
      { name: 'H3', color: '#8B5CF6', emoji: 'H3' },
      { name: 'GDAL', color: '#00d4aa', emoji: 'GD' },
    ],
  },
  {
    label: 'Infrastructure',
    radius: 257,
    speed: 0.00015,
    techs: [
      { name: 'Docker', color: '#2496ED', emoji: '🐳' },
      { name: 'Git', color: '#F05032', emoji: 'Git' },
      { name: 'Linux', color: '#FCC624', emoji: '🐧' },
      { name: 'GCP', color: '#4285F4', emoji: 'GCP' },
      { name: 'AWS', color: '#FF9900', emoji: 'AWS' },
    ],
  },
];

interface TechNode {
  name: string;
  color: string;
  emoji: string;
  ring: number;
  angle: number;
}

export default function OrbitalDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>();
  const [tooltip, setTooltip] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);
  const nodesRef = useRef<(TechNode & { x: number; y: number })[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    // Initialize angles
    const nodes: (TechNode & { x: number; y: number; baseAngle: number })[] =
      [];
    rings.forEach((ring, ri) => {
      const step = (Math.PI * 2) / ring.techs.length;
      ring.techs.forEach((tech, ti) => {
        nodes.push({
          ...tech,
          ring: ri,
          angle: step * ti + (ri * Math.PI) / rings.length,
          baseAngle: step * ti,
          x: 0,
          y: 0,
        });
      });
    });

    let time = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      ctx.clearRect(0, 0, w, h);
      time++;

      // Draw rings
      rings.forEach((ring) => {
        ctx.beginPath();
        ctx.arc(cx, cy, ring.radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0,212,170,0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw center
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 45);
      gradient.addColorStop(0, 'rgba(0,212,170,0.3)');
      gradient.addColorStop(0.5, 'rgba(0,212,170,0.1)');
      gradient.addColorStop(1, 'rgba(0,212,170,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, 45, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.font = 'bold 9px "Space Grotesk", sans-serif';
      ctx.fillStyle = '#00d4aa';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('AI +', cx, cy - 6);
      ctx.fillText('Territory', cx, cy + 6);

      // Draw nodes
      rings.forEach((ring, ri) => {
        const ringNodes = nodes.filter((n) => n.ring === ri);
        ringNodes.forEach((node) => {
          node.angle += ring.speed;
          const x = cx + Math.cos(node.angle) * ring.radius;
          const y = cy + Math.sin(node.angle) * ring.radius;
          node.x = x;
          node.y = y;

          // Node circle
          ctx.beginPath();
          ctx.arc(x, y, 14, 0, Math.PI * 2);
          ctx.fillStyle = `${node.color}22`;
          ctx.fill();
          ctx.strokeStyle = `${node.color}66`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Emoji/text
          ctx.font = `bold ${node.emoji.length > 2 ? '7' : '9'}px "JetBrains Mono", monospace`;
          ctx.fillStyle = node.color;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(node.emoji, x, y);
        });
      });

      nodesRef.current = nodes.map((n) => ({ ...n }));
      animRef.current = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const hit = nodesRef.current.find((n) => {
      const dx = n.x - mx * scaleX;
      const dy = n.y - my * scaleY;
      return Math.sqrt(dx * dx + dy * dy) < 16;
    });

    if (hit) {
      setTooltip({ name: hit.name, x: e.clientX - rect.left, y: e.clientY - rect.top });
    } else {
      setTooltip(null);
    }
  };

  return (
    <div className="relative w-full" style={{ height: '558px' }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTooltip(null)}
        style={{ cursor: tooltip ? 'pointer' : 'default' }}
      />
      {tooltip && (
        <div
          className="absolute pointer-events-none px-3 py-1.5 rounded-lg bg-[#1e293b] border border-[#00d4aa33] text-[#f1f5f9] text-xs font-mono shadow-xl z-10"
          style={{ left: tooltip.x + 12, top: tooltip.y - 10 }}
        >
          {tooltip.name}
        </div>
      )}
    </div>
  );
}
