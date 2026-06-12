export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Syne', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 14px 30px rgba(0, 0, 0, 0.05)',
        card: '0 8px 30px rgba(0, 0, 0, 0.04)',
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
