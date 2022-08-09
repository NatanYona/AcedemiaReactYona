import { useState, useEffect } from "react"
import './ItemCount.scss'


const ItemCount = ({ stock, initial, onAdd }) => {

    const [quantity, setQuantity] = useState(initial)

    const agregarCantidad = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const restarCantidad = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }


    return (
        <div className='itemCount'>
            <button onClick={agregarCantidad}>+</button>
            <p>{quantity}</p>
            <button onClick={restarCantidad}>-</button>
            <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount