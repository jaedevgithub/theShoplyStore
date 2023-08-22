import React, { useContext } from "react";
import Footer from "../../Components/Footer";
import { ShoppingCartContext } from "../../Context"; // Importa el contexto de inicio de sesión

const Layout = ({ children }) => {
  const context = useContext(ShoppingCartContext); // Accede al contexto de inicio de sesión

  return (
    <>
      {/* Resto del código del Layout */}
      <main
        className="flex flex-col items-center justify-center sm:mt-20 md:mt-40 text-black"
        style={{ minHeight: "100vh" }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
