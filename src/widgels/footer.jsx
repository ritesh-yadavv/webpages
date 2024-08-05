import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
<footer class="bg-gray-800 text-white py-6 px-3 mt-96">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <ul class="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                <li><a href="#" class="text-gray-400 hover:text-white">Contact</a></li>
                <li class="mx-4"><a href="#" class="text-gray-400 hover:text-white">Gallery as</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white">Terms of Use</a></li>
            </ul>
        </div>
    </div>
</footer>
    </>
  )
}

export default Footer;