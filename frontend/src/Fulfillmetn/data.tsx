const fulfillmentData = {
  fulfillments: [
    {
      _id: 1,
      customerName: "Alice",
      customerEmail: "alice@email.com",
      product: {
        productName: "Shirt",
        quantity: 1,
      },
      shippingStatus: "Shipped",
    },
    {
      _id: 2,
      customerName: "Bob",
      customerEmail: "bob@email.com",
      product: {
        productName: "Shirt",
        quantity: 2,
      },
      shippingStatus: "Unshipped",
    },
    {
      _id: 3,
      customerName: "Charlie",
      customerEmail: "charlie@email.com",
      product: {
        productName: "Pants",
        quantity: 1,
      },
      shippingStatus: "Shipped",
    },
  ],
};

export default fulfillmentData;
