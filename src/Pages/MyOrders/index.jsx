import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  // Get the shopping cart context using useContext hook
  const context = useContext(ShoppingCartContext);

  // Check if there are no orders or the orders array is empty
  if (!context.order || context.order.length === 0) {
    return <p>No orders found.</p>;
  }

  return (
    <Layout>
      {/* Container for the "My Orders" heading */}
      <div className="flex items-center justify-center relative w-80">
        <h1>My Orders</h1>
      </div>

      {/* Map through each order in the context and display an OrdersCard for each */}
      {context.order.map((order, index) => {
        // Check if the 'products' property is defined before accessing it
        if (order.products && order.products.length > 0) {
          // Link to the individual order details page using the index as a parameter
          return (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                key={index}
                date={order.date} // Pass the order date as a prop
                totalPrice={order.total}
                totalProducts={order.products.length}
              />
            </Link>
          );
        } else {
          return null;
        }
      })}
    </Layout>
  );
}

export default MyOrders;
