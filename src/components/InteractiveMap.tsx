import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  // Fork N Cork location coordinates (approximate for Ranchi)
  const restaurantLocation: [number, number] = [85.3240, 23.3441];

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: restaurantLocation,
      zoom: 15,
      pitch: 45,
      bearing: -15,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Custom marker for restaurant
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.innerHTML = `
      <div class="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg border-4 border-white animate-pulse">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      </div>
    `;

    // Add marker to map
    new mapboxgl.Marker(markerElement)
      .setLngLat(restaurantLocation)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-4 text-center">
              <h3 class="font-bold text-lg mb-2">Fork N Cork</h3>
              <p class="text-sm text-gray-600 mb-2">Premium Dining Experience</p>
              <p class="text-xs">Main Road, Ranchi</p>
              <a href="https://maps.app.goo.gl/bDsEiZJyYqf5SXz79" target="_blank" class="text-blue-600 text-xs underline mt-2 block">Get Directions</a>
            </div>
          `)
      )
      .addTo(map.current);

    // Smooth animation on load
    map.current.on('load', () => {
      // Add a subtle animation
      map.current?.flyTo({
        center: restaurantLocation,
        zoom: 16,
        duration: 2000,
        essential: true
      });
      
      // Add a circle layer for location emphasis
      map.current?.addSource('restaurant-circle', {
        type: 'geojson',
        data: {
          type: 'Point',
          coordinates: restaurantLocation
        }
      });

      map.current?.addLayer({
        id: 'restaurant-circle',
        type: 'circle',
        source: 'restaurant-circle',
        paint: {
          'circle-radius': 30,
          'circle-color': 'rgba(234, 179, 8, 0.3)',
          'circle-stroke-width': 2,
          'circle-stroke-color': 'rgba(234, 179, 8, 0.8)'
        }
      });
    });

    setShowTokenInput(false);
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <div className="relative h-96 bg-muted rounded-2xl overflow-hidden border border-border/20 flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <MapPin size={48} className="text-accent mx-auto mb-4" />
          <h4 className="font-display text-xl font-semibold text-foreground mb-4">
            Interactive Map Setup
          </h4>
          <p className="text-muted-foreground text-sm mb-6">
            To display the interactive map, please enter your Mapbox public token. 
            Get yours at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline">mapbox.com</a>
          </p>
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter Mapbox Public Token"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
            <button
              type="submit"
              className="btn-primary w-full"
              disabled={!mapboxToken.trim()}
            >
              Load Map
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            For production, add your token to Supabase Edge Function Secrets
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-96 bg-muted rounded-2xl overflow-hidden border border-border/20">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-luxury-black/10 to-transparent" />
      
      {/* Map overlay with restaurant info */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <h5 className="font-semibold text-sm text-gray-800">Fork N Cork</h5>
        <p className="text-xs text-gray-600">Main Road, Ranchi</p>
      </div>
    </div>
  );
};

export default InteractiveMap;