import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../widgels/navbar';
import Home from '../component/home';
import About from '../component/about';
import Contact from '../component/contact';
import Footer from '../widgels/footer';
const AccessRoute = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/Contact" element={<Contact />} />

            </Routes>
            <Footer />
        </Router>
    )
}

export default AccessRoute;