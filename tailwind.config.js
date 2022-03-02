module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1440px',
      },
      colors: { darkBlue: '#0B0D17', lightPurple: '#D0D6F9' },
      fontFamily: {
        barlow: ['Barlow Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
      },
    },
  },
  plugins: [],
};
