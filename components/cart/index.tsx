import {
    Box,
    MenuItem,
    Select,
    styled,
    Typography,
    SelectChangeEvent,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { StyledIconButton } from "components/icon-button";
import Image from "next/image";
import React from "react";
import { theme } from "theme/theme";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { increaseCartItem } from "features/cart/actions";
import {
    decreaseItem,
    deleteItem,
    increaseItem,
    updateAddon,
    updateCalculation,
} from "features/cart/cartSlice";

const ItemContainer = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "10px",
}));

const ImageContainer = styled("div")(({ theme }) => ({
    width: "140px",
    height: "100px",
    position: "relative",
    overflow: "hidden",
    borderRadius: "5px",
}));

const ItemDetails = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
}));

const InCartDetails = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "2px",
}));

const SelectContainer = styled("select")(({ theme }) => ({
    border: "1px solid #d9d9d9",
    backgroundColor: `transparent`,
    borderRadius: "5px",
    "&:focus": {
        outline: "none",
    },
}));

const ActionsContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    gap: "10px",
}));

const Cart = () => {
    const cartItems = useAppSelector((state) => state.cart.items);
    const dispatch = useAppDispatch();
    const [age, setAge] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {cartItems.length === 0 && (
                <Typography variant="body1">No item in cart</Typography>
            )}
            {cartItems.map((item) => (
                <ItemContainer key={item.name}>
                    <ImageContainer>
                        <Image
                            src={item.image}
                            alt={`Picture of ${item.name}`}
                            layout="fill"
                            objectFit="cover"
                        />
                    </ImageContainer>
                    <ItemDetails>
                        <InCartDetails>
                            <Typography variant="body1">{item.name}</Typography>
                            <Typography variant="body2">
                                Quantity Available {item.quantity_available}
                            </Typography>

                            <label>
                                <Typography
                                    variant="body2"
                                    sx={{ display: "inline" }}
                                >
                                    Addon:&nbsp;
                                </Typography>
                                <SelectContainer
                                    onChange={(e) => {
                                        dispatch(
                                            updateAddon({
                                                id: item.id,
                                                addonName: e.target.value,
                                            })
                                        );
                                        dispatch(updateCalculation());
                                    }}
                                >
                                    {item.addons.map((addon) => (
                                        <option
                                            value={addon.name}
                                            key={addon.name}
                                            style={{ border: "1px solid #999" }}
                                        >
                                            {addon.name} - ${addon.price}
                                        </option>
                                    ))}
                                </SelectContainer>
                            </label>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginTop: "4px",
                                }}
                            >
                                <ActionsContainer sx={{}}>
                                    <StyledIconButton
                                        onClick={() => {
                                            if (item.quantity_selected > 1) {
                                                dispatch(
                                                    decreaseItem({
                                                        id: item.id,
                                                    })
                                                );
                                                dispatch(updateCalculation());
                                            } else {
                                                dispatch(
                                                    deleteItem({ id: item.id })
                                                );
                                                dispatch(updateCalculation());
                                            }
                                        }}
                                    >
                                        <RemoveRoundedIcon
                                            sx={{
                                                color: "#fff",
                                                bgcolor: (theme) =>
                                                    theme.palette.secondary
                                                        .main,
                                                borderRadius: "5px",
                                                cursor: "pointer",
                                                fontSize: "20px",
                                                transition:
                                                    "all 200ms ease-in-out",
                                            }}
                                        />
                                    </StyledIconButton>
                                    <Typography variant="body2">
                                        {item.quantity_selected}
                                    </Typography>
                                    <StyledIconButton
                                        onClick={() => {
                                            if (
                                                item.quantity_available >
                                                item.quantity_selected
                                            ) {
                                                dispatch(
                                                    increaseItem({
                                                        id: item.id,
                                                    })
                                                );
                                                dispatch(updateCalculation());
                                            }
                                        }}
                                    >
                                        <AddRoundedIcon
                                            sx={{
                                                color: "#fff",
                                                bgcolor: (theme) =>
                                                    item.quantity_available >
                                                    item.quantity_selected
                                                        ? theme.palette
                                                              .secondary.main
                                                        : "#c2c2c2",
                                                borderRadius: "5px",
                                                cursor: "pointer",
                                                fontSize: "20px",
                                                transition:
                                                    "all 200ms ease-in-out",
                                            }}
                                        />
                                    </StyledIconButton>
                                </ActionsContainer>
                                <Typography variant="subtitle2">
                                    $
                                    {item.addons.filter(
                                        (item) => item.is_selected === true
                                    )[0].price * item.quantity_selected}
                                </Typography>
                            </Box>
                        </InCartDetails>
                        {/* <PriceWrapper></PriceWrapper> */}
                    </ItemDetails>
                </ItemContainer>
            ))}
        </Box>
    );
};

export default Cart;
