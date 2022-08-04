
import { useEffect, useState } from "react"
import ItemDetails from "../ItemDetails/ItemDetails"
import './ItemDetailContainer.scss'
import products from "../../util/productos.mock"
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [productData, setProductData] = useState({})

    const { id } = useParams()
    
    useEffect( () => {
        filterById()
    }, [id])

    const filterById = () => {
        products.some( (product) => {
            if(product.id == id) {
                console.log("producto filtrado: ", product)
                setProductData(product) 
            }
        }
    )
    }
    return(
        <div className="container-item-detail">
            <ItemDetails data={productData}/>
        </div>
    )
}

export default ItemDetailContainer