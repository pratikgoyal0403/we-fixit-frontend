module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ea4c89",
        secondary: "#F9F8FD",
      },
    },
  },
  fontFamily: {
    sans: ["sans-serif"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
