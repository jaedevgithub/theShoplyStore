import React, { createContext, useState, useEffect } from "react";

// Create a new context called ShoppingCartContext
export const ShoppingCartContext = createContext();

// ShoppingCartProvider is a wrapper component that provides the shopping cart context to its children
export const ShoppingCartProvider = ({ children }) => {
  // State variables using useState hooks
  const [count, setCount] = useState(0); // Total count of items in the cart
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); // Whether the product detail modal is open or not
  const [productToShow, setProductToShow] = useState(null); // The product to show details for in the modal
  const [cartProducts, setCartProducts] = useState([]); // Array containing products added to the cart
  const [order, setOrder] = useState([]); // Array containing the orders
  const [items, setItems] = useState([]); // Array containing the items
  const [searchByTitle, setSearchByTitle] = useState(""); // Get products by title (initialized to an empty string)
  const [searchByCategory, setSearchByCategory] = useState(null); // Search products by category (initially null)
  const [filteredItems, setFilteredItems] = useState(null); // Filtered items based on searchByTitle or searchByCategory

  console.log("searchByTitle", searchByTitle);
  console.log("searchByCategory:", searchByCategory);
  console.log("filteredItems", filteredItems);

  // useEffect to fetch data from the API when the component mounts
  useEffect(() => {
    fetch("https://testing-api-cghc.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setItems([]);
      });
  }, []);

  useEffect(() => {
    // Load cart data from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartProducts(JSON.parse(savedCart));
    }

    // Load order data from localStorage
    const savedOrder = localStorage.getItem("order");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
    // Other variables you may save in localStorage
  }, []);

  // Function to save the cart to localStorage
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Function to save the order to localStorage
  const saveOrderToLocalStorage = (orderData) => {
    localStorage.setItem("order", JSON.stringify(orderData));
  };

  // Function to filter items based on the searchByTitle state
  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  // Function to filter items based on the searchByCategory state
  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  // useEffect to update the filteredItems whenever the searchByTitle or searchByCategory state changes
  useEffect(() => {
    if (searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    } else if (searchByCategory) {
      setFilteredItems(filteredItemsByCategory(items, searchByCategory));
    } else {
      // If neither searchByTitle nor searchByCategory, reset filteredItems to null
      setFilteredItems(null);
    }
  }, [items, searchByTitle, searchByCategory]);

  // useEffect hook to recalculate the total count of items in the cart whenever cartProducts change
  useEffect(() => {
    const updatedCount = cartProducts.reduce(
      (totalCount, product) => totalCount + (product.quantity || 0),
      0
    );
    setCount(updatedCount);
  }, [cartProducts]);

  // Function to open the product detail modal
  const openProductDetail = () => setIsProductDetailOpen(true);

  // Function to close the product detail modal
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Function to add a product to the cart with the selected size
  const addProductToCart = (product, selectedSize) => {
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
      saveCartToLocalStorage(updatedCartProducts);
    } else {
      // If the product with the selected size doesn't exist in the cart, add it with quantity 1
      const updatedCartProducts = [
        ...cartProducts,
        { ...product, size: selectedSize, quantity: 1 },
      ];
      setCartProducts(updatedCartProducts);
      saveCartToLocalStorage(updatedCartProducts);
    }
  };

  // Function to remove a product from the cart
  const removeProductFromCart = (product) => {
    const updatedCartProducts = cartProducts.filter((item) => item.id !== product.id);
    setCartProducts(updatedCartProducts);
    saveCartToLocalStorage(updatedCartProducts);
  };

  // Function to place an order
  const placeOrder = () => {
    // Implement your logic to place an order here

    // For example, you can save the current cart as an order
    const newOrder = {
      date: new Date().toISOString(), // You can set the order date to the current date
      total: cartProducts.reduce((total, product) => total + (product.quantity || 0), 0),
      products: cartProducts,
    };

    // Clear the cart
    const updatedCartProducts = [];
    
    // Save the updated order to localStorage
    const updatedOrders = [...order, newOrder];
    saveOrderToLocalStorage(updatedOrders);
    
    // Clear the cart data from localStorage
    localStorage.removeItem("cart");

    // Update the state with the new order and cleared cart
    setOrder(updatedOrders);
    setCartProducts(updatedCartProducts);
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
    placeOrder,
    order,
    setOrder,
    items,
    setItems,
    searchByTitle,
    setSearchByTitle,
    filteredItems,
    setFilteredItems,
    searchByCategory,
    setSearchByCategory,
  };

  // Render the ShoppingCartContext.Provider component to provide the context to all children
  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
