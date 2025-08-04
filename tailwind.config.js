/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"], // Asegúrate de que este path coincida con la estructura real
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        patua: ['"Patua One"', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
      },
      height: {
        'screen-minus-header': 'calc(100vh - 4rem)',
      },
    },
  },
  plugins: [],
};