import React, {useState, useEffect} from "react";
/*import TarjetaPersonaje from './TarjetaPersonaje'*/
import Tarjeta from "./Tarjeta";


export default function Personajes() {
    const [personajes, setPersonajes] = useState([]);

    const obtenerPersonajes = async() => {
        let resultado = await fetch('https://rickandmortyapi.com/api/character');
        let datos = await resultado.json();
        //console.log(datos);

        setPersonajes(datos.results);
    }

    useEffect(() => {
        obtenerPersonajes();
    },[])

    return(
        <div className="container">
            <div className="row">
                {
                    personajes.map((propiedades, indice) => {
                        /* return <TarjetaPersonaje key={indice} {...personaje} />*/

                        return <Tarjeta key={indice} datos={propiedades} />
                    })
                }
            </div>
        </div>
    )
}