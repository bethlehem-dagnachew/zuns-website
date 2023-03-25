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
          'wine': '#891FF2',
          'gold': '#ffd700',
          'reddish': '#FF0000',
          'greenwood':'#00ff00'
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