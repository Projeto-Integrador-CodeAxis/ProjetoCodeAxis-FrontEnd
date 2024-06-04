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
      'degrade':'background: radial-gradient(circle, rgba(8,45,69,1) 0%, rgba(0,0,0,1) 100%)',
      'light-gray': '#d3d3d3',
      'wine-red': ' #980409',
      'fire-brick': '#B22222',
    },
    fontFamily: {
      'sans': ['Work Sans', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
} 