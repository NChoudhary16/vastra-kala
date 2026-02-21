import React from 'react';
import { MessageCircle } from 'lucide-react';
import heavy_banrasi from '../assets/heavy_banrasi.jpg'
import Kanjeevaram_Silk from '../assets/Kanjeevaram_Silk.jpg'
import Pure_Organza_Silk from '../assets/Pure_Organza_Silk.jpg'
const sarees = [
  { id: 1, name: "Heavy Bridal Banarasi", price: "15,500", img: heavy_banrasi },
  { id: 2, name: "Kanjeevaram Silk", price: "22,000", img: Kanjeevaram_Silk },
  { id: 3, name: "Designer Party Wear", price: "7,800", img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=400" },
  { id: 4, name: "Pure Organza Silk", price: "6,500", img: Pure_Organza_Silk },
];

export default function ProductGrid() {
  const sendWhatsApp = (name) => {
    const msg = encodeURIComponent(`Hi Vastra Kala, I saw the "${name}" on your website and would like to know more about it.`);
    window.open(`https://wa.me/917563087581?text=${msg}`, '_blank');
  };

  return (
    <section id="collection" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-serif text-center text-[#800000] mb-16 underline decoration-[#C5A059] underline-offset-8">Featured Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {sarees.map((s) => (
          <div key={s.id} className="bg-white p-4 rounded-xl border border-gray-100 hover:shadow-2xl transition-all">
            <img src={s.img} className="w-full h-72 object-cover rounded-lg mb-4" alt={s.name} />
            <h4 className="text-lg font-bold text-[#800000]">{s.name}</h4>
            <p className="text-gray-500 font-medium mt-1">₹{s.price}</p>
            <button 
              onClick={() => sendWhatsApp(s.name)}
              className="mt-4 w-full bg-[#25D366] text-white py-3 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition"
            >
              <MessageCircle size={16} /> Enquire on WhatsApp
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}