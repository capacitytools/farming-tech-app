import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6B4423", // Rich Brown
        accent: "#E57373",  // Soft Red
        cream: "#FFF8E7",   // Light Cream
      },
      borderRadius: {
        'card': '16px', // Your requested 16px rounded corners
      }
    },
  },
  plugins: [],
};
export default config;
