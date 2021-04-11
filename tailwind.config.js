module.exports = {
  purge: {
    content: ["./templates/**/*.html.twig"],
  },
  darkMode: false,
  theme: {
    extend: {
      height: {
        'demi-screen': '50vh',
        'third-screen': '33.333333vh',
      },
    },
  },
  variants: {
    extend: {
      blur: ['hover'],
      saturate: ['hover'],
      margin: ['last', 'first'],
    },
  },
  plugins: [],
}
