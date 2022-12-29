import { Box, styled, Typography } from "@mui/material";
import Filters from "components/filters";
import Offers from "components/offers";
import Section from "components/section";
import React from "react";
import { theme } from "theme/theme";

const Content = styled("div")(({ theme }) => ({
  padding: "100px 0 100px 0",
}));

type Props = {};

const Kitchen = (props: Props) => {
  return (
    <Section bgcolor={theme.palette.primary.superLight}>
      <Content>
        <Typography variant="h5">Home kitchen</Typography>
        <Offers />
        <Filters />
      </Content>
    </Section>
  );
};

export default Kitchen;
