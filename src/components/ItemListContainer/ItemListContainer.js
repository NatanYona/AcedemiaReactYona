import { useEffect, useState } from "react"
import products from '../../util/productos.mock'
import ItemList from "../ItemList/ItemList"
const ItemListContainer = ({section}) => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    })

    useEffect(() => {
        getProducts
            .then( (res) => { // Respuesta OK
                
                setListProducts(res)
            })
            .catch( (error) => { // Falla la respuesta
                console.log("la llama fallo")
            })
            .finally( () => {
            })
    }, [])




    return(
        <div className='cursosCards'>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}

export default ItemListContainer