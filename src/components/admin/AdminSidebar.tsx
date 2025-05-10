import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Truck, 
  Settings,
  ChevronRight
} from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin/products', icon: Package, label: 'Products' },
    { path: '/admin/orders', icon: ShoppingCart, label: 'Orders' },
    { path: '/admin/tracking', icon: Truck, label: 'Tracking Status' },
    { path: '/admin/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside 
      className={`bg-brand-darkBlue-800 border-r border-brand-darkBlue-700 h-screen fixed left-0 top-0 pt-20 transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute right-0 top-24 bg-brand-darkBlue-700 p-2 rounded-l transform translate-x-full"
      >
        <ChevronRight 
          size={20} 
          className={`text-white transition-transform duration-300 ${
            isCollapsed ? '' : 'rotate-180'
          }`} 
        />
      </button>

      <nav className="px-4">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 py-3 px-4 rounded-lg mb-2 transition-colors ${
              location.pathname === item.path
                ? 'bg-brand-yellow-500 text-brand-darkBlue-900'
                : 'text-gray-300 hover:bg-brand-darkBlue-700'
            }`}
          >
            <item.icon size={20} />
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;