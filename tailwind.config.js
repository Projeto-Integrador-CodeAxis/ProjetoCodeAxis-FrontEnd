/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'prussian-blue': '#082d45ff',
      'cerulean': '#097192ff',
      'celestial-blue': '#1e9bebff',
      'black': '#000000ff',
      'white': '#ffffffff',
      'transparent': 'transparent',
      'custom-blue': '#1E9BEB',
    },
    fontFamily: {
      'sans': ['Work Sans', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
} 