import { styled, Typography } from "@mui/material";
import React, { useState } from "react";

const OptionsContainer = styled("div")(({ theme }) => ({
    marginTop: "15px",
    display: "flex",
    "&>*": {
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRight: `1px solid ${theme.palette.secondary.main}`,
        borderLeft: `none`,
        display: "flex",
        alignItems: "center",
    },
}));

const OptionWrapper = styled("div")(({ theme }) => ({
    cursor: "pointer",
    padding: "13px 40px",
    "&:first-child": {
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: "10px 0 0 10px",
    },
    "&:last-child": {
        border: `1px solid ${theme.palette.secondary.main}`,
        borderLeft: "none",
        borderRadius: "0 10px 10px 0",
    },
    [theme.breakpoints.down("sm")]: {
        padding: "10px 24px",
    },
    [theme.breakpoints.down("xs")]: {
        padding: "5px 12px",
    },
}));

const Option = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
    },
}));

const offerOptions = ["All", "Button", "Free delivery", "New", "Coming"];

type Props = {};

const Offers = (props: Props) => {
    const [selectedOption, setSelectedOption] = useState("All");
    return (
        <OptionsContainer>
            {offerOptions.map((option) => (
                <OptionWrapper
                    key={option}
                    sx={{
                        bgcolor: (theme) =>
                            option === selectedOption
                                ? theme.palette.secondary.main
                                : null,
                        "&:hover": {
                            bgcolor: (theme) =>
                                option === selectedOption
                                    ? null
                                    : theme.palette.secondary.superLight,
                        },
                    }}
                    onClick={() => setSelectedOption(option)}
                >
                    <Option
                        variant="body1"
                        sx={{
                            fontWeight: option === selectedOption ? 600 : 400,
                            color: (theme) =>
                                option === selectedOption
                                    ? null
                                    : theme.palette.primary.light,
                        }}
                    >
                        {option}
                    </Option>
                </OptionWrapper>
            ))}
        </OptionsContainer>
    );
};

export default Offers;
