import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-12 min-h-screen bg-brand-darkBlue-900">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8">{t('contactUs')}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-brand-darkBlue-800 rounded-lg p-6 shadow-lg border border-brand-darkBlue-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="text-brand-yellow-500 mr-3" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Address</h4>
                    <p className="text-gray-300">
                      123 Tamil Nadu Street<br />
                      Thanjavur, Tamil Nadu<br />
                      India - 613001
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="text-brand-yellow-500 mr-3" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">
                      <a href="tel:+919876543210" className="hover:text-brand-yellow-500 transition-colors">
                        +91 98765 43210
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="text-brand-yellow-500 mr-3" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">
                      <a href="mailto:info@liquidlite.com" className="hover:text-brand-yellow-500 transition-colors">
                        info@liquidlite.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="text-brand-yellow-500 mr-3" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Business Hours</h4>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-brand-darkBlue-800 rounded-lg overflow-hidden shadow-lg border border-brand-darkBlue-700 h-80">
              {/* This would be replaced with an actual map embed */}
              <div className="w-full h-full bg-brand-darkBlue-850 flex items-center justify-center p-4">
                <div className="text-center">
                  <MapPin size={48} className="text-brand-yellow-500 mx-auto mb-3" />
                  <h4 className="text-white font-semibold mb-2">Our Location</h4>
                  <p className="text-gray-300">
                    Map of our Thanjavur location would appear here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <div className="bg-brand-darkBlue-800 rounded-lg p-6 border border-brand-darkBlue-700">
              <h3 className="text-lg font-semibold text-white mb-3">How can I track my order?</h3>
              <p className="text-gray-300">
                You can track your order by visiting the Track Order page and entering your order ID that was sent to you via email or SMS after your purchase.
              </p>
            </div>
            
            {/* FAQ 2 */}
            <div className="bg-brand-darkBlue-800 rounded-lg p-6 border border-brand-darkBlue-700">
              <h3 className="text-lg font-semibold text-white mb-3">What are your shipping charges?</h3>
              <p className="text-gray-300">
                We offer free shipping on all orders above ₹500. For orders below ₹500, a nominal shipping fee of ₹50 is charged.
              </p>
            </div>
            
            {/* FAQ 3 */}
            <div className="bg-brand-darkBlue-800 rounded-lg p-6 border border-brand-darkBlue-700">
              <h3 className="text-lg font-semibold text-white mb-3">How long does shipping take?</h3>
              <p className="text-gray-300">
                Orders are typically processed within 24-48 hours. Delivery time varies by location but generally takes 3-5 business days within Tamil Nadu and 5-7 business days for the rest of India.
              </p>
            </div>
            
            {/* FAQ 4 */}
            <div className="bg-brand-darkBlue-800 rounded-lg p-6 border border-brand-darkBlue-700">
              <h3 className="text-lg font-semibold text-white mb-3">What is your return policy?</h3>
              <p className="text-gray-300">
                We accept returns within 7 days of delivery if the product is damaged or does not meet our quality standards. Please contact our customer support team to initiate a return.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;