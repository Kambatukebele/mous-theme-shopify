/** @type {import('tailwindcss').Config} */
import { Container } from "postcss";
import remToPxPlugin from "tailwindcss-rem-to-px";
module.exports = {
  content: ["./**/*.{json,js,liquid}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
        center: true,
      },
    },
    extend: {},
  },
  plugins: [
    remToPxPlugin({
      baseFontSize: 16,
    }),
  ],
};
