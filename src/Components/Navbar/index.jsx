import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import("preline");

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  return (
    <header>
      {/* Desktop Navbar */}

      <nav className="hidden md:flex justify-between top-0 items-center fixed z-10 w-full py-5 px-8 text-sm font-light bg-amber-400 h-20">
        <ul className="flex items-center gap-3">
          <li className="font-semibold border-2 border-black rounded-full p-2 text-lg uppercase w-24 h-9 text-center flex items-center justify-center">
            <NavLink
              to="/shop"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Shop
            </NavLink>
          </li>
          <li className="font-semibold border-2 border-black rounded-full p-2 text-lg uppercase w-24 h-9 text-center flex items-center justify-center">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center">
          <div>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img src="src/Assets/Images/logo-full.static.svg"></img>
            </NavLink>
          </div>
        </ul>
        <ul />
        <ul className="flex items-center gap-3">
          <li className="font-semibold border-2 border-black rounded-full p-2 text-lg uppercase w-24 h-9 text-center flex items-center justify-center">
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign In
            </NavLink>
          </li>
          <li className="font-semibold border-2 border-black rounded-full p-2 text-lg uppercase w-24 h-9 text-center flex items-center justify-center">
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Cart {context.count}
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}

      <section aria-label="Global">
        <div className="md:hidden top-0 flex justify-between items-center fixed z-10 w-screen py-5 px-8 text-sm font-light bg-amber-400 h-20">
          <button
            type="button"
            className=" hs-collapse-toggle p-2 border-2 inline-flex justify-center items-center gap-2 rounded-full font-medium border-black"
            data-hs-collapse="#navbar-image-and-text-1"
            aria-controls="navbar-image-and-text-1"
            aria-label="Toggle navigation"
          >
            <svg
              className="hs-collapse-open:hidden w-4 h-4"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <svg
              className="hs-collapse-open:block hidden w-4 h-4"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>

          <button>
            <svg
              className="relative left-5"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <circle
                cx="7.23318"
                cy="7.73218"
                r="5"
                transform="rotate(-45 7.23318 7.73218)"
                stroke="black"
                strokeWidth="2"
              />
              <path
                d="M10.7695 11.2677L14.3051 14.8032"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </button>
          <button className="">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <img src="src/Assets/Images/logo-full.static.svg" />
            </NavLink>
          </button>

          <button>
            <svg
              className="relative right-5 svg-map-pin"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7.57027C15 12.4865 8 18 8 18C8 18 1 12.4865 1 7.57027C1 3.94161 4.13401 1 8 1C11.866 1 15 3.94161 15 7.57027Z"
                stroke="#000000"
                strokeWidth="2px"
                fill="none"
              ></path>
              <circle
                cx="8"
                cy="8"
                r="2.5"
                stroke="#000000"
                strokeWidth="2px"
                fill="none"
              ></circle>
            </svg>
          </button>

          <button className="font-semibold border-2 bg-black border-black rounded-full p-2 text-md uppercase w-10 h-6 text-center flex items-center justify-center scale-150">
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <p className="text-xs text-white">{context.count}</p>
            </NavLink>
          </button>
        </div>
      </section>
      <nav
        id="navbar-image-and-text-1"
        className="sm:hidden z-10 absolute top-20 right-20 hs-collapse overflow-hidden transition-all duration-300 basis-full grow w-screen h-80 flex flex-col items-center"
      >
        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 text-6xl">
          <NavLink
            href="#"
            aria-current="page"
            to="/shop"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <p className="relative left-4 top-4">Shop</p>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            href="#"
          >
            <p className="relative left-4 top-6">About</p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
