import React, { useContext, useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import "preline";

const Navbar = () => {
  // State variables
  const context = useContext(ShoppingCartContext);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("desktop");

  // Context for authentication
  const { isAuthenticated, setIsAuthenticated } = useContext(ShoppingCartContext);

  // Toggle search bar visibility
  const handleSearchButtonClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  // Handle scrolling for showing/hiding the navbar and search bar
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = prevScrollPos < currentScrollPos;

    setPrevScrollPos(currentScrollPos);

    if (isSearchVisible && isScrollingDown) {
      setIsSearchVisible(false);
    }

    setIsNavbarVisible(!isScrollingDown || currentScrollPos === 0);
  };

  // Add scroll event listener and cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSearchVisible]);

  // Handle search form submission
  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`);
  };

  // Handle navigation link click
  const handleNavLinkClick = (event) => {
    const isActive = event.currentTarget === document.activeElement;
    if (isActive) {
      if (window.location.pathname === "/") {
        window.location.reload();
      } else {
        navigate("/");
      }
    }
  };

  // Check if the user is authenticated from local storage
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Effect to detect screen size and update the view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 820) {
        setCurrentView("mobile");
      } else {
        setCurrentView("desktop");
      }
    };

    // Check screen size initially
    handleResize();

    // Add window resize event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-screen">
      {/* Search bar */}
      <section
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
      </section>

      {/* Desktop navbar */}
      {currentView === "desktop" && (
        <nav
          className={`hidden md:hidden lg:flex justify-between top-0 font-[Whyte] text-[14px] items-center md:fixed z-10 w-auto lg:w-full py-5 px-8 text-sm font-light bg-customYellow h-20 transition-opacity ${
            isNavbarVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="flex items-center gap-3">
            <li className="font-semibold border-2 border-black rounded-full p-2 text-[16px] uppercase w-24 h-[38px] text-center flex items-center justify-center hover:bg-black hover:text-white">
              <NavLink to="/">Shop</NavLink>
            </li>
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
            <div>
              <NavLink onClick={handleNavLinkClick} to="/">
                <img
                  className="ml-20"
                  src="/shoply-logo-full.static.svg"
                  alt="logo"
                />
              </NavLink>
            </div>
          </ul>
          <ul />
          <ul className="flex items-center gap-3">
            <li className="w-[214px] h-[38px] text-[16px] border-2 font-semibold border-black rounded-full p-2 text-md uppercase text-center flex items-center justify-center hover:bg-black hover:text-white">
              {isAuthenticated ? (
                <NavLink to="/my-account">
                  <span className="relative top-[1.5px]">My Account</span>
                </NavLink>
              ) : (
                <NavLink to="/sign-in">
                  <span className="relative top-[1.5px]">Sign In</span>
                </NavLink>
              )}
            </li>
            <li className="font-semibold border-2 border-black rounded-full p-2 text-[16px] uppercase w-24 h-[38px] text-center flex items-center justify-center hover-bg-black hover:text-white">
              <NavLink to="/cart">
                <span className="relative top-[1.5px]">
                  Cart {context.count}
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      {/* Mobile and tablet navbar */}
      {currentView === "mobile" && (
        <nav aria-label="Global">
          <div className="lg:hidden top-0 flex justify-between items-center fixed z-10 w-screen py-5 px-8 text-sm font-light bg-customYellow h-20 opacity-100">
            <div className="hidden md:block flex flex-col relative ">
              {isAuthenticated ? (
                <Link
                  to="/my-account"
                  className="font-medium text-black"
                  href="#"
                  aria-current="page"
                >
                  <p className="text-[25px]">My account</p>
                </Link>
              ) : (
                <Link to="/sign-in" className="font-medium text-black" href="#">
                  <p className="text-[25px]">Log In</p>
                </Link>
              )}
            </div>
            <button
              type="button"
              className="md:hidden hs-collapse-toggle p-2 border-2 inline-flex justify-center items-center gap-2 rounded-full font-medium border-black relative right-5"
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
            <button onClick={handleSearchButtonClick}>
              <svg
                className="relative md:right-20 md:top-1"
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
            <button className="w-52 h-full relative md:-left-20 top-1 ">
              <Link to="/" onClick={handleNavLinkClick}>
                <img
                  className="w-full h-full object-cover relative right-2"
                  src="/shoply-logo-full.static.svg"
                  alt="logo"
                />
              </Link>
            </button>
            <button className="font-semibold border-2 bg-black border-black rounded-full p-2 text-md uppercase w-10 h-6 text-center flex items-center justify-center scale-150 relative left-3">
              <NavLink to="/cart">
                <p className="text-xs text-white">{context.count}</p>
              </NavLink>
            </button>
            <div
              id="navbar-collapse-with-animation"
              className="sm:hidden z-10 absolute top-20 left-0 flex items-left hidden overflow-hidden transition-all duration-300 bg-white h-[80px] grow w-screen border-black border-t-2 shadow-lg"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 text-6xl relative ml-5 mt-[28px] font-[Whyte]">
                <div>
                  <div className="flex flex-col relative ">
                    {isAuthenticated ? (
                      <Link
                        to="/my-account"
                        className="font-medium text-black"
                        href="#"
                        aria-current="page"
                      >
                        <p className="text-[25px]">My account</p>
                      </Link>
                    ) : (
                      <Link
                        to="/sign-in"
                        className="font-medium text-black"
                        href="#"
                      >
                        <p className="text-[25px]">Log In</p>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
