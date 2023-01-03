import React from "react";
import { IItemForPayload } from "types/type";

type Props = {};

const SingleOrder = (props: IItemForPayload) => {
    const {
        id,
        name,
        price,
        quantity,
        vat,
        addon: { name: addonName, price: addonPrice },
    } = props;
    return <div>{name}</div>;
};

export default SingleOrder;
