import { styled, Typography } from "@mui/material";
import React from "react";

const FiltersContainer = styled("i")(({ theme }) => ({
  fontSize: "20px",
  marginTop: "40px",
  cursor: "pointer",
  padding: "8px 20px",
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: "10px",
  maxWidth: "300px",
  color: theme.palette.primary.light,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Icon = styled("i")(({ theme }) => ({
  fontSize: "24px",
}));

type Props = {};

const Filters = (props: Props) => {
  return (
    <FiltersContainer>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 600,
        }}
      >
        Filters
      </Typography>
      <Icon className="uil uil-angle-down"></Icon>
    </FiltersContainer>
  );
};

export default Filters;
