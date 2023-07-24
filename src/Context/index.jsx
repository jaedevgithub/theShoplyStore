import React, { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const updatedCount = cartProducts.reduce(
      (totalCount, product) => totalCount + (product.quantity || 0),
      0
    );
    setCount(updatedCount);
  }, [cartProducts]);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const addProductToCart = (product, selectedSize) => {
    const existingProduct = cartProducts.find(
      (p) => p.id === product.id && p.size === selectedSize
    );

    if (existingProduct) {
      const updatedCartProducts = cartProducts.map((p) =>
        p.id === product.id && p.size === selectedSize
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
      setCartProducts(updatedCartProducts);
    } else {
      setCartProducts((prevCartProducts) => [
        ...prevCartProducts,
        { ...product, size: selectedSize, quantity: 1 },
      ]);
    }
  };

  const removeProductFromCart = (product) => {
    setCartProducts(cartProducts.filter((item) => item.id !== product.id));
  };

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
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
