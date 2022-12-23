import React, { useEffect, useState } from 'react'

export default function Put() {
    const [putData, setPutData] = useState({
        title: ''
    });

    useEffect(() =>{
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'aplication/json'},
            body: JSON.stringify({ title: 'React PUT method example'})
        };
        
        fetch('https://reqres.in/api/posts/1', requestOptions)
        .then(response => response.json())
        .then(data => setPutData(data))
    },[])

    return (
        <div>Put: {putData.title}</div>
    )
}
