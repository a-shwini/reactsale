import React, { useState, useEffect } from 'react';
import { Input, Button, FormLabel, Box } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SaleOrderModal = ({ order, onClose, onSave, readOnly, isNewCustomer }) => {
  const [formState, setFormState] = useState({
    customerName: '',
    price: 0,
    lastModified: '',
  });

  useEffect(() => {
    if (order) {
      setFormState({ ...order, lastModified: order.lastModified || new Date().toLocaleString() });
    }
  }, [order]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormState({ ...formState, invoice_date: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formState, lastModified: new Date().toLocaleString() });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{isNewCustomer ? 'Add New Customer' : (readOnly ? 'View Sale Order' : 'Edit Sale Order')}</h2>
        <form onSubmit={handleSubmit}>
          <Box display="flex" alignItems="center" mb={4}>
            <FormLabel className="modal-label">Customer Name:</FormLabel>
            <Input
              type="text"
              name="customerName"
              value={formState.customerName}
              onChange={handleChange}
              isReadOnly={readOnly}
              className='modal-input'
            />
          </Box>
          <Box display="flex" alignItems="center" mb={4}>
            <FormLabel className="modal-label">Price:</FormLabel>
            <Input
              type="number"
              name="price"
              value={formState.price}
              onChange={handleChange}
              isReadOnly={readOnly}
              className='modal-input'
            />
          </Box>
          {!isNewCustomer && (
            <Box display="flex" alignItems="center" mb={4}>
              <FormLabel className="modal-label">Last Modified:</FormLabel>
              <Box>
                <DatePicker
                  selected={formState.invoice_date}
                  onChange={handleDateChange}
                  disabled={readOnly}
                  customInput={<Input />}
                />
              </Box>
            </Box>
          )}
          {!readOnly && <Button type="submit" className="modal-button">Save</Button>}
        </form>
      </div>
    </div>
  );
};

export default SaleOrderModal;

