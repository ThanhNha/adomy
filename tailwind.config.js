/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      'max-2xl': { max: '1440px' },
      'max-xl': { max: '1279px' },
      'max-lg': { max: '1023px' },
      'max-md': { max: '767px' },
      'max-sm': { max: '639px' },
    },
    extend: {
      colors: {
        white: '#FFF',
        black: '#000',
        main: {
          yellow: {
            00: '#FFFCEE',
            50: '#FFF2C2',
            100: '#FFEDAD',
            200: '#FFE485',
            300: '#FFE070',
            400: '#FFD333',
            500: '#FFC700',
            600: '#E0B000',
            700: '#A38000',
            800: '#524000',
            900: '#292000',
          },
          orange: {
            00: '#FFF8EB',
            50: '#FFF1D6',
            100: '#FFE2AD',
            200: '#FFD485',
            300: '#FFC65C',
            400: '#FFB833',
            500: '#FFA600',
            600: '#E09200',
            700: '#B87700',
            800: '#7A5000',
            900: '#3D2800',
          },
          gray: {
            00: '#FFFFFF',
            50: '#DFDFDF',
            100: '#E0E0E0',
            200: '#D6D6D6',
            300: '#C2C2C2',
            400: '#ADADAD',
            500: '#8F8F8F',
            600: '#666666',
            700: '#474747',
            800: '#292929',
            900: '#141414',
          },
        },
        accent: {
          red: {
            100: '#FFC7C7',
            300: '#FF3838',
            400: '#C20101',
          },
          green: {
            100: '#E2FDE9',
            300: '#B6FFCB',
            400: '#13B105',
          },
        },
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: '#0000EE',
            },
          },
        },
      }),

      fontFamily: {
        display: ['OpenSans', 'sans-serif'],
        sans: [
          'Averta',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },

      container: {
        center: true,
        maxWidth: '1360px',
        padding: {
          DEFAULT: '1rem',
          lg: '1rem',
          '2xl': '4rem',
        },
      },
    },
  },
  plugins: [],
}
