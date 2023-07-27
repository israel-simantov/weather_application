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
        '14':'3.5rem',
      },
      spacing: {
        '38': '9.5rem'
      },
      fontSize: {
        '10xl': '10rem',
      },
      width: {
        '14':'3.5rem'
      },
      
      
      

      
    },
  },
  plugins: [],
}

