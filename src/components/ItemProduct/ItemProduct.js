import ItemCount from '../ItemCount/ItemCount'
import './ItemProduct.scss'
import { Link } from 'react-router-dom'



const ItemProduct = ({ data, action }) => {
    const { title, image, price, stock } = data
    return (
        <div className='card p-3 m-2 cardCustom'>
            <a><img src={`/assets/${image}`} className="card-img-top"></img></a>
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{price}</p>
                <ItemCount stock={stock} />
                <div className="div_stock">
                    <p>Stock: {stock}</p>
                </div>
                <Link to={`/productos/${data.id}`}>
                    <button className="btn_detail">Ver detalle del curso</button>
                </Link>
            </div>
        </div>
    )
}

export default ItemProduct