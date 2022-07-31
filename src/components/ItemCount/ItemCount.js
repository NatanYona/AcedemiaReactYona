import { useState,useEffect } from "react"


const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1)
    const addNumber = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }
    const removeNumber = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }
    useEffect(() => {
        console.log("Actualizacion")
    }, [contador])
    return (
        <>
            <button onClick={addNumber} className='colorBtn btn'>Comprar</button>
            <div className='countProd'>
                <p>{contador}</p>
                <button onClick={removeNumber}>-</button>
            </div>
        </>
    )
}
export default ItemCount