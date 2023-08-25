import React from "react";
import { Link } from "react-router-dom";

function NotFoundComponent() {
  return (
    <section className="bg-white font-[Whyte] hd:text-[50px]">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <p className="text-customOrange font-bold text-4xl">404 Error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800">
            We lost this page
          </h1>
          <p className="mt-4 text-black">
            Sorry, the page you are looking for doesn't exist.
          </p>

          {/* Button to Go Back */}
          <div className="flex items-center mt-6 space-x-3">
            <Link to="/">
              <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white bg-black border hover:bg-white hover:text-black rounded-lg space-x-2 sm:w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>Go back</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <img
            className="w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover"
            src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Lost"
          />
        </div>
      </div>
    </section>
  );
}

export default NotFoundComponent;
