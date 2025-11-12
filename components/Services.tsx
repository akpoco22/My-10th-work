
import React from 'react';
import { Service } from '../types';
import ServiceCard from './ServiceCard';
import { GoldBarIcon } from './icons/GoldBarIcon';
import { DiamondIcon } from './icons/DiamondIcon';
import { EngravingIcon } from './icons/EngravingIcon';


const servicesData: Service[] = [
  {
    id: 1,
    title: 'Pure Gold',
    description: 'We exclusively use 18k and 24k gold, ensuring the highest purity and a lasting, brilliant shine for every piece.',
    icon: <GoldBarIcon className="w-12 h-12 text-gold-500" />
  },
  {
    id: 2,
    title: 'VVS Diamonds',
    description: 'Our collection features only VVS (Very, Very Slightly Included) clarity diamonds, offering exceptional brilliance and fire.',
    icon: <DiamondIcon className="w-12 h-12 text-gold-500" />
  },
  {
    id: 3,
    title: 'Bespoke Engraving',
    description: 'Personalize your jewelry with our master engraving service. Add initials, dates, or custom designs for a unique touch.',
    icon: <EngravingIcon className="w-12 h-12 text-gold-500" />
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-rich-black">Our Commitment to Quality</h2>
          <p className="text-jet mt-2">The pillars of excellence that define every Aura jewel.</p>
          <div className="mt-4 w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
