import {
    alpha,
    Box,
    darken,
    IconButton,
    styled,
    Typography,
} from "@mui/material";
import { useAppDispatch } from "app/hooks";
import { deleteItem, updateCalculation } from "features/cart/cartSlice";
import Image from "next/image";
import React from "react";
import { ICartItem } from "types/type";

const ImageContainer = styled("div")(({ theme }) => ({
    width: "90px",
    height: "70px",
    position: "relative",
    overflow: "hidden",
    borderRadius: "5px",
}));

const Container = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "10px",
}));

const Icon = styled("i")(({ theme }) => ({
    color: theme.palette.primary.main,
    transition: "all 200ms ease-in-out",
    cursor: "pointer",
    fontSize: "18px",
    position: "absolute",
    right: "0",
    "&:hover": {
        color: darken(theme.palette.secondary.main, 0.4),
    },
}));

interface IItemSummaryProps extends ICartItem {
    withDeleteBtn?: boolean;
}

const ItemSummary = (props: IItemSummaryProps) => {
    const {
        id,
        name,
        price,
        quantity_available,
        quantity_selected,
        image,
        vat,
        addons,
        withDeleteBtn,
    } = props;
    const dispatch = useAppDispatch();

    return (
        <Container>
            <ImageContainer>
                <Image
                    src={image}
                    alt={`Picture of ${name}`}
                    layout="fill"
                    objectFit="cover"
                />
            </ImageContainer>
            <Box sx={{ flexGrow: 1 }}>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        position: "relative",
                    }}
                >
                    <Typography>
                        {name}&nbsp;(&nbsp;
                        {
                            addons.filter(
                                (addon) => addon.is_selected === true
                            )[0].name
                        }
                        &nbsp; )
                    </Typography>

                    {withDeleteBtn && (
                        <Icon
                            className="uil uil-trash-alt"
                            onClick={() => {
                                dispatch(deleteItem({ id }));
                                dispatch(updateCalculation());
                            }}
                        ></Icon>
                    )}
                </Box>
                <Typography>Quantity : {quantity_selected}</Typography>
                <Typography>
                    Price : $
                    {quantity_selected *
                        addons.filter((addon) => addon.is_selected === true)[0]
                            .price}
                </Typography>
            </Box>
        </Container>
    );
};

export default ItemSummary;
