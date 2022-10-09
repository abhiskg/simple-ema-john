/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c2b35",
        secondary: {
          100: "#ffe0b3",
        },
      },
    },
  },
  plugins: [],
};
