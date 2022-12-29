import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import StarIcon from "@mui/icons-material/Star";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const CardContainer = styled("div")(({ theme }) => ({
  height: "337px",
  width: "277px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  backgroundColor: "#fff",
}));

const StyledImage = styled(Image)(({ theme }) => ({
  objectFit: "cover",
  borderRadius: "10px 10px 0 0",
}));

const Details = styled("div")(({ theme }) => ({
  height: "0 0 10px 10px",
  padding: "20px 24px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
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
  product: any;
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const { name, price, image } = product;
  console.log({ product });
  return (
    <CardContainer>
      <StyledImage
        src={image}
        alt={`Picture of ${name}`}
        width={277}
        height={250}
      />
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
            <AdditionalInfo variant="caption">50-79 min</AdditionalInfo>
          </Box>
          <AddRoundedIcon
            sx={{
              color: "#fff",
              bgcolor: (theme) => theme.palette.secondary.main,
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "20px",
            }}
          />
        </Box>
      </Details>
    </CardContainer>
  );
};

export default ProductCard;
