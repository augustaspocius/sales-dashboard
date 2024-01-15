/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--clr-white)",
        black: "var(--clr-black)",
        grey: "var(--clr-grey)",
        blue: "var(--clr-blue)",
        darkGrey: "var(--clr-dark-grey)",
        darkBlue: "var(--clr-dark-blue)",
        lightGrey: "var(--clr-light-grey)",
        yellow: "var(--clr-yellow)",
        lightGreyAlt: "var(--clr-light-grey-2)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}