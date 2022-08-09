import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetails/ItemDetails";
import { productosRaw } from "../../util/productos.mock";

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState({})
    const [id] = useParams()
    let flag = true;
    const traerProductos = (time, task) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (flag) {
                    resolve(task)
                } else {
                    reject('Error')
                }
            }, time)
        })
    }




    useEffect(() => {
        traerProductos(1000, productosRaw.find(item => item.id === parseInt(id)))
            .then((result) => {
                setProductos(result)
            }
            )
            .catch(error => {
                console.log(error)
            }
            )
    }
        , [id])
    return (
        <ItemDetail product={productos}/>
    )

}

export default ItemDetailContainer;
