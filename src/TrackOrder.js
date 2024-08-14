import React from 'react';
import trackData from './TrackData'; 

const TrackOrder = ({ orderNumber }) => {

  const order = trackData.find(trackData => trackData.orderNumber === orderNumber);

  if (!order) {
    return <p>Order not found.</p>;
  }

  
  return (
    <div>
      <p><strong>Order Number:</strong> {order.orderNumber}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Estimated Delivery:</strong> {order.estimatedDelivery}</p>
    </div>
  );
};

export default TrackOrder;
