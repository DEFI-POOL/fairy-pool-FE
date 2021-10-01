module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { primary: "#2d0b5a", accent: "#35f0d1", secondary: "#cdc5df" },
      fill: { primary: "#2d0b5a", accent: "#35f0d1", secondary: "#cdc5df" },
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
