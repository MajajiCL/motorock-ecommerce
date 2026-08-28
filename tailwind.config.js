/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moto: {
          dark: "#0b0d13",
          card: "#151821",
          border: "#252b3b",
          orange: "#FF5500",
          orangeHover: "#E04800",
          amber: "#F59E0B",
          gray: "#94A3B8"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
