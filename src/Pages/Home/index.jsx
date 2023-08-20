import React, { useContext, useState, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import CategoryFilter from "../../Components/CategoryFilter";
import HomePageSlider from "../../Components/HomePageSlider";
import SignIn from "../../Components/SignIn";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

function Home() {
  // Accede al contexto global
  const context = useContext(ShoppingCartContext);

  // Extrae filteredItems e items del contexto
  const filteredProducts = context.filteredItems || context.items;

  // Determina el tipo de vista en función del tamaño de la pantalla u otros criterios
  const isDesktopView = window.innerWidth >= 1024;
  const isMobileView = window.innerWidth < 640;
  const isTabletView = !isDesktopView && !isMobileView;

  // Accede al estado de inicio de sesión del contexto
  const { isLoggedIn, login } = context;

  const handleLogin = () => {
    // Llama a la función de inicio de sesión del contexto
    login("correo@ejemplo.com", "contraseña");
  };

  useEffect(() => {
    // Comprueba el estado de inicio de sesión al montar el componente
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (storedIsLoggedIn) {
      context.login("correo@ejemplo.com", "contraseña");
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <Layout>
          <section className="mt-40">
            {/* Componente del carrusel de la página de inicio para escritorio y móvil */}
            <HomePageSlider className="animate-fadeIn" />

            {/* Componente de filtro de categoría de productos para escritorio y móvil */}
            <CategoryFilter className="animate-fadeIn" />

            {/* Sección principal para vista de escritorio */}
            {isDesktopView && (
              <div className="hidden md:hidden lg:block sm:w-screens relative animate-slideInLeft">
                <div className="grid gap-x-6 gap-y-20 grid-cols-4 w-full max-w-screen-xl relative mx-auto">
                  {filteredProducts.map((item, index) => (
                    <Card key={index} data={item} className="animate-fadeIn" />
                  ))}
                </div>
              </div>
            )}

            {isMobileView && (
              <div className="md:hidden animate-fadeIn flex justify-center items-center h-screen relative top-[1000px]">
                <div className="grid grid-cols-2 items-center gap-y-20 gap-x-5 justify-center ">
                  {filteredProducts.map((item, index) => (
                    <Card key={index} data={item} className="animate-fadeIn" />
                  ))}
                </div>
              </div>
            )}

            {/* Sección secundaria para vista de tableta */}
            {isTabletView && (
              <div className="hidden md:block lg:hidden w-screens relative top-[-50px] animate-slideInRight">
                <div className="grid grid-cols-4 items-center gap-y-40 gap-x-6">
                  {filteredProducts.map((item, index) => (
                    <Card key={index} data={item} className="animate-fadeIn" />
                  ))}
                </div>
              </div>
            )}
          </section>
        </Layout>
      ) : (
        <SignIn onLogin={handleLogin} />
      )}
    </>
  );
}
export default Home;
