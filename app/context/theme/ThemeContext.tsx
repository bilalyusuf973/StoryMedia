'use client'
import React, { createContext, useState, ReactNode } from 'react';

export interface DarkModeInterface {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeInterface | undefined>(undefined);

const ThemeContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)
  
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
    localStorage.setItem('darkTheme', darkMode ? 'Enabled':'Disabled');
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default ThemeContext;
