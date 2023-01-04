import { Box, styled, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { createUser } from "features/user/userSlice";
import React, { ReactNode, useEffect, useState } from "react";
import ItemSummary from "../item-summary";

const FormContainer = styled("form")(({ theme }) => ({
    paddingTop: "40px",
    display: "inline-flex",
    flexDirection: "column",
    gap: "14px",
    width: "80%",
}));

const CustomInput = styled("input")(({ theme }) => ({
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #e2e2e2",
}));

const ErrorMessage = styled("div")(({ theme }) => ({
    color: "#ec5858",
}));

const DeliveryDetails = styled("div")(({ theme }) => ({
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

const CustomLabel = ({
    children,
    withStar,
}: {
    children: ReactNode;
    withStar?: boolean;
}) => (
    <label>
        <span className={`${withStar ? "required" : ""}`}>{children}</span>
        {withStar ? <>&nbsp;</> : ""}&nbsp;:&nbsp;
    </label>
);

type Props = {};

const CustomerDetails = (props: Props) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);
    const cartItems = useAppSelector((state) => state.cart.items);
    const [customerDetails, setCustomerDetails] = useState({
        name: "",
        address: "",
        // email: "",
        phone: "",
    });
    const [errorMessage, setErrorMessage] = useState({
        name: "",
        address: "",
        // email: "",
        phone: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            customerDetails.name.trim() === "" ||
            customerDetails.address.trim() === "" ||
            // customerDetails.email.trim() === "" ||
            customerDetails.phone.trim() === ""
        ) {
            customerDetails.name.trim() === "" &&
                setErrorMessage((prev) => {
                    return { ...prev, name: "Required" };
                });
            customerDetails.address.trim() === "" &&
                setErrorMessage((prev) => {
                    return { ...prev, address: "Required" };
                });
            // customerDetails.email.trim() === "" &&
            //     setErrorMessage((prev) => {
            //         return { ...prev, email: "Required" };
            //     });
            customerDetails.phone.trim() === "" &&
                setErrorMessage((prev) => {
                    return { ...prev, phone: "Required" };
                });
            return;
        }
        // const emailRegEx =
        //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // if (!emailRegEx.test(customerDetails.email)) {
        //     setErrorMessage((prev) => {
        //         return { ...prev, email: "Invalid email address" };
        //     });
        //     return;
        // }
        const numberRegEx =
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (!numberRegEx.test(customerDetails.phone)) {
            setErrorMessage((prev) => {
                return {
                    ...prev,
                    phone: "Invalid phone number",
                };
            });
            return;
        }

        dispatch(createUser(customerDetails));
    };

    useEffect(() => {
        console.log({ name: customerDetails.name });
        if (customerDetails.name.trim() !== "") {
            setErrorMessage((prev) => {
                return { ...prev, name: "" };
            });
        }
        if (customerDetails.address.trim() !== "") {
            setErrorMessage((prev) => {
                return { ...prev, address: "" };
            });
        }
        // if (customerDetails.email.trim() !== "") {
        //     setErrorMessage((prev) => {
        //         return { ...prev, email: "" };
        //     });
        // }
        if (customerDetails.phone.trim() !== "") {
            setErrorMessage((prev) => {
                return { ...prev, phone: "" };
            });
        }
    }, [customerDetails]);
    return (
        <>
            {!user.name && (
                <FormContainer onSubmit={handleSubmit}>
                    <Typography variant="h6">
                        Please provide following informations
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CustomLabel withStar>Name</CustomLabel>

                        <CustomInput
                            type="text"
                            placeholder="Your name "
                            value={customerDetails.name}
                            onChange={(e) =>
                                setCustomerDetails({
                                    ...customerDetails,
                                    name: e.target.value.trim(),
                                })
                            }
                        />
                        <ErrorMessage>{errorMessage.name}</ErrorMessage>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CustomLabel withStar>Address</CustomLabel>
                        <CustomInput
                            type="text"
                            placeholder="Your address"
                            value={customerDetails.address}
                            onChange={(e) =>
                                setCustomerDetails({
                                    ...customerDetails,
                                    address: e.target.value.trim(),
                                })
                            }
                        />
                        <ErrorMessage>{errorMessage.address}</ErrorMessage>
                    </Box>
                    {/* <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CustomLabel withStar>Email</CustomLabel>
                        <CustomInput
                            type="text"
                            placeholder="Your e-mail"
                            value={customerDetails.email}
                            onChange={(e) =>
                                setCustomerDetails({
                                    ...customerDetails,
                                    email: e.target.value.trim(),
                                })
                            }
                        />
                        <ErrorMessage>{errorMessage.email}</ErrorMessage>
                    </Box>{" "} */}
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CustomLabel withStar>Phone</CustomLabel>
                        <CustomInput
                            type="text"
                            placeholder="Your phone number"
                            value={customerDetails.phone}
                            onChange={(e) =>
                                setCustomerDetails({
                                    ...customerDetails,
                                    phone: e.target.value.trim(),
                                })
                            }
                        />
                        <ErrorMessage>{errorMessage.phone}</ErrorMessage>
                    </Box>
                    <CustomInput
                        type="submit"
                        sx={{ cursor: "pointer", marginTop: "20px" }}
                    />
                </FormContainer>
            )}
            {user.name && (
                <DeliveryDetails>
                    <div>
                        <Typography variant="body1">
                            Deliver to : {user.name}
                        </Typography>
                        <Typography variant="body1">
                            Address : {user.address}
                        </Typography>
                        {/* <Typography variant="body1">
                            Email : {user.email}
                        </Typography> */}
                        <Typography variant="body1">
                            Phone : {user.phone}
                        </Typography>
                        {/* <Typography
                            variant="subtitle2"
                            sx={{ textAlign: "end", color: "#999" }}
                        >
                            Edit
                        </Typography> */}
                    </div>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px",
                        }}
                    >
                        {cartItems.map((item) => (
                            <ItemSummary
                                key={item.name}
                                {...item}
                                withDeleteBtn
                            />
                        ))}
                    </Box>
                </DeliveryDetails>
            )}
        </>
    );
};

export default CustomerDetails;
