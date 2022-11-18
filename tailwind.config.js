/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        appname:['PermanentMarker'],
        homefont:['Fredoka One']
      },
      backgroundImage: {
        'supermarket': "url('/assets/supermarket.webp')",
      }
    },
    
},
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
