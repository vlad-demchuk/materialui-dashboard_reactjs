import { PaletteMode } from '@mui/material';
import { grey } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

// Define your new color palettes
const lightPalette = {
  primary: {
    main: grey[900],
  },
  secondary: {
    main: grey[800],
  },
  background: {
    default: grey[100],
    paper: grey[50],
  },
  text: {
    primary: grey[900],
    secondary: grey[800],
  },
  divider: grey[200],
};

const darkPalette = {
  primary: {
    main: '#00ACC1',
  },
  secondary: {
    main: '#B0BEC5',
  },
  background: {
    default: '#121212', // Very Dark Gray
    paper: '#1E1E1E', // Dark Gray
  },
  text: {
    primary: '#E0E0E0', // Light Gray
    secondary: '#B0BEC5', // Light Blue Gray
  },
  divider: '#333333', // Dark Gray
};

// Define the function to get design tokens based on mode
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? lightPalette
      : darkPalette),

  },
  typography: {
    'body3': {
      fontSize: 9
    }
  }
});
