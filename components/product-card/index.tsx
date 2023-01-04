import {
    alpha,
    Box,
    Grid,
    IconButton,
    styled,
    Typography,
} from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import StarIcon from "@mui/icons-material/Star";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { StyledIconButton } from "components/icon-button";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { addItem, updateCalculation } from "features/cart/cartSlice";
import { ICartItem } from "types/type";

const CardContainer = styled(Grid)(({ theme }) => ({
    height: "350px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    // backgroundColor: "#fff",
}));

const StyledImage = styled(Image)(({ theme }) => ({
    objectFit: "cover",
    borderRadius: "10px 10px 0 0",
    backgroundColor: "#fff",
    transition: "transform 200ms ease-in-out",
    "&:hover": {
        transform: "scale(1.2)",
    },
}));

const Details = styled("div")(({ theme }) => ({
    height: "0 0 10px 10px",
    padding: "20px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "#fff",
    borderRadius: "0 0 10px 10px",
}));

const AdditionalInfo = styled(Typography)(({ theme }) => ({
    display: "inline-flex",
    gap: "4px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.superLight,
    padding: "0 4px",
    boxShadow: "0 0 1px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
}));

interface IProductCardProps {
    product: ICartItem;
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.cart.items);
    const {
        id,
        name,
        price,
        quantity_available,
        quantity_selected,
        vat,
        addons,
        image,
    } = product;
    console.log({ product });
    return (
        <CardContainer item xxs={12} xs={6} sm={4} md={3} lg={3}>
            <Box
                sx={{
                    width: "100%",
                    height: "250px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "10px 10px 0 0",
                }}
            >
                <StyledImage
                    src={image}
                    alt={`Picture of ${name}`}
                    layout="fill"
                    objectFit="cover"
                />
                {items.filter((item) => item.id === id).length > 0 && (
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "0",
                            right: "0",
                            padding: "4px 6px",
                            bgcolor: (theme) =>
                                alpha(theme.palette.secondary.dark, 0.5),
                            backdropFilter: "blur(5px)",
                            color: "#fff",
                            borderRadius: "0 0 0 0",
                            fontWeight: 500,
                            fontSize: "12px",
                        }}
                    >
                        In Cart
                    </Box>
                )}
            </Box>
            <Details>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="body1">{name}</Typography>
                    <Typography variant="body1">${price}</Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "4px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                        }}
                    >
                        <AdditionalInfo variant="caption">
                            <StarIcon sx={{ fontSize: "12px" }} />
                            <span>4.7</span>
                        </AdditionalInfo>
                        <AdditionalInfo variant="caption">
                            50-79 min
                        </AdditionalInfo>
                    </Box>
                    {/*  name, price, quantity, vat, addon */}
                    <StyledIconButton
                        onClick={() => {
                            dispatch(addItem(product));
                            dispatch(updateCalculation());
                        }}
                    >
                        <AddRoundedIcon
                            sx={{
                                color: "#fff",
                                bgcolor: (theme) =>
                                    theme.palette.secondary.main,
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontSize: "20px",
                                transition: "all 200ms ease-in-out",
                            }}
                        />
                    </StyledIconButton>
                </Box>
            </Details>
        </CardContainer>
    );
};

export default ProductCard;
