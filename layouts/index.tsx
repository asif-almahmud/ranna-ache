import { useAppDispatch, useAppSelector } from "app/hooks";
import Footer from "components/footer";
import { Header } from "components/header";
import { setInitialCart } from "features/cart/cartSlice";
import { createUser } from "features/user/userSlice";
import React, { FC, ReactNode, useEffect } from "react";
// import { Header } from "../components/header";

interface ILayoutProps {
    children: ReactNode;
}
let updated = 0;
const Layout: FC<ILayoutProps> = ({ children }) => {
    const { cart, user } = useAppSelector((state) => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const CartStoredAtLocal = localStorage.getItem("munchies-cart");
        if (CartStoredAtLocal) {
            dispatch(setInitialCart(JSON.parse(CartStoredAtLocal)));
        }
        const UserStoredAtLocal = localStorage.getItem("munchies-user");
        if (UserStoredAtLocal) {
            dispatch(createUser(JSON.parse(UserStoredAtLocal)));
        }
    }, []);

    useEffect(() => {
        if (updated > 0) {
            localStorage.setItem("munchies-cart", JSON.stringify(cart));
            localStorage.setItem("munchies-user", JSON.stringify(user));
        }
        updated++;
    }, [cart, user]);
    return (
        <div>
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
