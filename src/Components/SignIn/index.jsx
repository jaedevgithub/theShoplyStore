import React, { useState, useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout";

function SignIn() {
  const { isAuthenticated, setIsAuthenticated } =
    useContext(ShoppingCartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle user login
  const handleLogin = () => {
    if (email.includes("@") && password.trim() !== "") {
      // Replace the following line with your actual authentication logic
      const authenticationSuccessful = true;

      if (authenticationSuccessful) {
        // Update authentication status in the global context
        setIsAuthenticated(true);

        // Store authentication info in local storage
        localStorage.setItem("isLoggedIn", "true");

        // Check if there's a stored redirect path
        const redirectPath = localStorage.getItem("redirectPath");
        if (redirectPath) {
          // Remove the stored path
          localStorage.removeItem("redirectPath");

          // Redirect the user back to the saved path
          navigate(redirectPath);

          // Return to prevent further execution
          return;
        }

        // Redirect authenticated user to the account page
        navigate("/my-account");
      } else {
        alert("Incorrect credentials.");
      }
    } else {
      alert("Please enter a valid email and password.");
    }
  };

  // Handle user logout
  const handleLogout = () => {
    // Update authentication status in the global context
    setIsAuthenticated(false);

    // Remove authentication state from local storage
    localStorage.removeItem("isLoggedIn");

    // Redirect user to the home page
    navigate("/");
  };

  return (
    <>
      <section className="bg-white outline rounded-lg shadow-lg font-[Whyte] w-[280px] mt-[150px] md:mt-10 hd:-mt-40 fullhd:-mt-[150px] fullhd:scale-125 4k:scale-150 4k:-mt-[1350px] md:-mt-[480px]">
        <div className="px-6 py-6 lg:px-8">
          <h2 className="mb-4 text-xl font-medium text-gray-900">
            {isAuthenticated ? "Want to log Out?" : "Try our platform"}
          </h2>
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
                    "bg-gray-50 border border-gray-300 text-gray-900 text-sm flex items-center justify-center rounded-lg focus:outline block w-full p-2.5" +
                    (isAuthenticated ? " hidden" : "")
                  }
                  placeholder="anyname@anyemail.com"
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
                    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg flex items-center justify-center focus:outline block w-full p-2.5 " +
                    (isAuthenticated ? " hidden" : "")
                  }
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleLogin}
                className="w-full text-white bg-black hover:bg-white hover:text-black hover:outline items-center justify-center font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Log In
              </button>
              <div className="text-sm font-medium text-black">
                Type any data for testing this app
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
    </>
  );
}

export default SignIn;
