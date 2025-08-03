import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import InteractiveMap from './InteractiveMap';
import GlassSurface from './GlassSurface';
import Squares from './Squares';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['Main Road, Ranchi', 'Jharkhand, India - 834001'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9876543210', '+91 9876543211'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['forkncorkranchi@gmail.com'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['All Day: 11:00 AM - 10:30 PM'],
      action: 'Start Ordering'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Twitter, name: 'Twitter', href: '#' }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden" style={{ backgroundColor: '#094654' }}>
      {/* Animated Squares Background */}
      <div className="absolute inset-0 opacity-20">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visit <span className="text-gradient-gold">Fork N Cork</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Ranchi, we're easily accessible and ready to welcome you 
            for an unforgettable dining experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="scroll-reveal">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
              Get in Touch
            </h3>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon size={20} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-body font-semibold text-foreground mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground mb-1">{detail}</p>
                    ))}
                     {info.title === 'Location' ? (
                       <a 
                         href="https://maps.app.goo.gl/bDsEiZJyYqf5SXz79" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-accent hover:text-accent/80 font-medium text-sm mt-2 transition-colors duration-300"
                       >
                         {info.action} →
                       </a>
                      ) : (
                        <GlassSurface 
                          width={120}
                          height={30}
                          borderRadius={6}
                          className="cursor-pointer hover:scale-105 transition-transform duration-300"
                        >
                          <span className="text-white font-medium text-xs">
                            {info.action} →
                          </span>
                        </GlassSurface>
                      )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h4 className="font-body font-semibold text-foreground mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-luxury-black transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="scroll-reveal">
            <InteractiveMap />

            {/* Location Details */}
            <div className="mt-6 p-6 card-luxury">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Prime Location
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Parking:</span>
                  <span className="text-foreground font-medium">Available Parking Space</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Accessibility:</span>
                  <span className="text-foreground font-medium">Wheelchair Accessible</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dress Code:</span>
                  <span className="text-foreground font-medium">Smart Casual</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reservations:</span>
                  <span className="text-foreground font-medium">Recommended</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;