
import React from 'react';

const PricingTiers: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-rich-black">For Every Collector</h2>
          <p className="text-jet mt-2">Whether a personal treasure or a business collection, we have a tier for you.</p>
          <div className="mt-4 w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Retail Tier */}
          <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-gold-500 flex flex-col">
            <h3 className="text-3xl font-serif font-bold text-rich-black mb-4">Retail Clients</h3>
            <p className="text-jet mb-6 flex-grow">
              Experience the pinnacle of luxury with our curated collections. Perfect for engagements, anniversaries, or a timeless gift to yourself. Each piece comes with a certificate of authenticity and our lifetime quality guarantee.
            </p>
            <a href="#products" className="mt-auto text-center bg-rich-black text-white font-bold py-3 px-6 rounded-full hover:bg-jet transition-colors duration-300">
              Shop The Collection
            </a>
          </div>

          {/* Wholesale Tier */}
          <div className="bg-rich-black text-white rounded-lg shadow-xl p-8 border-t-4 border-gold-500 flex flex-col">
            <h3 className="text-3xl font-serif font-bold text-ivory mb-4">Wholesale Partners</h3>
            <p className="text-gold-100 mb-6 flex-grow">
              Elevate your business with our exquisite jewelry. We offer exclusive wholesale pricing, custom design collaborations, and dedicated support for our partners. Apply today to join our network of elite jewelers.
            </p>
            <a href="#contact" className="mt-auto text-center bg-gold-500 text-rich-black font-bold py-3 px-6 rounded-full hover:bg-gold-300 transition-colors duration-300">
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
