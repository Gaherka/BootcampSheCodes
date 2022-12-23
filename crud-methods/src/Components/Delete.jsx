import React, { useEffect } from 'react'

export default function Delete() {
    useEffect(() => {
        fetch('https://reqres.in/api/posts/1',{method: 'DELETE'})
        .then(() => console.log('Delete successful'))
        .catch((e) => console.log(e))
    },[])

    return (
        <div>Delete</div>
    )
}
