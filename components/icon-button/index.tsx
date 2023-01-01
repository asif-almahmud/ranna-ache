import { alpha, IconButton, styled } from "@mui/material";

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  padding: "0",
  borderRadius: "4px",
  "&:focus": {
    outline: `4px solid ${alpha(theme.palette.primary.lighter, 0.2)}`,
  },
}));
