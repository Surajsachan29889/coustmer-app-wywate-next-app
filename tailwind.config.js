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
        quad:"#C6C6C6",
  
      },
      fontFamily:{
        custom:["keepCalm", "keepcalm"]

      }
    },
  },
  plugins: [],
}
