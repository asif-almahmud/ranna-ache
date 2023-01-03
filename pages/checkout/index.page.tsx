import { Box, styled, TextField, Typography } from "@mui/material";
import { useAppSelector } from "app/hooks";
import Layout from "components/layouts";
import PriceSummary from "components/price-summary";
import Section from "components/section";
import React, { useEffect, useState } from "react";
import { theme } from "theme/theme";
import CustomerDetails from "./components/customer-details";

const OrderSummary = styled("div")(({ theme }) => ({
    margin: "20px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 0 15px #e1e1e1",
    height: "fit-content",
    width: "40%",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
}));

const Checkout = () => {
    const user = useAppSelector((state) => state.user);
    return (
        <Layout>
            <Section bgcolor={theme.palette.primary.superLight}>
                <Box
                    sx={{
                        minHeight: "calc(100vh - 80px)",
                        display: "flex",
                        justifyContent: `${user.email ? "space-evenly" : null}`,
                        alignItems: `${user.email ? null : "center"}`,
                        flexDirection: `${user.email ? "row" : "column"}`,
                    }}
                >
                    <CustomerDetails />
                    {user.email && (
                        <OrderSummary>
                            <PriceSummary withOrderBtn />
                        </OrderSummary>
                    )}
                </Box>
            </Section>
        </Layout>
    );
};

export default Checkout;
