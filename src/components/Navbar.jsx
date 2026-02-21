import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-5 sticky top-0 bg-white shadow-sm z-50">
      <div className="flex flex-col">
        <span className="text-2xl font-serif font-bold text-[#800000] leading-none">VASTRA KALA</span>
        <span className="text-[10px] tracking-[0.3em] text-[#C5A059] font-bold">JAGAT FARM</span>
      </div>
      <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-gray-600">
        <a href="#home" className="hover:text-[#800000]">Home</a>
        <a href="#collection" className="hover:text-[#800000]">Collections</a>
        <a href="#contact" className="hover:text-[#800000]">Visit Us</a>
      </div>
      <div className="flex gap-4">
        <a href="tel:+91XXXXXXXXXX" className="p-2 text-[#800000] border border-[#800000] rounded-full hover:bg-[#800000] hover:text-white transition">
          <Phone size={18} />
        </a>
        <a href="https://wa.me/91XXXXXXXXXX" className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg">
          <MessageCircle size={18} /> <span className="hidden sm:block">Enquire</span>
        </a>
      </div>
    </nav>
  );
}