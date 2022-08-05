import { useEffect, useState } from "react"
import ItemDetails from "../ItemDetails/ItemDetails"
import products from "../../util/productos.mock"
import { useParams } from 'react-router-dom'


const ItemCategoryContainer = () => {
    const [categoryData, setCategoryData] = useState({})
    const {category} = useParams()
    useEffect( () => {
        filterByCategory()
    } , [category])
    const filterByCategory = () => {
        products.some( (product) => {
            if(product.category == category) {
                setCategoryData(product) 
            }
        }
    )
    }
    return(
        <div className="container-item-detail">
            <ItemDetails data={categoryData}/>
        </div>
    )
}

export default ItemCategoryContainer