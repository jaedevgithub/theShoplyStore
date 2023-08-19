/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        'hd': '1280px',
        'fullhd': '1920px',
        'qhd': '2048px',
        '4k': '3840px',
      },
      colors: {
        customYellow: "#FFC700",
        customGray: "#a3a3a3",
        customOrange: "#f24e1e",
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
