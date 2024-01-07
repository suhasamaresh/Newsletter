import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        oi: ["Oi", "serif"],
        poppins: ["Poppins"],
      },
      flex: {
        '2': '2 2 0%',
        '5': '5 5 0%',
        '4': '4 4 0%',
        '3': '3 3 0%',
        '6': '6 6 0%',
      },
      screens: {
        'xxs': '540px', // min-width
      },
    },
  },
  plugins: [],
};
export default config;
