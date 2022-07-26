import { useState,useEffect } from "react"


const ItemCount = () => {
    const [contador, setContador] = useState(0)
    const addNumber = () => {
        if(contador < 2){
            setContador(contador + 1)
        }
    }
    const removeNumber = () => {
        if(contador > 0){
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