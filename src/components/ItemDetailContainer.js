import {useState} from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer({index, placeholder}){
    
    const [item, setItem] = useState({})

    const getItem = () => {
        // TODO Cambiar cuando se consiga el JSON.
        fetch("../database/database.json")
        .then( res => res.json())
        .then( list => setItem(list[index]))
    }

    // Borrar despues
    setTimeout(setItem(placeholder), 2000)
    
    return (
        <>
        <ItemDetail item={item} />
        </>
    )
}
export default ItemDetailContainer;