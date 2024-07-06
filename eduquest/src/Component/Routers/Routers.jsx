import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Navbar from '../Pages/Navbar/Navbar';


export default function Routers() {
    return (

        <>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                {/* <Route path="*" element={<Nopage />} /> */}
            </Routes>
        </>
    )
}
