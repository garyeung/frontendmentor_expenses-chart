/** @type {import('tailwindcss').Config} */
export default {
     content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{tsx,jsx,ts,js}"
  ],
  theme: {
    extend: {
      colors:{
        //primary
        'mySoftRed': 'hsl(10, 79%, 65%)',
        'myCyan': 'hsl(186, 34%, 60%)',
        //neutral
        'myDarkBrown': 'hsl(25, 47%, 15%)',
        'myMediumBrown': 'hsl(28, 10%, 53%)',
        'myCream': 'hsl(27, 66%, 92%)',
        'myVeryPaleOrange': 'hsl(33, 100%, 98%)',
      }
    },
  },
  plugins: [],
}

