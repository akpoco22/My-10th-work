import React, { useState } from 'react';
import { SparkleIcon } from './icons/SparkleIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#products', label: 'Collections' },
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-rich-black/80 backdrop-blur-sm text-ivory sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <SparkleIcon className="w-8 h-8 text-gold-500" />
          <span className="text-2xl font-serif font-bold tracking-wider text-ivory">AURA</span>
        </a>

        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="font-sans text-sm uppercase tracking-widest hover:text-gold-500 transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </nav>
        
        <button className="hidden md:block bg-gold-500 text-rich-black font-bold py-2 px-4 rounded-full hover:bg-gold-300 transition-all duration-300 text-sm">
          Book Appointment
        </button>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-ivory">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-rich-black">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="font-sans text-sm uppercase tracking-widest hover:text-gold-500 transition-colors duration-300">
                {link.label}
              </a>
            ))}
            <button className="bg-gold-500 text-rich-black font-bold py-2 px-6 rounded-full hover:bg-gold-300 transition-all duration-300 text-sm">
              Book Appointment
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;