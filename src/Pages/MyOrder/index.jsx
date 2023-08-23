import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";

const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  const { order } = context;

  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  if (index === "last") {
    index = order?.length > 0 ? order.length - 1 : 14;
  }

  if (!order) {
    return (
      <p className="text-2xl font-semibold mb-40 mt-40 text-[48px]">
        NO ORDERS HERE, AAACKKK
      </p>
    );
  }

  const orderDetails = order[index]; // Get the specific order details

  return (
    <Layout>
      {/* Desktop view */}
      <section className="font-[Whyte] bg-white rounded-lg p-4 fullhd:-mt-[900px] hd:top-[20px] hd:left-[0px] flex flex-col items-center fullhd:w-[1330px] hd:w-screen relative fullhd:-top-[610px] fullhd:left-[40px] fullhd:mb-[-2250px] fullhd:mx-auto justify-center h-screen hidden sm:hidden md:hidden lg:block">
        <span className="fullhd:mr-[900px] hd:ml-[190px]">
          <h2 className="text-[30px] font-bold mb-20">My Order</h2>
        </span>
        <table className="border-collapse w-full w-[1230px] bg-white">
          <thead className="text-[26px] border-b-2 border-black">
            <tr className="bg-white ">
              <th className="px-2 md:px-4 py-2 text-left">Item</th>
              <th className="px-2 md:px-4 py-2">Size</th>
              <th className="px-2 md:px-4 py-2">Price</th>
              <th className="px-2 md:px-4 py-2">Qty</th>
              <th className="px-2 md:px-4 py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody className="text-[24px]">
            {orderDetails &&
              orderDetails.products &&
              orderDetails.products.map((product, index) => (
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
                      <p className="text-[24px]">{product.title}</p>
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
                className="text-[24px] bg-white px-2 md:px-4 py-2 text-right font-bold"
              >
                Total*
              </td>
              <td className=" text-[24px] bg-white px-2 md:px-4 py-2 text-center font-bold">
                {orderDetails && orderDetails.total && (
                  <span>${orderDetails.total}</span>
                )}
              </td>
            </tr>
          </tfoot>
        </table>
        <Link to="/my-orders">
          <button className="bg-black py-2 md:py-3 text-white w-[150px] md:w-[200px] rounded-full hover:bg-white hover:text-black hover:outline relative mt-6">
            See all orders
          </button>
        </Link>
      </section>


      {/* Tablet view */}


      {/* Mobile view */}
      <section className="md:hidden container mx-auto px-4 relative mt-[200px] mb-[80px] w-screen">
        <h2 className="text-[30px] font-bold mb-6">My Order</h2>
        <table className="border-collapse w-full bg-white">
          <thead className="text-[26px] border-b-2 border-black">
            <tr className="bg-white ">
              <th className="px-2 md:px-4 py-2 text-left">Item</th>
            </tr>
          </thead>
          <tbody className="text-[22px]">
            {orderDetails &&
              orderDetails.products &&
              orderDetails.products.map((product, index) => (
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
                      <p className="font-bold">{product.title}</p>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-4 font-medium text-[18px]  mt-2">
                      <span className="font-bold"> Size:</span>{" "}
                      <span className="ml-2">{product.size}</span>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-4 font-medium text-[18px] mt-2">
                      <span className="font-bold"> Qty:</span>{" "}
                      <span className="ml-2">{product.quantity}</span>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-4 font-medium text-[18px] mt-2">
                      <span className="font-bold">Price:</span>{" "}
                      <span className="ml-2">${product.price}</span>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-4 font-medium text-[18px]  mt-2">
                      <span className="font-bold">Subtotal:</span>{" "}
                      <span $ className="ml-2">
                        ${(product.price * product.quantity).toFixed(2)}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan="4"
                className="text-[24px] bg-white px-2 md:px-4 py-2 text-right font-bold"
              >
                Total*
              </td>
              <td className=" text-[24px] bg-white px-2 md:px-4 py-2 text-center font-bold">
                {orderDetails && orderDetails.total && (
                  <span>${orderDetails.total}</span>
                )}
              </td>
            </tr>
          </tfoot>
        </table>
        <Link to="/my-orders">
          <button className="bg-black py-2 md:py-3 text-white w-[150px] md:w-[200px] rounded-full hover:bg-white hover:text-black hover:outline relative mt-6">
            See all orders
          </button>
        </Link>
      </section>
    </Layout>
  );
};

export default MyOrder;
