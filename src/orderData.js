const orderData = [
  {
    number: '12345',
    items: [
      {
        product: 'Diva Dale Textured Shoulder Bag with Quilted Handbags',
        quantity: 1,
        unitPrice: 990,
        totalPrice: 990
      },
      {
        product: 'THE BEAR HOUSE Men Windowpane Checked Slim Fit Cotton Linen Shirt',
        quantity: 2,
        unitPrice: 999,
        totalPrice: 1998
      }
    ],
    subtotal: 2988,
    taxes: {
      cgst: 89.64,
      sgst: 89.64
    },
    totalAmount: 3167.28,
    status: 'Confirmed',
    deliveryTime: '2024-08-15 15:00',
    paymentMethod: 'Credit Card',
    supportContact: 'support@example.com'
  },
  {
    number: '12346',
    items: [
      {
        product: 'Cotton Lounge T-shirt',
        quantity: 3,
        unitPrice: 369,
        totalPrice: 1107
      },
      {
        product: 'Formal Black Shirt',
        quantity: 1,
        unitPrice: 799,
        totalPrice: 799
      }
    ],
    subtotal: 1906,
    taxes: {
      cgst: 57.18,
      sgst: 57.18
    },
    totalAmount: 2020.36,
    status: 'Shipped',
    deliveryTime: '2024-08-17 10:30',
    paymentMethod: 'PayPal',
    supportContact: 'support@example.com'
  },
  {
    number: '12347',
    items: [
      {
        product: 'Classic White Shirt',
        quantity: 1,
        unitPrice: 499,
        totalPrice: 499
      },
      {
        product: 'Casual Blue Tee',
        quantity: 2,
        unitPrice: 299,
        totalPrice: 598
      }
    ],
    subtotal: 1097,
    taxes: {
      cgst: 32.91,
      sgst: 32.91
    },
    totalAmount: 1162.82,
    status: 'Pending',
    deliveryTime: '2024-08-20 14:45',
    paymentMethod: 'Debit Card',
    supportContact: 'support@example.com'
  },
  {
    number: '12348',
    items: [
      {
        product: 'Striped Polo Shirt',
        quantity: 2,
        unitPrice: 459,
        totalPrice: 918
      },
      {
        product: 'Jacket 1',
        quantity: 1,
        unitPrice: 1500,
        totalPrice: 1500
      }
    ],
    subtotal: 2418,
    taxes: {
      cgst: 72.54,
      sgst: 72.54
    },
    totalAmount: 2563.08,
    status: 'Delivered',
    deliveryTime: '2024-08-13 12:00',
    paymentMethod: 'Net Banking',
    supportContact: 'support@example.com'
  },
  {
    number: '12349',
    items: [
      {
        product: 'Kurta 1',
        quantity: 1,
        unitPrice: 799,
        totalPrice: 799
      },
      {
        product: 'Jacket 2',
        quantity: 1,
        unitPrice: 1800,
        totalPrice: 1800
      }
    ],
    subtotal: 2599,
    taxes: {
      cgst: 77.97,
      sgst: 77.97
    },
    totalAmount: 2754.94,
    status: 'Cancelled',
    deliveryTime: 'N/A',
    paymentMethod: 'Cash on Delivery',
    supportContact: 'support@example.com'
  },
  {
    number: '12350',
    items: [
      {
        product: 'Kurta 2',
        quantity: 2,
        unitPrice: 999,
        totalPrice: 1998
      },
      {
        product: 'THE BEAR HOUSE Men Windowpane Checked Slim Fit Cotton Linen Shirt',
        quantity: 1,
        unitPrice: 999,
        totalPrice: 999
      }
    ],
    subtotal: 2997,
    taxes: {
      cgst: 89.91,
      sgst: 89.91
    },
    totalAmount: 3176.82,
    status: 'On Hold',
    deliveryTime: '2024-08-25 09:00',
    paymentMethod: 'Credit Card',
    supportContact: 'support@example.com'
  },
  {
    number: '12351',
    items: [
      {
        product: 'Cotton Lounge T-shirt',
        quantity: 4,
        unitPrice: 369,
        totalPrice: 1476
      }
    ],
    subtotal: 1476,
    taxes: {
      cgst: 44.28,
      sgst: 44.28
    },
    totalAmount: 1564.56,
    status: 'Processing',
    deliveryTime: '2024-08-16 16:30',
    paymentMethod: 'UPI',
    supportContact: 'support@example.com'
  },
  {
    number: '12352',
    items: [
      {
        product: 'Jacket 3',
        quantity: 1,
        unitPrice: 1750,
        totalPrice: 1750
      },
      {
        product: 'Kurta 3',
        quantity: 3,
        unitPrice: 899,
        totalPrice: 2697
      }
    ],
    subtotal: 4447,
    taxes: {
      cgst: 133.41,
      sgst: 133.41
    },
    totalAmount: 4713.82,
    status: 'Out for Delivery',
    deliveryTime: '2024-08-13 18:00',
    paymentMethod: 'Credit Card',
    supportContact: 'support@example.com'
  },
  {
    number: '12353',
    items: [
      {
        product: 'Classic White Shirt',
        quantity: 2,
        unitPrice: 499,
        totalPrice: 998
      },
      {
        product: 'Kurta 4',
        quantity: 1,
        unitPrice: 1099,
        totalPrice: 1099
      }
    ],
    subtotal: 2097,
    taxes: {
      cgst: 62.91,
      sgst: 62.91
    },
    totalAmount: 2222.82,
    status: 'Delivered',
    deliveryTime: '2024-08-11 11:00',
    paymentMethod: 'PayPal',
    supportContact: 'support@example.com'
  },
  {
    number: '12354',
    items: [
      {
        product: 'Striped Polo Shirt',
        quantity: 1,
        unitPrice: 459,
        totalPrice: 459
      },
      {
        product: 'Men\'s Jacket ',
        quantity: 2,
        unitPrice: 1550,
        totalPrice: 3100
      }
    ],
    subtotal: 3559,
    taxes: {
      cgst: 106.77,
      sgst: 106.77
    },
    totalAmount: 3772.54,
    status: 'In Transit',
    deliveryTime: '2024-08-19 13:30',
    paymentMethod: 'Net Banking',
    supportContact: 'support@example.com'
  },
  
];


export default orderData;
