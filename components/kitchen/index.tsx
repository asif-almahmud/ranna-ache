import { Box, Grid, styled, Typography } from "@mui/material";
import axiosClient from "api/axiosClient";
import Filters from "components/filters";
import Offers from "components/offers";
import ProductCard from "components/product-card";
import Section from "components/section";
import React from "react";
import { useQuery } from "react-query";
import { theme } from "theme/theme";

const Content = styled("div")(({ theme }) => ({
  padding: "100px 0 100px 0",
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
        <Grid
          container
          rowSpacing={6}
          columnSpacing={4}
          sx={{ marginTop: "0px" }}
        >
          {data?.data.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Content>
    </Section>
  );
};

export default Kitchen;
