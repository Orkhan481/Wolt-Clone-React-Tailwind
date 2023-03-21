
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       'brand-color':"#009de0"
      },
      scale: {
        '101': '1.01',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
