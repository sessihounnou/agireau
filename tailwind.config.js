/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#003ECB' // Remplacez la valeur par votre couleur principale souhaitée
      },
      backgroundPosition: {
        bottom: 'bottom',
        'bottom-center': 'center bottom 1rem'
      },
      backgroundImage: {
        'footer-svg': "url('./src/assets/svg/footer-asset.svg')",
        'auth-process-background-svg': "url('./src/assets/svg/auth-process-background-svg.svg')",
        'auth-process-mobile-background-svg': "url('./src/assets/svg/bg-mobile.svg')",
        'ok-svg': "url('./src/assets/svg/check_clair.svg')"
      }
    }
  },
  plugins: []
}
