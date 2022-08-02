import { useEffect, useState } from "react"
import products from '../../util/productos.mock'
import ItemDetails from "../ItemDetails/ItemDetails"



const ItemDetailContainer = ({section}) => {

    const [listDetails, setListDetails] = useState([])
    const getDetails = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    })

    useEffect(() => {
        getDetails
            .then( (res) => {
                setListDetails(res)
            })
            .catch( (error) => { 
                console.log("error")
            })
            .finally( () => {
            })
    }, [])

{
        return(
            <div className="cursosCards">
                <ItemDetails detailsProducts={listDetails}/>
            </div>
        )
    }

}

export default ItemDetailContainer