const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages//*.{js,ts,jsx,tsx}", "./components//*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: colors.rose,
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      border: ["disabled"],
      cursor: ["disabled"],
      backgroundColor: ["checked"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
