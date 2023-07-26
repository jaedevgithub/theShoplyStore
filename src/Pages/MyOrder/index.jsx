import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const MyOrder = () => {
  // Get the shopping cart context
  const context = useContext(ShoppingCartContext);

  // Destructure the order from the context
  const { order } = context;

  // Get the current path from the window location
  const currentPath = window.location.pathname;

  // Extract the index from the URL path
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  // If "last" is present in the URL, set the index to the last order
  if (index === "last") {
    // If the context has at least one order, get the index of the last order
    index = context.order?.length > 0 ? context.order.length - 1 : 14;
  }

  console.log(index);

  // If no order is found in the context, display a message
  if (!order) {
    return <p>No orders found.</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-20">
      <Link to="/my-orders" className="absolute left-0">
        {/* Navigate back to MyOrders page using the link */}
        <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
      </Link>
      <h2 className="text-2xl font-bold mb-4">My Order</h2>
      {/* Map through the products of the specified order */}
      {order[index].products.map((product, index) => (
        <div
          key={index}
          className="flex items-center border-b border-gray-300 pb-4 mb-4"
        >
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-16 h-16 object-cover rounded"
          />
          <div className="ml-4">
            <p className="font-semibold">{product.title}</p>
            <p>Size: {product.size}</p>
            {/* Calculate the subtotal for each product */}
            <p>Subtotal: ${product.price * product.quantity}</p>
          </div>
        </div>
      ))}
      {/* Display the total price of the specified order */}
      <p className="text-xl font-bold">Total: ${order[index].total}</p>
    </div>
  );
};

export default MyOrder;
