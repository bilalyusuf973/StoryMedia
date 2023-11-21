'use client'
import React, { createContext, useState, useEffect, useContext } from 'react';

interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeProps | null>(null);

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
    else{
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(systemTheme);
      localStorage.setItem('theme', systemTheme);
    }
  }, []);

  useEffect(() => {
  if(theme === "dark"){
    document.documentElement.classList.add("dark");
  }
  else{
    document.documentElement.classList.remove("dark");
  }
}, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if(!context){
    throw new Error("useThemeContext must be used within a ThemeContext.");
  }
  return context;
}

