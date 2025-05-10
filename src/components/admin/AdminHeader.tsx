import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';

const AdminHeader = () => {
  const navigate = useNavigate();
  const { logout } = useAdminAuth();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <header className="bg-brand-darkBlue-800 border-b border-brand-darkBlue-700 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-brand-yellow-500 font-bold text-2xl">
            <span className="text-white">Liquid Lite</span> Admin
          </div>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-brand-darkBlue-700 hover:bg-brand-darkBlue-600 rounded text-white transition-colors"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;