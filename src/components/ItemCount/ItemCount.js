import { useState, useEffect } from "react"
import './ItemCount.scss'


const ItemCount = ({ stock }) => {
    const [contador, setContador] = useState(1)
    const addNumber = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const removeNumber = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }
    useEffect(() => {
        console.log("Actualizacion")
    }, [contador])
    return (
        <>
            <div class="count_container">
                <div class="count_div">
                    <div class="count_minus">
                        <button onClick={removeNumber} className="btn">-</button>
                    </div>
                        <p className="stock">{contador}</p>
                    <div class="count_plus">
                        <button onClick={addNumber} className="btn">+</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ItemCount