import { styled, Typography } from "@mui/material";
import React, { useState } from "react";

const OptionsContainer = styled("div")(({ theme }) => ({
  marginTop: "15px",
  display: "flex",
  "&>*": {
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRight: `1px solid ${theme.palette.secondary.main}`,
    borderLeft: `none`,
  },
}));

const Option = styled("div")(({ theme }) => ({
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
}));

const offerOptions = ["All", "Button", "Free delivery", "New", "Coming"];

type Props = {};

const Offers = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState("All");
  return (
    <OptionsContainer>
      {offerOptions.map((option) => (
        <Option
          key={option}
          sx={{
            bgcolor: (theme) =>
              option === selectedOption ? theme.palette.secondary.main : null,
            "&:hover": {
              bgcolor: (theme) =>
                option === selectedOption
                  ? null
                  : theme.palette.secondary.superLight,
            },
          }}
          onClick={() => setSelectedOption(option)}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: option === selectedOption ? 600 : 400,
              color: (theme) =>
                option === selectedOption ? null : theme.palette.primary.light,
            }}
          >
            {option}
          </Typography>
        </Option>
      ))}
    </OptionsContainer>
  );
};

export default Offers;
