import React, { useEffect, useState } from 'react';
import heroImage from '@/assets/hero-restaurant.jpg';

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
      
      {/* Elegant Golden Pattern Overlay */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, hsl(var(--luxury-gold)) 1px, transparent 1px), radial-gradient(circle at 70% 70%, hsl(var(--champagne)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px, 120px 120px'
        }} />
      </div>

      {/* Sophisticated Corner Accents */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-champagne/8 to-transparent rounded-full blur-3xl glow-burgundy"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-rich-burgundy/12 to-transparent rounded-full blur-3xl"></div>

      {/* Small Whiskey Video Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Corner videos */}
        <div className="absolute top-24 left-4 w-16 h-16 rounded-lg overflow-hidden opacity-30">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/lovable-uploads/whiskey ATTPAC.webm" type="video/webm" />
          </video>
        </div>
        
        <div className="absolute top-24 right-4 w-12 h-12 rounded-full overflow-hidden opacity-25">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/lovable-uploads/whiskey ATTPAC.webm" type="video/webm" />
          </video>
        </div>
        
        <div className="absolute bottom-20 left-8 w-14 h-14 rounded-lg overflow-hidden opacity-20">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/lovable-uploads/whiskey ATTPAC.webm" type="video/webm" />
          </video>
        </div>
        
        <div className="absolute bottom-32 right-12 w-10 h-10 rounded-full overflow-hidden opacity-35">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/lovable-uploads/whiskey ATTPAC.webm" type="video/webm" />
          </video>
        </div>
        
        {/* Random positioned videos */}
        <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full overflow-hidden opacity-15">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/lovable-uploads/whiskey ATTPAC.webm" type="video/webm" />
          </video>
        </div>
        
        <div className="absolute top-2/3 right-1/3 w-12 h-12 rounded-lg overflow-hidden opacity-25">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/lovable-uploads/whiskey ATTPAC.webm" type="video/webm" />
          </video>
        </div>
        
        <div className="absolute top-1/2 left-3/4 w-6 h-6 rounded-full overflow-hidden opacity-20">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/lovable-uploads/whiskey ATTPAC.webm" type="video/webm" />
          </video>
        </div>
      </div>

      {/* Hero Content - Split Layout */}
      <div className="relative z-10 w-full h-full flex items-center px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-7xl mx-auto">
          
          {/* Left Side - Video Box */}
          <div className={`flex items-center justify-center transition-all duration-800 order-2 lg:order-1 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative w-full max-w-sm aspect-square overflow-hidden mt-8">
              {/* Glass Morphism Border Container */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-br from-luxury-gold/40 via-champagne/30 to-luxury-gold/40 glow-gold">
                <div className="relative rounded-[20px] overflow-hidden glass-morphism">
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