/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#9F7AEB',
          500: '#805AD5',
          600: '#6B46C1',
          700: '#553C9A',
        }
      },
    },
  },
  plugins: [],
}