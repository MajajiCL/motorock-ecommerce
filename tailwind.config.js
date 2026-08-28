/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aero: {
          bg: "#f8fafc",
          surface: "rgba(255, 255, 255, 0.75)",
          surfaceSolid: "#ffffff",
          border: "rgba(226, 232, 240, 0.8)",
          glassBorder: "rgba(255, 255, 255, 0.9)",
          dark: "#0f172a",
          darkMuted: "#334155",
          gray: "#64748b",
          lightGray: "#f1f5f9"
        },
        brand: {
          orange: "#FF5500",
          orangeHover: "#E04800",
          orangeLight: "#FFF1EB",
          orangeGlow: "rgba(255, 85, 0, 0.25)",
          amber: "#F59E0B",
          emerald: "#10B981"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'liquid': '0 20px 40px -15px rgba(0, 0, 0, 0.05), 0 0 20px rgba(255, 85, 0, 0.06), inset 0 1px 1px rgba(255, 255, 255, 1)',
        'liquid-hover': '0 25px 50px -12px rgba(255, 85, 0, 0.15), 0 0 30px rgba(255, 85, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 1)',
        'liquid-card': '0 10px 30px -5px rgba(15, 23, 42, 0.06), 0 4px 6px -2px rgba(15, 23, 42, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
        'glass-button': '0 8px 20px -4px rgba(255, 85, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.6)'
      }
    },
  },
  plugins: [],
}
