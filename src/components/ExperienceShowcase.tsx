import React from 'react';
import { Wine, UtensilsCrossed, Music } from 'lucide-react';
import cocktailImage from '@/assets/premium-cocktail.jpg';
import dishImage from '@/assets/gourmet-dish.jpg';
import entertainmentImage from '@/assets/live-entertainment.jpg';
import ShinyText from './ShinyText';
import GlassSurface from './GlassSurface';
import TiltedCard from './TiltedCard';
import GradientText from './GradientText';

const ExperienceShowcase = () => {
  const experiences = [
    {
      icon: Wine,
      title: 'Premium Cocktails',
      description: 'Handcrafted cocktails by master mixologists using the finest spirits and artisanal ingredients.',
      image: cocktailImage,
      features: ['Craft Cocktails', 'Premium Spirits', 'Signature Drinks']
    },
    {
      icon: UtensilsCrossed,
      title: 'Gourmet Dining',
      description: 'Exquisite cuisine prepared by renowned chefs using locally sourced, premium ingredients.',
      image: dishImage,
      features: ['Fine Dining', 'Fresh Ingredients', 'Chef Specials']
    },
    {
      icon: Music,
      title: 'Live Entertainment',
      description: 'Intimate performances and live music creating the perfect ambiance for memorable evenings.',
      image: entertainmentImage,
      features: ['Live Music', 'Special Events', 'Private Functions']
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F1F1F1' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              The Fork N Cork Experience
            </GradientText>
          </h2>
          <div className="font-body text-lg max-w-3xl mx-auto leading-relaxed">
            <ShinyText 
              size="lg"
              speed={4}
              className="text-foreground"
              baseColor="hsl(var(--foreground))"
              shineColor="hsl(var(--primary))"
            >
              Immerse yourself in a world where every detail is crafted to perfection. From our signature cocktails to our gourmet cuisine and live entertainment.
            </ShinyText>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className="scroll-reveal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <TiltedCard
                imageSrc={experience.image}
                altText={experience.title}
                captionText={experience.title}
                containerHeight="400px"
                containerWidth="100%"
                imageHeight="300px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="w-full h-full bg-gradient-to-t from-black/90 via-black/60 to-transparent rounded-[15px] flex flex-col justify-between p-6">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-accent/90 rounded-full flex items-center justify-center mb-4">
                      <experience.icon size={24} className="text-luxury-black" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white mb-2">
                        {experience.title}
                      </h3>
                      <div className="font-body mb-4 leading-relaxed text-sm">
                        <ShinyText 
                          size="sm"
                          speed={6}
                          className="text-white"
                          baseColor="rgba(255,255,255,0.8)"
                          shineColor="rgba(255,255,255,1)"
                        >
                          {experience.description}
                        </ShinyText>
                      </div>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {experience.features.map((feature, featureIndex) => (
                          <span 
                            key={featureIndex}
                            className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Order Button */}
                      <GlassSurface 
                        width="100%"
                        height={40}
                        borderRadius={8}
                        className="cursor-pointer hover:scale-105 transition-transform duration-300"
                      >
                        <a 
                          href="https://forkncork.in" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white font-medium text-sm"
                        >
                          Order Online
                        </a>
                      </GlassSurface>
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceShowcase;