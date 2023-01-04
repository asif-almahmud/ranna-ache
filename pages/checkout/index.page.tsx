import { Box, styled } from "@mui/material";
import { useAppSelector } from "app/hooks";
import Layout from "layouts";
import PriceSummary from "components/price-summary";
import Section from "components/section";
import { theme } from "theme/theme";
import CustomerDetails from "./components/customer-details";

const OrderSummary = styled("div")(({ theme }) => ({
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
    [theme.breakpoints.down(840)]: {
        width: "80%",
    },
}));

const Content = styled("div")(({ theme }) => ({
    minHeight: "calc(100vh - 80px)",
    padding: "20px 0",
    display: "flex",
    [theme.breakpoints.down(840)]: {
        flexDirection: "column",
        alignItems: "center",
    },
}));

const Checkout = () => {
    const user = useAppSelector((state) => state.user);
    return (
        <Layout>
            <Section bgcolor={theme.palette.primary.superLight}>
                <Content
                    sx={{
                        justifyContent: `${user.name ? "space-evenly" : null}`,
                        alignItems: `${user.name ? null : "center"}`,
                        flexDirection: `${user.name ? "row" : "column"}`,
                    }}
                >
                    <CustomerDetails />
                    {user.name && (
                        <OrderSummary>
                            <PriceSummary withOrderBtn />
                        </OrderSummary>
                    )}
                </Content>
            </Section>
        </Layout>
    );
};

export default Checkout;
