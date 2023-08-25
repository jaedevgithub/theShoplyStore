import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

function MyAccount() {
  const { setIsAuthenticated } = useContext(ShoppingCartContext);

  // Handle user logout
  const handleLogout = () => {
    // Set isAuthenticated to false to log out
    setIsAuthenticated(false);

    // Remove login state from local storage when logging out
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <>
      <section className="font-[Whyte] container mx-auto px-4 py-8 md:mt-0 fullhd:-mt-60 hd:-mt-40 md:-mt-[450px] mt-20 4k:mt-[-1200px]">
        <h2 className="text-3xl font-bold mb-4 4k:ml-40">My Account</h2>
        <div className="bg-white rounded-lg p-4 flex flex-col md:flex-row items-center justify-center md:h-80">
          <button className="bg-black py-3 text-white w-[248px] hd:rounded-customBorder rounded-lg uppercase hover:bg-white hover:text-black hover:outline mt-4 md:mt-0 md:mr-4 flex items-center justify-center">
            <Link to="/my-orders">View My Orders</Link>
          </button>

          <button className="bg-black py-3 text-white w-[248px] hd:rounded-customBorder rounded-lg uppercase hover:bg-white hover:text-black hover:outline mt-4 md:mt-0 sm:mt-10 flex items-center justify-center">
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default MyAccount;
