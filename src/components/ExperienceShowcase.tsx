import React from 'react';
import { Wine, UtensilsCrossed, Music } from 'lucide-react';
import cocktailImage from '@/assets/premium-cocktail.jpg';
import dishImage from '@/assets/gourmet-dish.jpg';
import entertainmentImage from '@/assets/live-entertainment.jpg';

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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 anime-reveal" data-animation="fadeInUp" data-delay="0">
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6 tracking-wide">
            The <span className="text-gradient-gold font-normal">Fork N Cork</span> Experience
          </h2>
          <p className="font-body text-lg text-soft-gray max-w-3xl mx-auto leading-relaxed tracking-wide">
            Immerse yourself in a world where every detail is crafted to perfection. 
            From our signature cocktails to our gourmet cuisine and live entertainment.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className="card-luxury p-8 group anime-reveal"
              data-animation="luxuryReveal"
              data-delay={index * 200}
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-48 object-cover image-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 to-transparent" />
                
                {/* Icon Overlay with Gold Shimmer */}
                <div className="relative w-12 h-12 bg-luxury-gold/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 absolute top-4 right-4 overflow-hidden">
                  <experience.icon size={24} className="text-deep-charcoal relative z-10" />
                  <div className="shimmer-effect absolute inset-0 bg-gradient-to-r from-transparent via-champagne/30 to-transparent transform -skew-x-12"></div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-display text-2xl font-light text-warm-white mb-4 tracking-wide">
                  {experience.title}
                </h3>
                <p className="font-body text-soft-gray mb-6 leading-relaxed tracking-wide">
                  {experience.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {experience.features.map((feature, featureIndex) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-luxury-gold/10 text-champagne text-sm font-medium rounded-full border border-luxury-gold/20 anime-reveal"
                      data-animation="scaleIn"
                      data-delay={index * 200 + featureIndex * 100 + 400}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a 
                  href="https://forkncork.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline-gold w-full group-hover:bg-luxury-gold group-hover:text-deep-charcoal transition-all duration-300"
                >
                  Order Online
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceShowcase;