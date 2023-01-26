import React from 'react'
import useFetch from '../hooks/useFetch'
import ListComics from '../Components/ListComics'

export default function Comics() {
    //Creando una variable para la url de la informacion de los comics
    const listComics = useFetch('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=e8c7a11d9d4b924c2965226f2ffeff3a&hash=cb96ba13ea5acceb3c58e9b0894359d6')

    return (
        <ListComics />
    )
}
