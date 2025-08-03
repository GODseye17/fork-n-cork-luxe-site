import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-luxury-black text-luxury-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <img src="/lovable-uploads/bc1c71f1-5fc1-42c8-a921-e17c7de3801f.png" alt="Fork N Cork" className="h-16 w-auto mb-6" />
            <p className="font-body text-luxury-white/80 leading-relaxed mb-6 max-w-md">
              Where culinary art meets liquid poetry. Experience the finest dining 
              and cocktails in the heart of Ranchi, crafted with passion and precision.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-accent" />
                <span className="text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-accent" />
                <span className="text-sm">reservations@forkncoork.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-accent" />
                <span className="text-sm">Main Road, Ranchi, Jharkhand</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-accent mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['About Us', 'Our Menu', 'Reservations', 'Private Events', 'Gift Cards', 'Careers'].map(link => <li key={link}>
                  <a href="#" className="text-luxury-white/80 hover:text-accent transition-colors duration-300 text-sm">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Hours & Policies */}
          <div>
            <h3 className="font-display text-lg font-semibold text-accent mb-6">
              Information
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-body font-medium text-luxury-white mb-2 text-sm">
                  Opening Hours
                </h4>
                <div className="text-luxury-white/80 text-sm space-y-1">
                  <p>Monday - Thursday</p>
                  <p>6:00 PM - 12:00 AM</p>
                  <p className="pt-2">Friday - Sunday</p>
                  <p>6:00 PM - 1:00 AM</p>
                </div>
              </div>
              <div className="pt-4 space-y-2">
                <a href="#" className="block text-luxury-white/80 hover:text-accent transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="block text-luxury-white/80 hover:text-accent transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-luxury-white/10">
          
        </div>
      </div>
    </footer>;
};
export default Footer;