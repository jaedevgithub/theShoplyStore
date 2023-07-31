/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        customYellow: "#FFC700",
        scale: {
          '175': '1.75',
        }
      },
    },
  },

  plugins: [require("preline/plugin")],

  fontFamily: {
    Whyte: ["Whyte", "sans-serif"],
  },
};
