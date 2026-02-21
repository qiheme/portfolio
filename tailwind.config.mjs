/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        primary: {
          100: '#a273ff',
          200: '#935bff',
          300: '#8344ff',
          400: '#742cff',
          500: '#6415FF',
          600: '#5a13e6',
          700: '#5011cc',
          800: '#460fb3',
          900: '#3c0d99',
        },
        secondary: {
          100: '#7c8ba1',
          200: '#667892',
          300: '#506582',
          400: '#3a5173',
          500: '#243E63',
          600: '#203859',
          700: '#1d324f',
          800: '#192b45',
          900: '#16253b',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        72: '18rem',
        80: '20rem',
        96: '24rem',
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '4.5rem',
      },
      boxShadow: {
        raised: '0 20px 50px rgba(0,0,0, 0.075)',
      },
    },
  },
  plugins: [],
};
