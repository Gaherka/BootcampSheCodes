import React, { useEffect, useState } from 'react'

export default function Post() {
    const [postData, setPostData] = useState({
        id: ''
    });
    
    useEffect(() => {
        
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'aplication/json'},
            body: JSON.stringify({ title: 'React POST method example'})
        };
        
        fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json())
        .then(data => setPostData(data))
    },[])

    return (
        <div>Post: {postData.id}</div>
    )
}
