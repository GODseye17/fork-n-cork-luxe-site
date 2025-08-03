import React, { useEffect, useState } from 'react';
import MagnetLines from './MagnetLines';
import ShapeBlur from './ShapeBlur';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-deep-charcoal">
      {/* Sophisticated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-primary" />
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 texture-marble opacity-40" />
      
      {/* Ambient Lighting Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-luxury-gold/10 via-luxury-gold/3 to-transparent rounded-full blur-3xl glow-gold"></div>
      </div>
      
      {/* Magnetic Lines Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <MagnetLines 
          rows={12}
          columns={12}
          containerSize="100vw"
          lineColor="hsl(var(--luxury-gold))"
          lineWidth="2px"
          lineHeight="40px"
          baseAngle={-15}
        />
      </div>

      {/* Sophisticated Corner Accents */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-champagne/8 to-transparent rounded-full blur-3xl glow-burgundy"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-rich-burgundy/12 to-transparent rounded-full blur-3xl"></div>


      {/* Hero Content - Split Layout */}
      <div className="relative z-10 w-full h-full flex items-center px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-7xl mx-auto">
          
          {/* Left Side - Video Box */}
          <div className={`flex items-center justify-center transition-all duration-800 order-2 lg:order-1 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative w-full max-w-sm aspect-square overflow-hidden mt-8">
              {/* Video Container */}
              <div className="relative w-full h-full">
                {/* Logo Video */}
                <video 
                  className="w-full h-full object-cover rounded-3xl"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/lovable-uploads/Logo_Dance_Video_Generation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* ShapeBlur Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <ShapeBlur
                    variation={0}
                    pixelRatioProp={window.devicePixelRatio || 1}
                    shapeSize={0.8}
                    roundness={0.6}
                    borderSize={0.08}
                    circleSize={0.4}
                    circleEdge={0.3}
                    className="mix-blend-screen opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`flex flex-col justify-center items-center lg:items-start text-center lg:text-left transition-all duration-800 delay-200 order-1 lg:order-2 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Tagline */}
            <h1 className={`font-display text-2xl md:text-4xl lg:text-5xl font-light text-warm-white mb-6 leading-tight tracking-wide transition-all duration-800 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Where Culinary Art
              <span className="block text-gradient-gold font-normal">Meets Liquid Poetry</span>
            </h1>

            {/* Subtitle */}
            <p className={`font-body text-base md:text-lg text-soft-gray mb-8 leading-relaxed tracking-wide transition-all duration-800 delay-500 ${
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