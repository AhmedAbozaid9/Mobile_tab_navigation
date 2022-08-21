/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        340:"340px",
        600:"600px",
      },
    },
  },
  plugins: [],
};
