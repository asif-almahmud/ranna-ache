import { darken, lighten } from "@mui/material";

const customColors = ["#0C1712", "#F3BA00", "#1AC073", "#F7F8FA"];

const primaryColor = customColors[0];
const secondaryColor = customColors[1];
const tertiaryColor = customColors[2];
const lightBackground = customColors[3];

export const primary = {
  50: lightBackground,
  100: lighten(primaryColor, 0.9),
  200: lighten(primaryColor, 0.8),
  300: lighten(primaryColor, 0.7),
  400: lighten(primaryColor, 0.6),
  500: lighten(primaryColor, 0.5),
  600: lighten(primaryColor, 0.4),
  700: primaryColor,
  800: darken(primaryColor, 0.05),
  900: darken(primaryColor, 0.2),
  A100: lighten(primaryColor, 0.3),
  A200: lighten(primaryColor, 0.2),
  A400: darken(primaryColor, 0.1),
  A700: darken(primaryColor, 0.4),
};

export const secondary = {
  50: lighten(secondaryColor, 0.95),
  100: lighten(secondaryColor, 0.9),
  200: lighten(secondaryColor, 0.8),
  300: lighten(secondaryColor, 0.7),
  400: lighten(secondaryColor, 0.6),
  500: lighten(secondaryColor, 0.5),
  600: lighten(secondaryColor, 0.4),
  700: secondaryColor,
  800: darken(secondaryColor, 0.05),
  900: darken(secondaryColor, 0.2),
  A100: lighten(secondaryColor, 0.3),
  A200: lighten(secondaryColor, 0.2),
  A400: darken(secondaryColor, 0.1),
  A700: darken(secondaryColor, 0.4),
};

export const tertiary = {
  50: lighten(tertiaryColor, 0.95),
  100: lighten(tertiaryColor, 0.9),
  200: lighten(tertiaryColor, 0.8),
  300: lighten(tertiaryColor, 0.7),
  400: lighten(tertiaryColor, 0.6),
  500: lighten(tertiaryColor, 0.5),
  600: lighten(tertiaryColor, 0.4),
  700: tertiaryColor,
  800: darken(tertiaryColor, 0.05),
  900: darken(tertiaryColor, 0.2),
  A100: lighten(tertiaryColor, 0.3),
  A200: lighten(tertiaryColor, 0.2),
  A400: darken(tertiaryColor, 0.1),
  A700: darken(tertiaryColor, 0.4),
};

const variables = {
  black: "#000000",
  white: "#ffffff",
  primary: {
    superLight: primary[50],
    lighter: primary[300],
    light: primary[600],
    main: primary[700],
    dark: primary[900],
    contrastText: "#fff",
    stone: "#323d47",
    darkSilver: "#757575",
    variant: primary,
  },
  secondary: {
    superLight: secondary[100],
    lighter: secondary[400],
    light: secondary[600],
    main: secondary[700],
    dark: secondary[900],
    contrastText: "#fff",
    variant: secondary,
  },
  tertiary: {
    superLight: tertiary[100],
    lighter: tertiary[400],
    light: tertiary[600],
    main: tertiary[700],
    dark: tertiary[900],
    contrastText: "#fff",
    variant: tertiary,
  },
};

export default variables;
