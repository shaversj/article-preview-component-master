/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "2/4": "40%",
        "1/4": "25%",
        "3/4": "75%"
      },
      screens: {
        sm: "375px",
        lg: "1440px"
      },
      colors: {
        "very-dark-grayish-blue": "hsl(217, 19%, 35%)",
        "Desaturated-Dark-Blue": "hsl(214, 17%, 51%)",
        "Grayish-Blue": "hsl(212, 23%, 69%)",
        "Light-Grayish-Blue": "hsl(210, 46%, 95%)"
      },
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"]
      }
    }
  },
  plugins: []
}
