import {useState} from 'react';
import './ItemCount.css';

function ItemCount({stock}){
    const [quantity, setQuantity] = useState(1)

    const add = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }
    const rest = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    return (
        <div className='ItemCount'>
            <button onClick={rest}>-</button>
            <p>{quantity}</p>
            <button onClick={add}>+</button>
        </div>
    )
}

export default ItemCount;