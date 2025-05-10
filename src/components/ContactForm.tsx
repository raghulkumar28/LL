import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ContactFormData, District } from '../types';

const districts: District[] = [
  { value: 'thanjavur', label: { en: 'Thanjavur', ta: 'தஞ்சாவூர்' } },
  { value: 'madurai', label: { en: 'Madurai', ta: 'மதுரை' } },
  { value: 'chennai', label: { en: 'Chennai', ta: 'சென்னை' } },
  { value: 'coimbatore', label: { en: 'Coimbatore', ta: 'கோயம்புத்தூர்' } },
  { value: 'trichy', label: { en: 'Trichy', ta: 'திருச்சி' } },
  { value: 'salem', label: { en: 'Salem', ta: 'சேலம்' } },
];

const ContactForm = () => {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    district: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      console.log('Form submitted:', formData);
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          district: '',
          message: '',
        });
        setStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-brand-darkBlue-800 rounded-lg p-6 shadow-lg border border-brand-darkBlue-700 transform transition-all duration-500 hover:shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-6">{t('contactUs')}</h3>
      
      {status === 'success' ? (
        <div className="text-center py-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
          <p className="text-gray-300">
            Thank you for contacting us. We'll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">{t('name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-brand-darkBlue-900 border border-brand-darkBlue-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:border-transparent transition-colors"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">{t('email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-brand-darkBlue-900 border border-brand-darkBlue-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:border-transparent transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-300 mb-2">{t('phone')}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-brand-darkBlue-900 border border-brand-darkBlue-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:border-transparent transition-colors"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="district" className="block text-gray-300 mb-2">{t('district')}</label>
            <select
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full bg-brand-darkBlue-900 border border-brand-darkBlue-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:border-transparent transition-colors"
              required
            >
              <option value="">-- Select District --</option>
              {districts.map((district) => (
                <option key={district.value} value={district.value}>
                  {district.label[language]}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">{t('message')}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-brand-darkBlue-900 border border-brand-darkBlue-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:border-transparent transition-colors resize-none"
              required
            ></textarea>
          </div>
          
          <div className="pt-3">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`w-full bg-brand-yellow-500 hover:bg-brand-yellow-600 text-brand-darkBlue-900 font-medium py-3 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow-500 ${
                status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {status === 'submitting' ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-brand-darkBlue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                t('submit')
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;