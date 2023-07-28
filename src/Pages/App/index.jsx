import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Shop from "../Shop";
import About from "../About";
import Cart from "../../Components/Cart";
import ProductDetail from "../../Components/ProductDetail";
import Navbar from "../../Components/Navbar";
import SearchResultsPage from "../SearchResultsPage";
import { ShoppingCartProvider } from "../../Context";
import "./App.css";

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
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/search-results" element={<SearchResultsPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;