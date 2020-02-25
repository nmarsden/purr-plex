import React, { createContext, FunctionComponent, useContext, useState } from 'react'

const ThemeContext = createContext<any>(null);

const ThemeProvider: FunctionComponent<any> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('plain');

  return (
    <ThemeContext.Provider value={{value: theme, setValue: setTheme}}>
      { children }
    </ThemeContext.Provider>
  )
};

export type Theme = 'plain' | 'cat';

export default ThemeProvider;
export const useTheme = () => useContext(ThemeContext);
