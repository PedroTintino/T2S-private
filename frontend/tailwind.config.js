/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      cyan:'#00B4E8',
      neonBlue:'#3264FF',
      black:'#000000',
      white:'#FFFFFF',
      lightGray:'#939393',
      aliceBlue:'#f0f8ff'
    },
    extend: {}
  },
  plugins: [],
}