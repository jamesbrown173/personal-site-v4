/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RomanaRomanBold: ["OPTIRomanaRoman-Bold", "sans-serif"],
        RomanaRomanNormal: ["OPTIRomanaRoman-Normal", "sans-serif"],
        Helvetica: ["Helvetica", "sans"],
        HelveticaOblique: ["Helvetica-Oblique", "sans"],
        HelveticaBold: ["Helvetica-Bold", "sans"],
      },
    },
  },
  plugins: [],
};
