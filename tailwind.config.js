/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",      // traži HTML fajlove u root folderu
    "./src/**/*.{js,ts,jsx,tsx}"  // traži JS/TS fajlove u src folderu, ako ih ima
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
