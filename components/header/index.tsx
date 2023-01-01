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
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "20px",
    letterSpacing: "-0.012em",
    color: theme.palette.primary.contrastText,
    cursor: "pointer",
    transition: "all 400ms ease-in-out",
    "&:hover": {
        color: theme.palette.secondary.lighter,
    },
}));

const IconContainer = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "20px",
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

const Calculation = styled("div")(({ theme }) => ({
    margin: "32px 0 10px 0",
}));
const SingleCalculation = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));

const Checkout = styled(Link)(({ theme }) => ({
    marginTop: "12px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: "5px",
    borderRadius: "5px",
    fontWeight: "500",
    "&:focus": {
        outline: `4px solid ${alpha(theme.palette.primary.lighter, 0.2)}`,
    },
}));

const menuOptions = ["Home", "About", "Menu", "Blog", "Contact"];

export const Header = () => {
    const calculation = useAppSelector((state) => state.cart.calculation);
    const [open, setOpen] = useState(false);
    const hasItemInCart = useAppSelector(
        (state) => state.cart.items.length > 0
    );
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
                    <StyledIconButton>
                        <Icon className="uil uil-search icon-size"></Icon>
                    </StyledIconButton>
                    <StyledIconButton onClick={() => setOpen((prev) => !prev)}>
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
                                <>
                                    <Calculation>
                                        <SingleCalculation>
                                            <Typography variant="subtitle1">
                                                Subtotal
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                ${calculation.price}
                                            </Typography>
                                        </SingleCalculation>
                                        <SingleCalculation>
                                            <Typography variant="subtitle1">
                                                Vat
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                ${calculation.vat}
                                            </Typography>
                                        </SingleCalculation>
                                        <SingleCalculation
                                            sx={{ marginTop: "6px" }}
                                        >
                                            <Typography variant="h5">
                                                Total
                                            </Typography>
                                            <Typography variant="h5">
                                                {" "}
                                                ${calculation.total}
                                            </Typography>
                                        </SingleCalculation>
                                    </Calculation>
                                    <Checkout href="/checkout">
                                        Checkout
                                    </Checkout>
                                </>
                            )}
                        </Box>
                    </Drawer>
                </IconContainer>
            </Container>
        </MainWrapper>
    );
};
