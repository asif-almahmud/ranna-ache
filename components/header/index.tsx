import {
  Box,
  Button,
  ButtonGroup,
  Container,
  darken,
  lighten,
} from "@mui/material";
import React from "react";
import { alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import BoltIcon from "@mui/icons-material/Bolt";
import { theme } from "../../theme/theme";
import Image from "next/image";
import logo from "../../assets/logo.png";

const MainWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  // boxShadow: `1px 1px 4px ${theme.palette.primary.light}`,
  width: "100%",
  height: "80px",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 999,
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  width: "128px",
  height: "65px",
}));

const MenuOptions = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "40px",
}));

const MenuOption = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "20px",
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "20px",
  letterSpacing: "-0.012em",
  color: theme.palette.primary.contrastText,
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.lighter,
  },
}));

const IconContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "40px",
}));

const Icon = styled("i")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  cursor: "pointer",
  fontSize: "20px",
}));

const menuOptions = ["Home", "About", "Menu", "Blog", "Contact"];

export const Header = () => {
  return (
    <MainWrapper>
      <Container
        maxWidth="lg"
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          [theme.breakpoints.up("md")]: {},
        }}
      >
        <LogoContainer>
          <Image src={logo} alt="logo" />
        </LogoContainer>
        <MenuOptions>
          {menuOptions.map((option) => (
            <MenuOption key={option}>{option}</MenuOption>
          ))}
        </MenuOptions>
        <IconContainer>
          <Icon className="uil uil-search icon-size"></Icon>
          <Icon className="uil uil-shopping-bag icon-size"></Icon>
        </IconContainer>
      </Container>
    </MainWrapper>
  );
};
