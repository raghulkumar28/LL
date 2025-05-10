import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

type ProductGridProps = {
  products: Product[];
  title?: string;
};

const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  return (
    <div className="py-12">
      {title && (
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          <span className="relative">
            {title}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-brand-yellow-500"></span>
          </span>
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;