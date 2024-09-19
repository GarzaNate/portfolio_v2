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
        primary: '#0077B6',
        secondary: '#00B4D8',
        accent: '#90E0EF',
        background: '#F8F9FA',
        text: '#343A40',
      },
      dark: {
        primary: '#0D3B66',
        secondary: '#FAF0CA',
        accent: '#F4D35E',
        background: '#1B263B',
        text: '#FAF0CA',
      },
    },
    extend: {},
  },
  plugins: [ flowbite.plugin() ],
}

