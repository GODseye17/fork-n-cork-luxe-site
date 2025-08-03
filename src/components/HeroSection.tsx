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

      {/* Hero Content */}
      <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        {/* Main Logo */}
        <div className={`mb-8 transition-all duration-800 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="relative">
            {/* Logo Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/30 via-transparent to-accent/30 rounded-full blur-xl scale-110"></div>
            <img 
              src="/lovable-uploads/bc1c71f1-5fc1-42c8-a921-e17c7de3801f.png" 
              alt="Fork N Cork" 
              className="relative h-32 md:h-40 lg:h-48 w-auto mx-auto mb-6 drop-shadow-2xl transition-all duration-500 hover:scale-105 filter brightness-110"
            />
          </div>
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