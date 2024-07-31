/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        'custom-md': '-400px',
        'custom-sm': '0',
      },
      transitionProperty: {
        'scroll-behavior': 'scroll-behavior',
      },
      colors: {
        red: {
          100: '#feecef',
          200: '#fcd6df',
          300: '#f9b0c0',
          400: '#f68a9f',
          500: '#f3647e', // Este sería tu red-500
          600: '#f03e5d',
          700: '#ee183d',
          800: '#cb1534',
          900: '#a8112b'
        },
        whiteBone: {
          100: '#f8f5f2',
          200: '#f1ebe5', // Este sería tu whiteBone-200
          300: '#eae1d9',
          400: '#e3d7cc',
          500: '#dcd0c0',
          600: '#d4c8b3',
          700: '#cdc1a7',
          800: '#c6b99a',
          900: '#bfab84'
        }
      },
    },
  },
  variants: {
    backgroundPosition: ['responsive'],
  },
  plugins: [],
};
