import React, { useEffect, useState } from 'react';
import heroImage from '@/assets/hero-restaurant.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Toned Down Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-black via-primary/15 to-luxury-black" />
      
      {/* Radial Glow Effect Behind Logo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-accent/10 via-accent/2 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Elegant Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, hsl(var(--champagne-gold)) 1px, transparent 1px), radial-gradient(circle at 70% 70%, hsl(var(--champagne-gold)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 80px 80px'
        }} />
      </div>

      {/* Subtle Corner Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl"></div>

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
          <div className={`flex items-center justify-center transition-all duration-800 order-2 lg:order-1 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative w-full max-w-sm aspect-square overflow-hidden">
              {/* Glossy Border Container */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-br from-accent/60 via-luxury-white/40 to-accent/60 shadow-elegant">
                <div className="relative rounded-[20px] overflow-hidden bg-gradient-to-br from-luxury-black/20 to-luxury-black/40 backdrop-blur-sm">
                  {/* Logo Video */}
                  <video 
                    className="w-full h-full object-cover scale-110"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source src="/lovable-uploads/Logo_Dance_Video_Generation.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Inner Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 rounded-[20px]"></div>
                </div>
              </div>
              {/* Outer Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 rounded-3xl blur-xl -z-10"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`flex flex-col justify-center transition-all duration-800 delay-200 order-1 lg:order-2 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Tagline */}
            <h1 className={`font-display text-2xl md:text-4xl lg:text-5xl font-bold text-luxury-white mb-6 leading-tight transition-all duration-800 delay-300 ${
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