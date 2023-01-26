import { useState, useEffect } from "react";

export default function useFetch(url) {
        //Creando el estado para la informacion de la api de Marvel

        const [result, setResult] = useState([]);

        useEffect(() => {
            (async () => {
                try{
                    const respuesta = await fetch(url);
                    const datos = await respuesta.json();
                    setResult(datos.data.results);
                } catch(error){
                    console.log(error);
                }
            })();
        }, [url])

        return {result}
}
