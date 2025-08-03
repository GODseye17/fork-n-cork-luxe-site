import React, { useEffect, useState } from 'react';
import heroImage from '@/assets/hero-restaurant.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: 'scale(1.1)'
        }}
      />
      
      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-accent rounded-full opacity-30 floating ${
              i % 2 === 0 ? 'floating-delayed' : ''
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Main Logo */}
        <div className="mb-8 animate-fade-in-up">
          <img 
            src="/lovable-uploads/34166426-3355-4279-b5e2-8d2e78fb6cb4.png" 
            alt="Fork N Cork" 
            className="h-24 md:h-32 w-auto mx-auto mb-6"
          />
        </div>

        {/* Tagline */}
        <h1 className={`font-display text-3xl md:text-5xl lg:text-6xl font-bold text-luxury-white mb-6 leading-tight transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Where Culinary Art
          <span className="block text-gradient-gold">Meets Liquid Poetry</span>
        </h1>

        {/* Subtitle */}
        <p className={`font-body text-lg md:text-xl text-luxury-white/90 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Experience luxury dining in the heart of Ranchi. Premium cocktails, gourmet cuisine, 
          and live entertainment in an atmosphere of timeless elegance.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;