import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({id, title, price, pictureUrl}) {
    
    return (
        <div className="card">
            <p className="title">{title}</p>
            <p className="price">${price}</p>
            <img className="picture" src={pictureUrl} alt="Producto" />
            <Link to={`/item/${id}`}>Detalle</Link>
        </div>
    )
}

export default Item;