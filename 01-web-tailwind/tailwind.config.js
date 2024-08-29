/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', '*.html'],
  theme: {
    extend: {
      screens: {
        xs: { max: '768px' },
      },
      backgroundImage: {
        'body-pattern': "url('../img/pattern.png')",
      },
      colors: {
        'azul-claro': '#37bcf9',
        'azul-oscuro': '#0370b9',
      },
      animation: {
        'spin-low': 'spin 2s linear infinite',
        'from-bellow': 'fromBellow 500ms linear',
        'from-right': 'fromRight 500ms linear',
      },
      keyframes: {
        fromBellow: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(200%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        fromRight: {
          '0%': { transform: 'translateX(200%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
