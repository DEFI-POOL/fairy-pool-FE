module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { primary: "#2d0b5a", accent: "#35f0d1", secondary: "#cdc5df" },
      fill: (theme) => theme("colors"),
      fontFamily: {
        primary: ["Titillium Web"],
      },
      backgroundSize: {
        "rainbow-gradient": "1000% auto",
      },
      backgroundImage: {
        "rainbow-gradient":
          "linear-gradient(40deg,#ff9304,#ff04ea 10%,#9b4beb 20%,#0e8dd6 30%,#0bc6df 40%,#07d464 50%,#dfd105 60%,#ff04ab 78%,#8933eb 90%,#3b89ff)",
      },
      animation: {
        "flashy-text": "scrollBg 15s steps(60) infinite",
        fadeInBlur:
          "fadeInBlur 0.2s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
        fadeOutBlur:
          "fadeOutBlur 0.2s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
        moveUp: "moveUp 0.2s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
        moveDown:
          "moveDown 0.2s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards",
      },
      keyframes: {
        scrollBg: {
          "0%, 100%": {
            "background-position": "0 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        fadeInBlur: {
          from: {
            "backdrop-filter": "blur(0px)",
          },
        },
        fadeOutBlur: {
          to: {
            "backdrop-filter": "blur(0px)",
          },
        },
        moveUp: {
          from: {
            transform: "scale(0.8) translateY(1000px)",
          },
        },
        moveDown: {
          to: {
            transform: "scale(0.8) translateY(1000px)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
