import React, { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import CategoryFilter from "../../Components/CategoryFilter";
import HomePageSlider from "../../Components/HomePageSlider";

function Home() {
  // Accede al contexto global
  const context = useContext(ShoppingCartContext);

  // Extrae filteredItems e items del contexto
  const filteredProducts = context.filteredItems || context.items;

  // Estado para determinar el tipo de vista
  const [isDesktopView, setIsDesktopView] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);

  // Función para manejar los cambios en el tamaño de la ventana
  const handleWindowSizeChange = () => {
    const width = window.innerWidth;
    setIsDesktopView(width >= 1024);
    setIsMobileView(width < 640);
    setIsTabletView(!isDesktopView && !isMobileView);
  };

  // Suscribirse a los cambios en el tamaño de la ventana
  useEffect(() => {
    // Ejecutar una vez para establecer la vista inicial
    handleWindowSizeChange();

    // Agregar un event listener para detectar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleWindowSizeChange);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <>
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
            <div className="md:hidden animate-fadeIn flex justify-center items-center h-screen relative top-[1000px] mb-[2290px] mt-[120px]">
              <div className="grid grid-cols-2 items-center gap-y-[120px] gap-x-5 justify-center ">
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
    </>
  );
}
export default Home;
