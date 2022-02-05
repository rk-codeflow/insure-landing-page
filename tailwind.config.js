module.exports = {
  content: ['./layouts/*.html'],
  theme: {
    extend: {
      fontFamily: {
        dm: "'DM Serif Display', serif;",
        karla: "'Karla', sans-serif;"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
