module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'default-layout-header': '60px',
      },
      width: {
        'default-layout-width': '1150px'
      },
      padding: {
        '4': '1rem', // 16px
        // Các giá trị khác
      },
    },
  },
  plugins: [],
}