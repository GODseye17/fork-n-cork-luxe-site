import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import ShinyText from './ShinyText';

const MenuPreview = () => {
  const [activeCategory, setActiveCategory] = useState('signature');

  const menuCategories = {
    signature: {
      title: 'Signature Cocktails',
      items: [
        {
          name: 'Golden Elixir',
          description: 'Premium whiskey, honey, fresh herbs, gold leaf garnish',
          price: '₹1,200',
          featured: true
        },
        {
          name: 'Ranchi Royale',
          description: 'Local ingredients crafted into a sophisticated cocktail',
          price: '₹950',
          featured: false
        },
        {
          name: 'Liquid Poetry',
          description: 'Artisanal gin, elderflower, cucumber, house bitters',
          price: '₹1,100',
          featured: true
        }
      ]
    },
    cuisine: {
      title: 'Gourmet Cuisine',
      items: [
        {
          name: 'Wagyu Tenderloin',
          description: 'Grade A5 wagyu with truffle jus and seasonal vegetables',
          price: '₹3,500',
          featured: true
        },
        {
          name: 'Lobster Thermidor',
          description: 'Fresh lobster in rich cream sauce with gruyere cheese',
          price: '₹2,800',
          featured: false
        },
        {
          name: 'Duck Confit',
          description: 'Slow-cooked duck leg with cherry gastrique',
          price: '₹2,200',
          featured: true
        }
      ]
    },
    desserts: {
      title: 'Artisan Desserts',
      items: [
        {
          name: 'Chocolate Symphony',
          description: 'Dark chocolate mousse with gold leaf and berries',
          price: '₹750',
          featured: true
        },
        {
          name: 'Vanilla Bean Crème',
          description: 'Madagascar vanilla with caramelized sugar',
          price: '₹650',
          featured: false
        },
        {
          name: 'Seasonal Tart',
          description: 'Chef\'s selection of seasonal fruits and pastry',
          price: '₹700',
          featured: false
        }
      ]
    }
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient-gold">Curated</span> Menu
          </h2>
          <div className="font-body text-lg max-w-3xl mx-auto leading-relaxed">
            <ShinyText 
              text="Each dish and drink is a masterpiece, carefully crafted by our culinary artists using the finest ingredients from around the world."
              speed={4}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 scroll-reveal">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-2 border border-border/20">
            {Object.entries(menuCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-body font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-accent text-luxury-black shadow-gold'
                    : 'text-muted-foreground hover:text-accent'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuCategories[activeCategory].items.map((item, index) => (
            <div
              key={item.name}
              className={`card-luxury p-6 relative scroll-reveal`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-gold">
                  <Star size={16} className="text-luxury-black fill-current" />
                </div>
              )}

              {/* Item Details */}
              <div className="text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.name}
                </h3>
                <div className="font-body mb-4 leading-relaxed text-sm">
                  <ShinyText text={item.description} speed={6} />
                </div>
                <div className="text-2xl font-bold text-gradient-gold mb-6">
                  {item.price}
                </div>
                <a 
                  href="https://forkncork.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline-gold w-full text-sm"
                >
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Start Ordering CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <a 
            href="https://forkncork.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Start Ordering Now
          </a>
          <div className="font-body mt-4">
            <ShinyText text="Order online for pickup or delivery - Experience Fork N Cork at home" speed={5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;