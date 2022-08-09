import { useContext } from "react"
import { CartContext } from "../context/context"


function CartShow({items}) {
    const {removeItem} = useContext(CartContext);
    const QuitarItem = () => {
        removeItem(items.id);
}
    return (
        <div className="cart">
            <h1>{items.name}</h1>
            <img src={items.image}></img>
            <h3>{items.price}</h3>
            <button onClick={QuitarItem}>Quitar</button>
        </div>
    )
}






export default CartShow