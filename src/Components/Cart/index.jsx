import React, { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Cart() {
  // State variables for responsive design
  const [isDesktopAndTabletView, setIsDesktopAndTabletView] = useState(true);
  const [isMobileView, setIsMobileView] = useState(true);
  const context = useContext(ShoppingCartContext);
  const cartProducts = context.cartProducts || [];
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const [orderCreated, setOrderCreated] = useState(false);

  // Function to handle window size changes
  const handleWindowSizeChange = () => {
    const width = window.innerWidth;
    setIsDesktopAndTabletView(width > 640);
    setIsMobileView(width < 767);
  };

  // Subscribe to window resize events
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    // Unsubscribe when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  // Calculate total price
  useEffect(() => {
    const calculateTotal = () => {
      let total = 0;
      for (const product of cartProducts) {
        const count = product.quantity || 0;
        total += product.price * count;
      }
      return total;
    };

    const newTotal = calculateTotal();
    setTotal(newTotal);
  }, [cartProducts]);

  // Handlers
  const handleRemoveProduct = (product) => {
    const updatedCartProducts = cartProducts.filter(
      (p) => !(p.id === product.id && p.size === product.size)
    );
    context.setCartProducts(updatedCartProducts);
    context.setCount(context.count - product.quantity);
  };

  const handleAddQuantity = (product) => {
    context.addProductToCart(product, product.size);
    context.setCount(context.count + 1);
  };

  const handleReduceQuantity = (product) => {
    const quantity = product.quantity || 0;
    if (quantity > 1) {
      const updatedCartProducts = cartProducts.map((p) =>
        p.id === product.id && p.size === product.size
          ? { ...p, quantity: p.quantity - 1 }
          : p
      );
      context.setCartProducts(updatedCartProducts);
      context.setCount(context.count - 1);
    } else {
      // Handle removal when quantity is 1 or less
      // Replace 'productSizes' with your logic
    }
  };

  const handleCheckout = () => {
    const currentDate = new Date().toLocaleDateString();
    const orderToAdd = {
      date: currentDate,
      products: cartProducts,
      total: total,
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);

    const ordersInLocalStorage = localStorage.getItem("orders");
    const orders = ordersInLocalStorage ? JSON.parse(ordersInLocalStorage) : [];
    orders.push(orderToAdd);
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");

    setOrderCreated(true);
  };

  const handleSignInFromCart = () => {
    localStorage.setItem("redirectPath", "/cart");
    navigate("/sign-in");
  };

  return (
    <>
      {/* Desktop and tablet shopping cart */}
      {isDesktopAndTabletView && (
        <section className="hidden relative md:block lg:block container mx-auto px-4 relative w-[1330px] mb-[800px] md:mb-[150px] md:mt-[-200px] fullhd:mt-[-200px] hd:mt-[50px] 4k:mt-[-1200px]">
          <h1 className="text-3xl font-bold mt-8 mb-4 pb-6 border-b-2 border-black">
            {context.count} items in Cart
          </h1>
          {cartProducts.length > 0 ? (
            <div>
              <table className="border-collapse w-full bg-white">
                <thead className="text-[24px] border-b-2 border-black">
                  <tr className="bg-white">
                    <th className="px-4 py-2 text-left">Item</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Qty</th>
                    <th className="px-4 py-2">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((product, index) => {
                    const count = product.quantity || 0;
                    const subtotal = product.price * count;

                    return (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0
                            ? "border-t-2 border-b-2 border-black"
                            : ""
                        }
                      >
                        <td className="bg-white px-4 py-2">
                          <div className="flex items-center space-x-4">
                            <button
                              onClick={() => handleRemoveProduct(product)}
                              className="text-black text-[46px]"
                            >
                              <IoIosCloseCircleOutline />
                            </button>
                            <img
                              src={product.images && product.images[0]}
                              alt={product.title}
                              className="w-[120px] h-[120px] object-cover rounded-lg"
                            />
                            <span>
                              <p className="text-[26px]">{product.title}</p>
                              <p>
                                {typeof product.size === "object"
                                  ? Object.keys(product.size).join(", ")
                                  : product.size}
                              </p>
                            </span>
                          </div>
                        </td>
                        <td className="bg-white px-4 py-2 text-center">
                          ${product.price}
                        </td>
                        <td className="bg-white px-4 py-2 text-center">
                          <span className="flex justify-center">
                            <button
                              onClick={() => handleReduceQuantity(product)}
                              className="text-black text-[46px]"
                            >
                              <AiOutlineMinusCircle />
                            </button>
                            <p className="mt-3 ml-4 mr-4 text-[16px]">
                              {count}
                            </p>
                            <button
                              onClick={() => handleAddQuantity(product)}
                              className="text-black text-[46px]"
                            >
                              <AiOutlinePlusCircle />
                            </button>
                          </span>
                        </td>
                        <td className="bg-white px-4 py-2 text-center">
                          ${subtotal.toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="text-right mt-4 mb-4 text-[26px]">
                <span className="font-bold">Total*</span> ${total}
              </p>
              <span className="flex justify-end items-end">
                {context.isAuthenticated ? (
                  <button
                    className="bg-black py-3 text-white w-[200px] rounded-lg relative"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </button>
                ) : (
                  <button
                    className="bg-black py-3 text-white w-[200px] rounded-lg relative"
                    onClick={handleSignInFromCart}
                  >
                    Sign In to Checkout
                  </button>
                )}
              </span>
            </div>
          ) : (
            <div className="text-center mt-8">
              <p className="text-2xl font-semibold mb-40 mt-4 text-[48px]">
                {orderCreated
                  ? "Order created successfully!"
                  : "EMPTY CART, AAACKKK"}
              </p>
              <Link to="/">
                <button
                  className="bg-black py-3 text-white w-[248px] rounded-full uppercase hover:bg-white hover:text-black hover:outline mr-10"
                  onClick={handleCheckout}
                >
                  See all products
                </button>
              </Link>
              {context.isAuthenticated && (
                <Link to="/my-orders">
                  <button
                    className="bg-black py-3 text-white w-[248px] rounded-full uppercase hover:bg-white hover:text-black hover:outline"
                    onClick={handleCheckout}
                  >
                    Go to my orders
                  </button>
                </Link>
              )}
            </div>
          )}
        </section>
      )}

      {/* Mobile shopping cart */}
      {isMobileView && (
        <section className="md:hidden container mx-auto px-4 relative mt-[170px] mb-[60px] w-screen">
          <h1 className="text-3xl font-bold mt-8 mb-4">
            {context.count} items in Cart
          </h1>
          {cartProducts.length > 0 ? (
            <div>
              <table className="border-collapse w-full bg-white">
                <thead className="text-[24px] border-t-2 border-b-2 border-black">
                  <tr className="bg-white">
                    <th className="px-4 py-2 text-left">Item</th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((product, index) => {
                    const count = product.quantity || 0;
                    const subtotal = product.price * count;

                    return (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0
                            ? "border-t-2 border-b-2 border-black"
                            : ""
                        }
                      >
                        <td className="bg-white px-4 py-2">
                          <div className="flex items-center space-x-4 justify-between">
                            <img
                              src={product.images && product.images[0]}
                              alt={product.title}
                              className="w-[120px] h-[120px] object-cover rounded-lg"
                            />
                            <span>
                              <p className="text-[16px]">{product.title}</p>
                            </span>
                            <button
                              onClick={() => handleRemoveProduct(product)}
                              className="text-black text-[46px]"
                            >
                              <IoIosCloseCircleOutline />
                            </button>
                          </div>
                          <div className="flex items-center space-x-4 justify-between mt-6 mb-6">
                            <span className="flex justify-center">
                              <button
                                onClick={() => handleReduceQuantity(product)}
                                className="text-black text-[46px]"
                              >
                                <AiOutlineMinusCircle />
                              </button>
                              <p className="mt-3 ml-4 mr-4 text-[16px]">
                                {count}
                              </p>
                              <button
                                onClick={() => handleAddQuantity(product)}
                                className="text-black text-[46px]"
                              >
                                <AiOutlinePlusCircle />
                              </button>
                            </span>
                            <span className="flex">
                              <p className="mr-5"> ${product.price}</p>
                              <p> ${subtotal.toFixed(2)}</p>
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="text-right mt-4 mb-4 text-[26px]">
                <span className="font-bold">Total*</span> ${total}
              </p>
              {context.isAuthenticated ? (
                <button
                  className="bg-black py-3 text-white w-full rounded-lg"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              ) : (
                <button
                  className="bg-black py-3 text-white w-full rounded-lg"
                  onClick={handleSignInFromCart}
                >
                  Sign In to Checkout
                </button>
              )}
            </div>
          ) : (
            <div className="text-center mt-8">
              <p className="text-2xl font-medium mb-40 mt-40 text-[48px] font-[Whyte]">
                {orderCreated
                  ? "Order created successfully!"
                  : "EMPTY CART, AAACKKK"}
              </p>
              <Link to="/">
                <button
                  className="bg-black py-3 text-white w-[248px] rounded-full uppercase hover:bg-white hover:text-black hover:outline"
                  onClick={handleCheckout}
                >
                  See all products
                </button>
              </Link>
            </div>
          )}
        </section>
      )}
    </>
  );
}

export default Cart;
