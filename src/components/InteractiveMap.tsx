import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const InteractiveMap = () => {
  // Extract coordinates from your Google Maps link for embed
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58387.51059815085!2d85.26663!3d23.344315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e104aa5db7dd%3A0xdc09d49d6899f43e!2sRanchi%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1654321098765!5m2!1sen!2sin";

  return (
    <div className="relative h-96 bg-muted rounded-2xl overflow-hidden border border-border/20 group">
      {/* Google Maps Embed */}
      <iframe
        src={googleMapsEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="transition-all duration-300 group-hover:scale-105"
        title="Fork N Cork Location"
      />
      
      {/* Elegant overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-luxury-black/10 via-transparent to-transparent" />
      
      {/* Restaurant info overlay */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-fade-in">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
          <div>
            <h5 className="font-semibold text-sm text-gray-800">Fork N Cork</h5>
            <p className="text-xs text-gray-600">Main Road, Ranchi</p>
          </div>
        </div>
      </div>

      {/* Interactive directions button */}
      <div className="absolute bottom-4 right-4">
        <a
          href="https://maps.app.goo.gl/bDsEiZJyYqf5SXz79"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <ExternalLink size={16} />
          <span className="text-sm font-medium">Get Directions</span>
        </a>
      </div>

      {/* Animated location indicator */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-6 h-6 bg-accent rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-1 left-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
          <MapPin size={12} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;