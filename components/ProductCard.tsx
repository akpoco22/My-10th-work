
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105">
      <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-serif font-bold text-ivory">{product.name}</h3>
        <p className="text-gold-100 font-sans mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
