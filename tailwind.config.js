module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dons-black': '#282e22',
        'dons-white': '#ebebeb',
        'dons-blue': '#79B0C0',
        'dons-red': '#e27458',
      },
      fontFamily: {
        'dons-altona': 'altona-sans',
        'dons-jungle': 'jungle-adventurer',
      },
    },
  },
  plugins: [],
}
