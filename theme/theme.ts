import {
  createTheme,
  PaletteColorOptions,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";
import variables from "./variables";
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }

  interface Palette {
    tertiary: Palette["primary"];
  }

  interface PaletteOptions {
    tertiary: PaletteColorOptions;
  }

  interface PaletteColor {
    variant: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      A100: string;
      A200: string;
      A400: string;
      A700: string;
    };
    superLight: string;
    lighter: string;
    light: string;
  }
}

const options: ThemeOptions = {
  palette: {
    primary: variables.primary,
    secondary: variables.secondary,
    tertiary: variables.tertiary,
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 300,
    },
  },
  breakpoints: {
    values: {
      xs: 576,
      sm: 768,
      md: 1024,
      lg: 1200,
      xl: 1536,
    },
  },
};

export const theme = responsiveFontSizes(createTheme(options));
