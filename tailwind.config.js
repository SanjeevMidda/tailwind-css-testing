// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Add this line to scan the files in src
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-motion')],
}