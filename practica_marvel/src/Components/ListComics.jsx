import React from 'react'

export default function ListComics(listComics) {
    const {result} = listComics;

    return (
        result.map((comic, index) => {
            return(
                <div className="col-md-4 mt-4" key={index}>
                    <div className="card">
                        <h5 className='card-header'> {comic.title} </h5>
                        <div className="card-body">
                            <img className='card-img-top' src='' alt="" />
                        </div>
                    </div>
                </div>
            )
        })
    )
}
