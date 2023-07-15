/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: theme => ({
                 'hero-image': "url('./images/HeroSectionImage.png')"
                
                })
    },
  },
  plugins: [],
}
