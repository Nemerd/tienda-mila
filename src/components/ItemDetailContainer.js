import React from 'react';
import ItemDetail from './ItemDetail';
import placeholder from "../database/database.json";
import { useParams } from 'react-router-dom';

function ItemDetailContainer(){
    
    const ID = useParams()
    
    return (
        <>
        <ItemDetail item={placeholder[ID.id]} />
        </>
    )
}
export default ItemDetailContainer;