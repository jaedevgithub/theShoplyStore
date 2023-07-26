import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  if (!context.order || context.order.length === 0) {
    return <p>No orders found.</p>;
  }

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <h1>My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            key={index}
            totalPrice={order.total}
            totalProducts={order.products.length}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
