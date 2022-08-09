import { useContext, useState } from "react";
import { CartContext } from "../context/context";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

function Cart() {

    const { cart, clear } = useContext(CartContext);

    const limpiarCarrito = () => {
        clear();

    }

    if (!cart.lenght) {
        return (
            <div className="cart">
                <h1>Carrito vacio</h1>
                <Link to="/">
                    <button className="btn btn-primary">Volver al inicio</button>
                </Link>
            </div>
        )
    }

    return (
        <div className="cart">
            <CartItem cart={cart} />
            <button onClick={limpiarCarrito} className="btn btn-primary">Vaciar carrito</button>
        </div>
    )
}

export default Cart