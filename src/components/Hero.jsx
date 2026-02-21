import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F9F6F1] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 z-10 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-serif text-[#800000] mb-6 leading-tight">
            Traditional <br /> <span className="italic text-[#C5A059]">Masterpieces.</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto lg:mx-0">
            Greater Noida's favorite destination for authentic Silk, Banarasi, and Bridal Wear for over a decade.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#collection" className="bg-[#800000] text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-xs shadow-xl">View Catalog</a>
            <div className="px-8 py-4 border border-[#800000] text-[#800000] rounded-lg font-bold text-xs uppercase tracking-widest italic">Est. Jagat Farm</div>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="absolute inset-0 bg-[#C5A059] rounded-full blur-3xl opacity-20 scale-75"></div>
          <img 
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200" 
            className="relative z-10 w-full h-125 object-cover rounded-tr-[100px] rounded-bl-[100px] shadow-2xl border-4 border-white" 
            alt="Vastra Kala Collection" 
          />
        </div>
      </div>

      <div 
        className="absolute bottom-0 left-0 w-full h-24 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 50%, 100% 0)' }}
      ></div>
    </section>
  );
}