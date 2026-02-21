import React from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-[#800000] text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-serif mb-6">Visit Vastra Kala</h2>
          <p className="text-pink-100/70 mb-10 text-lg">Located in the heart of Jagat Farm, we are easy to find and ready to serve you.</p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="text-[#C5A059]" />
              <p>Shop No. G-11, Jagat Farm Market, <br /> Gamma 1, Greater Noida, UP</p>
            </div>
            <div className="flex gap-4">
              <Clock className="text-[#C5A059]" />
              <p>Everyday: 11:00 AM - 9:00 PM</p>
            </div>
          </div>
          
          <a 
            href="https://goo.gl/maps/..."
            target="_blank"
            className="mt-10 inline-flex items-center gap-2 bg-[#C5A059] text-[#800000] px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs"
          >
            Get Directions <Navigation size={16} />
          </a>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 h-80 bg-gray-300">
           <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800" className="w-full h-full object-cover grayscale" alt="Location" />
        </div>
      </div>
    </section>
  );
}