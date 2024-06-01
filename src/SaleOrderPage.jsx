import React, { useState } from 'react';
import ActiveSaleOrders from './ActiveSaleOrders';
import CompletedSaleOrders from './CompletedSaleOrders';
import SaleOrderModal from './SaleOrderModal';

const SaleOrderPage = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [isCreating, setIsCreating] = useState(false);
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Spider', price: 100, lastModified: '2/5/2024 11:07 PM' },
    { id: 2, customerName: 'Spider', price: 210, lastModified: '2/5/2024 11:30 PM' },
  ]);

  const handleCreateClick = () => {
    setIsCreating(true);
  };

  const handleCloseModal = () => {
    setIsCreating(false);
  };

  const handleSaveNewCustomer = (customerData) => {
    const newCustomer = {
      ...customerData,
      id: orders.length + 1,
      lastModified: new Date().toLocaleString(),
    };
    setOrders([...orders, newCustomer]);
    setIsCreating(false);
  };

  const handleSaveEditedOrder = (updatedOrder) => {
    const updatedOrders = orders.map(order => order.id === updatedOrder.id ? updatedOrder : order);
    setOrders(updatedOrders);
  };

  return (
    <div className="sale-order-page">
      <div className="tabs">
        <button onClick={() => setActiveTab('active')} className='activesale'>Active Sale Orders</button>
        <button onClick={() => setActiveTab('completed')} className='compeletedsale'>Completed Sale Orders</button>
        <button onClick={handleCreateClick} className='saleorder'>+ Sale Order</button>
      </div>
      <div className="tab-content">
        {activeTab === 'active' ? <ActiveSaleOrders orders={orders} onSave={handleSaveEditedOrder} /> : <CompletedSaleOrders />}
      </div>
      {isCreating && (
        <SaleOrderModal
          order={{}}
          onClose={handleCloseModal}
          onSave={handleSaveNewCustomer}
          readOnly={false}
          isNewCustomer
        />
      )}
    </div>
  );
};

export default SaleOrderPage;


