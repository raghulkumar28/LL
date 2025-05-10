import React, { useState } from 'react';
import { CheckCircle, Circle, Truck, Package, Clock } from 'lucide-react';
import { OrderStatus } from '../types';

type OrderTrackerProps = {
  orderId: string;
  orderStatus?: OrderStatus;
};

const OrderTracker: React.FC<OrderTrackerProps> = ({ orderId, orderStatus = 'pending' }) => {
  const [status, setStatus] = useState<OrderStatus>(orderStatus);
  
  // Check if a given status has been completed
  const isCompleted = (step: OrderStatus): boolean => {
    const statusOrder: OrderStatus[] = ['pending', 'packed', 'shipped', 'delivered'];
    const currentIndex = statusOrder.indexOf(status);
    const stepIndex = statusOrder.indexOf(step);
    return stepIndex <= currentIndex;
  };

  // Get the icon for a given status
  const getIcon = (step: OrderStatus) => {
    const completed = isCompleted(step);
    const iconProps = {
      size: 24,
      className: completed 
        ? 'text-brand-yellow-500' 
        : 'text-gray-400'
    };

    switch (step) {
      case 'pending':
        return completed ? <CheckCircle {...iconProps} /> : <Clock {...iconProps} />;
      case 'packed':
        return completed ? <CheckCircle {...iconProps} /> : <Package {...iconProps} />;
      case 'shipped':
        return completed ? <CheckCircle {...iconProps} /> : <Truck {...iconProps} />;
      case 'delivered':
        return completed ? <CheckCircle {...iconProps} /> : <Circle {...iconProps} />;
    }
  };

  return (
    <div className="bg-brand-darkBlue-800 rounded-lg p-6 shadow-lg border border-brand-darkBlue-700">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">Order Status</h3>
        <p className="text-gray-300">Order ID: {orderId}</p>
      </div>
      
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-6 top-6 h-[calc(100%-3rem)] w-0.5 bg-gray-700"></div>
        
        {/* Steps */}
        <div className="space-y-8">
          {/* Pending Step */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4 z-10 bg-brand-darkBlue-800 p-1">
              {getIcon('pending')}
            </div>
            <div>
              <h4 className={`font-medium ${isCompleted('pending') ? 'text-white' : 'text-gray-400'}`}>
                Order Received
              </h4>
              <p className="text-sm text-gray-400">
                Your order has been received and is being processed
              </p>
            </div>
          </div>
          
          {/* Packed Step */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4 z-10 bg-brand-darkBlue-800 p-1">
              {getIcon('packed')}
            </div>
            <div>
              <h4 className={`font-medium ${isCompleted('packed') ? 'text-white' : 'text-gray-400'}`}>
                Order Packed
              </h4>
              <p className="text-sm text-gray-400">
                Your order has been packed and is ready for shipping
              </p>
            </div>
          </div>
          
          {/* Shipped Step */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4 z-10 bg-brand-darkBlue-800 p-1">
              {getIcon('shipped')}
            </div>
            <div>
              <h4 className={`font-medium ${isCompleted('shipped') ? 'text-white' : 'text-gray-400'}`}>
                Order Shipped
              </h4>
              <p className="text-sm text-gray-400">
                Your order is on its way to you
              </p>
            </div>
          </div>
          
          {/* Delivered Step */}
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4 z-10 bg-brand-darkBlue-800 p-1">
              {getIcon('delivered')}
            </div>
            <div>
              <h4 className={`font-medium ${isCompleted('delivered') ? 'text-white' : 'text-gray-400'}`}>
                Order Delivered
              </h4>
              <p className="text-sm text-gray-400">
                Your order has been delivered
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* For demo purposes */}
      <div className="mt-8 pt-6 border-t border-brand-darkBlue-700">
        <p className="text-sm text-gray-400 mb-3">For demo purposes:</p>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setStatus('pending')}
            className={`px-3 py-1 rounded text-xs font-medium ${
              status === 'pending' 
                ? 'bg-brand-yellow-500 text-brand-darkBlue-900' 
                : 'bg-brand-darkBlue-700 text-gray-300'
            }`}
          >
            Pending
          </button>
          <button 
            onClick={() => setStatus('packed')}
            className={`px-3 py-1 rounded text-xs font-medium ${
              status === 'packed' 
                ? 'bg-brand-yellow-500 text-brand-darkBlue-900' 
                : 'bg-brand-darkBlue-700 text-gray-300'
            }`}
          >
            Packed
          </button>
          <button 
            onClick={() => setStatus('shipped')}
            className={`px-3 py-1 rounded text-xs font-medium ${
              status === 'shipped' 
                ? 'bg-brand-yellow-500 text-brand-darkBlue-900' 
                : 'bg-brand-darkBlue-700 text-gray-300'
            }`}
          >
            Shipped
          </button>
          <button 
            onClick={() => setStatus('delivered')}
            className={`px-3 py-1 rounded text-xs font-medium ${
              status === 'delivered' 
                ? 'bg-brand-yellow-500 text-brand-darkBlue-900' 
                : 'bg-brand-darkBlue-700 text-gray-300'
            }`}
          >
            Delivered
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTracker;