import ItemCount from "../ItemCount/ItemCount"
import './ItemDetails.scss'

const ItemDetails = ({ data }) => {
    return (
        <>
            <div className="detail_div">
                <div className="detail_img_div">
                    <img src={`/assets/${data.image}`} alt="imagen" className="Details_img" />
                </div>
                <div className="detail_text_div">
                    <h2>{data.title}</h2>
                    <p className="detail-info__price">{data.price}</p>
                    <div className="detail-info__size">
                        <p>{data.desc}</p>
                    </div>
                    <div className="detail-info__stock">
                        <ItemCount />
                        <div className="div_stock">
                            <p>Stock: {data.stock}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default ItemDetails