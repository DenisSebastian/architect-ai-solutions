import { useEffect, useRef, useState } from 'react';

const rings = [
  {
    label: 'Core Languages',
    radius: 68,
    speed: 0.0004,
    techs: [
      { name: 'R', color: '#276DC3' },
      { name: 'Python', color: '#3776AB' },
      { name: 'SQL', color: '#f59e0b' },
      { name: 'Rust', color: '#CE422B' },
    ],
  },
  {
    label: 'Agentic AI',
    radius: 120,
    speed: 0.00028,
    techs: [
      { name: 'Ollama', color: '#94a3b8' },
      { name: 'LangGraph', color: '#4A6FA5' },
      { name: 'OpenAI API', color: '#00d4aa' },
      { name: 'RAG', color: '#F7931E' },
      { name: 'MCP', color: '#8B5CF6' },
      { name: 'Vector DBs', color: '#FFD21E' },
    ],
  },
  {
    label: 'Geospatial',
    radius: 170,
    speed: 0.0002,
    techs: [
      { name: 'GEE', color: '#4CAF50' },
      { name: 'QGIS', color: '#589632' },
      { name: 'PostGIS', color: '#336791' },
      { name: 'GeoPandas', color: '#139C5A' },
      { name: 'MapLibre', color: '#3b82f6' },
      { name: 'H3', color: '#8B5CF6' },
      { name: 'GDAL', color: '#00d4aa' },
    ],
  },
  {
    label: 'Infrastructure',
    radius: 220,
    speed: 0.00015,
    techs: [
      { name: 'Docker', color: '#2496ED' },
      { name: 'FastAPI', color: '#009688' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'DuckDB', color: '#FCC624' },
      { name: 'Cloud Run', color: '#4285F4' },
      { name: 'GitHub Actions', color: '#94a3b8' },
    ],
  },
];

interface TechNode {
  name: string;
  color: string;
  ring: number;
  angle: number;
}

function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

export default function OrbitalDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>();
  const [tooltip, setTooltip] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);
  const nodesRef = useRef<(TechNode & { x: number; y: number; width: number; height: number })[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    // Initialize angles
    const nodes: (TechNode & { x: number; y: number; width: number; height: number; baseAngle: number })[] =
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
          width: 0,
          height: 0,
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

      // Draw orbital guides over the page background.
      rings.forEach((ring) => {
        ctx.beginPath();
        ctx.arc(cx, cy, ring.radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(43,92,63,0.16)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw center
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 45);
      gradient.addColorStop(0, 'rgba(43,92,63,0.26)');
      gradient.addColorStop(0.5, 'rgba(43,92,63,0.1)');
      gradient.addColorStop(1, 'rgba(0,212,170,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, 45, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.font = 'bold 9px "Space Grotesk", sans-serif';
      ctx.fillStyle = '#2B5C3F';
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

          ctx.font = 'bold 10px "JetBrains Mono", monospace';
          const paddingX = 9;
          const labelWidth = Math.max(30, ctx.measureText(node.name).width + paddingX * 2);
          const labelHeight = 24;
          node.width = labelWidth;
          node.height = labelHeight;

          roundedRect(ctx, x - labelWidth / 2, y - labelHeight / 2, labelWidth, labelHeight, 999);
          ctx.fillStyle = `${node.color}1f`;
          ctx.fill();
          ctx.strokeStyle = `${node.color}78`;
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.fillStyle = node.color;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(node.name, x, y);
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
      return Math.abs(dx) <= n.width / 2 && Math.abs(dy) <= n.height / 2;
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
          className="absolute pointer-events-none px-3 py-1.5 rounded-lg bg-[#FDFCF9] border border-[#2B5C3F33] text-[#1A1917] text-xs font-mono shadow-xl z-10"
          style={{ left: tooltip.x + 12, top: tooltip.y - 10 }}
        >
          {tooltip.name}
        </div>
      )}
    </div>
  );
}
