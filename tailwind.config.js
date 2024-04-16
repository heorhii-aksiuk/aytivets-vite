/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Cute Font', 'sans-serif'],
      },
    },
    backgroundImage: {
      'app-bg-image': "url('/src/assets/images/bg.png')",
    },
  },
  plugins: [],
};
