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
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">My Account</h2>
        <div className="bg-white rounded-lg p-4 shadow-md">
          {/* Aquí puedes mostrar otros detalles de la cuenta del usuario */}
        </div>

        <div className="mt-8">
          <Link to="/my-orders" className="text-blue-700 hover:underline">
            View My Orders
          </Link>
        </div>

        <div className="mt-4">
          <Link to="/" onClick={handleLogout} className="text-red-700 hover:underline">
            Logout
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default MyAccount;
