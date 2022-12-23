import React from 'react'

export default function Tarjeta({datos}) {
    return (
        <div className="col-md-4">
            <div className="card mt-4">
                <div className="card-header">
                    {datos.name}
                </div>
                <img src={datos.image} alt="rick and morty" />
                <div className="card-body">
                    <p><b>Status: </b> {datos.status}</p>
                    <p><b>Specie: </b> {datos.species}</p>
                    <p><b>Gender: </b>{datos.gender}</p>
                    <p><b>Origin: </b>{datos.origin.name}</p> 
                    <p><b>Location: </b>{datos.location.name}</p>
                    <p><b>Created: </b>{new Date(datos.created).getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}
