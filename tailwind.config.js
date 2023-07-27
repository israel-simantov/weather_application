/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        'Font': ['Inter']
      },
      height: {
        '180': '45rem',
      },
      mb: {
        '18': '4.5rem',
      },
      mt: {
        '14': '3.5',
      },
      fontSize: {
        '10xl': '10rem',
      },
      width: {
        '14':'3.5rem'
      },
      height: {
        '14':'3.5rem'
      },
      
      

      
    },
  },
  plugins: [],
}

