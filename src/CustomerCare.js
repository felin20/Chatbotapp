import React from 'react';
import './CustomerCare.css';

const CustomerCare = () => {
  return (
    <div className="customer-care-container">
      <h2 className="customer-care-header">Customer Care</h2>
      <p className="customer-care-intro">If you need any assistance, please contact our customer care:</p>
      <ul className="customer-care-list">
        <li className="customer-care-item">
          <strong>Phone:</strong> <span className="customer-care-info"><p className='p2'>+1-800-123-4567</p></span>
        </li>
        <li className="customer-care-item">
          <strong>Email:</strong> <span className="customer-care-info"><p className='p2'>support@example.com</p></span>
        </li>
        <li className="customer-care-item">
          <strong>Hours:</strong> <span className="customer-care-info"><p className='p2'>Mon-Fri, 9 AM - 5 PM</p></span>
        </li>
      </ul>
    </div>
  );
};

export default CustomerCare;
