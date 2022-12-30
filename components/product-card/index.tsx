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
  top: 0,
  left: 0,
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
  product: any;
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const { name, price, image } = product;
  console.log({ product });
  return (
    <CardContainer item xs={6} sm={4} md={3} lg={3}>
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
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            padding: "4px 6px",
            bgcolor: (theme) => theme.palette.tertiary.main,
            color: "#fff",
            borderRadius: "10px 0 10px 0",
          }}
        >
          In Cart
        </Box>
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
            <AdditionalInfo variant="caption">50-79 min</AdditionalInfo>
          </Box>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            sx={{
              padding: "0",
              borderRadius: "4px",
              "&:hover": {},
              "&:focus": {
                outline: (theme) =>
                  `4px solid ${alpha(theme.palette.secondary.main, 0.2)}`,
              },
            }}
          >
            <AddRoundedIcon
              sx={{
                color: "#fff",
                bgcolor: (theme) => theme.palette.secondary.main,
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "20px",
                transition: "all 200ms ease-in-out",
                // "&:hover": {
                //   bgcolor: (theme) => theme.palette.secondary.dark,
                // },
              }}
            />
          </IconButton>
        </Box>
      </Details>
    </CardContainer>
  );
};

export default ProductCard;
