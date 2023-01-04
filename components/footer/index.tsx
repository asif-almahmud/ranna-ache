import { Box, styled, Typography } from "@mui/material";
import Section from "components/section";
import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";

const Container = styled("div")(({ theme }) => ({
    marginTop: "60px",
    backgroundColor: theme.palette.tertiary.main,
    color: theme.palette.tertiary.contrastText,
}));

const TopPart = styled("div")(({ theme }) => ({
    padding: "35px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.tertiary.contrastText}`,
}));

const NavOptions = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "40px",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

const NavOption = styled(Link)(({ theme }) => ({
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "20px",
    letterSpacing: "-0.012em",
    color: theme.palette.primary.contrastText,
    cursor: "pointer",
    transition: "all 400ms ease-in-out",
    textDecoration: "none",
    "&:hover": {
        color: theme.palette.secondary.lighter,
    },
}));

const Icons = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "14px",
}));

const Icon = styled("i")(({ theme }) => ({
    fontSize: "27px",
    cursor: "pointer",
}));

const BottomPart = styled("div")(({ theme }) => ({
    padding: "16px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

const navOptions = ["Home", "About", "Menu", "Blog", "Contact"];

type Props = {};

const Footer = (props: Props) => {
    return (
        <Container>
            <Section>
                <TopPart>
                    <Typography
                        sx={{
                            fontFamily: "Squada One",
                            fontWeight: 400,
                            fontSize: "32px",
                            lineHeight: "20px",
                            letterSpacing: "-0.012em",
                        }}
                    >
                        WHAT2EAT
                    </Typography>
                    <NavOptions>
                        {navOptions.map((option) => (
                            <NavOption href="/" key={option}>
                                {option}
                            </NavOption>
                        ))}
                    </NavOptions>
                    <Icons>
                        <Icon className="uil uil-facebook"></Icon>
                        <Icon className="uil uil-instagram-alt"></Icon>
                    </Icons>
                </TopPart>
                <BottomPart>
                    <Typography variant="caption">
                        Copyright @{new Date().getFullYear()} What2Eat
                    </Typography>
                </BottomPart>
            </Section>
        </Container>
    );
};

export default Footer;
