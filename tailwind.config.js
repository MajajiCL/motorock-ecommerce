/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#06080c",
          900: "#090c12",
          850: "#0e121a",
          800: "#131824",
          750: "#181f2f",
          700: "#1e263a",
          600: "#2d374e",
          500: "#475569"
        },
        brand: {
          orange: "#FF5500",
          orangeLight: "#FF7733",
          orangeDark: "#CC4400",
          amber: "#F59E0B",
          emerald: "#10B981",
          cyan: "#06B6D4"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif']
      },
      backgroundImage: {
        'carbon-pattern': "radial-gradient(#1e263a 1px, transparent 1px), radial-gradient(#1e263a 1px, #090c12 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-mesh': 'radial-gradient(at 0% 0%, rgba(255, 85, 0, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(245, 158, 11, 0.1) 0px, transparent 50%)'
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      }
    },
  },
  plugins: [],
}
