/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', ' sans - serif'],
        poppins: ['Poppins', ' sans - serif'],
        inter: ['Inter', ' sans - serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
