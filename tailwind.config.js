/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },

    extend: {
      backgroundImage: {
        dark: "url('https://wallpapercave.com/wp/wp6775372.jpg')",
        light: "url('https://wallpapercave.com/uwp/uwp3723310.jpeg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
