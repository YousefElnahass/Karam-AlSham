/** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {
         colors: {
           'logo-yellow': '#FFC107',  
           'logo-dark-brown': '#5D4037', 
           'logo-light-yellow': '#FFCA28',
           'logo-white': '#FFFFFF',     
         },
         fontFamily: {
           playfair: ['"Playfair Display"', 'serif'],
         },
       },
     },
     plugins: [],
   }