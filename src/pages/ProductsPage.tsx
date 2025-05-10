import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { useLanguage } from '../context/LanguageContext';
import { mockProducts } from '../data/mockData';
import { Product } from '../types';

const ProductsPage = () => {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  
  // Extract unique categories
  const categories = ['all', ...Array.from(new Set(mockProducts.map(p => p.category)))];
  
  // Filter products based on search query, category, and price range
  useEffect(() => {
    let result = [...mockProducts];
    
    // Search filter
    if (searchQuery) {
      result = result.filter(product => 
        product.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description[language].toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Price filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(result);
  }, [searchQuery, activeCategory, priceRange, language]);
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(e.target.value);
    setPriceRange(prev => {
      const newRange = [...prev] as [number, number];
      newRange[index] = value;
      return newRange;
    });
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-brand-darkBlue-900">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8">Our Products</h1>
        
        {/* Mobile filter toggle */}
        <div className="md:hidden mb-4">
          <button 
            onClick={toggleFilters}
            className="flex items-center justify-center w-full px-4 py-2 bg-brand-darkBlue-800 border border-brand-darkBlue-700 rounded text-white"
          >
            <SlidersHorizontal size={18} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters - Sidebar */}
          <div className={`w-full md:w-64 md:block ${showFilters ? 'block' : 'hidden'}`}>
            <div className="bg-brand-darkBlue-800 rounded-lg p-5 sticky top-24 border border-brand-darkBlue-700">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Filter size={18} className="mr-2" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`block w-full text-left px-3 py-2 rounded text-sm ${
                        activeCategory === category
                          ? 'bg-brand-yellow-500 text-brand-darkBlue-900 font-medium'
                          : 'bg-brand-darkBlue-700 text-gray-300 hover:bg-brand-darkBlue-600'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Price Range</h3>
                <div className="mb-2 flex justify-between text-gray-400 text-sm">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
                <div className="space-y-4 px-1">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(e, 0)}
                    className="w-full accent-brand-yellow-500"
                  />
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(e, 1)}
                    className="w-full accent-brand-yellow-500"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-brand-darkBlue-800 rounded-lg border border-brand-darkBlue-700">
                <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
                <p className="text-gray-400">Try adjusting your filters or search term</p>
              </div>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;