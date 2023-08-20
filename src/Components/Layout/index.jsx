import React, { useContext } from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import { ShoppingCartContext } from "../../Context"; // Importa el contexto de inicio de sesión

const Layout = ({ children }) => {
  const context = useContext(ShoppingCartContext); // Accede al contexto de inicio de sesión
  const isLoggedIn = context.isLoggedIn; // Supongamos que tienes una variable isLoggedIn en tu contexto

  return (
    <>
      {/* Resto del código del Layout */}

      <main
        className="flex flex-col items-center justify-center mt-40 text-black"
        style={{ minHeight: "100vh" }}
      >
        {children}
      </main>

      {/* Renderiza el Footer solo si el usuario ha iniciado sesión */}
      {isLoggedIn && <Footer />}
    </>
  );
};

export default Layout;
