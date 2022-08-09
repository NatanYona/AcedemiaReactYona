import { useContext } from "react"
import { CartContext } from "../context/context"


function CartShow({ items }) {
    const { removeItem } = useContext(CartContext);
    const QuitarItem = () => {
        removeItem(items.id);
    }
    return (
        <div className="card p-3 m-2 cardCustom">
            <img src={items.image} className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">{items.title}</h5>
                <p className="card=text">{items.price}</p>
                <button className="btn btn-primary" onClick={QuitarItem}>Quitar</button>
            </div>
        </div>
    )
}






export default CartShow