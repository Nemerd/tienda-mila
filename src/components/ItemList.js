import { useEffect, useState } from "react";
import { Item } from "./Item";

function ItemList() {
    const [database, setDatabase] = useState()

    useEffect(
        () => {
            fetch("../../public/database.json")
                .then( res => res.json())
                .then( db => setDatabase(db))
        }
    )
    return (
        <>
        {items.map( x => <Item id={x.id} title={x.title}
            price={x.price} pictureUrl={x.pictureUrl} />)}
        </>
    )
}

export default ItemList;