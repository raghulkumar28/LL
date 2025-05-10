/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          darkBlue: {
            950: '#000814',/*bottom color*/
            900: '#657885',/* bg color option #658ba8 #ded981 657885 */
            850: '#001229',/* product card bg color*/
            800: '#001D3D',/* info card bg color*/
            700: '#002855',/* 2  color button*/
            600: '#003566'
          },
          yellow: {
            600: '#E6B000',
            500: '#FFC300',
            400: '#FFD60A'
          }
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};