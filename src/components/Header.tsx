import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { getCartItemCount } = useCart();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission
    console.log('Search for:', searchQuery);
    // Redirect to search results page
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-darkBlue-900 shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-brand-yellow-500 font-bold text-2xl">
              <span className="text-white">Liquid</span> Lite
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`transition-all duration-200 hover:text-brand-yellow-500 ${
                location.pathname === '/' ? 'text-brand-yellow-500' : 'text-white'
              }`}
            >
              {t('home')}
            </Link>
            <Link 
              to="/products" 
              className={`transition-all duration-200 hover:text-brand-yellow-500 ${
                location.pathname === '/products' ? 'text-brand-yellow-500' : 'text-white'
              }`}
            >
              {t('products')}
            </Link>
            <Link 
              to="/about" 
              className={`transition-all duration-200 hover:text-brand-yellow-500 ${
                location.pathname === '/about' ? 'text-brand-yellow-500' : 'text-white'
              }`}
            >
              {t('about')}
            </Link>
            <Link 
              to="/contact" 
              className={`transition-all duration-200 hover:text-brand-yellow-500 ${
                location.pathname === '/contact' ? 'text-brand-yellow-500' : 'text-white'
              }`}
            >
              {t('contact')}
            </Link>
            <Link 
              to="/track-order" 
              className={`transition-all duration-200 hover:text-brand-yellow-500 ${
                location.pathname === '/track-order' ? 'text-brand-yellow-500' : 'text-white'
              }`}
            >
              {t('trackOrder')}
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search - Desktop */}
            <div className="hidden md:block relative">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  className="bg-brand-darkBlue-800 text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 w-48 transition-all duration-300 focus:w-64"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </form>
            </div>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-brand-darkBlue-800 transition-colors"
              aria-label="Toggle language"
            >
              <span className="font-medium">
                {language === 'en' ? 'தமிழ்' : 'EN'}
              </span>
            </button>

            {/* Cart */}
            <Link to="/checkout" className="relative p-2 rounded-full hover:bg-brand-darkBlue-800 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-yellow-500 text-brand-darkBlue-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {getCartItemCount()}
                </span>
              )}
            </Link>

            {/* User Account */}
            <Link to="/login" className="p-2 rounded-full hover:bg-brand-darkBlue-800 transition-colors">
              <User className="h-5 w-5" />
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-brand-darkBlue-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-brand-darkBlue-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className={`mt-4 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              className="bg-brand-darkBlue-800 text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 w-full"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </form>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mt-4 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-3 pb-4">
            <Link 
              to="/" 
              className={`transition-all duration-200 hover:text-brand-yellow-500 px-2 py-1.5 ${
                location.pathname === '/' ? 'text-brand-yellow-500' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link 
              to="/products" 
              className={`transition-all duration-200 hover:text-brand-yellow-500 px-2 py-1.5 ${
                location.pathname === '/products' ? 'text-brand-yellow-500' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('products')}
            </Link>
            <Link 
              to="/about" 
              className={`transition-all duration-200 hover:text-brand-yellow-500 px-2 py-1.5 ${
                location.pathname === '/about' ? 'text-brand-yellow-500' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('about')}
            </Link>
            <Link 
              to="/contact" 
              className={`transition-all duration-200 hover:text-brand-yellow-500 px-2 py-1.5 ${
                location.pathname === '/contact' ? 'text-brand-yellow-500' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact')}
            </Link>
            <Link 
              to="/track-order" 
              className={`transition-all duration-200 hover:text-brand-yellow-500 px-2 py-1.5 ${
                location.pathname === '/track-order' ? 'text-brand-yellow-500' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('trackOrder')}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;