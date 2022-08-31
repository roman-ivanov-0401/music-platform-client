/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#212121",
        backgroundColorUi: "#0E0E0E",
        backgroundInput: "#545454",
        primary: "#A227EE",
        primaryDarken: "#821fbf",
        error: "#BF4949",
        divider: "#A6A6A6",
        tableDivider: "rgba(166, 166, 166, .5)",
        textSecondary: "#656565",
      },
      fontFamily: {
        main: ["Century Gothic", "sans-serif"],
      },
      boxShadow: {
        logo: "0 0 5px rgba(162, 39, 238, .6)",
      },
      screens: {
        w980: "980px",
      },
      animation: {
        appearence: "appearanceKF .5s ease-in",
        openNavbar: "openNavbarKF .5s ease",
        closeNavbar: "closeNavbarKF .5s ease forwards",
      },
      keyframes: {
        appearanceKF: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        openNavbarKF: {
          from: { left: "-100%" },
          to: { left: "-.5rem" }
        },
        closeNavbarKF: {
          from: { left: "-.5rem" },
          to: { left: "-100%" }
        }
      },
    },
  },
  plugins: [],
};
