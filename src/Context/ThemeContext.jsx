import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Always initialize with dark theme
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // When theme changes, update classList and localStorage
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);

  // On initial load, ensure dark mode is set
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);


// import React, { createContext, useState, useEffect, useContext } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   // Default to "dark" mode (which will be your default styling)
//   const [theme, setTheme] = useState(() => {
//     // First, check localStorage
//     const savedTheme = localStorage.getItem('theme');
    
//     // If there's a saved theme, use it
//     if (savedTheme) return savedTheme;
    
//     // Otherwise, default to 'dark'
//     return 'dark';
//   });

//   useEffect(() => {
//     // Key change: Explicitly manage the 'dark' class based on theme
//     if (theme === 'dark') {
//       // For dark mode, ensure 'dark' class is removed (default dark styles)
//       document.documentElement.classList.remove('dark');
//     } else {
//       // For light mode, add 'dark' class to activate light styles
//       document.documentElement.classList.add('dark');
//     }
    
//     // Always save the current theme preference
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);