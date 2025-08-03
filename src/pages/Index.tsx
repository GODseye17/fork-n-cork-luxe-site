import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExperienceShowcase from '@/components/ExperienceShowcase';
import MenuPreview from '@/components/MenuPreview';
import ReservationSection from '@/components/ReservationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import useScrollReveal from '@/hooks/useScrollReveal';

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ExperienceShowcase />
      <MenuPreview />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
