module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui: {
    themes: [
      {
        mytheme: {
          'primary': '#ffffff',
          'secondary': '#c49b66',
          'neutral': '#181818',
          'info': '#222222',
          'accent': '#ff49db',
          'base-100': '#E4E5EB',
          'success': '#CACBD6',
          'warning': '#9BA4B4',
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
