import { useRoutes, BrowserRouter } from "react-router-dom";
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
  // Define the routes using the useRoutes hook
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/shop", element: <Shop /> },
    { path: "/about", element: <About /> },
    { path: "/cart", element: <Cart /> },
    { path: "/product-detail", element: <ProductDetail /> },
    { path: "/search-results", element: <SearchResultsPage /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    // Wrap the entire app with the ShoppingCartProvider to provide the shopping cart context to all components
    <ShoppingCartProvider>
      <BrowserRouter>
        {/* Render the routes defined in AppRoutes */}
        <AppRoutes />
        {/* Render the Navbar component at the top level to be visible in all pages */}
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
