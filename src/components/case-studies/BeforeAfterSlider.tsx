import { useState, useRef, useCallback } from 'react';

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: Props) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPercent = useCallback((clientX: number) => {
    if (!containerRef.current) return 50;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return (x / rect.width) * 100;
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (dragging) setPosition(getPercent(e.clientX));
    },
    [dragging, getPercent]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (dragging) setPosition(getPercent(e.touches[0].clientX));
    },
    [dragging, getPercent]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-xl select-none cursor-ew-resize"
      onMouseMove={onMouseMove}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchMove={onTouchMove}
      onTouchEnd={() => setDragging(false)}
    >
      {/* After (base layer) */}
      <div className="absolute inset-0">
        <img
          src={afterSrc}
          alt={afterLabel}
          className="w-full h-full object-cover"
          draggable="false"
        />
        <div className="absolute top-3 right-3 px-2 py-1 rounded text-xs font-mono bg-[#0a0e17]/80 text-[#3b82f6] border border-[#3b82f622]">
          {afterLabel}
        </div>
      </div>

      {/* Before (clipped layer) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={beforeSrc}
          alt={beforeLabel}
          className="w-full h-full object-cover"
          draggable="false"
        />
        <div className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-mono bg-[#0a0e17]/80 text-[#00d4aa] border border-[#00d4aa22]">
          {beforeLabel}
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/60 pointer-events-none"
        style={{ left: `${position}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/90 border-2 border-[#00d4aa] flex items-center justify-center shadow-lg cursor-ew-resize z-10"
        style={{ left: `${position}%` }}
        onMouseDown={() => setDragging(true)}
        onTouchStart={() => setDragging(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#0a0e17"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 9l-3 3 3 3M16 9l3 3-3 3"
          />
        </svg>
      </div>
    </div>
  );
}
