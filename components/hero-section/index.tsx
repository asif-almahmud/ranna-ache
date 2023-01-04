import { alpha, Box, styled, Typography } from "@mui/material";
import Section from "components/section";
import Image from "next/image";
import React from "react";
import { theme } from "theme/theme";

type Props = {};

const ContentWrapper = styled("div")(({ theme }) => ({
    minHeight: "calc(100vh - 80px)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
}));

const TextContainer = styled("div")(({ theme }) => ({
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    zIndex: 100,
    textShadow: "1px 1px 2px #333",
    [theme.breakpoints.down(640)]: {
        transform: "scale(0.85)",
        margin: "0px",
    },
}));

const ImageContainer = styled("div")(({ theme }) => ({
    width: "480px",
    height: "480px",
    position: "relative",
    margin: "50px 40px 40px 40px",
    [theme.breakpoints.down("md")]: {
        width: "380px",
        height: "420px",
        position: "absolute",
        right: "0px",
    },
    [theme.breakpoints.down(590)]: {
        display: "none",
    },
}));

const StyledImage = styled(Image)(({ theme }) => ({
    objectFit: "cover",
    borderRadius: "15px",
}));

const SearchComponent = styled("div")(({ theme }) => ({
    maxWidth: "400px",
    display: "flex",
}));

const Input = styled("input")(({ theme }) => ({
    border: "none",
    outline: "none",
    height: "60px",
}));

const Hero = (props: Props) => {
    return (
        <Section bgcolor={theme.palette.primary.main}>
            <ContentWrapper>
                <TextContainer>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: "70px",
                            fontWeight: "400",
                            color: "#fff",
                            [theme.breakpoints.down(400)]: {
                                fontSize: "50px",
                            },
                        }}
                    >
                        Authentic Home food in UK
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: "#fff", maxWidth: "440px" }}
                    >
                        What2Eat is a courier service in which authentic home
                        cook food is delivered to a customer.
                    </Typography>
                    <SearchComponent>
                        <Input
                            type="search"
                            placeholder="Search food you love"
                            sx={{
                                flex: 5,
                                borderRadius: "10px 0 0 10px",
                                fontSize: "16px",
                                padding: "0 10px 0 15px ",
                            }}
                        />
                        <Input
                            type="submit"
                            value="Search"
                            sx={{
                                flex: 2,
                                color: "#fff",
                                bgcolor: (theme) =>
                                    theme.palette.secondary.main,
                                borderRadius: "0 10px 10px 0",
                                fontWeight: "600",
                                fontSize: "18px",
                                cursor: "pointer",
                            }}
                        />
                    </SearchComponent>
                </TextContainer>
                <ImageContainer>
                    <StyledImage
                        // src="https://images.unsplash.com/photo-1549590143-d5855148a9d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                        src="https://images.unsplash.com/photo-1619710282877-638d7ee1e45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
                        alt="Picture of the author"
                        layout="fill"
                        priority
                    />
                </ImageContainer>
            </ContentWrapper>
        </Section>
    );
};

export default Hero;
