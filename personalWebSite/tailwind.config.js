/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bgr-background": "linear-gradient(to right, #4731D3 70%, #CBF281 70%)",
      },
      boxShadow: {
        custom1: "0px 18px 88px -4px #18274B24",
        custom2: "0px 8px 28px -6px #18274B1F",
      },
    },
  },
  plugins: [],
};
