import React, { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    // Calculate the total count of items in the cart when cartProducts change
    const updatedCount = cartProducts.reduce(
      (totalCount, product) => totalCount + (product.quantity || 0),
      0
    );
    setCount(updatedCount);
  }, [cartProducts]);

  const openProductDetail = () => setIsProductDetailOpen(true); // Function to open the product detail
  const closeProductDetail = () => setIsProductDetailOpen(false); // Function to close the product detail

  const addProductToCart = (product, selectedSize) => {
    // Function to add a product to the cart with the selected size
    const existingProduct = cartProducts.find(
      (p) => p.id === product.id && p.size === selectedSize
    );

    if (existingProduct) {
      // If the product with the selected size already exists in the cart, update its quantity
      const updatedCartProducts = cartProducts.map((p) =>
        p.id === product.id && p.size === selectedSize
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
      setCartProducts(updatedCartProducts);
    } else {
      // If the product with the selected size doesn't exist in the cart, add it with quantity 1
      setCartProducts((prevCartProducts) => [
        ...prevCartProducts,
        { ...product, size: selectedSize, quantity: 1 },
      ]);
    }
  };

  const removeProductFromCart = (product) => {
    // Function to remove a product from the cart
    setCartProducts(cartProducts.filter((item) => item.id !== product.id));
  };

  // Context value containing all the data and functions to be shared with child components
  const contextValue = {
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    isProductDetailOpen,
    productToShow,
    setProductToShow,
    cartProducts,
    setCartProducts,
    addProductToCart,
    removeProductFromCart,
    order,
    setOrder,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
