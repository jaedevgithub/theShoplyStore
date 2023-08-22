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
  return (
    <Layout>
      <div className="bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h3>
          <form className="space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <button
              type="button"
              onClick={handleLogin}
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {isAuthenticated ? "Sign out" : "Sign in"}
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <a
                href="#"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;
