/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#F0F7FF',
            100: '#E6F1FF',
            200: '#BFDEFF',
            300: '#99CAFF',
            400: '#4DA3FF',
            500: '#007BFF',  // צבע עיקרי - כחול מקצועי
            600: '#0063CC',
            700: '#004B99',
            800: '#003266',
            900: '#001933',
          },
          secondary: {
            50: '#F5F7FA',
            100: '#E4E7EB',
            200: '#CBD2D9',
            300: '#9AA5B1',
            400: '#7B8794',
            500: '#616E7C',  // צבע משני - אפור מקצועי
            600: '#52606D',
            700: '#3E4C59',
            800: '#323F4B',
            900: '#1F2933',
          },
          accent: {
            50: '#F0FDF4',
            100: '#DCFCE7',
            200: '#BBF7D0',
            300: '#86EFAC',
            400: '#4ADE80',
            500: '#22C55E',  // צבע הדגשה - ירוק מקצועי
            600: '#16A34A',
            700: '#15803D',
            800: '#166534',
            900: '#14532D',
          }
        },
        fontFamily: {
          'heebo': ['Heebo', 'sans-serif'],  // פונט עברי מודרני
          'rubik': ['Rubik', 'sans-serif'],   // פונט עברי נוסף לכותרות
        },
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease-in-out infinite',
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }