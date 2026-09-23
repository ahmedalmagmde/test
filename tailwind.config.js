/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.jsx",
    "./App.jsx",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
      },
      colors: {
        background: "#000000",
        foreground: "#ffffff",
      },
    },
  },
  plugins: [],
}
