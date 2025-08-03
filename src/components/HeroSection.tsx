import React, { useEffect, useState } from 'react';
import heroImage from '@/assets/hero-restaurant.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Simple Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-black via-primary/20 to-luxury-black" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--champagne-gold)) 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Minimal Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full animate-pulse"
            style={{
              left: `${30 + i * 20}%`,
              top: `${30 + i * 15}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {/* Main Logo */}
        <div className={`mb-8 transition-all duration-800 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <img 
            src="/lovable-uploads/34166426-3355-4279-b5e2-8d2e78fb6cb4.png" 
            alt="Fork N Cork" 
            className="h-24 md:h-32 w-auto mx-auto mb-6 opacity-90 mix-blend-screen filter brightness-110 contrast-110"
          />
        </div>

        {/* Tagline */}
        <h1 className={`font-display text-3xl md:text-5xl lg:text-6xl font-bold text-luxury-white mb-6 leading-tight transition-all duration-800 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Where Culinary Art
          <span className="block text-gradient-gold">Meets Liquid Poetry</span>
        </h1>

        {/* Subtitle */}
        <p className={`font-body text-lg md:text-xl text-luxury-white/90 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-800 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Experience luxury dining in the heart of Ranchi. Premium cocktails, gourmet cuisine, 
          and live entertainment in an atmosphere of timeless elegance.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-800 delay-400 ${
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