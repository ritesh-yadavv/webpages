import React from 'react'
import Rama from "../assets/image1.jpg";
import Rama1 from "../assets/image2.jpg";
import Rama2 from "../assets/image3.jpg";
import Rama3 from "../assets/image4.jpg";
import Rama4 from "../assets/image5.jpg";
import Rama5 from "../assets/image6.jpg";

const About = () => {

const zoomableImages =document.querySelectorAll(".zoomable");

zoomableImages.forEach(image => {
    image.addEventListener('click',()=>{
        const zoomedContainer = document.createElement('div');
        zoomedContainer.classList.add('zoomed');

    })
})

    return (
        <>
        <div className="container mx-auto mt-8 mb-20"  id="potret">
            <h1 className="text-3xl font-bold mb-4 ml-24 ">Gallery</h1>
            <div className="grid ms:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-24 mr-24 gap-1 ">
                {/* image */}
                <div className="bg-white rounded-lg shadow-lg bg-cover ">
                    <img src={Rama} className='w-full h-64 object-cover  zoomable ' />
                    <div className="p-4">
                        <h2 className='text-lg font-bold mb-2 '>Image 1</h2>
                        <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum dignissimos impedit corporis esse nobis.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg ">
                    <img src={Rama1} className='w-full h-64 object-cover  zoomable' />
                    <div className="p-4">
                        <h2 className='text-lg font-bold mb-2 '>Image 1</h2>
                        <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum dignissimos impedit corporis esse nobis.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg">
                    <img src={Rama2} className='w-full h-64 object-cover zoomable' />
                    <div className="p-4">
                        <h2 className='text-lg font-bold mb-2 '>Image 1</h2>
                        <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum dignissimos impedit corporis esse nobis.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg">
                    <img src={Rama3} className='w-full h-64 object-cover zoomable' />
                    <div className="p-4">
                        <h2 className='text-lg font-bold mb-2 '>Image 1</h2>
                        <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum dignissimos impedit corporis esse nobis.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg ">
                    <img src={Rama4} className='w-full h-64 object-cover  zoomable'  />
                    <div className="p-4">
                        <h2 className='text-lg font-bold mb-2 '>Image 1</h2>
                        <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum dignissimos impedit corporis esse nobis.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg">
                    <img src={Rama5} className='w-full h-64 object-cover zoomable' />
                    <div className="p-4">
                        <h2 className='text-lg font-bold mb-2 '>Image 1</h2>
                        <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum dignissimos impedit corporis esse nobis.</p>
                    </div>
                </div>

                

            </div>

        </div>

        </>
    )
}

export default About;