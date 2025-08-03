import React, { useEffect, useState } from 'react';
import ShinyText from './ShinyText';
import GlassSurface from './GlassSurface';
import SmokeyBackground from './SmokeyBackground';


const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Smokey Background */}
      <div className="absolute inset-0">
        <SmokeyBackground 
          color="#40531A"
          backdropBlurAmount="sm"
          className="w-full h-full"
        />
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
            <h1 className={`font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight transition-all duration-800 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Where Culinary Art Meets Liquid Poetry
            </h1>

            {/* Subtitle */}
            <div className={`font-body text-base md:text-lg mb-8 leading-relaxed tracking-wide transition-all duration-800 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <ShinyText 
                size="lg"
                speed={4}
                className="text-white"
                baseColor="rgba(255,255,255,0.9)"
                shineColor="rgba(255,255,255,1)"
              >
                Experience luxury dining in the heart of Ranchi. Premium cocktails, gourmet cuisine, and live entertainment in an atmosphere of timeless elegance.
              </ShinyText>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-800 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <GlassSurface 
                width={200} 
                height={50}
                borderRadius={12}
                className="cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <a 
                  href="https://forkncork.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-semibold text-sm"
                >
                  Start Ordering
                </a>
              </GlassSurface>
              <GlassSurface 
                width={200} 
                height={50}
                borderRadius={12}
                className="cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <span className="text-white font-semibold text-sm">
                  Reserve Your Table
                </span>
              </GlassSurface>
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