import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
<nav className='bg-[#333] text-white p-4 flex justify-between items-center'>
<div className='text-white no-underline font-bold text-2xl'>
                <Link to = '/' className='no-underline'>NavGurukul 🌱</Link>
            </div>
            <ul className='list-none m-0 p-0 flex'>
                <li className='ml-6'><Link to = "/" className='text-white no-underline hover:text-gray-300 transition-colors duration-300'>Home</Link></li>
                <li className='ml-6'><Link to = "/about" className='text-white no-underline hover:text-gray-300 transition-colors duration-300'>About</Link></li>
                <li className='ml-6'><Link to = "/council">Council</Link></li>
                <li className='ml-6'><Link to = "/blog" className='text-white no-underline hover:text-gray-300 transition-colors duration-300'>Blog</Link></li>
                <li className='ml-6'><Link to = "/enroll" className='text-white no-underline hover:text-gray-300 transition-colors duration-300'>Enroll</Link></li>
                <li className='ml-6'><Link to = "/contact" className='text-white no-underline hover:text-gray-300 transition-colors duration-300'>Contact</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;



