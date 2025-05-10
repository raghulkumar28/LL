import { Product, District } from '../types';

export const mockProducts: Product[] = [
  {
    id: 'thanga-enna',
    name: {
      en: 'Thanga Enna (Groundnut Oil)',
      ta: 'தங்க எண்ணெய் (நிலக்கடலை எண்ணெய்)'
    },
    description: {
      en: 'Premium cold-pressed groundnut oil with rich flavor and nutrients. Made using traditional wooden churner.',
      ta: 'சத்துக்கள் நிறைந்த மரபுசார் முறையில் தயாரிக்கப்பட்ட நிலக்கடலை எண்ணெய்'
    },
    price: 340,
    image: 'https://images.pexels.com/photos/4198370/pexels-photo-4198370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'oil',
    stock: 50,
    featured: true
  },
  {
    id: 'nalla-enna',
    name: {
      en: 'Nalla Enna (Gingelly Oil)',
      ta: 'நல்லெண்ணெய் (எள் எண்ணெய்)'
    },
    description: {
      en: 'Traditional gingelly oil processed in wooden churner for authentic taste and health benefits.',
      ta: 'மரத்தில் ஆட்டி எடுத்த சுத்தமான எள் எண்ணெய்'
    },
    price: 420,
    image: 'https://images.pexels.com/photos/10580198/pexels-photo-10580198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'oil',
    stock: 45,
    featured: true
  },
  {
    id: 'kalala-enna',
    name: {
      en: 'Kalala Enna (Coconut Oil)',
      ta: 'கலாலா எண்ணெய் (தேங்காய் எண்ணெய்)'
    },
    description: {
      en: 'Pure coconut oil extracted without heat for maximum benefits. Perfect for cooking and hair care.',
      ta: 'வெப்பம் இல்லாமல் பிழிந்த தூய தேங்காய் எண்ணெய்'
    },
    price: 380,
    image: 'https://images.pexels.com/photos/3192343/pexels-photo-3192343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'oil',
    stock: 35,
    featured: true
  },
  {
    id: 'natu-sakaara',
    name: {
      en: 'Natu Sakaara (Natural Sugar)',
      ta: 'நாட்டு சக்கரை (இயற்கை சர்க்கரை)'
    },
    description: {
      en: 'Organic jaggery made from sugarcane with no chemicals. Rich in iron and minerals.',
      ta: 'கரும்பில் இருந்து எடுக்கப்பட்ட இயற்கை கருப்பட்டி'
    },
    price: 120,
    image: 'https://images.pexels.com/photos/8412415/pexels-photo-8412415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'sweetener',
    stock: 100,
    featured: true
  },
  {
    id: 'coffee-oil',
    name: {
      en: 'Coffee Oil',
      ta: 'காபி எண்ணெய்'
    },
    description: {
      en: 'Specialty coffee bean oil with rich aroma and antioxidant properties. Great for skin care.',
      ta: 'மணமிக்க காபி விதையிலிருந்து எடுக்கப்பட்ட சிறப்பு எண்ணெய்'
    },
    price: 520,
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'specialty',
    stock: 25
  },
  {
    id: 'mustard-oil',
    name: {
      en: 'Mustard Oil',
      ta: 'கடுகு எண்ணெய்'
    },
    description: {
      en: 'Cold-pressed mustard oil with strong flavor and medicinal properties. Traditional remedy for joint pain.',
      ta: 'மூட்டு வலிக்கு நல்ல மருந்தாக பயன்படும் கடுகு எண்ணெய்'
    },
    price: 290,
    image: 'https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'oil',
    stock: 40
  },
  {
    id: 'castor-oil',
    name: {
      en: 'Castor Oil',
      ta: 'ஆமணக்கு எண்ணெய்'
    },
    description: {
      en: 'Pure cold-pressed castor oil for hair growth and skin care. Traditional medicinal remedy.',
      ta: 'முடி வளர்ச்சிக்கும் தோல் பராமரிப்புக்கும் சிறந்த ஆமணக்கு எண்ணெய்'
    },
    price: 260,
    image: 'https://images.pexels.com/photos/8446283/pexels-photo-8446283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'specialty',
    stock: 30
  },
  {
    id: 'palm-jaggery',
    name: {
      en: 'Palm Jaggery',
      ta: 'பனை வெல்லம்'
    },
    description: {
      en: 'Traditional palm jaggery made from the extract of palm trees. Rich in nutrients and natural sweetness.',
      ta: 'பனை மரத்திலிருந்து எடுக்கப்பட்ட இயற்கை இனிப்பு'
    },
    price: 180,
    image: 'https://images.pexels.com/photos/5648422/pexels-photo-5648422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'sweetener',
    stock: 55
  }
];

export const tamilNaduDistricts: District[] = [
  { value: 'thanjavur', label: { en: 'Thanjavur', ta: 'தஞ்சாவூர்' } },
  { value: 'chennai', label: { en: 'Chennai', ta: 'சென்னை' } },
  { value: 'coimbatore', label: { en: 'Coimbatore', ta: 'கோயம்புத்தூர்' } },
  { value: 'madurai', label: { en: 'Madurai', ta: 'மதுரை' } },
  { value: 'salem', label: { en: 'Salem', ta: 'சேலம்' } },
  { value: 'trichy', label: { en: 'Trichy', ta: 'திருச்சி' } },
  { value: 'tirunelveli', label: { en: 'Tirunelveli', ta: 'திருநெல்வேலி' } },
  { value: 'vellore', label: { en: 'Vellore', ta: 'வேலூர்' } },
  { value: 'erode', label: { en: 'Erode', ta: 'ஈரோடு' } },
  { value: 'tiruppur', label: { en: 'Tiruppur', ta: 'திருப்பூர்' } }
];