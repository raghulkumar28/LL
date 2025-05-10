import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [useOTP, setUseOTP] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    name: '',
    otp: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setUseOTP(false);
  };
  
  const toggleAuthMethod = () => {
    setUseOTP(!useOTP);
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-brand-darkBlue-900 flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <div className="bg-brand-darkBlue-800 rounded-lg p-8 shadow-xl border border-brand-darkBlue-700">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            {isLogin ? 'Login to Your Account' : 'Create an Account'}
          </h1>
          
          <div className="mb-6">
            <div className="flex rounded-md overflow-hidden">
              <button
                onClick={() => isLogin || toggleForm()}
                className={`flex-1 py-2 font-medium ${
                  isLogin 
                    ? 'bg-brand-yellow-500 text-brand-darkBlue-900' 
                    : 'bg-brand-darkBlue-700 text-gray-300 hover:bg-brand-darkBlue-600'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => !isLogin || toggleForm()}
                className={`flex-1 py-2 font-medium ${
                  !isLogin 
                    ? 'bg-brand-yellow-500 text-brand-darkBlue-900' 
                    : 'bg-brand-darkBlue-700 text-gray-300 hover:bg-brand-darkBlue-600'
                }`}
              >
                Register
              </button>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
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
            )}
            
            {useOTP ? (
              <div>
                <label htmlFor="phone" className="block text-gray-300 mb-2">Phone Number</label>
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
            ) : (
              <>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
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
                  <label htmlFor="password" className="block text-gray-300 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full bg-brand-darkBlue-900 border border-brand-darkBlue-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:border-transparent transition-colors pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff size={18} className="text-gray-400" />
                      ) : (
                        <Eye size={18} className="text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </>
            )}
            
            {useOTP && formData.phone && (
              <div>
                <label htmlFor="otp" className="block text-gray-300 mb-2">OTP</label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  className="w-full bg-brand-darkBlue-900 border border-brand-darkBlue-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
            )}
            
            {isLogin && !useOTP && (
              <div className="flex justify-end">
                <Link to="/forgot-password" className="text-sm text-brand-yellow-500 hover:text-brand-yellow-600 transition-colors">
                  Forgot password?
                </Link>
              </div>
            )}
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-brand-yellow-500 hover:bg-brand-yellow-600 text-brand-darkBlue-900 font-medium py-3 rounded transition-colors"
              >
                {isLogin 
                  ? (useOTP 
                    ? (formData.otp ? 'Login' : 'Send OTP') 
                    : 'Login') 
                  : 'Register'}
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <button
              onClick={toggleAuthMethod}
              className="text-brand-yellow-500 hover:text-brand-yellow-600 text-sm font-medium transition-colors"
            >
              {useOTP 
                ? 'Login with Email and Password' 
                : 'Login with OTP'}
            </button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-brand-darkBlue-700 text-center">
            <p className="text-gray-300">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={toggleForm}
                className="text-brand-yellow-500 hover:text-brand-yellow-600 font-medium transition-colors"
              >
                {isLogin ? 'Register' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;