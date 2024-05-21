import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        cairo: ['var(--font-cairo)'],
        playpen: ['var(--font-playpen)']
      },
      colors: {
        earth: {
          100: "#fcf3e4",
          200: "#f9e7c8",
          300: "#f7dbad",
          400: "#f4cf91",
          500: "#f1c376",
          600: "#c19c5e",
          700: "#917547",
          800: "#604e2f",
          900: "#302718"
        },
        dutch: {
          100: "#fdfaf3",
          200: "#fcf5e7",
          300: "#faf0dc",
          400: "#f9ebd0",
          500: "#f7e6c4",
          600: "#c6b89d",
          700: "#948a76",
          800: "#635c4e",
          900: "#312e27"
        },
        lace: {
          100: "#fdfcfa",
          200: "#fcf9f5",
          300: "#faf7ef",
          400: "#f9f4ea",
          500: "#f7f1e5",
          600: "#c6c1b7",
          700: "#949189",
          800: "#63605c",
          900: "#31302e"
        },
        ebony: {
          100: "#dfe2df",
          200: "#bfc4be",
          300: "#a0a79e",
          400: "#80897d",
          500: "#606c5d",
          600: "#4d564a",
          700: "#3a4138",
          800: "#262b25",
          900: "#131613"
        },
        'cp1': {
          100: "#e8e4f0",
          200: "#d2cae1",
          300: "#bbafd3",
          400: "#a595c4",
          500: "#8e7ab5",
          600: "#726291",
          700: "#55496d",
          800: "#393148",
          900: "#1c1824"
        },
        'cp2': {
          100: "#eef7f0",
          200: "#ddefe0",
          300: "#cce8d1",
          400: "#bbe0c1",
          500: "#aad8b2",
          600: "#88ad8e",
          700: "#66826b",
          800: "#445647",
          900: "#222b24"
        },
        'cp3': {
          100: "#fae9f0",
          200: "#f4d4e1",
          300: "#efbed1",
          400: "#e9a9c2",
          500: "#e493b3",
          600: "#b6768f",
          700: "#89586b",
          800: "#5b3b48",
          900: "#2e1d24"
        },
        'cp4': {
          100: "#fceded",
          200: "#f8dbdb",
          300: "#f5c9ca",
          400: "#f1b7b8",
          500: "#eea5a6",
          600: "#be8485",
          700: "#8f6364",
          800: "#5f4242",
          900: "#302121"
        }
      },
      boxShadow: {
        'image': '0px 0px 20px 0px rgba(66, 68, 90, 1)',
      },
      backgroundImage: {
        'square-pattern': "url('/dots2.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'scrollBounce': 'scrollBounce 1.5s ease-in-out infinite',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scrollBounce': {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(4px)' },
          '100%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
export default config
