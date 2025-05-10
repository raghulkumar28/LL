import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import OrderTracker from '../components/OrderTracker';
import { Search } from 'lucide-react';

const OrderTrackingPage = () => {
  const { t } = useLanguage();
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'found' | 'not-found'>('idle');
  const [orderStatus, setOrderStatus] = useState<'pending' | 'packed' | 'shipped' | 'delivered'>('pending');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderId.trim()) return;
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      // For demo purposes, we'll use a simple logic to determine order status
      // In a real app, this would be fetched from the backend
      if (orderId.startsWith('LQLT')) {
        const lastChar = orderId.charAt(orderId.length - 1);
        if (lastChar === '1') setOrderStatus('packed');
        else if (lastChar === '2') setOrderStatus('shipped');
        else if (lastChar === '3') setOrderStatus('delivered');
        else setOrderStatus('pending');
        
        setStatus('found');
      } else {
        setStatus('not-found');
      }
    }, 1000);
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-brand-darkBlue-900">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8">{t('trackOrder')}</h1>
        
        <div className="max-w-3xl mx-auto">
          {/* Track Order Form */}
          <div className="bg-brand-darkBlue-800 rounded-lg p-6 shadow-lg border border-brand-darkBlue-700 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Enter Your Order ID</h2>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="e.g. LQLT20250428-001"
                  className="w-full bg-brand-darkBlue-900 border border-brand-darkBlue-700 rounded px-4 py-3 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:border-transparent transition-colors"
                />
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              </div>
              <button
                type="submit"
                disabled={status === 'loading' || !orderId.trim()}
                className={`w-full bg-brand-yellow-500 hover:bg-brand-yellow-600 text-brand-darkBlue-900 font-medium py-3 rounded transition-colors ${
                  (status === 'loading' || !orderId.trim()) ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-brand-darkBlue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Tracking...
                  </span>
                ) : (
                  'Track Order'
                )}
              </button>
            </form>
            
            <div className="mt-4 text-sm text-gray-400">
              <p>
                Your order ID was sent to your email and phone after placing your order. 
                It follows the format LQLTYYYYMMDD-XXX.
              </p>
            </div>
          </div>
          
          {/* Order Status Result */}
          {status === 'found' && (
            <OrderTracker orderId={orderId} orderStatus={orderStatus} />
          )}
          
          {status === 'not-found' && (
            <div className="bg-brand-darkBlue-800 rounded-lg p-6 shadow-lg border border-brand-darkBlue-700 text-center">
              <div className="w-16 h-16 mx-auto bg-red-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Order Not Found</h3>
              <p className="text-gray-300 mb-4">
                We couldn't find an order with the ID "{orderId}". Please check and try again.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-brand-yellow-500 hover:text-brand-yellow-600 font-medium"
              >
                Try another order ID
              </button>
            </div>
          )}
          
          {/* Sample Orders for Demo */}
          {status === 'idle' && (
            <div className="bg-brand-darkBlue-800 rounded-lg p-6 shadow-lg border border-brand-darkBlue-700 mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">For Demo Purposes</h3>
              <p className="text-gray-300 mb-4">
                Try these sample order IDs to see different order statuses:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setOrderId('LQLT20250428-000')}
                  className="bg-brand-darkBlue-700 hover:bg-brand-darkBlue-600 p-3 rounded text-gray-300 text-left transition-colors"
                >
                  <span className="block text-white font-medium">LQLT20250428-000</span>
                  <span className="text-sm">Status: Pending</span>
                </button>
                <button
                  onClick={() => setOrderId('LQLT20250428-001')}
                  className="bg-brand-darkBlue-700 hover:bg-brand-darkBlue-600 p-3 rounded text-gray-300 text-left transition-colors"
                >
                  <span className="block text-white font-medium">LQLT20250428-001</span>
                  <span className="text-sm">Status: Packed</span>
                </button>
                <button
                  onClick={() => setOrderId('LQLT20250428-002')}
                  className="bg-brand-darkBlue-700 hover:bg-brand-darkBlue-600 p-3 rounded text-gray-300 text-left transition-colors"
                >
                  <span className="block text-white font-medium">LQLT20250428-002</span>
                  <span className="text-sm">Status: Shipped</span>
                </button>
                <button
                  onClick={() => setOrderId('LQLT20250428-003')}
                  className="bg-brand-darkBlue-700 hover:bg-brand-darkBlue-600 p-3 rounded text-gray-300 text-left transition-colors"
                >
                  <span className="block text-white font-medium">LQLT20250428-003</span>
                  <span className="text-sm">Status: Delivered</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;