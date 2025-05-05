/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],  
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'K2D': ['K2D', 'sans-serif']
      },
      colors: {
        primary: '#0094DA',
        primary_daisy: '#0094DA',
        secondary: '#22c55e',
        secondary_daisy: '#22c55e',
        exact_secondary: '#22c55e',
        white: '#FFFFFF',
        opaque_white: "rgb(255 255 255 / 90%)",
        black: '#000000',
        subtext: '#666666',
        darktext: '#1a1a1a',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#0094DA',
          'secondary': '#22c55e',
          'accent': '#FFFFFF',
          'neutral': '#FFFFFF',
          'base-100': '#ffffff'
        },
      },
    ],
  },
}
