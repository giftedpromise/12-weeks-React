/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        "custom-gray":
          "var(--Color-Style-Surface-Roles-On-Surface-variant, #474747)",
      },
    },
  },
  plugins: [],
};
