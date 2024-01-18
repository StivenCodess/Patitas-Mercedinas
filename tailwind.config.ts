import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in-out': 'fadeInOut 5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '0', transform: 'translateY(5rem)'},
          '20%': { opacity: '1', transform: 'translateY(0)'},
          '80%': { opacity: '1'},
          '100%': { opacity: '0'},
        },
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
export default config

