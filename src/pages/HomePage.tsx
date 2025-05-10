import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import { useLanguage } from '../context/LanguageContext';
import { mockProducts } from '../data/mockData';

const HomePage = () => {
  const { t } = useLanguage();
  
  // Filter featured products
  const featuredProducts = mockProducts.filter(product => product.featured);

  return (
    <div>
      <HeroSection />
      
      <div className="container mx-auto px-4 py-12">
        {/* Featured Products Section */}
        <ProductGrid
          products={featuredProducts}
          title="Featured Products"
        />
        
        {/* Our Process Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            <span className="relative">
              Our Traditional Process
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-brand-yellow-500"></span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-brand-darkBlue-800 rounded-lg p-6 text-center transform transition-all duration-300 hover:translate-y-[-10px] border border-brand-darkBlue-700">
              <div className="w-16 h-16 bg-brand-yellow-500 rounded-full flex items-center justify-center text-brand-darkBlue-900 font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Handpicked Ingredients</h3>
              <p className="text-gray-300">
                We carefully select the highest quality seeds from trusted local farmers in Tamil Nadu.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-brand-darkBlue-800 rounded-lg p-6 text-center transform transition-all duration-300 hover:translate-y-[-10px] border border-brand-darkBlue-700">
              <div className="w-16 h-16 bg-brand-yellow-500 rounded-full flex items-center justify-center text-brand-darkBlue-900 font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Traditional Cold Press</h3>
              <p className="text-gray-300">
                Our oils are pressed in wooden 'chekku' (cold press machine) using traditional methods.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-brand-darkBlue-800 rounded-lg p-6 text-center transform transition-all duration-300 hover:translate-y-[-10px] border border-brand-darkBlue-700">
              <div className="w-16 h-16 bg-brand-yellow-500 rounded-full flex items-center justify-center text-brand-darkBlue-900 font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Pure & Natural</h3>
              <p className="text-gray-300">
                No chemicals, preservatives, or additives - just 100% pure cold-pressed goodness.
              </p>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            <span className="relative">
              Customer Stories
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-brand-yellow-500"></span>
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-brand-darkBlue-800 rounded-lg p-6 border border-brand-darkBlue-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-yellow-500 rounded-full flex items-center justify-center text-brand-darkBlue-900 font-bold">
                  RS
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Rajesh S.</h4>
                  <p className="text-gray-400 text-sm">Chennai</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The groundnut oil brings back memories of my childhood. Pure taste with no additives, just like my grandmother used to make."
              </p>
              <div className="mt-4 flex text-brand-yellow-500">
                ★★★★★
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-brand-darkBlue-800 rounded-lg p-6 border border-brand-darkBlue-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-yellow-500 rounded-full flex items-center justify-center text-brand-darkBlue-900 font-bold">
                  PL
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Priya L.</h4>
                  <p className="text-gray-400 text-sm">Coimbatore</p>
                </div>
              </div>
              <p className="text-gray-300">
                "I switched to Liquid Lite's coconut oil for both cooking and hair care. The quality is exceptional and the aroma is divine."
              </p>
              <div className="mt-4 flex text-brand-yellow-500">
                ★★★★★
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-brand-darkBlue-800 rounded-lg p-6 border border-brand-darkBlue-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-yellow-500 rounded-full flex items-center justify-center text-brand-darkBlue-900 font-bold">
                  KM
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Karthik M.</h4>
                  <p className="text-gray-400 text-sm">Madurai</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The natural sugar is a healthier alternative to refined sugar. My family loves the rich flavor it adds to our traditional sweets."
              </p>
              <div className="mt-4 flex text-brand-yellow-500">
                ★★★★★
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-brand-darkBlue-800 to-brand-darkBlue-700 rounded-xl p-8 md:p-12 text-center shadow-xl border border-brand-darkBlue-600">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience Traditional Goodness</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of happy customers who have made the switch to healthier, traditional cold-pressed oils.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <a href="/products" className="bg-brand-yellow-500 hover:bg-brand-yellow-600 text-brand-darkBlue-900 font-medium px-6 py-3 rounded-md transition-colors">
                Shop Now
              </a>
              <a href="/about" className="bg-transparent hover:bg-brand-darkBlue-600 text-white border border-brand-yellow-500 font-medium px-6 py-3 rounded-md transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;