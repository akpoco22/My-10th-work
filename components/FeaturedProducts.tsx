
import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'The Solitaire',
    description: 'A classic 2-carat VVS1 diamond ring set in 18k white gold.',
    imageUrl: 'https://picsum.photos/400/500?random=10'
  },
  {
    id: 2,
    name: 'Eternity Band',
    description: 'An endless circle of brilliant-cut diamonds, symbolizing eternal love.',
    imageUrl: 'https://picsum.photos/400/500?random=11'
  },
  {
    id: 3,
    name: 'Gold Heirloom Locket',
    description: 'A hand-engraved 24k gold locket, destined to be passed down.',
    imageUrl: 'https://picsum.photos/400/500?random=12'
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-ivory">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-rich-black">Featured Collection</h2>
          <p className="text-jet mt-2">Handpicked pieces that define luxury and craftsmanship.</p>
          <div className="mt-4 w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mockProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
