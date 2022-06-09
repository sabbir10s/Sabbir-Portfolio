module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#14274E',
      'secondary': '#c49b66',
      'accent': '#ff49db',
      'base': '#ffff',
      'base-100': '#E4E5EB',
      'base-200': '#CACBD6',
      'base-300': '#9BA4B4',
      'gray': '#394867',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],

}
