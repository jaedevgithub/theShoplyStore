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
    <div className="flex flex-col items-center justify-center min-h-screen pt-20 mt-20 ">
      {/* Container for the "My Orders" heading */}
      <div className="container mx-auto px-4 text-left mb-8">
        <h2 className="text-3xl font-bold mt-8 mb-4">My orders</h2>
      </div>
      <section className="flex items-center justify-center flex-col md:justify-start -mb-[900px]">
        {/* Render each order */}
        {context.order.map((order, index) => {
          // Check if the 'products' property is defined before accessing it
          if (order.products && order.products.length > 0) {
            return (
              <Link key={index} to={`/my-orders/${index}`}>
                {/* Only render the data for each order */}
                <OrdersCard
                  key={index}
                  date={order.date}
                  totalPrice={order.total}
                  totalProducts={order.products.length}
                />
              </Link>
            );
          } else {
            return null;
          }
        })}
      </section>
      <Layout></Layout>
    </div>
  );
}

export default MyOrders;
