import React from "react";
import { useParams } from "react-router-dom";
import placeholder from "../database/database.json";
import ItemList from "./ItemList";

function ItemListContainer() {

    const params = useParams()
    let showThis = placeholder;

    // If there's a category, show only the category
    if (params.category){
        showThis = [];
        placeholder.forEach(element => {
            if(element.category === params.category){
                showThis.push(element);
            }
        });
    }

    return (
        <>
        <ItemList item={showThis}/>
        </>
    );
}

export default ItemListContainer;