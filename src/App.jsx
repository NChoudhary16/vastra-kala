import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials'; 
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white min-h-screen selection:bg-[#DE8F6E] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <Testimonials /> 
        <Contact />
      </main>
      <footer className="py-12 text-center text-[10px] tracking-[0.4em] uppercase text-gray-300">
        © 2026 Vastra Kala — Jagat Farm, Greater Noida
      </footer>
    </div>
  );
}

export default App;