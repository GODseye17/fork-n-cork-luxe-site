import React, { useEffect, useState } from 'react';
import heroImage from '@/assets/hero-restaurant.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-black via-primary/30 to-luxury-black" />
      
      {/* Radial Glow Effect Behind Logo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-accent/20 via-accent/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Elegant Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, hsl(var(--champagne-gold)) 1px, transparent 1px), radial-gradient(circle at 70% 70%, hsl(var(--champagne-gold)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 80px 80px'
        }} />
      </div>

      {/* Subtle Corner Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl"></div>

      {/* Premium Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/60 rounded-full animate-pulse"
            style={{
              left: `${25 + i * 18}%`,
              top: `${25 + i * 15}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Hero Content - Split Layout */}
      <div className="relative z-10 w-full h-full flex items-center px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-7xl mx-auto">
          
          {/* Left Side - Video Box */}
          <div className={`flex items-center justify-center transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative w-full max-w-lg aspect-video">
              {/* Video Placeholder Box */}
              <div className="w-full h-full bg-gradient-to-br from-luxury-black/60 via-primary/20 to-luxury-black/60 rounded-2xl border-2 border-accent/30 backdrop-blur-sm">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-luxury-white/60 font-body">Video placeholder - Drop your MP4 file here</p>
                  </div>
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 rounded-2xl blur-xl -z-10"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`flex flex-col justify-center transition-all duration-800 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Main Logo */}
            <div className={`mb-8 transition-all duration-800 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="relative">
                {/* Logo Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/30 via-transparent to-accent/30 rounded-full blur-xl scale-110"></div>
                <img 
                  src="/lovable-uploads/bc1c71f1-5fc1-42c8-a921-e17c7de3801f.png" 
                  alt="Fork N Cork" 
                  className="relative h-24 md:h-32 lg:h-40 w-auto mb-6 drop-shadow-2xl transition-all duration-500 hover:scale-105 filter brightness-110"
                />
              </div>
            </div>

            {/* Tagline */}
            <h1 className={`font-display text-2xl md:text-4xl lg:text-5xl font-bold text-luxury-white mb-6 leading-tight transition-all duration-800 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Where Culinary Art
              <span className="block text-gradient-gold">Meets Liquid Poetry</span>
            </h1>

            {/* Subtitle */}
            <p className={`font-body text-base md:text-lg text-luxury-white/90 mb-8 leading-relaxed transition-all duration-800 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Experience luxury dining in the heart of Ranchi. Premium cocktails, gourmet cuisine, 
              and live entertainment in an atmosphere of timeless elegance.
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-800 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <a 
                href="https://forkncork.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-gold group"
              >
                <span className="relative z-10">Start Ordering</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <button className="btn-outline-gold">
                Reserve Your Table
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-60">
        <div className="w-5 h-8 border border-accent/60 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-accent/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;