/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Urbanist: ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
