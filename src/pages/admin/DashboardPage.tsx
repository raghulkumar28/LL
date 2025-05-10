import React from 'react';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminSidebar from '../../components/admin/AdminSidebar';
import { Package, ShoppingBag, AlertTriangle, TrendingUp } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-brand-darkBlue-900">
      <AdminHeader />
      <AdminSidebar />
      
      <main className="ml-64 pt-20 p-6">
        <h1 className="text-2xl font-bold text-white mb-6">Dashboard Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Total Products */}
          <div className="bg-brand-darkBlue-800 rounded-lg p-6 border border-brand-darkBlue-700">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 mb-1">Total Products</p>
                <h3 className="text-2xl font-bold text-white">124</h3>
              </div>
              <div className="bg-brand-yellow-500/20 p-3 rounded-lg">
                <Package className="text-brand-yellow-500" size={24} />
              </div>
            </div>
            <p className="text-sm text-green-500 mt-4">↑ 12% from last month</p>
          </div>
          
          {/* Today's Orders */}
          <div className="bg-brand-darkBlue-800 rounded-lg p-6 border border-brand-darkBlue-700">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 mb-1">Today's Orders</p>
                <h3 className="text-2xl font-bold text-white">28</h3>
              </div>
              <div className="bg-brand-yellow-500/20 p-3 rounded-lg">
                <ShoppingBag className="text-brand-yellow-500" size={24} />
              </div>
            </div>
            <p className="text-sm text-green-500 mt-4">↑ 8% from yesterday</p>
          </div>
          
          {/* Low Stock */}
          <div className="bg-brand-darkBlue-800 rounded-lg p-6 border border-brand-darkBlue-700">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 mb-1">Low Stock Items</p>
                <h3 className="text-2xl font-bold text-white">5</h3>
              </div>
              <div className="bg-red-500/20 p-3 rounded-lg">
                <AlertTriangle className="text-red-500" size={24} />
              </div>
            </div>
            <p className="text-sm text-red-500 mt-4">Requires attention</p>
          </div>
          
          {/* Revenue */}
          <div className="bg-brand-darkBlue-800 rounded-lg p-6 border border-brand-darkBlue-700">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 mb-1">Total Revenue</p>
                <h3 className="text-2xl font-bold text-white">₹52,489</h3>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg">
                <TrendingUp className="text-green-500" size={24} />
              </div>
            </div>
            <p className="text-sm text-green-500 mt-4">↑ 15% from last month</p>
          </div>
        </div>
        
        {/* Order Status Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-brand-darkBlue-800 rounded-lg p-6 border border-brand-darkBlue-700">
            <h3 className="text-lg font-semibold text-white mb-4">Orders by Status</h3>
            <div className="h-64 flex items-center justify-center">
              <p className="text-gray-400">Order status chart will be displayed here</p>
            </div>
          </div>
          
          {/* Low Stock Alerts */}
          <div className="bg-brand-darkBlue-800 rounded-lg p-6 border border-brand-darkBlue-700">
            <h3 className="text-lg font-semibold text-white mb-4">Low Stock Alerts</h3>
            <div className="space-y-4">
              {[
                { name: 'Thanga Enna', stock: 5, threshold: 10 },
                { name: 'Nalla Enna', stock: 8, threshold: 15 },
                { name: 'Coffee Oil', stock: 3, threshold: 10 },
              ].map((item) => (
                <div 
                  key={item.name}
                  className="flex items-center justify-between p-3 bg-brand-darkBlue-700 rounded"
                >
                  <div>
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-sm text-red-500">
                      Stock: {item.stock} (Min: {item.threshold})
                    </p>
                  </div>
                  <button className="px-3 py-1 bg-brand-yellow-500 text-brand-darkBlue-900 rounded text-sm font-medium">
                    Restock
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;