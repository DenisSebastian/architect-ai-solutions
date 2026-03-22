import { useEffect, useRef } from 'react';

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    let map: any;

    const init = async () => {
      const maplibregl = (await import('maplibre-gl')).default;
      await import('maplibre-gl/dist/maplibre-gl.css');

      map = new maplibregl.Map({
        container: mapRef.current!,
        style: {
          version: 8,
          sources: {
            osm: {
              type: 'raster',
              tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
              tileSize: 256,
            },
          },
          layers: [
            {
              id: 'osm',
              type: 'raster',
              source: 'osm',
              paint: {
                'raster-opacity': 0.85,
                'raster-saturation': -0.6,
                'raster-brightness-min': 0.75,
                'raster-brightness-max': 1.0,
                'raster-hue-rotate': 20,
              },
            },
          ],
        },
        center: [-71.69, -33.44],
        zoom: 7,
        interactive: false,
        attributionControl: false,
      });

      // Forest green marker
      const el = document.createElement('div');
      el.style.cssText = 'position:relative;width:24px;height:24px;';
      el.innerHTML = `
        <div style="position:absolute;inset:-8px;border-radius:50%;border:2px solid rgba(43,92,63,0.3);animation:pulse-ring 2.5s ease-out infinite;"></div>
        <div style="position:absolute;inset:-16px;border-radius:50%;border:1px solid rgba(43,92,63,0.15);animation:pulse-ring 2.5s ease-out 0.8s infinite;"></div>
        <div style="position:absolute;inset:4px;border-radius:50%;background:#2B5C3F;box-shadow:0 0 10px rgba(43,92,63,0.5);"></div>
        <div style="position:absolute;inset:0;border-radius:50%;background:rgba(43,92,63,0.2);border:2px solid #2B5C3F;"></div>
      `;

      new maplibregl.Marker({ element: el })
        .setLngLat([-71.69, -33.44])
        .addTo(map);

      map.flyTo({ center: [-71.69, -33.44], zoom: 8, duration: 2000 });
    };

    init();
    return () => map?.remove();
  }, []);

  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden border border-black/10"
      style={{ minHeight: '340px' }}
    >
      <div ref={mapRef} className="absolute inset-0" />

      {/* Warm parchment overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(245,244,239,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Location badge */}
      <div className="absolute bottom-4 left-4 px-3 py-2 rounded-lg bg-[#FDFCF9]/90 border border-black/10 backdrop-blur-sm shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#2B5C3F] animate-pulse" />
          <span className="text-[#1A1917] text-xs font-mono font-medium">
            Isla Negra, Chile
          </span>
        </div>
        <div className="text-[#6B6865] text-[10px] font-mono mt-0.5 pl-4">
          33°26'S, 71°41'W
        </div>
      </div>
    </div>
  );
}
