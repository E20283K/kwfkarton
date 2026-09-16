/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kwf: {
          brown: '#C6934B',     // Primary Brand (Kraft Cardboard Brown)
          charcoal: '#231F20',  // Secondary Base (Deep Charcoal)
          gray: '#939598',      // Accent / Neutral (Muted Structural Gray)
          offwhite: '#FDFBF7',  // Canvas Base (very soft off-white option)
        }
      },
      borderRadius: {
        'sm': '2px',
        'none': '0px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
