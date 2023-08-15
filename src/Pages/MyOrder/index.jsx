import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import Layout from "../../Components/Layout";

const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  const { order } = context;
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  if (index === "last") {
    index = context.order?.length > 0 ? context.order.length - 1 : 14;
  }

  if (!order) {
    return <p>No orders found.</p>;
  }

  const orderDetails = order[index]; // Get the specific order details

  return (
    <>
      <div className="bg-white rounded-lg p-4 mt-8 md:mt-40 flex flex-col items-center -mb-[800px]">
        <h2 className="text-xl md:text-2xl font-bold mb-4">My Order</h2>
        <table className="border-collapse w-full md:w-[80%] bg-white">
          <thead className="text-lg md:text-[24px] border-b-2 border-black">
            <tr className="bg-white ">
              <th className="px-2 md:px-4 py-2 text-left">Item</th>
              <th className="px-2 md:px-4 py-2">Size</th>
              <th className="px-2 md:px-4 py-2">Price</th>
              <th className="px-2 md:px-4 py-2">Qty</th>
              <th className="px-2 md:px-4 py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.products.map((product, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "border-b border-black" : ""}
              >
                <td className="bg-white px-2 md:px-4 py-2">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-10 h-10 md:w-16 md:h-16 object-cover rounded"
                    />
                    <p className="text-sm md:text-base">{product.title}</p>
                  </div>
                </td>
                <td className="bg-white px-2 md:px-4 py-2 text-center">
                  {product.size}
                </td>
                <td className="bg-white px-2 md:px-4 py-2 text-center">
                  ${product.price}
                </td>
                <td className="bg-white px-2 md:px-4 py-2 text-center">
                  {product.quantity}
                </td>
                <td className="bg-white px-2 md:px-4 py-2 text-center">
                  ${(product.price * product.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan="4"
                className="bg-white px-2 md:px-4 py-2 text-right font-bold"
              >
                Total*
              </td>
              <td className="bg-white px-2 md:px-4 py-2 text-center font-bold">
                ${orderDetails.total}
              </td>
            </tr>
          </tfoot>
        </table>
        <Link to="/my-orders">
          <button className="bg-black py-2 md:py-3 text-white w-[150px] md:w-[200px] rounded-lg relative mt-6">
            See all orders
          </button>
        </Link>
      </div>
      <Layout></Layout>
    </>
  );
};

export default MyOrder;
