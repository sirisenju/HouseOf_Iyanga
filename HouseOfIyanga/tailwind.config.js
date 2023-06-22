/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Primary-theme": "#7A9CA5",
        "Secondary-theme": "#5C8692",
        "Intermediary-theme": "#111E22",
        "Footer-theme": "#1E2C30",
        "Home-bg": "#EBF3F5",
        "Home-bg2": "#A2B3BF",
      },
      fontFamily: {
        playfairDisplay: ["Playfair Display"],
        manrope: ["Manrope"],
        tanjerine: ["Tangerine"],
      },
      backgroundImage: {
        homeRightImage: "url('/contentImage/bgImg1.jpg')",
      },
    },
  },
  plugins: [],
};
