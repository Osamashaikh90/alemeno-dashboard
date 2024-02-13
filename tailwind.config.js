/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxsm: "350px",
      xsm: "425px",
      mobile: "426px",
      sm: "640px",
      tablet: "640px",
      md: "768px",
      lg: "1024px",
      laptop: "1025px",
      xl: "1440px",
      desktop: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        Cursive: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
