
import React from 'react';
import orderData from './orderData';
import './OrderDetails.css'

const OrderDetails = ({ orderNumber }) => {
  const order = orderData.find(o => o.number === orderNumber);

  if (!order) {
    return <p>Order not found1.</p>;
  }

  // Construct order details
  const itemDetails = order.items.map(item => (
    <div key={item.product}>
      <p>{item.product}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Unit Price: ₹{item.unitPrice}</p>
      <p>Total Price: ₹{item.totalPrice}</p>
      <br />
    </div>
  ));

  const taxes = `
    CGST (3%): ₹${order.taxes.cgst.toFixed(2)}
    SGST (3%): ₹${order.taxes.sgst.toFixed(2)}
  `;

  return (
    <div>
      <p>Thank you for your order details.</p>
      <p>Here is a summary of your order:</p>
      {itemDetails}
      <p>Subtotal: ₹{order.subtotal}</p>
      <p>Taxes:</p>
      <pre>{taxes}</pre>
      <p>Total Amount: ₹{order.totalAmount}</p>
      <p>Your order status is {order.status}.</p>
      <p>Your estimated delivery time is {order.deliveryTime}.</p>
      <p>Your payment method is {order.paymentMethod}. The total amount is ₹{order.totalAmount}.</p>
      <p>If you have any questions or need to make changes to your order, please contact our support team at {order.supportContact}.</p>
      <p>Would you like to receive updates about your order via SMS or email? Please type 'Yes' or 'No'.</p>
    </div>
  );
};

export default OrderDetails;
