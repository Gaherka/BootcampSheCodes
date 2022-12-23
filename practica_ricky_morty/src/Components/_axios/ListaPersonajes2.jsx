import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ListaPersonajes2() {
    /**Creando el estado */
    const [character, setCharacter] = useState([]);

    /**Metodo para obtener la informacion de la siguiente lista de Rick & Morty*/
    const obtenerPersonajes2 = () => {
        /** get, post, put, delete */
        /**
         * obtener informacion = axios.get()
         * enviar informacion = axios.post()
         * actualizar informacion = axios.put()
         * eliminar informacio = axios.delete()
         */

        axios.get("https://rickandmortyapi.com/api/character?page=2")
        .then((response) => {
            console.log(response.data.results);
            /** enviando informacion de la api al estado */
            setCharacter(response.data.results)

        }).catch((error) => {
            console.log(error);
        })
    }

    /** utilizando el hook para renderizar el metodo de la api*/
    useEffect(() => {
        obtenerPersonajes2();
    })

    return (
        <div className="container">
            <div className="row">
                {
                    character.map((propiedades, indice) => {
                        return (
                            <div className='col-md-4' key={indice}>
                                <div className="card mt-4">
                                    <div className="card-header">
                                        {propiedades.name}
                                    </div>
                                    <img src={propiedades.image} alt="ricky and morty" />
                                    <div className="card-body">
                                        <p><b>Status: </b> {propiedades.status}</p>
                                        <p><b>Specie: </b> {propiedades.species}</p>
                                        <p><b>Gender: </b>{propiedades.gender}</p>
                                        <p><b>Origin: </b>{propiedades.origin.name}</p>
                                        <p><b>Location: </b> {propiedades.location.name}</p>
                                        <p><b>Created: </b> {new Date(propiedades.created).getFullYear()}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }   
            </div> 
        </div>
    )
}
