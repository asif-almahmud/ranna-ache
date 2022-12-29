import {
  createTheme,
  PaletteColorOptions,
  responsiveFontSizes,
  ThemeOptions,
} from "@mui/material/styles";
import React from "react";
import variables from "./variables";
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }

  interface TypographyVariants {
    title: React.CSSProperties;
    paragraph: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    paragraph?: React.CSSProperties;
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
      fontFamily: "Poppins",
      fontSize: "70px",
      fontWeight: 900,
      letterSpacing: "-0.012em",
    },
    h2: {
      fontFamily: "Poppins",
      fontSize: "40px",
      fontWeight: 800,
      letterSpacing: "-0.012em",
    },
    h3: {
      fontFamily: "Poppins",
      fontSize: "32px",
      fontWeight: 700,
      letterSpacing: "-0.012em",
    },
    h4: {
      fontFamily: "Poppins",
      fontSize: "28px",
      fontWeight: 600,
      letterSpacing: "-0.012em",
    },
    h5: {
      fontFamily: "Poppins",
      fontSize: "24px",
      fontWeight: 500,
      letterSpacing: "-0.012em",
    },
    h6: {
      fontFamily: "Poppins",
      fontSize: "20px",
      fontWeight: 400,
      letterSpacing: "-0.012em",
    },
    subtitle1: {
      fontFamily: "Roboto",
      fontSize: "18px",
      fontWeight: 500,
      letterSpacing: "-0.012em",
    },
    body1: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: 400,
      letterSpacing: "-0.012em",
    },
    caption: {
      fontFamily: "Roboto",
      fontSize: "12px",
      fontWeight: 400,
      letterSpacing: "-0.012em",
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
