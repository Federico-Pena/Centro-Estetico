/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        betonga: ['betonga', 'sans-serif']
      },
      colors: {
        'color-logo': '#f2d9ee',
        'color-violeta': '#5b4166',
        'color-verde': '#9da985',
        'color-verde-blanco': '#e4f2d9',
        'color-pendiente': 'rgb(33, 122, 150)',
        'color-cancelada': 'rgb(190, 49, 49)',
        'color-paga': 'rgba(25, 148, 0, 1)'
      },
      backgroundImage: {
        'logo-nav': "url('/assets/icons/icon-192.png')",
        'footer-texture': "url('/img/footer-texture.png')"
      },
      animation: {
        toastIn: 'toastIn 0.5s ease forwards',
        toastOut: 'toastOut 0.5s ease forwards',
        loader: 'loader .8s linear infinite',
        fadeIn: 'fadeIn .8s ease-in-out forwards',
        fadeOut: 'fadeOut .8s ease-in-out forwards',
        growIn: 'growIn .5s ease-in-out forwards',
        growOut: 'growOut .5s ease-in-out forwards',
        animloader: 'animloader 1s linear infinite alternate'
      },
      keyframes: {
        animloader: {
          '0%': {
            boxShadow: '-38px -12px ,  -14px 0,  14px 0, 38px 0'
          },
          '33%': {
            boxShadow: '-38px 0px, -14px -12px,  14px 0, 38px 0'
          },
          '66%': {
            boxShadow: '-38px 0px , -14px 0, 14px -12px, 38px 0'
          },
          '100%': {
            boxShadow: '-38px 0 , -14px 0, 14px 0 , 38px -12px'
          }
        },
        growIn: {
          '0%': { opacity: 0, transform: 'scale(0%)' },
          '100%': { opacity: 1, transform: 'scale(100%)' }
        },
        growOut: {
          '0%': { opacity: 1, transform: 'scale(100%)' },
          '100%': { opacity: 0, transform: 'scale(0%)' }
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(100px)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' }
        },
        fadeOut: {
          '0%': { opacity: 1, transform: 'translateY(0%)' },
          '100%': { opacity: 0, transform: 'translateY(100px)' }
        },
        toastIn: {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' }
        },
        toastOut: {
          '0%': { opacity: 1, transform: 'translateY(0%)' },
          '100%': { opacity: 0, transform: 'translateY(100%)' }
        },
        loader: {
          '0%': {
            borderRadius: '3rem',
            transform: 'translate(-50%, -100%) scale(1, 1)'
          },
          '25% ': {
            borderRadius: '3rem',
            transform: 'translate(-50%, 0%) scale(1, 1)'
          },
          '45%,55%': {
            transform: 'translate(-50%, 100%) scale(3, 0.5)',
            borderRadius: '3rem'
          },
          '60%': {
            borderRadius: '3rem',
            transform: 'translate(-50%, 100%) scale(1, 1)'
          },
          '75%': {
            borderRadius: '3rem',
            transform: 'translate(-50%, 0%) scale(1, 1)'
          },
          '100% ': {
            borderRadius: '3rem',
            transform: 'translate(-50%, -100%) scale(1, 1)'
          }
        }
      }
    }
  },
  plugins: []
}
