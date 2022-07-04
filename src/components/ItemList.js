import { useEffect, useState } from "react";
import Item from "./Item";

function ItemList({item}) {

    return (
        <div style={{display: "flex", flexFlow: "row", flexWrap: "wrap"}}>
        {item.map( x => <Item id={x.id} title={x.title}
            price={x.price} pictureUrl={x.pictureUrl} />
            )}
        </div>
    )
}

export default ItemList;