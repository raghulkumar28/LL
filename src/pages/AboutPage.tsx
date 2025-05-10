import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-12 min-h-screen bg-brand-darkBlue-900">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-16 h-96">
          <div className="absolute inset-0 bg-brand-darkBlue-950 bg-opacity-60 z-10"></div>
          <img 
            src="https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Traditional Oil Press" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('ourStory')}</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Bringing traditional cold-pressed oils to your home with a blend of heritage and innovation.
            </p>
          </div>
        </div>
        
        {/* Our Mission */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  At Liquid Lite, our mission is to revive and preserve the traditional methods of oil extraction that have been practiced in Tamil Nadu for centuries. We believe that the ancient wisdom of our ancestors holds the key to a healthier lifestyle in today's fast-paced world.
                </p>
                <p>
                  We are committed to providing pure, chemical-free oils that retain all their natural nutrients and flavors. By supporting local farmers and traditional oil pressing techniques, we aim to create a sustainable ecosystem that benefits everyone - from the farmers who grow the crops to the customers who enjoy our products.
                </p>
                <p>
                  Our goal is not just to sell products, but to educate our community about the benefits of traditional cold-pressed oils and the importance of choosing natural, minimally processed foods.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Traditional farming" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Process */}
        <div className="mb-16 bg-brand-darkBlue-800 rounded-xl p-8 shadow-lg border border-brand-darkBlue-700">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Our Traditional Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="text-center">
              <div className="relative w-20 h-20 bg-brand-yellow-500 rounded-full flex items-center justify-center text-brand-darkBlue-900 font-bold text-xl mx-auto mb-4">
                1
                <div className="absolute top-1/2 left-full w-full h-1 bg-brand-yellow-500 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Sourcing</h3>
              <p className="text-gray-300">
                We source high-quality seeds from local farmers who practice sustainable agriculture without chemical pesticides.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="relative w-20 h-20 bg-brand-yellow-500 rounded-full flex items-center justify-center text-brand-darkBlue-900 font-bold text-xl mx-auto mb-4">
                2
                <div className="absolute top-1/2 left-full w-full h-1 bg-brand-yellow-500 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Preparation</h3>
              <p className="text-gray-300">
                The seeds are carefully cleaned, dried in natural sunlight, and prepared for the cold-pressing process.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="relative w-20 h-20 bg-brand-yellow-500 rounded-full flex items-center justify-center text-brand-darkBlue-900 font-bold text-xl mx-auto mb-4">
                3
                <div className="absolute top-1/2 left-full w-full h-1 bg-brand-yellow-500 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Extraction</h3>
              <p className="text-gray-300">
                Using wooden 'chekku' or stone grinders, we extract oil at low temperatures to preserve all natural properties.
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-yellow-500 rounded-full flex items-center justify-center text-brand-darkBlue-900 font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Bottling</h3>
              <p className="text-gray-300">
                The freshly pressed oil is carefully filtered and bottled without additives or preservatives.
              </p>
            </div>
          </div>
        </div>
        
        {/* Video Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-10">See Our Process in Action</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
            {/* Placeholder for video embed */}
            <div className="w-full h-96 bg-brand-darkBlue-800 flex items-center justify-center border border-brand-darkBlue-700">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-brand-yellow-500 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-brand-yellow-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </div>
                <p className="text-gray-300 text-lg">Watch our traditional oil extraction process</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-brand-darkBlue-800 rounded-lg overflow-hidden shadow-lg border border-brand-darkBlue-700">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Founder" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">Rajesh Kumar</h3>
                <p className="text-brand-yellow-500 mb-3">Founder & CEO</p>
                <p className="text-gray-300">
                  With over 20 years of experience in traditional oil extraction, Rajesh's passion for preserving heritage methods led to the creation of Liquid Lite.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-brand-darkBlue-800 rounded-lg overflow-hidden shadow-lg border border-brand-darkBlue-700">
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Operations Manager" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">Priya Lakshmi</h3>
                <p className="text-brand-yellow-500 mb-3">Operations Manager</p>
                <p className="text-gray-300">
                  Priya ensures that our production maintains the highest quality standards while honoring traditional techniques.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-brand-darkBlue-800 rounded-lg overflow-hidden shadow-lg border border-brand-darkBlue-700">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Farmer Relations" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">Karthik Mani</h3>
                <p className="text-brand-yellow-500 mb-3">Farmer Relations</p>
                <p className="text-gray-300">
                  Karthik works directly with our network of farmers to ensure sustainable practices and fair compensation.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-brand-darkBlue-800 to-brand-darkBlue-700 rounded-xl p-8 md:p-12 text-center shadow-xl border border-brand-darkBlue-600">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Journey</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of our mission to revive traditional cold-pressed oils and support sustainable farming practices. Try our products today and taste the difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a href="/products" className="bg-brand-yellow-500 hover:bg-brand-yellow-600 text-brand-darkBlue-900 font-medium px-6 py-3 rounded-md transition-colors">
              Shop Our Products
            </a>
            <a href="/contact" className="bg-transparent hover:bg-brand-darkBlue-600 text-white border border-brand-yellow-500 font-medium px-6 py-3 rounded-md transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;