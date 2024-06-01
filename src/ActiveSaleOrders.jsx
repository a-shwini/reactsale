import React, { useState } from 'react';
import SaleOrderModal from './SaleOrderModal';

const ActiveSaleOrders = ({ orders, onSave }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleEditClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Price</th>
            <th>Last Modified</th>
            <th>Edit/View</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="data-id">{order.id}</td>
              <td className="data-customer-name">{order.customerName}</td>
              <td className="data-price">{order.price}</td>
              <td className="data-last-modified">{order.lastModified}</td>
              <td>
                <button
                  onClick={() => handleEditClick(order)}
                  className="data-button"
                  style={{ border: 'none', background: 'transparent' }}
                >
                  ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedOrder && (
        <SaleOrderModal
          order={selectedOrder}
          onClose={handleCloseModal}
          onSave={onSave}
          readOnly={false}
        />
      )}
    </div>
  );
};

export default ActiveSaleOrders;

