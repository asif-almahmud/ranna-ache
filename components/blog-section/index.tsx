import { Box, styled, Typography } from "@mui/material";
import Section from "components/section";
import Image from "next/image";
import React from "react";

const BlogsContainer = styled("div")(({ theme }) => ({
    display: "flex",
    marginTop: "20px",
    gap: "40px",
    [theme.breakpoints.down("md")]: {
        gap: "25px",
    },
    [theme.breakpoints.down("sm")]: {
        gap: "15px",
    },
    [theme.breakpoints.down(600)]: {
        display: "block",
    },
}));
const ColumnAside = styled("div")(({ theme }) => ({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "40px",
    [theme.breakpoints.down("md")]: {
        gap: "25px",
    },
    [theme.breakpoints.down("sm")]: {
        gap: "15px",
    },
    [theme.breakpoints.down(500)]: {
        display: "flex",
        gap: "10px",
    },
    [theme.breakpoints.down(400)]: {
        flexDirection: "column",
    },
}));
const ColumnMiddle = styled("div")(({ theme }) => ({
    flex: 2,
    [theme.breakpoints.down("sm")]: {
        flex: 1.5,
    },
    [theme.breakpoints.down(600)]: {
        margin: "15px 0px",
    },
    [theme.breakpoints.down(500)]: {
        margin: "10px 0px",
    },
}));
const SingleBlog = styled("div")(({ theme }) => ({
    cursor: "pointer",
    width: "100%",
    [theme.breakpoints.down(500)]: {
        flex: 1,
    },
}));

const ImageContainer = styled("div")(({ theme }) => ({
    width: "100%",
    height: "183px",
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px 10px 0 0",
    [theme.breakpoints.down(700)]: {
        height: "140px",
    },
}));

const ImageContainerMiddle = styled(ImageContainer)(({ theme }) => ({
    height: "421px",
    [theme.breakpoints.down("md")]: {
        height: "360px",
    },
    [theme.breakpoints.down(800)]: {
        height: "300px",
    },
    [theme.breakpoints.down(700)]: {
        height: "240px",
    },
    [theme.breakpoints.down(600)]: {
        height: "140px",
    },
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

const TextContainer = styled("div")(({ theme }) => ({
    padding: "10px 20px",
}));

type Props = {};

const BlogSection = (props: Props) => {
    return (
        <Section bgcolor="#fff">
            <Box sx={{ margin: "100px 0px" }}>
                <Typography variant="h5">Our Blog</Typography>
                <BlogsContainer>
                    <ColumnAside>
                        <SingleBlog>
                            <ImageContainer>
                                <StyledImage
                                    src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80"
                                    alt={`Picture of food`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </ImageContainer>
                            <TextContainer>
                                <Typography variant="body1">
                                    Lorem ipsum, dolor sit amet consectetur.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#1B1C21",
                                        fontStyle: "normal",
                                        fontWeight: 300,
                                        fontSize: "12px",
                                        lineheight: "15px",
                                        marginTop: "6px",
                                    }}
                                >
                                    Amet consectetur adipisicing elit. Voluptas,
                                    corrupti. Lorem ipsum dolor sit amet.
                                </Typography>
                            </TextContainer>
                        </SingleBlog>
                        <SingleBlog>
                            <ImageContainer>
                                <StyledImage
                                    src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"
                                    alt={`Picture of food`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </ImageContainer>
                            <TextContainer>
                                <Typography variant="body1">
                                    Lorem ipsum, dolor sit amet consectetur.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#1B1C21",
                                        fontStyle: "normal",
                                        fontWeight: 300,
                                        fontSize: "12px",
                                        lineheight: "15px",
                                        marginTop: "6px",
                                    }}
                                >
                                    Amet consectetur adipisicing elit. Voluptas,
                                    corrupti. Lorem ipsum dolor sit amet.
                                </Typography>
                            </TextContainer>
                        </SingleBlog>
                    </ColumnAside>
                    <ColumnMiddle>
                        <SingleBlog>
                            <ImageContainerMiddle>
                                <StyledImage
                                    src="https://images.unsplash.com/photo-1671222872873-f4587a665453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                    alt={`Picture of food`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </ImageContainerMiddle>
                            <TextContainer>
                                <Typography variant="body1">
                                    Lorem ipsum, dolor sit amet consectetur.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#1B1C21",
                                        fontStyle: "normal",
                                        fontWeight: 300,
                                        fontSize: "12px",
                                        lineheight: "15px",
                                        marginTop: "6px",
                                    }}
                                >
                                    Amet consectetur adipisicing elit. Voluptas,
                                    corrupti. Lorem ipsum dolor sit amet.
                                </Typography>
                            </TextContainer>
                        </SingleBlog>
                    </ColumnMiddle>
                    <ColumnAside>
                        <SingleBlog>
                            <ImageContainer>
                                <StyledImage
                                    src="https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
                                    alt={`Picture of food`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </ImageContainer>
                            <TextContainer>
                                <Typography variant="body1">
                                    Lorem ipsum, dolor sit amet consectetur.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#1B1C21",
                                        fontStyle: "normal",
                                        fontWeight: 300,
                                        fontSize: "12px",
                                        lineheight: "15px",
                                        marginTop: "6px",
                                    }}
                                >
                                    Amet consectetur adipisicing elit. Voluptas,
                                    corrupti. Lorem ipsum dolor sit amet.
                                </Typography>
                            </TextContainer>
                        </SingleBlog>
                        <SingleBlog>
                            <ImageContainer>
                                <StyledImage
                                    src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                    alt={`Picture of food`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </ImageContainer>
                            <TextContainer>
                                <Typography variant="body1">
                                    Lorem ipsum, dolor sit amet consectetur.
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#1B1C21",
                                        fontStyle: "normal",
                                        fontWeight: 300,
                                        fontSize: "12px",
                                        lineheight: "15px",
                                        marginTop: "6px",
                                    }}
                                >
                                    Amet consectetur adipisicing elit. Voluptas,
                                    corrupti. Lorem ipsum dolor sit amet.
                                </Typography>
                            </TextContainer>
                        </SingleBlog>
                    </ColumnAside>
                </BlogsContainer>
            </Box>
        </Section>
    );
};

export default BlogSection;
