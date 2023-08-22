import React, { createContext, useState, useEffect } from "react";

// Create the context
export const ShoppingCartContext = createContext();

// Provider component
export const ShoppingCartProvider = ({ children }) => {
  // States related to the shopping cart
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [items, setItems] = useState([]);
  const [searchByTitle, setSearchByTitle] = useState("");
  const [searchByCategory, setSearchByCategory] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Print some states for debugging purposes
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

  // useEffect to load data from the API initially
  useEffect(() => {
    loadDataFromAPI();
  }, []);

  // Function to load data from the API
  const loadDataFromAPI = () => {
    fetch("https://testing-api-cghc.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // useEffect to load cart and order data from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartProducts(JSON.parse(savedCart));
    }

    const savedOrder = localStorage.getItem("order");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
    // You can load other variables from local storage here
  }, []);

  // Function to save the cart to local storage
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Function to save the order to local storage
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
      const updatedCartProducts = cartProducts.map((p) =>
        p.id === product.id && p.size === selectedSize
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
      setCartProducts(updatedCartProducts);
      saveCartToLocalStorage(updatedCartProducts);
    } else {
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
    const updatedCartProducts = cartProducts.filter(
      (item) => item.id !== product.id
    );
    setCartProducts(updatedCartProducts);
    saveCartToLocalStorage(updatedCartProducts);
  };

  // Function to place an order
  const placeOrder = () => {
    const newOrder = {
      date: new Date().toISOString(),
      total: cartProducts.reduce(
        (total, product) => total + (product.quantity || 0),
        0
      ),
      products: cartProducts,
    };

    const updatedCartProducts = [];

    const updatedOrders = [...order, newOrder];
    saveOrderToLocalStorage(updatedOrders);

    localStorage.removeItem("cart");

    setOrder(updatedOrders);
    setCartProducts(updatedCartProducts);
    setCount(0);

    setIsProductDetailOpen(false);
  };

  // Function to login
  const login = (email, password) => {
    if (email.includes("@") && password.trim() !== "") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect credentials.");
    }
  };

  // Function to log out
  const logout = () => {
    setIsAuthenticated(false);
  };

  // Context object
  const contextValue = {
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    isProductDetailOpen,
    productToShow,
    setProductToShow,
    cartProducts,
    isAuthenticated,
    setIsAuthenticated,
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
    loadDataFromAPI,
    isLoggedIn,
    email,
    setEmail,
    password,
    setPassword,
    login,
    logout,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
