import ItemCount from '../ItemCount/ItemCount'
import './ItemProduct.scss'
import { Link } from 'react-router-dom'
import React from 'react'



const ItemProduct = ({producto}) => {
    return(
        <div className='card p-3 m-2 cardCustom'>
            <img src={producto.image} className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.price}</p>
                <Link to={`/detalle/${producto.id}`}>
                    <button className="btn btn-primary">Ver detalle</button>
                </Link>
                <ItemCount stock={producto.stock} />
            </div>
        </div>
    )
}

export default ItemProduct;