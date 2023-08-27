import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");

    if (savedOrders) {
      context.setOrder(JSON.parse(savedOrders));
    }
  }, [context.setOrder]);

  return (
    <section className="font-[Whyte] min-h-screen mt-[90px] mb-80 pt-20 md:mt-20 md:mb-[450px]">
      <div className="container mx-auto px-4 text-left mb-8">
        <h2 className="text-3xl font-bold mt-8 mb-4">My Orders</h2>
      </div>
      <div className="flex items-center justify-center flex-col md:justify-start">
        {context.order && context.order.length > 0 ? (
          context.order.map((order, index) =>
            order.products && order.products.length > 0 ? (
              <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard
                  date={order.date}
                  totalPrice={order.total}
                  totalProducts={order.products.reduce(
                    (total, product) => total + (product.quantity || 0),
                    0
                  )}
                />
              </Link>
            ) : null
          )
        ) : (
          <div className="flex flex-col items-center justify-center min-h-screen pt-20 mt-20">
            <p className="text-2xl font-semibold mb-40 mt-40 text-4xl">
              NO ORDERS HERE, AAACKKK
            </p>
            <Link to="/">
              <button className="bg-black py-3 text-white w-[248px] rounded-full uppercase hover:bg-white hover:text-black hover:outline-none">
                See all products
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default MyOrders;
