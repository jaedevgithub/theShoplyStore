import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const [isDesktopView, setIsDesktopView] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Function to handle window size changes
  const handleWindowSizeChange = () => {
    const width = window.innerWidth;
    setIsDesktopView(width >= 1024);
    setIsMobileView(width < 640);
    setIsTabletView(width >= 640 && width < 1024);
  };

  const location = useLocation();

  // Function to get background color based on location
  const getFooterBackgroundColor = () => {
    // Check the current location and return a color based on the page
    switch (location.pathname) {
      case "/home":
        return "bg-customOrange"; // Change this to the color you want for the home page
      case "/my-account":
        return "bg-green"; // Change this to the color you want for the account page
      case "/cart":
        return "bg-purple"; // Change this to the color you want for the cart page
      case "/sign-in":
        return "bg-green"; // Change this to the color you want for the sign-in page
      default:
        return "bg-customOrange"; // Default color
    }
  };

  useEffect(() => {
    // Add an event listener to track window size changes
    window.addEventListener("resize", handleWindowSizeChange);

    // Initial call to set the initial view based on window size
    handleWindowSizeChange();

    // Add an event listener to check scroll position only if scroll hasn't been triggered
    if (!hasScrolled) {
      window.addEventListener("scroll", handleScroll);
    }

    // Remove event listeners when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  // Function to check scroll position and show footer when scrolled to the bottom
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;

    if (documentHeight - scrollTop <= windowHeight) {
      setShowFooter(true);
      setHasScrolled(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  return (
    <>
      {/* Desktop footer */}
      {isDesktopView && (
        <footer
          className={`font-[Whyte] hidden md:hidden lg:block w-screen ${getFooterBackgroundColor()} h-full relative overflow-hidden`}
        >
          <div
            className={`${
              showFooter
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            } transition-opacity text-center grid relative transition-transform duration-2000 ease-in-out transform -translate-y-16 opacity-0 -top-10`}
          >
            <div className="relative left-[-450px] top-[120px]">
              <img
                src="/footer-logo.png"
                alt="alt-footer-logo"
                className="w-[250px] h-[273px] inline-block cursor-pointer"
              />
            </div>
            <div className="flex justify-center items-center relative -top-40">
              <p className="text-black text-[32px] font-bold w-[310px] relative left-[80px] uppercase w-[105px] text-left">
                Objects that inspire
              </p>
              <div className="flex flex-col text-[20px] font-medium items-right justify-right text-left relative w-[300px] left-[200px]">
                <a
                  href="https://codingwithjae.dev/"
                  className="hover:underline"
                >
                  By Johander Campos
                </a>

                <a
                  href="https://store.figma.com/"
                  className="hover:underline mt-2"
                >
                  Original website
                </a>
              </div>
            </div>
            <div className="mt-3 space-x-[100px] text-[26px] relative -top-20 ">
              <a
                className="inline-flex justify-center items-center w-10 h-10 text-center relative left-[100px] hover:underline"
                href=" https://twitter.com/figma"
              >
                Twitter
              </a>
              <a
                className="inline-flex justify-center items-center w-10 h-10 text-center relative left-[100px] hover:underline"
                href="https://www.instagram.com/figma"
              >
                Instagram
              </a>
              <a
                className="inline-flex justify-center items-center w-10 h-10 text-center relative left-[115px] hover:underline"
                href="https://www.facebook.com/groups/733797307583141"
              >
                Facebook
              </a>
              <a
                className="inline-flex justify-center items-center w-10 h-10 text-center relative left-[120px] hover:underline"
                href="https://www.youtube.com/c/Figmadesign"
              >
                Youtube
              </a>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="relative top-4 left-60"
              >
                <svg
                  xlink="http://www.w3.org/1999/xlink"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM26.136 37.416H23.064L23.064 18.792C22.168 19.72 21.304 20.584 20.408 21.48L17.144 24.776L15 22.6L24.6 13L34.2 22.6L32.056 24.776L28.824 21.48C28.5254 21.1814 28.2267 20.8863 27.9281 20.5912C27.3307 20.0009 26.7334 19.4107 26.136 18.792V37.416Z"
                    fill="black"
                    className="hover:fill-white"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </footer>
      )}

      {/* Tablet footer */}
      {isTabletView && (
        <footer className="font-[Whyte] hidden sm:hidden md:block lg:hidden w-screen bg-customOrange h-auto flex flex-col overflow-hidden">
          <div
            className={`${
              showFooter
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            } transition-opacity transition-transform text-center duration-2000 ease-in-out transform -translate-y-16 opacity-100`}
          >
            <div className="relative top-20">
              <img
                src="/footer-logo.png"
                alt="alt-footer-logo"
                className="w-[250px] h-[273px] inline-block cursor-pointer relative right-[200px]"
              />
            </div>
            <div className="flex flex-cols-2 justify-center items-center relative top-40 ">
              <p className="text-black text-[38px] font-bold w-[210px] relative text-left relative left-[100px] -top-[340px] uppercase">
                Objects that inspire.
              </p>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="relative -top-40 left-40"
              >
                <svg
                  xlink="http://www.w3.org/1999/xlink"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM26.136 37.416H23.064L23.064 18.792C22.168 19.72 21.304 20.584 20.408 21.48L17.144 24.776L15 22.6L24.6 13L34.2 22.6L32.056 24.776L28.824 21.48C28.5254 21.1814 28.2267 20.8863 27.9281 20.5912C27.3307 20.0009 26.7334 19.4107 26.136 18.792V37.416Z"
                    fill="black"
                    className="hover:fill-white"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="mt-3 text-[18px] relative top-0 flex flex-col items-center justify-evenly">
              <div className="flex flex-col items-right justify-right text-left relative -top-[350px] left-72">
                <a
                  href="https://codingwithjae.dev/"
                  className="hover:underline"
                >
                  By Johander Campos
                </a>

                <a
                  href="https://store.figma.com/"
                  className="hover:underline mt-2"
                >
                  Original website
                </a>
              </div>
              <div className="flex flex-col text-left justify-left w-[40px] relative -top-[190px] left-[5px]">
                <a
                  href="https://twitter.com/figma"
                  className="inline-flex text-center relative hover:underline"
                >
                  Twitter
                </a>
                <a
                  className="inline-flex text-left mt-4 relative hover:underline"
                  href="https://www.instagram.com/figma"
                >
                  Instagram
                </a>
                <a
                  className="inline-flex text-left mt-4 relative hover:underline"
                  href="https://www.facebook.com/groups/733797307583141"
                >
                  Facebook
                </a>
                <a
                  className="inline-flex text-left mt-4 relative hover:underline"
                  href="https://www.youtube.com/c/Figmadesign"
                >
                  Youtube
                </a>
              </div>
            </div>
          </div>
        </footer>
      )}

      {/* Mobile footer */}
      {isMobileView && (
        <footer className="font-[Whyte] md:hidden mt-[150px] w-screen bg-customOrange h-[924px] flex flex-col overflow-hidden">
          <div
            className={`${
              showFooter
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            } transition-opacity transition-transform text-center duration-2000 ease-in-out transform -translate-y-16 opacity-0`}
          >
            <div className="relative top-20">
              <img
                src="/footer-logo.png"
                alt="alt-footer-logo"
                className="w-[250px] h-[273px] inline-block cursor-pointer"
              />
            </div>
            <div className="flex flex-cols-2 justify-center items-center relative top-40 ">
              <p className="text-black text-[38px] font-bold w-[215px] relative text-left relative right-4">
                Objects that inspire.
              </p>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="relative -top-2 left-5"
              >
                <svg
                  xlink="http://www.w3.org/1999/xlink"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM26.136 37.416H23.064L23.064 18.792C22.168 19.72 21.304 20.584 20.408 21.48L17.144 24.776L15 22.6L24.6 13L34.2 22.6L32.056 24.776L28.824 21.48C28.5254 21.1814 28.2267 20.8863 27.9281 20.5912C27.3307 20.0009 26.7334 19.4107 26.136 18.792V37.416Z"
                    fill="black"
                    className="hover:fill-white"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="mt-3 text-[18px] relative top-60 flex flex-col items-center justify-evenly">
              <div className="flex flex-col items-right justify-right text-left relative -top-2 right-20">
                <a
                  href="https://codingwithjae.dev/"
                  className="hover:underline"
                >
                  By Johander Campos
                </a>

                <a
                  href="https://store.figma.com/"
                  className="hover:underline mt-2"
                >
                  Original website
                </a>
              </div>
              <div className="flex flex-col text-left justify-left w-[40px] relative -top-20 left-20">
                <a
                  className="inline-flex text-center relative  hover:underline"
                  href="https://twitter.com/figma"
                >
                  Twitter
                </a>
                <a
                  className="inline-flex text-left mt-4 relative hover:underline"
                  href="https://www.instagram.com/figma"
                >
                  Instagram
                </a>
                <a
                  className="inline-flex text-left mt-4 relative hover:underline"
                  href="https://www.facebook.com/groups/733797307583141"
                >
                  Facebook
                </a>
                <a
                  className="inline-flex text-left mt-4 relative hover:underline"
                  href="https://www.youtube.com/c/Figmadesign"
                >
                  Youtube
                </a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
