import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GooeyNav from './GooeyNav';
import GlassSurface from './GlassSurface';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Events", href: "#events" },
    { label: "Reservations", href: "#reservations" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-luxury-black/95 backdrop-blur-md shadow-elegant' 
        : 'bg-gradient-to-b from-luxury-black/40 via-luxury-black/20 to-transparent backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/bc1c71f1-5fc1-42c8-a921-e17c7de3801f.png" 
              alt="Fork N Cork" 
              className="h-8 w-auto transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation with GooeyNav */}
          <div className="hidden md:block">
            <GooeyNav
              items={navItems}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <GlassSurface
              width={40}
              height={40}
              borderRadius={8}
              className="cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
            </GlassSurface>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-luxury-black/98 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-luxury-white hover:text-accent transition-colors duration-300 font-heading font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;