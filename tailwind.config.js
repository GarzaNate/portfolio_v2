/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      primary: {
        base: '#1a202c',
        accent: '#0d6efd',
        text: '#f7fafc',
      },
      secondary: {
        base: '#212121',
        accent: '#00ff88',
        text: '#e0e0e0',
      },
    extend: {},
  },
  plugins: [],
}

