import { PaletteMode } from '@mui/material';

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
    main: '#9c27b0', // Bright Blue
  },
  secondary: {
    main: '#ba68c8', // Gray
  },
  background: {
    default: '#F8F9FA', // Light Gray
    paper: '#FFFFFF', // White
  },
  text: {
    primary: '#212529', // Near Black
    secondary: '#495057', // Dark Gray
  },
  divider: '#DEE2E6', // Light Gray
};

const darkPalette = {
  primary: {
    main: '#00ACC1', // Cyan
  },
  secondary: {
    main: '#B0BEC5', // Light Blue Gray
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
