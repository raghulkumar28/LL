import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

const CheckoutPage = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const [step, setStep] = useState<'cart' | 'shipping' | 'payment' | 'confirmation'>('cart');
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'Tamil Nadu',
    pincode: '',
  });
  
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'online'>('cod');
  const [orderId, setOrderId] = useState('');
  
  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };
  
  const handlePlaceOrder = () => {
    // Generate a random order ID in the format LQLTYYYYMMDD-XXX
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const newOrderId = `LQLT${year}${month}${day}-${random}`;
    
    setOrderId(newOrderId);
    setStep('confirmation');
    clearCart();
  };

  const handleTrackOrder = () => {
    navigate(`/track-order?id=${orderId}`);
  };
  
  const handleContinueShopping = () => {
    navigate('/products');
  };
  
  // Calculate subtotal and shipping
  const subtotal = getCartTotal();
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;
  
  if (cart.length === 0 && step !== 'confirmation') {
    return (
      <div className="pt-24 pb-12 min-h-screen bg-brand-darkBlue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-16">
            <h1 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h1>
            <p className="text-gray-300 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <button
              onClick={() => navigate('/products')}
              className="bg-brand-yellow-500 hover:bg-brand-yellow-600 text-brand-darkBlue-900 font-medium px-6 py-3 rounded transition-colors"
            >
              Browse Products
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-12 min-h-screen bg-brand-darkBlue-900">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>
        
        {step !== 'confirmation' && (
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              <div className={`flex flex-col items-center ${step === 'cart' ? 'text-brand-yellow-500' : 'text-white'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step === 'cart' ? 'bg-brand-yellow-500 text-brand-darkBlue-900' : 'bg-brand-darkBlue-700'
                }`}>
                  1
                </div>
                <span className="mt-2 text-sm">Cart</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${
                step === 'cart' ? 'bg-brand-darkBlue-700' : 'bg-brand-yellow-500'
              }`}></div>
              
              <div className={`flex flex-col items-center ${step === 'shipping' ? 'text-brand-yellow-500' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step === 'shipping' ? 'bg-brand-yellow-500 text-brand-darkBlue-900' : 'bg-brand-darkBlue-700'
                }`}>
                  2
                </div>
                <span className="mt-2 text-sm">Shipping</span>
              </div>
              
              <div className={`flex-1 h-1 mx-2 ${
                step === 'payment' ? 'bg-brand-yellow-500' : 'bg-brand-darkBlue-700'
              }`}></div>
              
              <div className={`flex flex-col items-center ${step === 'payment' ? 'text-brand-yellow-500' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step === 'payment' ? 'bg-brand-yellow-500 text-brand-darkBlue-900' : 'bg-brand-darkBlue-700'
                }`}>
                  3
                </div>
                <span className="mt-2 text-sm">Payment</span>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart/Shipping/Payment Form */}
          <div className="lg:col-span-2">
            {step === 'cart' && (
              <div className="bg-brand-darkBlue-800 rounded-lg p-6 shadow-lg border border-brand-darkBlue-700">
                <h2 className="text-xl font-semibold text-white mb-6">Your Cart</h2>
                
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex items-center border-b border-brand-darkBlue-700 pb-4">
                      <div className="w-20 h-20 flex-shrink-0">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name.en} 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-white font-medium">{item.product.name.en}</h3>
                        <p className="text-gray-400 text-sm">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-brand-yellow-500 font-bold">
                        ₹{(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-between">
                  <button
                    onClick={() => navigate('/products')}
                    className="flex items-center text-brand-yellow-500 hover:text-brand-yellow-600 transition-colors"
                  >
                    <ArrowLeft size={16} className="mr-1" />
                    Continue Shopping
                  </button>
                  <button
                    onClick={() => setStep('shipping')}
                    className="bg-brand-yellow-500 hover:bg-brand-yellow-600 text-brand-darkBlue-900 font-medium px-6 py-2 rounded transition-colors"
                  >
                    Proceed to Shipping
                  </button>
                </div>
              </div>
            )}
            
            {step === 'shipping' && (
              <div className="bg-brand-darkBlue-800 rounded-lg p-6 shadow-lg border border-brand-darkBlue-700">
                <h2 className="text-xl font-semibold text-white mb-6">Shipping Information</h2>
                
                <form onSubmit={handleSubmitShipping} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={shippingInfo.name}
                        onChange={handleShippingChange}
                        className="w-full bg-brand-darkBlue-900 border border-brand-darkBlue-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={shippingInfo.email}
                        onChange={handleShippingChange}
                        className="w-full bg-brand-darkBlue-900 border border-brand-darkBlue-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleShippingChange}
                      className="w-full bg-brand-darkBlue-900 border border-brand-darkBlue-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-gray-300 mb-2">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleShippingChange}
                      className="w-full bg-brand-darkBlue-900 border border-brand-darkBlue-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-gray-300 mb-2">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleShippingChange}
                        className="w-full bg-brand-darkBlue-900 border border-brand-darkBlue-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-gray-300 mb-2">State</label>
                      <select
                        id="state"
                        name="state"
                        value={shippingInfo.state}
                        onChange={handleShippingChange}
                        className="w-full bg-brand-darkBlue-900 border border-brand-darkBlue-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:border-transparent transition-colors"
                        required
                      >
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Telangana">Telangana</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="pincode" className="block text-gray-300 mb-2">Pin Code</label>
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        value={shippingInfo.pincode}
                        onChange={handleShippingChange}
                        className="w-full bg-brand-darkBlue-900 border border-brand-darkBlue-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:border-transparent transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep('cart')}
                      className="text-brand-yellow-500 hover:text-brand-yellow-600 flex items-center transition-colors"
                    >
                      <ArrowLeft size={16} className="mr-1" />
                      Back to Cart
                    </button>
                    <button
                      type="submit"
                      className="bg-brand-yellow-500 hover:bg-brand-yellow-600 text-brand-darkBlue-900 font-medium px-6 py-2 rounded transition-colors"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {step === 'payment' && (
              <div className="bg-brand-darkBlue-800 rounded-lg p-6 shadow-lg border border-brand-darkBlue-700">
                <h2 className="text-xl font-semibold text-white mb-6">Payment Method</h2>
                
                <div className="space-y-4">
                  <div 
                    className={`border ${
                      paymentMethod === 'cod' 
                        ? 'border-brand-yellow-500 bg-brand-darkBlue-700' 
                        : 'border-brand-darkBlue-700 bg-brand-darkBlue-900'
                    } rounded p-4 cursor-pointer transition-colors`}
                    onClick={() => setPaymentMethod('cod')}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border-2 ${
                        paymentMethod === 'cod' 
                          ? 'border-brand-yellow-500' 
                          : 'border-gray-400'
                      } flex items-center justify-center mr-3`}>
                        {paymentMethod === 'cod' && (
                          <div className="w-3 h-3 rounded-full bg-brand-yellow-500"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Cash on Delivery</h3>
                        <p className="text-gray-400 text-sm">Pay when you receive your order</p>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className={`border ${
                      paymentMethod === 'online' 
                        ? 'border-brand-yellow-500 bg-brand-darkBlue-700' 
                        : 'border-brand-darkBlue-700 bg-brand-darkBlue-900'
                    } rounded p-4 cursor-pointer transition-colors`}
                    onClick={() => setPaymentMethod('online')}
                  >
                    <div className="flex items-center">
                      <div className={`w-5 h-5 rounded-full border-2 ${
                        paymentMethod === 'online' 
                          ? 'border-brand-yellow-500' 
                          : 'border-gray-400'
                      } flex items-center justify-center mr-3`}>
                        {paymentMethod === 'online' && (
                          <div className="w-3 h-3 rounded-full bg-brand-yellow-500"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Online Payment</h3>
                        <p className="text-gray-400 text-sm">Pay now with card, UPI, or net banking</p>
                      </div>
                    </div>
                  </div>
                  
                  {paymentMethod === 'online' && (
                    <div className="mt-4 p-4 bg-brand-darkBlue-900 rounded border border-brand-darkBlue-700">
                      <div className="flex items-start">
                        <Info size={18} className="text-brand-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-gray-300 text-sm">
                          Online payments are not available in the demo. Please select Cash on Delivery.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="pt-6 mt-6 border-t border-brand-darkBlue-700 flex justify-between">
                  <button
                    onClick={() => setStep('shipping')}
                    className="text-brand-yellow-500 hover:text-brand-yellow-600 flex items-center transition-colors"
                  >
                    <ArrowLeft size={16} className="mr-1" />
                    Back to Shipping
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    disabled={paymentMethod === 'online'}
                    className={`px-6 py-2 rounded font-medium ${
                      paymentMethod === 'online'
                        ? 'bg-gray-600 cursor-not-allowed text-gray-300'
                        : 'bg-brand-yellow-500 hover:bg-brand-yellow-600 text-brand-darkBlue-900 transition-colors'
                    }`}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
            
            {step === 'confirmation' && (
              <div className="bg-brand-darkBlue-800 rounded-lg p-6 shadow-lg border border-brand-darkBlue-700 text-center">
                <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-2">Thank You for Your Order!</h2>
                <p className="text-gray-300 mb-6">
                  Your order has been placed successfully.
                </p>
                
                <div className="bg-brand-darkBlue-900 rounded p-4 mb-6 inline-block">
                  <p className="text-gray-400 text-sm">Order ID:</p>
                  <p className="text-brand-yellow-500 font-bold text-xl">{orderId}</p>
                </div>
                
                <p className="text-gray-300 mb-8">
                  We've sent the order details to your email. You can also track your order using the order ID.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={handleTrackOrder}
                    className="bg-brand-yellow-500 hover:bg-brand-yellow-600 text-brand-darkBlue-900 font-medium px-6 py-3 rounded transition-colors flex items-center justify-center"
                  >
                    <Truck size={18} className="mr-2" />
                    Track Your Order
                  </button>
                  <button
                    onClick={handleContinueShopping}
                    className="bg-brand-darkBlue-700 hover:bg-brand-darkBlue-600 text-white font-medium px-6 py-3 rounded transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Order Summary */}
          {step !== 'confirmation' && (
            <div className="lg:col-span-1">
              <div className="bg-brand-darkBlue-800 rounded-lg p-6 shadow-lg border border-brand-darkBlue-700 sticky top-24">
                <h2 className="text-xl font-semibold text-white mb-6">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Subtotal</span>
                    <span className="text-white font-medium">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Shipping</span>
                    <span className="text-white font-medium">
                      {shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-brand-darkBlue-700 flex justify-between">
                    <span className="text-white font-medium">Total</span>
                    <span className="text-brand-yellow-500 font-bold text-xl">₹{total.toFixed(2)}</span>
                  </div>
                </div>
                
                {step === 'payment' && (
                  <div className="flex items-center bg-brand-darkBlue-900 p-3 rounded mb-4">
                    <CreditCard size={18} className="text-brand-yellow-500 mr-2" />
                    <span className="text-gray-300 text-sm">
                      Payment is 100% secure and encrypted
                    </span>
                  </div>
                )}
                
                {subtotal < 500 && (
                  <div className="bg-brand-darkBlue-900 p-3 rounded">
                    <p className="text-gray-300 text-sm">
                      Add ₹{(500 - subtotal).toFixed(2)} more to qualify for free shipping!
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;