import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAdminAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(formData.email, formData.password);
    if (success) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-brand-darkBlue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-brand-darkBlue-800 rounded-lg p-8 shadow-xl border border-brand-darkBlue-700">
          <div className="flex items-center justify-center mb-8">
            <ShieldCheck size={40} className="text-brand-yellow-500" />
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            Admin Login
          </h1>
          
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded text-red-500 text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
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
                  onClick={() => setShowPassword(!showPassword)}
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
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-brand-yellow-500 hover:bg-brand-yellow-600 text-brand-darkBlue-900 font-medium py-3 rounded transition-colors"
              >
                Login to Dashboard
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;