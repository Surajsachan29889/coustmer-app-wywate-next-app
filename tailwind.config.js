/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pri: '#26D084',
        sec: "#C3C3C3",
        tri:"#3C3C3C",
  
      },
      fontFamily:{
        custom:["keepCalm", "keepcalm"]

      }
    },
  },
  plugins: [],
}
