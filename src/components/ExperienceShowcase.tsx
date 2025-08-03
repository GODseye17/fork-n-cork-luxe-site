import React from 'react';
import { Wine, UtensilsCrossed, Music } from 'lucide-react';
import cocktailImage from '@/assets/premium-cocktail.jpg';
import dishImage from '@/assets/gourmet-dish.jpg';
import entertainmentImage from '@/assets/live-entertainment.jpg';
import ShinyText from './ShinyText';

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
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            The <span className="text-gradient-gold">Fork N Cork</span> Experience
          </h2>
          <div className="font-body text-lg max-w-3xl mx-auto leading-relaxed">
            <ShinyText 
              text="Immerse yourself in a world where every detail is crafted to perfection. From our signature cocktails to our gourmet cuisine and live entertainment."
              speed={4}
            />
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className={`card-luxury p-8 group scroll-reveal`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-48 object-cover image-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-accent/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <experience.icon size={24} className="text-luxury-black" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {experience.title}
                </h3>
                <div className="font-body mb-6 leading-relaxed">
                  <ShinyText text={experience.description} speed={5} />
                </div>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {experience.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full"
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
                  className="btn-outline-gold w-full group-hover:bg-accent group-hover:text-luxury-black transition-all duration-300"
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