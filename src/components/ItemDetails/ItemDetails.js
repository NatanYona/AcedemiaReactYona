import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/context";



const ItemDetail = ({ product }) => {
    const { addItem } = useContext(CartContext)
    const [producto, setProducto] = useState([])

    const onAdd = (contador) => {
        setProducto(product)
        addItem(product, contador)
    }
    return (
        <div>
        <img src={product.image} className="card-img-top"></img>
        <h1>{product.title}</h1>
        {
            product.id?
            <div>
            <Link to={"/checkout"}><button>Finalizar compra</button></Link>
            </div>:
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        }
        </div>
    )
}

export default ItemDetail;