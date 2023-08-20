import React, { useContext, useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import "preline";

const Navbar = () => {
  // Get the shopping cart context using useContext hook
  const context = useContext(ShoppingCartContext);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Use the useNavigate hook here
  const isLoggedIn = context.isLoggedIn; // Supongamos que tienes una variable isLoggedIn en tu contexto

  // Function to handle click on the search button
  const handleSearchButtonClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  // Function to handle scroll and show/hide Navbar and Search Bar
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = prevScrollPos < currentScrollPos;

    setPrevScrollPos(currentScrollPos);

    if (isSearchVisible && isScrollingDown) {
      // If the Search Bar is open and scrolling down, close it
      setIsSearchVisible(false);
    }

    // Hide Navbar when scrolling down and show it when scrolling up
    setIsNavbarVisible(!isScrollingDown || currentScrollPos === 0);
  };

  useEffect(() => {
    // Add scroll event when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSearchVisible]);

  // Function to handle search form submission
  const handleSearch = (event) => {
    event.preventDefault();
    // Redirect to the search results page with the search query as a URL parameter
    navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`);
  };

  const handleNavLinkClick = (event) => {
    // Check if the NavLink is already active
    const isActive = event.currentTarget === document.activeElement;
    if (isActive) {
      // If it's on the Home page, refresh the page
      if (window.location.pathname === "/") {
        window.location.reload();
      } else {
        // If it's not on the Home page, navigate to the root path "/"
        navigate("/");
      }
    }
  };

  return (
    <header className="w-screen">
      {/* Search Bar */}
      <div
        className={`search-bar-container z-20 ${
          isSearchVisible ? "h-20" : "h-0"
        } overflow-hidden transition-all duration-200 ease-in-out fixed top-20 w-screen  ${
          isSearchVisible
            ? "border-b-2 border-black border-t-2 border-black"
            : ""
        } ${
          isSearchVisible || isNavbarVisible
            ? "opacity-100"
            : "opacity-0 hidden "
        }`}
      >
        <div className="flex items-center justify-center h-20 w-full bg-white">
          <div className="flex items-center w-full mx-auto rounded-lg">
            <div className="w-screen">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  id="searchInput"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                  placeholder="Search"
                  style={{
                    color: "black",
                    fontSize: 30,
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav
        className={`hidden md:hidden lg:flex justify-between top-0 font-[Whyte] text-[14px] items-center md:fixed z-10 w-auto lg:w-full py-5 px-8 text-sm font-light bg-customYellow h-20 transition-opacity ${
          isNavbarVisible && isLoggedIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul className="flex items-center gap-3">
          {/* Shop NavLink */}
          <li className="font-semibold border-2 border-black rounded-full p-2 text-[16px] uppercase w-24 h-[38px] text-center flex items-center justify-center hover:bg-black hover:text-white">
            <NavLink to="/">Shop</NavLink>
          </li>
          {/* Search Button */}
          <button onClick={handleSearchButtonClick}>
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
        </ul>
        <ul className="flex items-center">
          {/* Logo NavLink */}
          <div>
            <NavLink onClick={handleNavLinkClick} to="/">
              <img src="/shoply-logo-full.static.svg" alt="logo" />
            </NavLink>
          </div>
        </ul>
        <ul />
        <ul className="flex items-center gap-3">
          {/* Sign In NavLink */}
          <li className="w-[214px] h-[38px] text-[16px] border-2 font-semibold border-black rounded-full p-2 text-md uppercase text-center flex items-center justify-center hover:bg-black hover:text-white">
            <NavLink to="/my-account">
              {" "}
              <span className="relative top-[1.5px]">My account</span>
            </NavLink>
          </li>
          {/* Cart NavLink with item count */}
          <li className="font-semibold border-2 border-black rounded-full p-2 text-[16px] uppercase w-24 h-[38px] text-center flex items-center justify-center hover:bg-black hover:text-white">
            <NavLink to="/cart">
              {" "}
              <span className="relative top-[1.5px]">Cart {context.count}</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <section aria-label="Global">
        <div className="lg:hidden top-0 flex justify-between items-center fixed z-10 w-screen py-5 px-8 text-sm font-light bg-customYellow h-20 opacity-100">
          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="hs-collapse-toggle p-2 border-2 inline-flex justify-center items-center gap-2 rounded-full font-medium border-black relative right-5"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
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

          {/* Mobile Search Button */}
          <button onClick={handleSearchButtonClick}>
            <svg
              className="relative right-2"
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

          {/* Mobile Logo Button */}
          <button className="w-52 h-full">
            <Link to="/" onClick={handleNavLinkClick}>
              <img
                className="w-full h-full object-cover relative right-2"
                src="/shoply-logo-full.static.svg"
                alt="logo"
              />
            </Link>
          </button>

          {/* Mobile Cart Button with item count */}
          <button className="font-semibold border-2 bg-black border-black rounded-full p-2 text-md uppercase w-10 h-6 text-center flex items-center justify-center scale-150 relative left-3">
            <NavLink to="/cart">
              <p className="text-xs text-white">{context.count}</p>
            </NavLink>
          </button>
          <nav
            id="navbar-collapse-with-animation"
            className="sm:hidden z-10 absolute top-20 left-0 flex items-left hidden overflow-hidden transition-all duration-300 bg-white h-[190px] grow w-screen border-black border-t-2 shadow-lg"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 text-6xl relative ml-5 mt-[120px] font-[Whyte]">
              <div>
                <div className="flex flex-col relative ">
                  <Link
                    to="my-account"
                    className="font-medium text-black"
                    href="#"
                    aria-current="page"
                  >
                    <p className="text-[25px]">My account</p>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>

      {/* Mobile Navbar Menu */}
    </header>
  );
};

export default Navbar;
