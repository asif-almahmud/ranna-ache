import { alpha, Box, styled, Typography } from "@mui/material";
import axiosClient from "api/axiosClient";
import { useAppDispatch, useAppSelector } from "app/hooks";
import axios from "axios";
import { emptyCart } from "features/cart/cartSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useMutation } from "react-query";
import { IPayload } from "types/type";

const Calculation = styled("div")(({ theme }) => ({
    margin: "32px 0 10px 0",
}));
const SingleCalculation = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));

const Checkout = styled(Box)<{ href?: string }>(({ theme }) => ({
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

interface IPriceSummaryProps {
    withCheckoutBtn?: boolean;
    withOrderBtn?: boolean;
}

const placeOrder = (payload: IPayload) => {
    const headers = { "x-access-user": "asifalmahmud1990@gmail.com" };
    return axiosClient.post("/order", payload, { headers });
};

const PriceSummary: FC<IPriceSummaryProps> = ({
    withCheckoutBtn,
    withOrderBtn,
}) => {
    const {
        cart: { calculation, items },
        user,
    } = useAppSelector((state) => state);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { mutate, error, data, isLoading } = useMutation(placeOrder, {
        onSuccess: () => {
            router.push("/order-history");
            localStorage.removeItem("munchies-cart");
            dispatch(emptyCart());
        },
        onError: (err: any) => {
            alert(err);
        },
    });

    const formattedItems = items.map((item) => {
        return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity_selected,
            vat: item.vat,
            addon: {
                name: item.addons.filter(
                    (addon) => addon.is_selected === true
                )[0].name,
                price: item.addons.filter(
                    (addon) => addon.is_selected === true
                )[0].price,
            },
        };
    });
    const payload = {
        customer: {
            name: user.name,
            address: user.address,
            phone: user.phone,
        },
        calculation: {
            price: calculation.price,
            vat: calculation.vat,
            total: calculation.total,
        },
        items: formattedItems,
    };

    const handlePlaceOrder = async () => {
        if (calculation.total === 0) {
            return;
        }
        mutate(payload);
        console.log({ error, data });
    };
    return (
        <>
            <Calculation>
                <SingleCalculation>
                    <Typography variant="subtitle1">Subtotal</Typography>
                    <Typography variant="subtitle1">
                        ${calculation.price}
                    </Typography>
                </SingleCalculation>
                <SingleCalculation>
                    <Typography variant="subtitle1">Vat</Typography>
                    <Typography variant="subtitle1">
                        ${calculation.vat}
                    </Typography>
                </SingleCalculation>
                <SingleCalculation sx={{ marginTop: "6px" }}>
                    <Typography variant="h5">Total</Typography>
                    <Typography variant="h5"> ${calculation.total}</Typography>
                </SingleCalculation>
            </Calculation>
            {withCheckoutBtn && (
                <Checkout component={Link} href="/checkout">
                    Checkout
                </Checkout>
            )}
            {withOrderBtn && (
                <Checkout
                    onClick={handlePlaceOrder}
                    sx={{
                        backgroundColor: (theme) =>
                            isLoading || calculation.total === 0
                                ? theme.palette.primary.lighter
                                : theme.palette.secondary.main,
                        cursor: isLoading ? null : "pointer",
                    }}
                >
                    Place Order
                </Checkout>
            )}
        </>
    );
};

export default PriceSummary;
