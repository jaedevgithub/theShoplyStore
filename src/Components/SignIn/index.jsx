import React, { useState, useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout";

function SignIn() {
  const { isAuthenticated, setIsAuthenticated, login } =
    useContext(ShoppingCartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.includes("@") && password.trim() !== "") {
      // Realiza la lógica de autenticación aquí (reemplaza con tu lógica real)
      const authenticationSuccessful = true; // Cambia esto con tu lógica real

      if (authenticationSuccessful) {
        // Actualiza el estado de autenticación en el contexto global
        setIsAuthenticated(true); // Establece isAuthenticated en true después de la autenticación exitosa

        // Guarda la información de autenticación en el almacenamiento local
        localStorage.setItem("isLoggedIn", "true");

        // Verifica si el usuario llegó a la página de Sign-In desde el Carrito
        const redirectPath = localStorage.getItem("redirectPath");
        if (redirectPath) {
          // Borra la ruta guardada en localStorage
          localStorage.removeItem("redirectPath");

          // Redirige al usuario de vuelta al Carrito
          navigate(redirectPath);

          // Importante: Retorna para evitar que el código siguiente se ejecute
          return;
        }

        // Si no hay una ruta guardada, redirige al usuario a la página de su cuenta por defecto
        navigate("/my-account");
      } else {
        alert("Credenciales incorrectas.");
      }
    } else {
      alert(
        "Por favor, ingresa un correo electrónico válido y una contraseña."
      );
    }
  };

  const handleLogout = () => {
    // Actualiza el estado de autenticación en el contexto global a false
    setIsAuthenticated(false);

    // Elimina el estado de inicio de sesión del localStorage al cerrar sesión
    localStorage.removeItem("isLoggedIn");

    // Redirige al usuario a la página de inicio
    navigate("/");
  };

  return (
    <Layout>
      <section className="bg-customYellow outline rounded-lg shadow-lg font-[Whyte] w-[300px] hd:-mt-40 fullhd:-mt-[650px] 4k:scale-150 4k:-mt-[1350px] md:-mt-[480px]">
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            {isAuthenticated ? "Want to log Out?" : "Try our platform"}
          </h3>
          {!isAuthenticated ? (
            <form className="space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className={
                    "block mb-2 text-sm font-medium text-gray-900" +
                    (isAuthenticated ? " hidden" : "")
                  }
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={
                    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline block w-full p-2.5" +
                    (isAuthenticated ? " hidden" : "")
                  }
                  placeholder="yourname@youremail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className={
                    "block mb-2 text-sm font-medium text-gray-900" +
                    (isAuthenticated ? " hidden" : "")
                  }
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={
                    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline block w-full p-2.5 " +
                    (isAuthenticated ? " hidden" : "")
                  }
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleLogin}
                className="w-full text-white bg-black hover:bg-white hover:text-black hover:outline font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Log In
              </button>
              <div className="text-sm font-medium text-black">
                Type any data for test this app{" "}
              </div>
            </form>
          ) : (
            <button
              type="button"
              onClick={handleLogout}
              className="w-full text-white bg-black hover:white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Log Out
            </button>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default SignIn;
