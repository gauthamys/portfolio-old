/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Pacifico', 'cursive'],
      },
      backgroundImage: {
        'profile': "url('\profile.png')",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        moveLeftToRight: {
          '0%, 100%': {left: '0%'},
          '50%': {left: '100%'}
        },
        moveRightToLeft: {
          '0%, 100%': {left: '100%'},
          '50%': {left: '0%'}
        }
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out infinite',
        moveLeftToRight:  'moveLeftToRight 45s linear infinite',
        moveRightToLeft: 'moveRightToLeft 45s linear infinite',
        cloud_1: 'moveLeftToRight 45s linear infinite',
        cloud_2: 'moveRightToLeft 50s linear infinite',
        cloud_3: 'moveLeftToRight 55s linear infinite',
        cloud_4: 'moveRightToLeft 40s linear infinite',
        cloud_5: 'moveLeftToRight 40s linear infinite',
      }
    },
  },
  plugins: [],
}

