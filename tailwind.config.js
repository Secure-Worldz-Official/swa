export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 14px 30px rgba(0, 0, 0, 0.10)',
        card: '0 10px 20px rgba(0, 0, 0, 0.08)',
      },
      colors: {
        cyber: {
          red: '#d41212',
          redDark: '#a90f0f',
          black: '#111111',
          paper: '#ffffff',
          line: '#dadada',
        },
      },
      letterSpacing: {
        poster: '-0.055em',
      },
    },
  },
  plugins: [],
};
