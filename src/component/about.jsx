import React from 'react'

const About = () => {
    return (
        <>
        <div className="container mx-auto mt-8 mb-20" id="potret">
            <h1 className="text-3xl font-bold mb-4 ml-24 ">Potret</h1>
            <div className="grid ms:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-24 mr-24">
                {/* image */}
                <div className="bg-white rounded-lg shadow-lg">
                    <img src='./assets/image1.jpg' className='w-full h-64 object-cover zoomable' />
                    <div className="p-4">
                        <h2 className='text-lg font-bold mb-2 '>Image 1</h2>
                        <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum dignissimos impedit corporis esse nobis.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg">
                    <img src='' className='w-full h-64 object-cover zoomable' />
                    <div className="p-4">
                        <h2 className='text-lg font-bold mb-2 '>Image 1</h2>
                        <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum dignissimos impedit corporis esse nobis.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg">
                    <img src='' className='w-full h-64 object-cover zoomable' />
                    <div className="p-4">
                        <h2 className='text-lg font-bold mb-2 '>Image 1</h2>
                        <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum dignissimos impedit corporis esse nobis.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg">
                    <img src='' className='w-full h-64 object-cover zoomable' />
                    <div className="p-4">
                        <h2 className='text-lg font-bold mb-2 '>Image 1</h2>
                        <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum dignissimos impedit corporis esse nobis.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg">
                    <img src='' className='w-full h-64 object-cover zoomable' />
                    <div className="p-4">
                        <h2 className='text-lg font-bold mb-2 '>Image 1</h2>
                        <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum dignissimos impedit corporis esse nobis.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg">
                    <img src='' className='w-full h-64 object-cover zoomable' />
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