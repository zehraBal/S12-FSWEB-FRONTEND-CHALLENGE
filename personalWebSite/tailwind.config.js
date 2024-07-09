/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bgr-background": "linear-gradient(to right, #4731D3 70%, #CBF281 70%)",
      },
      boxShadow: {
        custom1: "  0px 8px 28px -6px #0b12238f",
      },
    },
  },
  plugins: [],
};
