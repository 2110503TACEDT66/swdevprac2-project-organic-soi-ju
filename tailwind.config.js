/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#535353",
        'jason':"#E9E9E9",
        'james':"#7B6000",
        'doomred':"#C37D7D",
        'doomered':"#D26E6E",
        'soz': "#00e6ac",
        'darksoz': "#1affc6"
      },
    },
    
  },
  plugins: [],
}

