/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['Lobster Two', 'cursive'],
        raleway: ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

