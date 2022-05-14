import { useState } from 'react';

const OrderList = ({orders, title, handleDelete}) => {

    return (
        <div clasname="order-list">
          <h2>{ title }</h2>
          {orders.map((order) => (
            <div className="order-preview" key={order.index}>
              <h2 className="">Product: { order.product }</h2>
              <p>Description: { order.description }</p>
              <p>Price: { order.price }</p>
              <button onClick={() => handleDelete(order.productId)}>Delete Order</button>
            </div>
          ))}
        </div>   
     );
  }
   
  export default OrderList;