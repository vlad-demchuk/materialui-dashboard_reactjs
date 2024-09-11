import { useContext } from 'react';
import { CustomThemeContext } from '../contexts/CustomThemeProvider.tsx';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

export const SettingsPage = () => {
  const themeContext = useContext(CustomThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { selectedTheme, toggleTheme, useSystemTheme } = themeContext;

  return (
    <section className="SettingsPage">
      <Typography component="h3">Settings</Typography>
      <Typography component="h4">Mode</Typography>
      <Button onClick={toggleTheme}>toggle</Button>
      <Button onClick={useSystemTheme}>Set system mode</Button>
      Selected: {selectedTheme}
    </section>
  );
};
