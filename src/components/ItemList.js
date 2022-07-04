import { useEffect, useState } from "react";
import Item from "./Item";

function ItemList({item}) {

    return (
        <>
        {item.map( x => <Item id={x.id} title={x.title}
            price={x.price} pictureUrl={x.pictureUrl} />
            )}
        </>
    )
}

export default ItemList;