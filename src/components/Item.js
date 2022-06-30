import { useState } from "react";

function Item({id, title, price, pictureUrl}) {
    const [id, setId] = useState(id);

    return (
        <>
        <p>{id}</p>
        <p>{title}</p>
        <p>{price}</p>
        <img src={pictureUrl} />
        </>
    )
}

export default Item;