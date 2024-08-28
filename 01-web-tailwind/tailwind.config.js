/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', '*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'body-pattern': "url('../img/pattern.png')",
      },
      colors: {
        'azul-claro': '#37bcf9',
        'azul-oscuro': '#0370b9',
      },
    },
  },
  plugins: [],
};
