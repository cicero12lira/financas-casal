/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0d1a',
          card: '#111827',
        },
        accent: {
          primary: '#6c63ff',
          secondary: '#00d4aa',
        },
        danger: '#ff4757',
        text: {
          primary: '#e8eaf6',
          secondary: '#8892b0',
        },
        border: '#1e2a45',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
