import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { mockProducts } from '../data/mockData';

const SearchBar = () => {
  const { language, t } = useLanguage();
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<typeof mockProducts>([]);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (query.length > 1) {
      const filteredProducts = mockProducts.filter(product => 
        product.name[language].toLowerCase().includes(query.toLowerCase()) ||
        product.description[language].toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredProducts);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query, language]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query)}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (productId: string) => {
    navigate(`/product/${productId}`);
    setShowSuggestions(false);
    setQuery('');
  };

  const clearSearch = () => {
    setQuery('');
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={searchContainerRef}>
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('searchPlaceholder')}
          className="w-full bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full py-3 pl-12 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 shadow-lg"
        />
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-300" />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-4 top-3.5"
          >
            <X className="h-5 w-5 text-gray-300 hover:text-white" />
          </button>
        )}
      </form>

      {/* Suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-20 mt-2 w-full bg-brand-darkBlue-800 rounded-lg shadow-xl border border-brand-darkBlue-700 max-h-96 overflow-y-auto">
          <ul>
            {suggestions.map((product) => (
              <li 
                key={product.id}
                className="hover:bg-brand-darkBlue-700 cursor-pointer transition-colors"
                onClick={() => handleSuggestionClick(product.id)}
              >
                <div className="flex items-center p-3">
                  <img 
                    src={product.image} 
                    alt={product.name[language]} 
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="ml-3">
                    <p className="text-white font-medium">{product.name[language]}</p>
                    <p className="text-brand-yellow-500">₹{product.price.toFixed(2)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;