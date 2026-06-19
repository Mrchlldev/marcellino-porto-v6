import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        title: ['Syne', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        accent: '#ff6b00',
      },
    },
  },
  plugins: [],
}
export default config
