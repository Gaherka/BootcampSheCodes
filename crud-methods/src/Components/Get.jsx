import React, { useState, useEffect } from 'react'

export default function Get() {
    const[ReactPackages, setReactPackages] = useState();

    useEffect(() =>{
        fetch('https://api.npms.io/v2/search?q=react')
        .then(response => response.json())
        .then(data => setReactPackages(data.total))
    },[])

    return (
        <div>Get: {ReactPackages}</div>
    )
}
