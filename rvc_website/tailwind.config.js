/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}', 
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      mytheme: {
        "primary": "#0094DA",
        "secondary": "#22c55e",
        "accent": "#FFFFFF",
        "neutral": "#000000",
        "base-100": "#000000"
      },
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'K2D': ['K2D', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    colors: {
      primary: '#0094DA', // Blue
      primary_daisy: '#377cfb', // Green
      secondary: '#22c55e', // Green
      secondary_daisy: '#66cc8a', // Blue
      exact_secondary: '#85B446',
      white: '#FFFFFF',
      opaque_white: "rgb(255 255 255 / 90%)",
      black: '#000000',
      subtext: '#666666',     // custom light gray
      darktext: '#1a1a1a',     // near-black readable text
    },
    extend: {
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
