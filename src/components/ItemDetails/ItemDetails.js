import './ItemDetails.scss'

const ItemDetails = ({ detailsProducts }) => {
    return (
        <div>
            {detailsProducts.map((product) => {
                return (
                    <div key={product.id} className="container">
                        <h2>{product.title}</h2>
                        <img src={`/assets/${product.image}`} className="imgDetails"></img>
                        <p>{product.desc}</p>
                        <p>{product.price}</p>
                        <p>Stock {product.stock}</p>
                    </div>)
            })}
        </div>
    )
}

export default ItemDetails