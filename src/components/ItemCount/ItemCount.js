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
        <div className="count_container">
                <div className="count_div">
                    <div className="count_minus">
                        <button onClick={restarCantidad} className="btn">-</button>
                    </div>
                        <p className="stock">{quantity}</p>
                    <div className="count_plus">
                        <button onClick={agregarCantidad} className="btn">+</button>
                    </div>
                    <div>
                        <button onClick={() => onAdd(quantity)} className="btn">Agregar al carrito</button>
                    </div>
                </div>
            </div>
    )
}

export default ItemCount