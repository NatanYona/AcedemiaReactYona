import React, {useState,useEffect} from 'react';
import './Cursos.scss';

function Cursos() {
	const [data, setData] = useState([]);
	const getData = () => {
        //fetch nuestro JSON donde tenemos el listado de cursos
		fetch('data.json', {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			})
			.then(function(response) {
				console.log(response)
				return response.json();
			})
			.then(function(myJson) {
				console.log(myJson);
				setData(myJson)
			});
	}
	useEffect(() => {
		getData()
	}, [])
	return (
        //render de los cursos
        <div className='cursosCards'>
            {
                data && data.length>0 && data.map((item)=>
                //por la cantidad de items dentro de nuestro JSON importado se imprimira = cantidad de items para asegurar que que se impriman todos sin dejar espacio vacio
                <div className='card p-3 m-2 cardCustom'>
                    <img src={item.img} className="card-img-top"></img>
                    <div className='card-body'>
                    <h5 className='card-title'>{item.titulo}</h5>
                    <p className='card-text'>{item.desc}
                    <span className='textoResaltado'>{item.resaltado}</span>
                    </p>
                    <a href='#' className='colorBtn btn'>Comprar</a>

                    </div>
                </div>
                )
            }

        </div>
    )}
        
export default Cursos;
