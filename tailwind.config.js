/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: 
        {
          'khaki': '#F5E4FF',
          'wine': '#891FF2'
        }
      
    },
  },

  daisyui: {
    themes: false
  },
  plugins: [
    require('daisyui')
  ],
}