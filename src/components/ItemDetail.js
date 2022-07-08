import React from "react";
import "./ItemDetail.css"

function ItemDetail({item}){
    const {title, price, pictureUrl, description} = item;
    if (price) {
        return (
            <div className="ItemDetail">
                <p className="title">{title}</p>
                <p className="price">${price}</p>
                <img className="picture" src={pictureUrl} alt="Product" />
                <p className="description">{description}</p>
            </div>
        )
    }
}
export default ItemDetail;