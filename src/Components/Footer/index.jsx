import React from "react";

function Footer() {
  return (
    <>
     <footer className="hidden md:hidden lg:block mt-60 w-screen bg-customOrange h-full 4k:mt-[-800px] 4k:h-[800px]">
        <div className="text-center grid">
          <div className="relative left-[-450px] top-20">
            <img
              src="/footer-logo.png"
              alt="alt-footer-logo"
              className="w-[250px] h-[273px] inline-block cursor-pointer"
            />
          </div>
          <div className="flex justify-center items-center relative -top-40">
            <p className="text-black text-[32px] font-bold w-[410px] relative left-[70px]">
              Objects that inspire
            </p>
            <div className="flex flex-col items-right justify-right text-left relative w-[300px] left-[200px]">
              <a className="hover:underline">Repository</a>{" "}
              <a className="hover:underline">Original website</a>
            </div>
          </div>
          <div className="mt-3 space-x-[100px] text-[26px] relative -top-20 ">
            <a
              className="inline-flex justify-center items-center w-10 h-10 text-center relative left-[100px] hover:underline"
              href="#"
            >
              Twitter
            </a>
            <a
              className="inline-flex justify-center items-center w-10 h-10 text-center relative left-[100px] hover:underline"
              href="#"
            >
              Instagram
            </a>
            <a
              className="inline-flex justify-center items-center w-10 h-10 text-center relative left-[115px] hover:underline"
              href="#"
            >
              Facebook
            </a>
            <a
              className="inline-flex justify-center items-center w-10 h-10 text-center relative left-[120px] hover:underline"
              href="#"
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

      {/* Tablet footer */}
      <footer className="hidden sm:hidden md:block lg:hidden mt-60 w-screen bg-customOrange h-auto flex flex-col">
        <div className="text-center">
          <div className="relative top-20">
            <img
              src="/footer-logo.png"
              alt="alt-footer-logo"
              className="w-[250px] h-[273px] inline-block cursor-pointer relative right-[200px]"
            />
          </div>
          <div className="flex flex-cols-2 justify-center items-center relative top-40 ">
            <p className="text-black text-[38px] font-bold w-[210px] relative text-left relative left-40 -top-[340px]">
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
              <a className="hover:underline">Repository</a>
              <a className="hover:underline mt-4">Original website</a>
            </div>
            <div className="flex flex-col text-left justify-left w-[40px] relative -top-[190px] left-[60px]">
              <a
                className="inline-flex text-center relative hover:underline"
                href="#"
              >
                Twitter
              </a>
              <a
                className="inline-flex text-left mt-4 relative hover:underline"
                href="#"
              >
                Instagram
              </a>
              <a
                className="inline-flex text-left mt-4 relative hover:underline"
                href="#"
              >
                Facebook
              </a>
              <a
                className="inline-flex text-left mt-4 relative hover:underline"
                href="#"
              >
                Youtube
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile footer */}
      <footer className="md:hidden mt-[460px] w-screen bg-customOrange h-[924px] flex flex-col">
        <div className="text-center">
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
              <a className="hover:underline">Repository</a>
              <a className="hover:underline mt-4">Original website</a>
            </div>
            <div className="flex flex-col text-left justify-left w-[40px] relative -top-20 left-20">
              <a
                className="inline-flex text-center relative  hover:underline"
                href="#"
              >
                Twitter
              </a>
              <a
                className="inline-flex text-left mt-4 relative hover:underline"
                href="#"
              >
                Instagram
              </a>
              <a
                className="inline-flex text-left mt-4 relative hover:underline"
                href="#"
              >
                Facebook
              </a>
              <a
                className="inline-flex text-left mt-4 relative hover:underline"
                href="#"
              >
                Youtube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
