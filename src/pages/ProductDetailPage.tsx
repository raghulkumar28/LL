import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ChevronLeft, Heart, Share2, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { mockProducts } from '../data/mockData';
import ProductGrid from '../components/ProductGrid';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [product, setProduct] = useState(mockProducts.find(p => p.id === id));
  const [relatedProducts, setRelatedProducts] = useState(
    mockProducts.filter(p => p.id !== id && p.category === product?.category).slice(0, 4)
  );
  
  useEffect(() => {
    // Update product when id changes
    setProduct(mockProducts.find(p => p.id === id));
    
    // Reset state
    setQuantity(1);
    setAdded(false);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);
  
  useEffect(() => {
    if (product) {
      setRelatedProducts(
        mockProducts.filter(p => p.id !== id && p.category === product.category).slice(0, 4)
      );
    }
  }, [product, id]);
  
  if (!product) {
    return (
      <div className="pt-24 pb-12 min-h-screen bg-brand-darkBlue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Product not found</h2>
          <Link 
            to="/products" 
            className="inline-flex items-center text-brand-yellow-500 hover:text-brand-yellow-600"
          >
            <ChevronLeft size={16} />
            <span>Back to products</span>
          </Link>
        </div>
      </div>
    );
  }
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setQuantity(value < 1 ? 1 : value);
  };
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-brand-darkBlue-900">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link 
            to="/products" 
            className="inline-flex items-center text-brand-yellow-500 hover:text-brand-yellow-600"
          >
            <ChevronLeft size={16} />
            <span>Back to products</span>
          </Link>
        </div>
        
        {/* Product Detail */}
        <div className="bg-brand-darkBlue-800 rounded-lg overflow-hidden shadow-xl border border-brand-darkBlue-700 mb-12">
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="w-full md:w-1/2">
              <div className="relative h-96 md:h-full bg-brand-darkBlue-850">
                <img 
                  src={product.image} 
                  alt={product.name[language]} 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </div>
            
            {/* Product Info */}
            <div className="w-full md:w-1/2 p-6 md:p-8">
              <h1 className="text-3xl font-bold text-white mb-2">
                {product.name[language]}
              </h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-brand-yellow-500">
                  ★★★★★
                </div>
                <span className="ml-2 text-gray-400 text-sm">(24 reviews)</span>
              </div>
              
              <p className="text-2xl font-bold text-brand-yellow-500 mb-4">
                ₹{product.price.toFixed(2)}
              </p>
              
              <div className="mb-6">
                <p className="text-gray-300 leading-relaxed">
                  {product.description[language]}
                </p>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-400 mb-2">Quantity:</p>
                <div className="flex items-center">
                  <button 
                    onClick={decrementQuantity}
                    className="w-10 h-10 flex items-center justify-center rounded-l bg-brand-darkBlue-700 text-white hover:bg-brand-darkBlue-600 transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 h-10 text-center bg-brand-darkBlue-700 text-white border-x border-brand-darkBlue-600"
                  />
                  <button 
                    onClick={incrementQuantity}
                    className="w-10 h-10 flex items-center justify-center rounded-r bg-brand-darkBlue-700 text-white hover:bg-brand-darkBlue-600 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded transition-colors ${
                    added 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-brand-darkBlue-700 hover:bg-brand-darkBlue-600 text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check size={18} />
                      <span>Added to Cart</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} />
                      <span>{t('addToCart')}</span>
                    </>
                  )}
                </button>
                <button className="flex-1 py-3 px-6 bg-brand-yellow-500 hover:bg-brand-yellow-600 text-brand-darkBlue-900 font-medium rounded transition-colors">
                  {t('buyNow')}
                </button>
              </div>
              
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Heart size={18} />
                  <span>Add to Wishlist</span>
                </button>
                <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Share2 size={18} />
                  <span>Share</span>
                </button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-brand-darkBlue-700">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="w-24 text-gray-400">Category:</span>
                  <span className="text-white">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="w-24 text-gray-400">Stock:</span>
                  <span className="text-white">{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="w-24 text-gray-400">Shipping:</span>
                  <span className="text-white">Free shipping on orders over ₹500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Description Tabs */}
        <div className="bg-brand-darkBlue-800 rounded-lg overflow-hidden shadow-lg border border-brand-darkBlue-700 mb-12">
          <div className="border-b border-brand-darkBlue-700">
            <div className="flex">
              <button className="px-6 py-3 font-medium text-brand-yellow-500 border-b-2 border-brand-yellow-500">
                Product Details
              </button>
              <button className="px-6 py-3 text-gray-400 hover:text-white transition-colors">
                Reviews (24)
              </button>
              <button className="px-6 py-3 text-gray-400 hover:text-white transition-colors">
                Shipping & Returns
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Product Description</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Our premium cold-pressed {product.name[language]} is extracted using traditional methods that have been passed down through generations. The oil extraction process begins with carefully selected high-quality seeds that are cleaned and dried naturally.
              </p>
              <p>
                The seeds are then crushed in a wooden 'chekku' (traditional cold press machine) which is operated by bullocks walking in circles. This slow extraction process ensures that the oil retains all its natural nutrients, flavor, and aroma without the use of heat that can destroy beneficial properties.
              </p>
              <p>
                Unlike refined oils that undergo extensive processing with chemicals, our cold-pressed oil is 100% natural, with no additives, preservatives, or artificial ingredients. The result is a pure, authentic oil with a rich flavor profile and maximum health benefits.
              </p>
            </div>
            
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Rich in essential nutrients and antioxidants</li>
              <li>Preserves natural flavor and aroma</li>
              <li>Free from chemicals and preservatives</li>
              <li>Supports traditional farming methods</li>
              <li>Better for overall health compared to refined oils</li>
            </ul>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">You May Also Like</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;