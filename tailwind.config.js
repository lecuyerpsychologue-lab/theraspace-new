/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        'soft-gray': '#F5F3EF',
        'sage-green': '#8B9F82',
        'lavender-blue': '#A8B4D4',
        'muted-yellow': '#E8D5A3',
        'soft-coral': '#E8B4A8',
        'dusty-rose': '#D4A5A5',
        'warm-terracotta': '#C4967A',
        'soft-teal': '#7FB3B3',
        'warm-gray': '#A8A29E',
        peach: '#EABB7A',
        'muted-purple': '#B8A5C7',
        'coral-red': '#E07A5F',
        'text-primary': '#2D3436',
        'text-secondary': '#636E72',
        'text-muted': '#B2BEC3',
        success: '#81B29A',
        warning: '#E9C46A',
        error: '#E07A5F',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '24px',
        'xl': '16px',
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(0, 0, 0, 0.04)',
        'nav': '0 -2px 12px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
