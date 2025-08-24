/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],

      },
      colors: {
        green: {
          600: '#16a34a',
          800: '#166534',
        },
        orange: {
          500: '#f97316',
          600: '#ea580c',
        },
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'marquee-slow': 'marquee 35s linear infinite',
      },
    },
  },
  plugins: [],
}
