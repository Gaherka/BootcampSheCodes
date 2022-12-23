import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Personajes from './Personajes'
import ListaPersonajes2 from './_axios/ListaPersonajes2'

export default function Header() {
    
    return (
        <BrowserRouter>
            <header className='header-componente'>
                <h1>Lista de Personajes Rick and Morty</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className='menu'>Home</Link>    
                        </li>
                        <li>
                            <Link to="/Lista1" className='menu'>Lista 1</Link> 
                        </li>
                        <li>
                            <Link to="/Lista2" className='menu'>Lista 2</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            {

            }
            <Routes>
                <Route path='/' />
                <Route path='/Lista1' element={<Personajes />} />
                <Route path='/Lista2' element={<ListaPersonajes2 />} />
            </Routes>
        </BrowserRouter>
        
    )
}