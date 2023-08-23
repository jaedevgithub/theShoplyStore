import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context"; // Asegúrate de proporcionar la ruta correcta al contexto global

function MyAccount() {
  const { setIsAuthenticated } = useContext(ShoppingCartContext);

  const handleLogout = () => {
    // Establece isAuthenticated en false para cerrar la sesión
    setIsAuthenticated(false);

    // Elimina el estado de inicio de sesión del localStorage al cerrar sesión
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <Layout>
      <section className="font-[Whyte] container mx-auto px-4 py-8 md:mt-0 fullhd:-mt-60 hd:-mt-40 md:-mt-[450px] sm:mt-20">
        <h2 className="text-3xl font-bold mb-4">My Account</h2>
        <div className="bg-white rounded-lg p-4 flex flex-col md:flex-row items-center justify-center md:h-80">
          <button className="bg-black py-3 text-white w-[248px] rounded-full uppercase hover:bg-white hover:text-black hover:outline mt-4 md:mt-0 md:mr-4">
            <Link to="/my-orders">View My Orders</Link>
          </button>

          <button className="bg-black py-3 text-white w-[248px] rounded-full uppercase hover:bg-white hover:text-black hover:outline mt-4 md:mt-0 sm:mt-10">
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </button>
        </div>
      </section>
    </Layout>
  );
}

export default MyAccount;
