/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0D5E61',
        secundary: '#54EECA'
      },
      boxShadow: {
        primaryShadow: '0px 4px 10px rgba(30, 141, 146, 0.5)'
      }
    },
  },
  plugins: [],
}

