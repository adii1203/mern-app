/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: "Ubuntu",
      },
      keyframes: {
        loading: {
          0: { height: "28px" },
          100: { height: "8px" },
        },
      },
      animation: {
        main: "loading 0.3s 0.3s linear infinite alternate",
        base: "loading 0.3s 0.45s linear infinite alternate",
      },
      boxShadow: {
        nav: "rgba(255, 255, 255, 0.05) -1px 0px",
      },
    },
  },
  plugins: [],
};
