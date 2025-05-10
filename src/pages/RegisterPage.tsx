import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Form submitted:', formData);
    // In a real app, this would make an API call to register the user
    navigate('/login');
  };
  
  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-brand-darkBlue-900 flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <div className="bg-brand-darkBlue-800 rounded-lg p-8 shadow-xl border border-brand-darkBlue-700">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            Create an Account
          </h1>
          
          <div className="mb-6">
            <div className="flex rounded-md overflow-hidden">
              <Link
                to="/login"
                className="flex-1 py-2 text-center font-medium bg-brand-darkBlue-700 text-gray-300 hover:bg-brand-darkBlue-600"
              >
                Login
              </Link>
              <button
                className="flex-1 py-2 font-medium bg-brand-yellow-500 text-brand-darkBlue-900"
              >
                Register
              </button>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
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
                  onClick={() => togglePasswordVisibility('password')}
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
            
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-300 mb-2">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-brand-darkBlue-900 border border-brand-darkBlue-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow-500 focus:border-transparent transition-colors pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('confirmPassword')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} className="text-gray-400" />
                  ) : (
                    <Eye size={18} className="text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-brand-yellow-500 hover:bg-brand-yellow-600 text-brand-darkBlue-900 font-medium py-3 rounded transition-colors"
              >
                Create Account
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-300 text-sm">
              By creating an account, you agree to our{' '}
              <a href="#" className="text-brand-yellow-500 hover:text-brand-yellow-600">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-brand-yellow-500 hover:text-brand-yellow-600">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;