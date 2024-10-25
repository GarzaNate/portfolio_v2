const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      light: {
        primary: '#1A1A1A',        // Soft black for primary elements in light mode
        background: '#FFFFFF',     // White background
        text: '#1A1A1A',           // Same soft black for text
        accent: '#0077B6',         // Chosen accent color
      },
      dark: {
        primary: '#E5E5E5',        // Light gray for primary elements in dark mode
        background: '#121212',     // Matte, soft black background
        text: '#E5E5E5',           // Light gray text for readability
        accent: '#0077B6',         // Same accent color as light mode
      },
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],   
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [flowbite.plugin()],
}
