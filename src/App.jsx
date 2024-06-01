// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import SaleOrderPage from "./SaleOrderPage";
import ThemeToggle from "./ThemeToggle";

// Initial orders data
const initialOrders = [
  { id: 1, customerName: 'Spider', price: 100, lastModified: '2/5/2024 11:07 PM' },
  { id: 2, customerName: 'Spider', price: 210, lastModified: '2/5/2024 11:30 PM' }
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [orders, setOrders] = useState(initialOrders);

  const handleAddNewCustomer = (customerData) => {
    const newCustomerId = orders.length + 1;
    const newCustomer = { id: newCustomerId, ...customerData };
    setOrders([...orders, newCustomer]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/sale-orders"
          element={isAuthenticated ? <SaleOrderPage orders={orders} onAddNewCustomer={handleAddNewCustomer} /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
      <ThemeToggle />
    </Router>
  );
}

export default App;
