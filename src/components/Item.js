import { useState } from "react";
import "./Item.css";

function Item({id, title, price, pictureUrl}) {
    const [ID, setID] = useState(id);

    return (
        <div className="card">
        <p className="id">{ID}</p>
        <p className="title">{title}</p>
        <p className="price">${price}</p>
        <img className="picture" src={pictureUrl} />
        </div>
    )
}

export default Item;