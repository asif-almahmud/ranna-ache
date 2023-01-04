import { Box, styled, Typography } from "@mui/material";
import axiosClient from "api/axiosClient";
import Layout from "layouts";
import Section from "components/section";
import ItemSummary from "pages/checkout/components/item-summary";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { theme } from "theme/theme";
import { ICalculation, IItemForPayload } from "types/type";
import { v4 as uuidv4 } from "uuid";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const SingleOrder = styled("div")(({ theme }) => ({
    padding: "30px 30px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 0 15px #e1e1e1",
    height: "fit-content",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginBottom: "40px",
    [theme.breakpoints.down(840)]: {
        width: "70%",
    },
}));

type Props = {};

const getOrderHistory = () => {
    const headers = { "x-access-user": "asifalmahmud1990@gmail.com" };
    return axiosClient.get("/order", { headers });
};

const OrderHistory = (props: Props) => {
    const { data, isLoading, isError, error, isFetching } = useQuery(
        "orders",
        getOrderHistory
    );

    return (
        <Layout>
            <Section bgcolor={theme.palette.primary.superLight}>
                <Box
                    sx={{
                        minHeight: "calc(100vh - 80px)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ padding: "40px 10px 50px 10px" }}
                    >
                        Your Order History
                    </Typography>
                    {isLoading && (
                        <Typography variant="h6">
                            Loading, please wait...
                        </Typography>
                    )}
                    {!isLoading &&
                        [...data?.data]
                            .reverse()
                            .map(
                                ({
                                    items,
                                    createdAt,
                                    calculation,
                                }: {
                                    items: IItemForPayload[];
                                    createdAt: string;
                                    calculation: ICalculation;
                                }) => {
                                    console.log({ items });
                                    const d = new Date(createdAt);
                                    return (
                                        <SingleOrder key={uuidv4()}>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{
                                                    textDecoration: "underline",
                                                }}
                                            >
                                                Ordered at :&nbsp;
                                                {months[d.getMonth()]}
                                                &nbsp;
                                                {d.getDate()},&nbsp;
                                                {d.getFullYear()}
                                                ,&nbsp;
                                                {d.getHours() > 12
                                                    ? d.getHours() - 12
                                                    : d.getHours()}
                                                :{d.getMinutes()}
                                                {d.getHours() > 12
                                                    ? " pm"
                                                    : " am"}
                                            </Typography>
                                            {items.map((item) => {
                                                return (
                                                    <Box key={uuidv4()}>
                                                        <Typography>
                                                            {item.addon.name},
                                                            quantity:&nbsp;
                                                            {item.quantity},
                                                            price:&nbsp; $
                                                            {item.addon.price *
                                                                item.quantity}
                                                        </Typography>
                                                    </Box>
                                                );
                                            })}
                                            <Box>
                                                <Typography>
                                                    Subtotal: $
                                                    {calculation.price}, Vat: $
                                                    {calculation.vat}, Total: $
                                                    {calculation.total}
                                                </Typography>
                                            </Box>
                                        </SingleOrder>
                                    );
                                }
                            )}
                </Box>
            </Section>
        </Layout>
    );
};

export default OrderHistory;
