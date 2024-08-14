import React from 'react';
import './RefundDeclined.css';

const refundReasons = [
  "The item has been used or damaged.",
  "The return window has expired.",
  "The product was purchased during a sale and is non-refundable.",
  "The product is a non-returnable item (e.g., perishables, personalized items)."
];

const RefundDeclined = () => {
  return (
    <div className="refund-declined-container">
      <h2 className="refund-declined-header">Refund Declined</h2>
      <p className="refund-declined-intro">We're sorry, but your refund request has been declined for one of the following reasons:</p>
      <ul className="refund-declined-list">
        {refundReasons.map((reason, index) => (
          <li key={index} className="refund-declined-item">{reason}</li>
        ))}
      </ul>
    </div>
  );
};

export default RefundDeclined;
