
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-ivory p-8 rounded-lg shadow-lg text-center transition-transform transform hover:-translate-y-2 duration-300">
      <div className="flex justify-center mb-4">
        {service.icon}
      </div>
      <h3 className="text-2xl font-serif font-semibold text-rich-black mb-2">{service.title}</h3>
      <p className="text-jet font-sans">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
