
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] text-white">
      <div className="absolute inset-0 bg-black">
        <img 
          src="https://picsum.photos/1920/1080?random=1&grayscale&blur=2" 
          alt="Elegant Jewelry Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-ivory mb-4 leading-tight">
          Timeless Elegance, Crafted in Gold
        </h1>
        <p className="text-lg md:text-xl font-sans text-gold-100 max-w-2xl mb-8">
          Discover our exclusive collection of VVS diamond jewelry, with bespoke engraving services for a truly personal touch.
        </p>
        <a 
          href="#products" 
          className="bg-gold-500 text-rich-black font-bold py-3 px-8 rounded-full hover:bg-gold-300 transition-all duration-300 transform hover:scale-105"
        >
          Explore Collections
        </a>
      </div>
    </section>
  );
};

export default Hero;
