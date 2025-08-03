import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, User } from 'lucide-react';
import Cubes from './Cubes';

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    requests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Reservation request:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const timeSlots = [
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', 
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  const guestCounts = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

  return (
    <section id="reservations" className="relative py-20 bg-gradient-luxury overflow-hidden">
      {/* Cubes Background */}
      <div className="absolute inset-0 flex items-center justify-start opacity-20">
        <Cubes 
          gridSize={8}
          maxAngle={60}
          radius={4}
          borderStyle="2px dashed hsl(var(--luxury-gold))"
          faceColor="hsl(var(--deep-charcoal))"
          rippleColor="hsl(var(--accent))"
          rippleSpeed={1.5}
          autoAnimate={true}
          rippleOnClick={true}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="scroll-reveal">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-white mb-6">
              Reserve Your <span className="text-gradient-gold">Luxury</span> Experience
            </h2>
            <p className="font-body text-lg text-luxury-white/90 mb-8 leading-relaxed">
              Secure your table at Ranchi's most exclusive dining destination. 
              Our team will ensure every detail of your visit exceeds expectations.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Calendar size={20} className="text-luxury-black" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-luxury-white">Advance Booking</h3>
                  <p className="text-luxury-white/80 text-sm">Reserve up to 30 days in advance</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Users size={20} className="text-luxury-black" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-luxury-white">Private Events</h3>
                  <p className="text-luxury-white/80 text-sm">Customizable for special occasions</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-luxury-black" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-luxury-white">24/7 Concierge</h3>
                  <p className="text-luxury-white/80 text-sm">Dedicated service for your needs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="scroll-reveal">
            <div className="card-luxury p-8 bg-card/95 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
                Make a Reservation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User size={20} className="absolute left-3 top-3 text-muted-foreground" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-luxury pl-10"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Mail size={20} className="absolute left-3 top-3 text-muted-foreground" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-luxury pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <Phone size={20} className="absolute left-3 top-3 text-muted-foreground" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-luxury pl-10"
                    required
                  />
                </div>

                {/* Reservation Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Calendar size={20} className="absolute left-3 top-3 text-muted-foreground" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="input-luxury pl-10"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <Clock size={20} className="absolute left-3 top-3 text-muted-foreground" />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="input-luxury pl-10 appearance-none"
                      required
                    >
                      <option value="">Select Time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <Users size={20} className="absolute left-3 top-3 text-muted-foreground" />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="input-luxury pl-10 appearance-none"
                      required
                    >
                      {guestCounts.map(count => (
                        <option key={count} value={count}>{count} Guest{count !== '1' ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="occasion"
                    placeholder="Special Occasion (Optional)"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="input-luxury"
                  />
                </div>

                <div>
                  <textarea
                    name="requests"
                    placeholder="Special Requests or Dietary Requirements"
                    value={formData.requests}
                    onChange={handleChange}
                    rows={4}
                    className="input-luxury resize-none"
                  />
                </div>

                <button type="submit" className="btn-gold w-full">
                  Reserve Your Table
                </button>
              </form>

              <p className="text-center text-muted-foreground text-sm mt-4">
                After reserving table, call us at{' '}
                <span className="text-accent font-semibold">+91 9876543210</span>
                {' '}to confirm table on day of reservation. Reservations are confirmed within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;