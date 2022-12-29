import { Container, styled } from "@mui/material";
import React, { FC, ReactNode } from "react";

const Wrapper = styled("div")((theme) => ({
  width: "100%",
}));

interface ISectionProps {
  children: ReactNode;
  bgcolor?: string;
}

const Section: FC<ISectionProps> = ({ children, bgcolor }) => {
  return (
    <Wrapper sx={{ bgcolor: bgcolor }}>
      <Container maxWidth="lg">{children}</Container>
    </Wrapper>
  );
};

export default Section;
