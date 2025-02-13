// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via class strategy
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#fffff0',
          secondary: '#f8fafc',
          accent: '#f1f5f9',
        },
        dark: {
          primary: '#000000',
          secondary: '#111111',
          accent: '#1a1a1a',
        },
        'nav-active': '#123556',
        'nav-inactive': '#654321',
      },
      textColor: {
        primary: '#ffffff',
        secondary: '#f1f5f9',
        accent: '#e2e8f0',
      },
      backgroundColor: {
        primary: '#000000',
        secondary: '#111111',
        accent: '#1a1a1a',
      },
      // gradientColorStops: {
      //   'primary-start': '#654321',
      //   'primary-end': '#123456',
      // }
      gradientColorStops: {
        // 🌞 Light Mode: Fresh & Visible on White Backdrop
        'light-start': 'yellow', 
        'light-end': '#FF4B2B',   

        'dark-start': '#654321', 
        'dark-end': '#123456',    
        
      }
      
    },
  },
  plugins: [],
}
