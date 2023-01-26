import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from '../Pages/Home'
import Comics from '../Pages/Comics'
import Series from '../Pages/Series'

export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                        <Link to='/comics'>Comics</Link>
                        </li>
                        <li>
                        <Link to='/series'>Series</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/comics' element={<Comics />}></Route>
                <Route path='/series' element={<Series />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
