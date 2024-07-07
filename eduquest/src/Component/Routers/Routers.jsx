import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Navbar from '../Pages/Navbar/Navbar';
import Form from '../Pages/Form/Form';
import Nopage from '../Pages/Nopage/Nopage';


export default function Routers() {
    return (

        <>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/form' element={<Form />} />
                <Route path="*" element={<Nopage />} />
            </Routes>
        </>
    )
}
