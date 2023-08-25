import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      {/* Main content of the website */}
      <main
        className="flex flex-col items-center justify-center sm:mt-20 md:mt-20 text-black"
        style={{ minHeight: "100vh" }}
      >
        {children}
        {/* The "children" prop is where you'll render the content of individual pages */}
      </main>
    </>
  );
};

export default Layout;
