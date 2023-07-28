import React from "react";

// A basic Layout component to wrap the content in a flex container
const Layout = ({ children }) => {
  return (
    <main className="flex flex-col items-center mt-40 text-black">
      {children}
    </main>
  );
};

export default Layout;
