/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', '*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'body-pattern': "url('../img/pattern.png')",
      },
    },
  },
  plugins: [],
};
