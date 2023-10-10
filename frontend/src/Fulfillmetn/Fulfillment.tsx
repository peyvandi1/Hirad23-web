import data from "./data";
import React from "react";

function Fulfillment() {
  return (
    <div className="content content-margined">
      <div className="order-header">
        <h3>Orders</h3>
      </div>
      <div className="fulfillment-list">
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Shipping Status</th>
            </tr>
          </thead>
          <tbody>
            {data.fulfillments.map((fulfillment) => (

              <tr
                key={fulfillment._id}
                className={
                  fulfillment.shippingStatus === "Unshipped" ? "unshipped" : ""
                }
              >
                
                <td>{fulfillment._id}</td>
                <td>{fulfillment.customerName}</td>
                <td>{fulfillment.product.productName}</td>
                <td>{fulfillment.shippingStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Fulfillment;
