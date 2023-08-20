import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../../Components/SignIn";
import Cart from "../../Components/Cart";
import ProductDetail from "../../Components/ProductDetail";
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
  return (
    // Wrap the application with the ShoppingCartProvider and BrowserRouter
    <ShoppingCartProvider>
      <BrowserRouter>
        {/* Render the application routes */}
        <AppRoutes />
        {/* Render the Navbar */}
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
