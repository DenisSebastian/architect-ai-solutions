import { useEffect, useRef } from 'react';

export default function MiniMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    let map: any;

    const initMap = async () => {
      const maplibregl = await import('maplibre-gl');
      await import('maplibre-gl/dist/maplibre-gl.css');

      map = new maplibregl.Map({
        container: mapRef.current!,
        style: {
          version: 8,
          sources: {
            'osm-tiles': {
              type: 'raster',
              tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
              tileSize: 256,
              attribution: '© OpenStreetMap',
            },
          },
          layers: [
            {
              id: 'osm-tiles',
              type: 'raster',
              source: 'osm-tiles',
              paint: {
                'raster-opacity': 1,
                'raster-saturation': -0.8,
                'raster-brightness-min': 0,
                'raster-brightness-max': 0.3,
              },
            },
          ],
        },
        center: [-71.69, -33.44],
        zoom: 8,
        interactive: false,
        attributionControl: false,
      });

      // Add pulsing marker at Isla Negra
      const el = document.createElement('div');
      el.innerHTML = `
        <div style="position:relative;width:20px;height:20px;">
          <div style="position:absolute;inset:0;border-radius:50%;background:#00d4aa;opacity:0.3;animation:pulse-ring 2s ease-out infinite;"></div>
          <div style="position:absolute;inset:25%;border-radius:50%;background:#00d4aa;box-shadow:0 0 10px #00d4aa;"></div>
        </div>
      `;

      new maplibregl.Marker({ element: el })
        .setLngLat([-71.69, -33.44])
        .addTo(map);

      map.flyTo({ center: [-71.69, -33.44], zoom: 9, duration: 1500 });
    };

    initMap();

    return () => map?.remove();
  }, []);

  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10" style={{ height: '200px' }}>
      <div ref={mapRef} className="w-full h-full" />
      <div className="absolute bottom-2 right-2 px-2 py-1 rounded text-xs font-mono bg-[#0a0e17]/80 text-[#00d4aa] border border-[#00d4aa22]">
        Isla Negra, Chile
      </div>
    </div>
  );
}
