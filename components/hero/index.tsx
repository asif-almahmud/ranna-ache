import { alpha, Box, styled, Typography } from "@mui/material";
import Section from "components/section";
import Image from "next/image";
import React from "react";
import { theme } from "theme/theme";

type Props = {};

const ContentWrapper = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
}));

const StyledImage = styled(Image)(({ theme }) => ({
  //   position: "absolute",
  //   right: "20px",
  objectFit: "cover",
  // border: `14px solid ${alpha(theme.palette.secondary.main, 0.4)}`,
  // border: `4px solid ${alpha(theme.palette.secondary.superLight, 0.5)}`,
  borderRadius: "15px",
  margin: "50px 40px 40px 40px",
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "70px",
              fontWeight: "400",
              color: "#fff",
              zIndex: "10",
            }}
          >
            Authentic Home food in UK
          </Typography>
          <Typography variant="body1" sx={{ color: "#fff", maxWidth: "440px" }}>
            What2Eat is a courier service in which authentic home cook food is
            delivered to a customer.
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
                bgcolor: (theme) => theme.palette.secondary.main,
                borderRadius: "0 10px 10px 0",
                fontWeight: "600",
                fontSize: "18px",
                cursor: "pointer",
              }}
            />
          </SearchComponent>
        </Box>
        <StyledImage
          // src="https://images.unsplash.com/photo-1549590143-d5855148a9d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          src="https://images.unsplash.com/photo-1619710282877-638d7ee1e45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
          alt="Picture of the author"
          width={420}
          height={460}
          priority
        />
      </ContentWrapper>
    </Section>
  );
};

export default Hero;
