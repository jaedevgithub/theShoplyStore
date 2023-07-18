import React, { useContext, useState, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";

function Cart() {
  const context = useContext(ShoppingCartContext);
  const cartProducts = context.cartProducts;
  const productCounts = context.productCounts;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      let total = 0;
      for (const product of cartProducts) {
        const count = productCounts[product.id];
        total += product.price * count;
      }
      return total;
    };

    const newTotal = calculateTotal();
    setTotal(newTotal);
  }, [cartProducts, productCounts]);

  const handleRemoveProduct = (product) => {
    context.removeProductFromCart(product);
  };

  const handleAddQuantity = (product) => {
    context.addProductToCart(product, 1);
  };

  const handleReduceQuantity = (product) => {
    const quantity = productCounts[product.id] - 1;
    if (quantity > 0) {
      context.addProductToCart(product, -1);
    } else {
      context.removeProductFromCart(product);
    }
  };

  // Crear un objeto de productos únicos
  const uniqueProducts = [...new Set(cartProducts)];

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-8 mb-4">Cart</h1>
        {cartProducts.length > 0 ? (
          <div>
            <ul>
              {uniqueProducts.map((product, index) => {
                const count = productCounts[product.id];
                const showCounter = count > 1;

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
                      <p>Size: {product.size}</p>
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
                  </li>
                );
              })}
            </ul>
            <p>Total Items: {context.count}</p>
            <p>Total Price: ${total}</p>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </Layout>
  );
}

export default Cart;
