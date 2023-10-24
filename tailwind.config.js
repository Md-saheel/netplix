/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        glossy: 'rgba(255, 255, 255, 0.50)',
        'cont-2':
          'linear-gradient(180deg, rgba(20, 20, 20, 0.00) 0%, #141414 7.48%)',
      },
    },
  },
  plugins: [],
};
