/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        image: "url('/src/weather/image/default.jpg')",
      },
    },
  },
  plugins: [],
};
