import { Box, styled, Typography } from "@mui/material";
import Section from "components/section";
import Image from "next/image";
import React from "react";
import { theme } from "theme/theme";

const Content = styled("div")(({ theme }) => ({
    padding: "100px 0px",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down(900)]: {
        justifyContent: "center",
    },
}));

const FormContainer = styled("div")(({ theme }) => ({
    zIndex: "100",
}));

const CustomForm = styled("form")(({ theme }) => ({
    marginTop: "35px",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
}));
const InputsGroup = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "20px",
    [theme.breakpoints.down(550)]: {
        flexDirection: "column",
    },
}));
const CustomInput = styled("input")(({ theme }) => ({
    border: "none",
    outline: "none",
    maxWidth: "300px",
    height: "58px",
    boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    padding: "19px 22px",
    flex: 1,
    [theme.breakpoints.down(550)]: {
        maxWidth: "none",
    },
}));
const CustomTextarea = styled("textarea")(({ theme }) => ({
    maxWidth: "620px",
    height: "215px",
    border: "none",
    outline: "none",
    boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    padding: "19px 22px",
}));

const ImageContainer = styled("div")(({ theme }) => ({
    width: "400px",
    height: "350px",
    position: "relative",
    margin: "50px 40px 40px 40px",
    [theme.breakpoints.down("md")]: {
        width: "380px",
        height: "420px",
        position: "absolute",
        right: "0px",
    },
    [theme.breakpoints.down(900)]: {
        display: "none",
    },
}));

const StyledImage = styled(Image)(({ theme }) => ({
    objectFit: "cover",
    borderRadius: "50px ",
    transform: "rotateY(180deg)",
    opacity: "0.85",
    boxShadow: "0 0 50px #999999d1",
}));

type Props = {};

const Contact = (props: Props) => {
    return (
        <Section bgcolor={theme.palette.primary.superLight}>
            <Content>
                <FormContainer>
                    <div>
                        <Typography variant="h5">
                            Do you have a question or want to become a seller?
                        </Typography>
                        <Typography variant="caption">
                            Fill this form and our manager will contact you next
                            48 hours.
                        </Typography>
                    </div>
                    <CustomForm>
                        <InputsGroup>
                            <CustomInput type="text" placeholder="Your Name" />
                            <CustomInput
                                type="text"
                                placeholder="Your e-mail"
                            />
                        </InputsGroup>
                        <CustomTextarea placeholder="Your message" />
                        <CustomInput type="submit" />
                    </CustomForm>
                </FormContainer>
                <ImageContainer>
                    <StyledImage
                        src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80"
                        alt="Picture of the author"
                        layout="fill"
                        priority
                    />
                </ImageContainer>
            </Content>
        </Section>
    );
};

export default Contact;
