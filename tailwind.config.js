export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      boxShadow: {
        retro: '8px 8px 0px 0px rgba(0,0,0,1)',
        'retro-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'retro-lg': '12px 12px 0px 0px rgba(0,0,0,1)',
        soft: '0 14px 30px rgba(0, 0, 0, 0.05)',
        card: '8px 8px 0px 0px rgba(0,0,0,1)',
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '0px',
      },
      colors: {
        cyber: {
          red: '#000000',
          redDark: '#111111',
          black: '#000000',
          paper: '#ffffff',
          line: '#000000',
        },
        retro: {
          bg: '#ffffff',
          fg: '#000000',
          border: '#000000',
          shadow: '#000000',
          muted: '#f0f0f0',
          'muted-fg': '#555555',
        },
      },
      letterSpacing: {
        poster: '-0.055em',
        retro: '0.08em',
      },
      borderWidth: {
        DEFAULT: '4px',
        '0': '0',
        '2': '2px',
        '4': '4px',
        '8': '8px',
      },
    },
  },
  plugins: [],
};
