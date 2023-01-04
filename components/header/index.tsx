import {
    Box,
    Button,
    ButtonGroup,
    Container,
    darken,
    Drawer,
    IconButton,
    lighten,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import BoltIcon from "@mui/icons-material/Bolt";
import { theme } from "../../theme/theme";
import Image from "next/image";
import logo from "../../assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import Cart from "components/cart";
import { useAppSelector } from "app/hooks";
import Link from "next/link";
import PriceSummary from "components/price-summary";
import Section from "components/section";

const MainWrapper = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    // boxShadow: `1px 1px 4px ${theme.palette.primary.light}`,
    width: "100%",
    height: "80px",
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 999,
}));

const LogoContainer = styled(Link)(({ theme }) => ({
    cursor: "pointer",
    width: "128px",
    height: "65px",
}));

const NavOptions = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "40px",
    fontSize: "18px",
    lineHeight: "20px",
    [theme.breakpoints.down("sm")]: {
        gap: "20px",
        fontSize: "16px",
        lineHeight: "18px",
    },
}));

const NavOption = styled(Link)(({ theme }) => ({
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    letterSpacing: "-0.012em",
    color: theme.palette.primary.contrastText,
    cursor: "pointer",
    transition: "all 400ms ease-in-out",
    textDecoration: "none",
    "&:hover": {
        color: theme.palette.secondary.lighter,
    },
}));

const IconContainer = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
        gap: "4px",
        fontSize: "10px",
    },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    width: "40px",
    height: "40px",
    transition: "all 400ms ease-in-out",
    "&:hover": {
        backgroundColor: alpha(theme.palette.primary.light, 0.2),
        color: theme.palette.secondary.light,
    },
    position: "relative",
}));

const Icon = styled("i")(({ theme }) => ({
    cursor: "pointer",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
        color: "#fff",
        zIndex: "9999",
    },
}));

const Expand = styled(Icon)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down(600)]: {
        display: "block",
    },
}));

const InCartIndication = styled("div")(({ theme }) => ({
    width: "10px",
    height: "10px",
    backgroundColor: theme.palette.secondary.main,
    position: "absolute",
    top: "8px",
    right: "8px",
    borderRadius: "10px",
}));

const navOptions = ["Home", "About", "Menu", "Blog", "Contact"];

export const Header = () => {
    const [openOptions, setOpenOptions] = useState(false);
    const calculation = useAppSelector((state) => state.cart.calculation);
    const [open, setOpen] = useState(false);
    const hasItemInCart = useAppSelector(
        (state) => state.cart.items.length > 0
    );
    return (
        <>
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
                    <LogoContainer href="/">
                        <Image src={logo} alt="logo" />
                    </LogoContainer>

                    <NavOptions
                        sx={{
                            [theme.breakpoints.down(600)]: {
                                display: "none",
                            },
                        }}
                    >
                        {navOptions.map((option) => (
                            <NavOption href="/" key={option}>
                                {option}
                            </NavOption>
                        ))}
                    </NavOptions>
                    <IconContainer>
                        <StyledIconButton>
                            <Expand
                                className="uil uil-bars"
                                onClick={() => setOpenOptions((prev) => !prev)}
                            ></Expand>
                        </StyledIconButton>
                        <StyledIconButton>
                            <Icon className="uil uil-search icon-size"></Icon>
                        </StyledIconButton>
                        <StyledIconButton
                            onClick={() => setOpen((prev) => !prev)}
                        >
                            <Icon className="uil uil-shopping-bag icon-size"></Icon>
                            {hasItemInCart && <InCartIndication />}
                        </StyledIconButton>
                        <Drawer
                            anchor="right"
                            open={open}
                            onClose={() => setOpen(false)}
                        >
                            <Box sx={{ padding: "10px" }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        height: "40px",
                                        minWidth: "300px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <Typography variant="h6">Cart</Typography>
                                    <CloseIcon
                                        sx={{
                                            cursor: "pointer",
                                        }}
                                        onClick={() => setOpen(false)}
                                    />
                                </Box>
                                <Cart />
                                {calculation.price > 0 && (
                                    <PriceSummary withCheckoutBtn />
                                )}
                            </Box>
                        </Drawer>
                    </IconContainer>
                </Container>
                {openOptions && (
                    <NavOptions
                        sx={{
                            padding: "8px 0 16px 0",
                            zIndex: "10",
                            display: "none",
                            [theme.breakpoints.down(600)]: {
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                position: "sticky",
                                top: "80px",
                                bgcolor: (theme) => theme.palette.primary.main,
                            },
                        }}
                    >
                        {navOptions.map((option) => (
                            <NavOption
                                href="/"
                                key={option}
                                onClick={() => setOpenOptions(false)}
                            >
                                {option}
                            </NavOption>
                        ))}
                    </NavOptions>
                )}
            </MainWrapper>
        </>
    );
};
