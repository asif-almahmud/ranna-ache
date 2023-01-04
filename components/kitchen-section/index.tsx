import { Box, Button, darken, Grid, styled, Typography } from "@mui/material";
import axiosClient from "api/axiosClient";
import Filters from "components/filters";
import Offers from "components/offers";
import ProductCard from "components/product-card";
import Section from "components/section";
import React from "react";
import { useQuery } from "react-query";
import { theme } from "theme/theme";

const Content = styled("div")(({ theme }) => ({
    padding: "100px 0 60px 0",
}));

const CustomBtn = styled("div")(({ theme }) => ({
    width: "fit-content",
    margin: "0 auto",
    padding: "10px 15px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "10px",
    color: theme.palette.primary.light,
    cursor: "pointer",
    transition: "color 200ms ease-in-out",
    "&:hover": {
        color: darken(theme.palette.primary.variant[600], 0.4),
    },
}));

const fetchProducts = () => {
    return axiosClient.get("/products");
};

const Kitchen = () => {
    const { data, isLoading, isError, error, isFetching } = useQuery(
        "products",
        fetchProducts
        // { staleTime: 60000 }
    );
    console.log({ data });
    return (
        <Section bgcolor={theme.palette.primary.superLight}>
            <Content>
                <Typography variant="h5">Home kitchen</Typography>
                <Offers />
                <Filters />
                {isLoading && (
                    <Typography
                        variant="subtitle1"
                        sx={{ padding: "40px 0 70px 0" }}
                    >
                        Loading...
                    </Typography>
                )}
                <Grid
                    container
                    rowSpacing={5}
                    columnSpacing={3}
                    sx={{ padding: "40px 0 70px 0" }}
                >
                    {data?.data.map((product: any) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </Grid>
                {data?.data && (
                    <CustomBtn>
                        <i className="uil uil-plus"></i>
                        <Typography variant="body1">Load more...</Typography>
                        <div style={{ width: "16px" }}> </div>
                    </CustomBtn>
                )}
            </Content>
        </Section>
    );
};

export default Kitchen;
