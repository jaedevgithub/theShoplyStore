import React, { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";

function Cart() {
  const context = useContext(ShoppingCartContext);
  const cartProducts = context.cartProducts || [];
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate the total price of all products in the cart when cartProducts change
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

  // Function to handle removing a product from the cart
  const handleRemoveProduct = (product) => {
    const updatedCartProducts = cartProducts.filter(
      (p) => !(p.id === product.id && p.size === product.size)
    );
    context.setCartProducts(updatedCartProducts);
    context.setCount(context.count - product.quantity); // Subtract the quantity of the removed product from the counter
  };

  // Function to handle adding the quantity of a product in the cart by 1
  const handleAddQuantity = (product) => {
    context.addProductToCart(product, product.size);
    context.setCount(context.count + 1); // Update the counter directly
  };

  // Function to handle reducing the quantity of a product in the cart by 1
  const handleReduceQuantity = (product) => {
    const quantity = product.quantity || 0;
    if (quantity > 1) {
      // Reduce the quantity of the product in the cart by 1
      const updatedCartProducts = cartProducts.map((p) =>
        p.id === product.id && p.size === product.size
          ? { ...p, quantity: p.quantity - 1 }
          : p
      );
      context.setCartProducts(updatedCartProducts);
      context.setCount(context.count - 1); // Subtract 1 from the counter
    } else {
      // Find all the product sizes with quantity greater than 0
      const sizesWithQuantity = productSizes
        .find((p) => p.id === product.id)
        .sizes.filter((size) => product.quantityBySize[size] > 0);

      // Check if there are other sizes available with quantity greater than 0
      if (sizesWithQuantity.length > 1) {
        // Remove only the specific product size from the cart
        const updatedCartProducts = cartProducts.filter(
          (p) => !(p.id === product.id && p.size === product.size)
        );
        context.setCartProducts(updatedCartProducts);
        context.setCount(context.count - 1); // Subtract 1 from the counter
      } else {
        // Remove the entire product from the cart if no other sizes are available
        context.removeProductFromCart(product);
        context.setCount(context.count - 1); // Subtract 1 from the counter
      }
    }
  };

  // Function to handle the checkout process
  const handleCheckout = () => {
    // Get the current date
    const currentDate = new Date().toLocaleDateString();

    // Create the order with the necessary data
    const orderToAdd = {
      date: currentDate,
      products: cartProducts,
      total: total,
    };

    // Store the order in the global cart state
    context.setOrder([...context.order, orderToAdd]);
    console.log("Order Created:", orderToAdd);

    // Clear the cart and reset the counter
    context.setCartProducts([]);
    context.setCount(0);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-8 mb-4">Cart</h1>
        {cartProducts.length > 0 ? (
          <div>
            <ul>
              {cartProducts.map((product, index) => {
                const count = product.quantity || 0;
                const subtotal = product.price * count; // Calculate subtotal for each product

                return (
                  <li key={index} className="flex items-center space-x-4">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <p>{product.title}</p>
                      <p>${product.price}</p>
                      <p>
                        Size:{" "}
                        {typeof product.size === "object"
                          ? Object.keys(product.size).join(", ")
                          : product.size}
                      </p>{" "}
                      {/* Show the selected size */}
                      <p>Subtotal: ${subtotal.toFixed(2)}</p>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleReduceQuantity(product)}
                          className="text-red-500"
                        >
                          -
                        </button>
                        <p>{count}</p>
                        <button
                          onClick={() => handleAddQuantity(product)}
                          className="text-green-500"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveProduct(product)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>
            <p>Total Items: {context.count}</p>
            <p>Total Price: ${total}</p>
            <Link to="/my-orders/last">
              <button
                className="bg-black py-3 text-white w-full rounded-lg"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </Link>
          </div>
        ) : (
          <p>{context.count > 0 ? "Order Placed" : "Your cart is empty"}</p>
        )}
      </div>
    </Layout>
  );
}

export default Cart;
