import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from '../gallery/contact';
import Gallery from '../gallery/gallery';
import Home from '../gallery/home';
import About from '../gallery/about';

const Index = () => {
    return (
        <>
    
            <BrowserRouter>
            <Home/>
                <Routes>
                
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Index;