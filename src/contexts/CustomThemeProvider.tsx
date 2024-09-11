import React, { createContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { PaletteMode } from '@mui/material';
import { getDesignTokens } from '../lib/themeUtils.ts';

interface CustomThemeContextType {
  selectedTheme: PaletteMode,
  toggleTheme: () => void;
  useSystemTheme: () => void;
}

export const CustomThemeContext = createContext<CustomThemeContextType | undefined>(undefined);

interface CustomThemeProviderProps {
  children: ReactNode;
}

const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children }) => {
  const matches = useMediaQuery('(prefers-color-scheme: dark)');
  const systemMode = matches ? 'dark' : 'light';

  const [selectedTheme, setSelectedTheme] = useState<PaletteMode>(localStorage.getItem('theme') as PaletteMode | undefined ?? systemMode);

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      setSelectedTheme(systemMode);
    }

  }, [systemMode]);

  useEffect(() => {
    localStorage.setItem('theme', selectedTheme);
  }, [selectedTheme]);

  const toggleTheme = () => {
    setSelectedTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const useSystemTheme = () => {
    setSelectedTheme(systemMode);
    localStorage.removeItem('theme');
  };

  const theme = useMemo(() => createTheme(getDesignTokens(selectedTheme)), [selectedTheme]);

  return (
    <CustomThemeContext.Provider value={{ selectedTheme ,toggleTheme, useSystemTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
