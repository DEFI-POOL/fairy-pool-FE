module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { primary: "#2d0b5a", secondary: "#35f0d1" },
      fill: { primary: "#2d0b5a", secondary: "#35f0d1" },
      fontFamily: {
        primary: ["Titillium Web"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
