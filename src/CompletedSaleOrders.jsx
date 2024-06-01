import React, { useState } from 'react';
import SaleOrderModal from './SaleOrderModal';

const initialOrders = [
  {
    id: 3,
    customerName: 'Ironman', // Changed to customerName for consistency
    items: [],
    paid: true,
    invoice_no: '123',
    invoice_date: '2024-02-06T09:15:00',
    price: 500,
    lastModified: '2/6/2024 09:15 AM'
  }
];

const CompletedSaleOrders = () => {
  const [orders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewClick = (order) => {
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
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="data-id">{order.id}</td>
              <td className="data-customer-name">{order.customerName}</td> {/* Ensure this matches the property name */}
              <td className="data-price">{order.price}</td>
              <td className="data-last-modified">{order.lastModified}</td>
              <td>
                <button
                  onClick={() => handleViewClick(order)}
                  className="data-button" style={{ background: 'transparent', border: 'none' }}
                >
                  ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedOrder && (
        <SaleOrderModal order={selectedOrder} onClose={handleCloseModal} readOnly={true} />
      )}
    </div>
  );
};

export default CompletedSaleOrders;




