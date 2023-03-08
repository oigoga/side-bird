/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      'white': '#ffffff',
      'green': '#A7DF9E',
      'midnight1': '#333333',
      'midnight0':'#222222',
      'black': '#1e1e1e',
      'green1': '#5EC24E',
      'gray': '#535454',
      
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],

    },
    extend: {},
  },
  plugins: [],
}
