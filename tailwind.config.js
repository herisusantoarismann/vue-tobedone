/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#16ABF8", secondary: "#F4F4F4" },
      keyframes: {
        "bounce-left": {
          "0%, 100%": { transform: "translateX(0rem)" },
          "50%": { transform: "translateX(-0.5rem)" },
        },
      },
      animation: {
        "bounce-left": "bounce-left 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
