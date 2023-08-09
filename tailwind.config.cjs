/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        customYellow: "#FFC700",
        customGray: "#a3a3a3",
        scale: {
          175: "1.75",
        },
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      customBorder: "35px",
    },
  },

  plugins: [require("preline/plugin")],

  fontFamily: {
    Whyte: ["whyte", "sans-serif"],
  },
};
