import CartShow from "../CartShow/CartShow"
import "./CartItem.scss"


function CarItem({ cart }) {
    return (
        <div className="cart">
            {cart.map(e => <CartShow key={e.id} items={e}></CartShow>)}
        </div>
    )
}

export default CarItem;