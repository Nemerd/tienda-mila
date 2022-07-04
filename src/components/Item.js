import { useState } from "react";

function Item({id, title, price, pictureUrl}) {
    const [ID, setID] = useState(id);

    return (
        <>
        <p>{ID}</p>
        <p>{title}</p>
        <p>{price}</p>
        <img src={pictureUrl} />
        </>
    )
}

export default Item;