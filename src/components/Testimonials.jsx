import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Smt. Sunita Vidhuri",
    location: "Beta 1, Greater Noida",
    text: "I visited Vastra Kala last month for my niece's wedding. The Banarasi silk collection is truly authentic. No need to go to Chandni Chowk anymore when we have such quality in Jagat Farm!",
    rating: 5,
    tag: "Wedding Shopping"
  },
  {
    id: 2,
    name: "Pooja Kasana",
    location: "Alpha 2, Greater Noida",
    text: "Beautiful designs and very reasonable pricing. The staff is extremely patient and showed me over 20 sarees until I found the perfect one. Best saree shop in the area.",
    rating: 5,
    tag: "Customer Service"
  },
  {
    id: 3,
    name: "Dr. Ananya Iyer",
    location: "Jaypee Greens",
    text: "I love their handloom collection. It’s hard to find genuine fabrics these days, but Vastra Kala never disappoints. A hidden gem right near the Jagat Farm circle.",
    rating: 5,
    tag: "Fabric Quality"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#FFF9F9] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16 space-y-4">
          <span className="text-[#800000] font-bold tracking-[0.4em] text-[10px] uppercase border-b-2 border-[#C5A059] pb-2">
            Voices of our Community
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#800000]">
            Trusted by the Women of <br /> <span className="text-[#C5A059]">Greater Noida</span>
          </h2>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-orange-50 relative group hover:shadow-2xl transition-all duration-500"
            >
              <Quote 
                className="absolute top-8 right-8 text-[#C5A059] opacity-10 group-hover:opacity-30 transition-opacity" 
                size={60} 
              />
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-[#800000]/5 text-[#800000] text-[9px] font-bold uppercase tracking-widest mb-6">
                  {item.tag}
                </span>

                <div className="flex gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#C5A059" className="text-[#C5A059]" />
                  ))}
                </div>

                <p className="text-[#2D4341] italic leading-relaxed mb-8 text-lg">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 bg-[#800000] rounded-full flex items-center justify-center text-[#C5A059] font-serif font-bold text-xl">
                    {item.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D4341] leading-none mb-1">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <MapPin size={10} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

  
        <div className="mt-20 text-center bg-[#800000] p-12 rounded-[3rem] text-white">
          <h3 className="text-2xl font-serif italic mb-4 text-[#C5A059]">Join our family of 5,000+ happy customers</h3>
          <p className="text-pink-100/70 mb-8 max-w-xl mx-auto">
            Experience the finest ethnic wear in Jagat Farm. Visit us today for a personalized draping session.
          </p>
          <button className="bg-[#C5A059] text-[#800000] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl">
            View New Arrivals
          </button>
        </div>
      </div>
    </section>
  );
}