import React from "react";
import placeholder from "../database/database.json";
import ItemList from "./ItemList";

function ItemListContainer(params) {

    return (
        <>
        <ItemList item={placeholder}/>
        </>
    );
}

export default ItemListContainer;