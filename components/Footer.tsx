import React from 'react';
import { SparkleIcon } from './icons/SparkleIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rich-black text-gold-100">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <SparkleIcon className="w-8 h-8 text-gold-500" />
              <span className="text-2xl font-serif font-bold tracking-wider text-ivory">AURA</span>
            </a>
            <p className="max-w-md">
              Crafting memories in gold and diamond. Aura Jewels is dedicated to providing timeless pieces for life's most precious moments.
            </p>
          </div>
          <div>
            <h4 className="font-bold font-serif text-lg text-ivory mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-gold-500">Collections</a></li>
              <li><a href="#services" className="hover:text-gold-500">Our Services</a></li>
              <li><a href="#pricing" className="hover:text-gold-500">Pricing Tiers</a></li>
              <li><a href="#testimonials" className="hover:text-gold-500">Testimonials</a></li>
              <li><a href="#" className="hover:text-gold-500">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold font-serif text-lg text-ivory mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:contact@aurajewels.com" className="hover:text-gold-500">contact@aurajewels.com</a></li>
              <li><a href="tel:1234567890" className="hover:text-gold-500">(123) 456-7890</a></li>
              <li><p>123 Jewelery Lane, New York, NY</p></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gold-700/50 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Aura Jewels. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;