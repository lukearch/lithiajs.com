import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
        },
      },
      height: {
        screen: 'calc(100vh - 156px)',
      },
      colors: {
        bunker: {
          50: '#f1f5fe',
          100: '#e2e9fc',
          200: '#bed1f9',
          300: '#84abf5',
          400: '#4380ed',
          500: '#1a5fdd',
          600: '#0d47bc',
          700: '#0c3798',
          800: '#0e327e',
          900: '#112c69',
          950: '#030712',
        },
        'spring-green': {
          50: '#edfff4',
          100: '#d6ffe7',
          200: '#afffd0',
          300: '#71ffac',
          400: '#2cfc81',
          500: '#01fd69',
          600: '#00c04b',
          700: '#00963f',
          800: '#067535',
          900: '#07602e',
          950: '#003617',
        },
      },
      borderRadius: {
        button: '0.5rem',
      },
      padding: {
        button: '0.75rem 1.5rem',
      },
      fontSize: {
        button: '0.75rem',
      },
      fontWeight: {
        button: '700',
      },
      letterSpacing: {
        button: '-0.05em',
      },
    },
  },
  plugins: [
    {
      handler: function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child:svg', '& > svg');
        addVariant('child:svg:hover', '& > svg:hover');
      },
    },
  ],
};
