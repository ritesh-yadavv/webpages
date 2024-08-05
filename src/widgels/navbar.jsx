import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";

const Navbar = () => {
   const[home,setHome]=useState("home");
//    const[about,setAbout]=useState();
//    const[contact,setContact]=useState();

    const handleChnageHome=()=>{
     setHome("home");
    //  setAbout("");
    //  setContact("");
    }

    const handleChangeAbout=()=>{
        // setAbout("about");
        setHome("about");
        // setContact("");
    }

    const handleChangeContact=()=>{
        // setContact("contact");
        // setAbout("");
        setHome("contact");
    }

    



    return (
        <>
            <nav className="bg-slate-900 border-gray-200 py-2.5 dark:bg-gray-900  text-white">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <Link to="/" className="flex items-center">
                        <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Gallery</span>
                    </Link>

                    <div className="flex items-center lg:order-2">
                        <div className="hidden mt-2 mr-4 sm:inline-block">
                            <span></span>
                        </div>
                    </div>
                    <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li onClick={handleChnageHome}>
                                <Link to="/"
                                    className={`block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700  ${home==="home"?"bg-orange-200 " :null}`}
                                    >Home</Link>
                            </li>
                            <li onClick={handleChangeAbout}>
                                <Link to="/about"
                                    className={`block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${home==="about" ? "bg-amber-300" :null}`}
                                    >About</Link>
                            </li>
                            <li onClick={handleChangeContact} >
                                <Link to="/contact"
                                    className={`block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${home==="contact" ? "bg-red-400" :null}`} 
                                    >Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>




        </>
    )
}

export default Navbar;