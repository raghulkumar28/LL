import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'en' | 'ta';

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    home: 'Home',
    products: 'Products',
    about: 'About Us',
    contact: 'Contact Us',
    trackOrder: 'Track Order',
    login: 'Login',
    searchPlaceholder: 'Search for oils...',
    addToCart: 'Add to Cart',
    buyNow: 'Buy Now',
    ourStory: 'Our Story',
    contactUs: 'Contact Us',
    thangaEnna: 'Thanga Enna (Groundnut Oil)',
    nallaEnna: 'Nalla Enna (Gingelly Oil)',
    kalalaEnna: 'Kalala Enna (Coconut Oil)',
    natuSakaara: 'Natu Sakaara (Natural Sugar)',
    coffeeOil: 'Coffee Oil',
    mustardOil: 'Mustard Oil',
    castorOil: 'Castor Oil',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    district: 'District',
    message: 'Message',
    submit: 'Submit',
    // Product descriptions
    thangaEnnaDesc: 'Premium cold-pressed groundnut oil with rich flavor and nutrients',
    nallaEnnaDesc: 'Traditional gingelly oil processed in wooden churner for authentic taste',
    kalalaEnnaDesc: 'Pure coconut oil extracted without heat for maximum benefits',
    natuSakaaraDesc: 'Organic jaggery made from sugarcane with no chemicals',
  },
  ta: {
    home: 'முகப்பு',
    products: 'பொருட்கள்',
    about: 'எங்களைப் பற்றி',
    contact: 'தொடர்பு கொள்ள',
    trackOrder: 'ஆர்டரைத் தடமறியவும்',
    login: 'உள்நுழைய',
    searchPlaceholder: 'எண்ணெய்களை தேடுங்கள்...',
    addToCart: 'கார்ட்டில் சேர்',
    buyNow: 'இப்போது வாங்கு',
    ourStory: 'எங்கள் கதை',
    contactUs: 'எங்களை தொடர்பு கொள்ள',
    thangaEnna: 'தங்க எண்ணெய் (நிலக்கடலை எண்ணெய்)',
    nallaEnna: 'நல்லெண்ணெய் (எள் எண்ணெய்)',
    kalalaEnna: 'கலாலா எண்ணெய் (தேங்காய் எண்ணெய்)',
    natuSakaara: 'நாட்டு சக்கரை (இயற்கை சர்க்கரை)',
    coffeeOil: 'காபி எண்ணெய்',
    mustardOil: 'கடுகு எண்ணெய்',
    castorOil: 'ஆமணக்கு எண்ணெய்',
    name: 'பெயர்',
    email: 'மின்னஞ்சல்',
    phone: 'தொலைபேசி',
    district: 'மாவட்டம்',
    message: 'செய்தி',
    submit: 'சமர்ப்பிக்கவும்',
    // Product descriptions in Tamil
    thangaEnnaDesc: 'சத்துக்கள் நிறைந்த மரபுசார் முறையில் தயாரிக்கப்பட்ட நிலக்கடலை எண்ணெய்',
    nallaEnnaDesc: 'மரத்தில் ஆட்டி எடுத்த சுத்தமான எள் எண்ணெய்',
    kalalaEnnaDesc: 'வெப்பம் இல்லாமல் பிழிந்த தூய தேங்காய் எண்ணெய்',
    natuSakaaraDesc: 'கரும்பில் இருந்து எடுக்கப்பட்ட இயற்கை கருப்பட்டி',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  const t = (key: string): string => {
    // @ts-ignore - We're dynamically accessing the translations
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};