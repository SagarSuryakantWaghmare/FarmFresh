/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', 
        secondary: '#4ADE80', 
        accent: '#FBBF24', 
      },
      brightness: {
        30: '0.3', 
        40: '0.4',
        60: '0.6',
      },
    },
  },
  plugins: [],
}
