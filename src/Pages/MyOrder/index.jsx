import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  const { order } = context;
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") {
    // Si el contexto tiene al menos una orden, obtén la última orden
    index = context.order?.length > 0 ? context.order.length - 1 : 14
  }
  console.log(index);

  if (!order) {
    return <p>No orders found.</p>;
  }
  
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-20">
      <Link to="/my-orders" className="absolute left-0">
        <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
      </Link>
      <h2 className="text-2xl font-bold mb-4">My Order</h2>
      {order.products.map((product, index) => (
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
            <p>Subtotal: ${product.price * product.quantity}</p>
          </div>
        </div>
      ))}
      <p className="text-xl font-bold">Total: ${order.total}</p>
    </div>
  );
};

export default MyOrder;
