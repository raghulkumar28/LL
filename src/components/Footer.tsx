import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-darkBlue-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <div className="text-brand-yellow-500 font-bold text-2xl">
                <span className="text-white">Liquid</span> Lite
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium cold-pressed oils made with traditional methods, bringing the authentic taste and health benefits directly from Tamil Nadu's farms to your kitchen.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="#" 
                className="hover:text-brand-yellow-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="hover:text-brand-yellow-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="hover:text-brand-yellow-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-yellow-500 transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-brand-yellow-500 transition-colors">
                  {t('products')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand-yellow-500 transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-yellow-500 transition-colors">
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="text-gray-300 hover:text-brand-yellow-500 transition-colors">
                  {t('trackOrder')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Tamil Nadu Street, Thanjavur, Tamil Nadu, India - 613001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-yellow-500 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-brand-yellow-500 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-yellow-500 flex-shrink-0" />
                <a href="mailto:info@liquidlite.com" className="text-gray-300 hover:text-brand-yellow-500 transition-colors">
                  info@liquidlite.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter to receive updates and special offers.
            </p>
            <form className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full p-2 rounded bg-brand-darkBlue-800 border border-brand-darkBlue-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500"
                />
              </div>
              <button 
                type="submit" 
                className="bg-brand-yellow-500 hover:bg-brand-yellow-600 text-brand-darkBlue-900 font-medium px-4 py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-brand-darkBlue-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Liquid Lite. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-brand-yellow-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-yellow-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-brand-yellow-500 transition-colors">
              Shipping Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;