import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { language, t } = useLanguage();
  const { addToCart } = useCart();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div 
      className="h-96 w-full perspective bg-transparent cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative preserve-3d w-full h-full transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front side */}
        <div className="absolute backface-hidden w-full h-full rounded-lg overflow-hidden bg-brand-darkBlue-800 shadow-lg">
          <div className="relative h-64 overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name[language]} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            {product.featured && (
              <div className="absolute top-3 left-3 bg-brand-yellow-500 text-brand-darkBlue-900 text-xs font-bold px-3 py-1 rounded-full">
                Featured
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{product.name[language]}</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-brand-yellow-500 font-bold">₹{product.price.toFixed(2)}</p>
              <div className="flex space-x-2">
                <button 
                  onClick={handleAddToCart}
                  className="p-2 rounded-full bg-brand-darkBlue-700 hover:bg-brand-darkBlue-600 transition-colors"
                  aria-label="Add to cart"
                >
                  <ShoppingCart size={16} />
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="p-2 rounded-full bg-brand-darkBlue-700 hover:bg-brand-darkBlue-600 transition-colors"
                  aria-label="View product"
                >
                  <Eye size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute backface-hidden rotate-y-180 w-full h-full rounded-lg bg-brand-darkBlue-800 shadow-lg p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">{product.name[language]}</h3>
            <p className="text-gray-300 text-sm">
              {product.description[language]}
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-brand-yellow-500 font-bold">₹{product.price.toFixed(2)}</p>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={handleAddToCart}
                className="py-2 px-4 bg-brand-darkBlue-700 hover:bg-brand-darkBlue-600 transition-colors rounded flex items-center justify-center space-x-2 text-sm"
              >
                <ShoppingCart size={16} />
                <span>{t('addToCart')}</span>
              </button>
              <Link 
                to={`/product/${product.id}`}
                className="py-2 px-4 bg-brand-yellow-500 hover:bg-brand-yellow-600 transition-colors rounded text-brand-darkBlue-900 font-medium text-center text-sm"
              >
                {t('buyNow')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;