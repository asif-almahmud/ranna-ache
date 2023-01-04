import { styled, Typography } from "@mui/material";
import React from "react";

const FiltersContainer = styled("div")(({ theme }) => ({
    fontSize: "20px",
    marginTop: "40px",
    cursor: "pointer",
    padding: "8px 20px",
    border: `1px solid ${theme.palette.primary.lighter}`,
    borderRadius: "10px",
    maxWidth: "300px",
    color: theme.palette.primary.light,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontStyle: "none",
    [theme.breakpoints.down("sm")]: {
        padding: "4px 16px",
    },
    [theme.breakpoints.down("xs")]: {
        padding: "0px 10px",
    },
}));

const Icon = styled("i")(({ theme }) => ({
    fontSize: "24px",
}));

type Props = {};

const Filters = (props: Props) => {
    return (
        <FiltersContainer>
            <Typography
                variant="body2"
                sx={{
                    fontWeight: 500,
                }}
            >
                Filters
            </Typography>
            <Icon className="uil uil-angle-down"></Icon>
        </FiltersContainer>
    );
};

export default Filters;
