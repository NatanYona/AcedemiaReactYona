import ItemCount from '../ItemCount/ItemCount'
import './ItemProduct.scss'



const ItemProduct = ({ data, action }) => {
    const { title, image, desc} = data
    return (
            <div className='card p-3 m-2 cardCustom'>
                <img src={`/assets/${image}`} className="card-img-top"></img>
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{desc}</p>
                    <ItemCount />
                </div>
            </div>
    )
}

export default ItemProduct