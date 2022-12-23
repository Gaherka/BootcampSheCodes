import React from "react";

export default function TarjetaPersonaje(props) {
    
    return (
        <div className="col-md-4">
            <div className="card mt-4">
                <div className="card-header">
                    {props.name}
                </div>
                <img src={props.image} alt="rick and morty" />
                <div className="card-body">
                    <p><b>Status: </b> {props.status}</p>
                    <p><b>Specie: </b> {props.species}</p>
                    <p><b>Gender: </b>{props.gender}</p>
                    <p><b>Origin: </b>{props.origin.name}</p> 
                    <p><b>Location: </b>{props.location.name}</p>
                    <p><b>Created: </b>{new Date(props.created).getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}