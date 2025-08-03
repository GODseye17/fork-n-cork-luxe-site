import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExperienceShowcase from '@/components/ExperienceShowcase';
import ReservationSection from '@/components/ReservationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import useAnimeScrollReveal from '@/hooks/useAnimeScrollReveal';

const Index = () => {
  useAnimeScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ExperienceShowcase />
      
      <ReservationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
