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
    <>
      <div className="flex flex-col items-center justify-center min-h-screen pt-20 mt-20 ">
        {/* Container for the "My Orders" heading */}
        <div className="container mx-auto px-4 text-center mb-8">
          <h2 className="text-3xl font-bold mt-8 mb-4">My orders</h2>
        </div>
        <section className="flex items-center justify-center flex-col md:justify-start">
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
        </section>
      </div>
      <Layout></Layout>
    </>
  );
}

export default MyOrders;
