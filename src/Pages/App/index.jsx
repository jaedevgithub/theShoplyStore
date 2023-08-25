import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import { Rings } from 'react-loader-spinner';
import NotFound from "../NotFound";
import SignIn from "../../Components/SignIn";
import Cart from "../../Components/Cart";
import ProductDetail from "../../Components/ProductDetail";
import Layout from "../../Components/Layout";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import SearchResultsPage from "../SearchResultsPage";

import "./App.css";

// Define the routes for the application
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/my-order" element={<MyOrder />} />
      <Route path="/my-orders" element={<MyOrders />} />
      <Route path="/my-orders/last" element={<MyOrder />} />
      <Route path="/my-orders/:id" element={<MyOrder />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product-detail/:productId" element={<ProductDetail />} />
      <Route path="/search-results" element={<SearchResultsPage />} />
      <Route path="./*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  // State to control whether the application has finished loading
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  // Simulate the application loading (replace with your actual loading logic)
  useEffect(() => {
    // Simulate a 2-second loading delay
    setTimeout(() => {
      setIsAppLoaded(true); // Mark the application as loaded
    }, 4000); // Adjust the time as needed
  }, []);

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        {isAppLoaded ? (
          // Render the application when it's loaded
          <>
            <Navbar />
            <Layout>
              <AppRoutes />
            </Layout>
            <Footer />
          </>
        ) : (
          // Show a loading spinner while the application is loading
          <div className="flex flex-col justify-center items-center h-screen">
            <Rings
              height="80"
              width="80"
              radius={9}
              color="black"
              ariaLabel="three-dots-loading"
            />
            <p className="font-[Whyte] text-[25px]">Loading</p>
          </div>
        )}
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
