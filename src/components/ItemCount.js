import {useState} from 'react';
import './ItemCount.css';

function ItemCount({stock}){
    const [cantidad, setCantidad] = useState(1)

    const sumarUno = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }
    const restarUno = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }
    return (
        <div className='ItemCount'>
            <button onClick={restarUno}>-</button>
            <p>{cantidad}</p>
            <button onClick={sumarUno}>+</button>
        </div>
    )
}

export default ItemCount;