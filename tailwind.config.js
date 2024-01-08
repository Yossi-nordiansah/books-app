/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {

      'mobile-sm' : '320px',

      'mobile': '506px',

      'tablet': '802px',

      'tablet-sm': '640px',

      'laptop': '1080px',

      'desktop': '1280px',
    
    },
    extend: {},
  },
  plugins: [],
}

