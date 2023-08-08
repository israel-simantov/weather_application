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
        '1.5': '0.375rem',
        '22': '5.5rem',
        '18': '4.5rem',
        '27': '6.75rem',
        '90': '22.5rem',
        '9/10': '90%'
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

