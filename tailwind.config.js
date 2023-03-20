/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#fff06c",
        },
      },
    },
    fontFamily: {
      primary: ["Inter"],
    },
  },
  plugins: [],
};
