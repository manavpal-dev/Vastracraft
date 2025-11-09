import React from 'react'
import { Link } from 'react-router-dom'
import {TbBrandMeta} from 'react-icons/tb'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import {FiPhoneCall} from 'react-icons/fi'

// In this section, all the footer section comes here, this is last section of front page

const Footer = () => {
  return (
    <footer className='border-t py-12 '>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-6'>
            <div>
                <h3 className='text-lg text-gray-500 mb-4'>Newsletter</h3>
         <p className='text-gray-500 mb-4'>
                    Be the first to hear a about new products, exclusive events, and online offers.
                </p>

        <p className='font-medium text-sm text-gray-600 mb-6'>Sing up and get 10% off on your first order.</p>

                {/* NewsLetter form */}
                <form className='flex'>
                    <input type="email"
                    placeholder='Enter your email'
                    className='p-3 w-full text-sm border-t border-b border-l border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all'
                    required />

                    <button type='submit'
                     className='bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all'>Subscribe</button>
                </form>
            </div>

            {/* shop links */}
            <div>
                <h3 className='text-lg text-gray-800'>Shop</h3>
                <ul className='space-y-2 text-gray-600'>
                    <li>
                        <Link to="#" className='hover:text-gray-500 transition-colors'>Men's Top Wear</Link>
                    </li>

                    <li>
                        <Link to="#" className='hover:text-gray-500 transition-colors'>Women's Top Wear</Link>
                    </li>

                    <li>
                        <Link to="#" className='hover:text-gray-500 transition-colors'>Men's Bottom Wear</Link>
                    </li>

                    <li>
                        <Link to="#" className='hover:text-gray-500 transition-colors'>Women's Bottom Wear</Link>
                    </li>

                </ul>
            </div>

            {/* Support Links */}

            <div>
                <h3 className='text-lg text-gray-800'>Support</h3>
                <ul className='space-y-2 text-gray-600'>
                    <li>
                        <Link to="#" className='hover:text-gray-500 transition-colors'>Contact Us</Link>
                    </li>

                    <li>
                        <Link to="#" className='hover:text-gray-500 transition-colors'>About Us</Link>
                    </li>

                    <li>
                        <Link to="#" className='hover:text-gray-500 transition-colors'>FAQs</Link>
                    </li>

                    <li>
                        <Link to="#" className='hover:text-gray-500 transition-colors'>Features</Link>
                    </li>

                </ul>
            </div>

            {/* Follow us  */}

            <div>
                <h3 className='text-lg text-gray-800 mb-4'>Follow Us</h3>
            <div className='flex items-center space-x-4 mb-6'>

             {/* meta icon through using react icon library */}
                <a href="https://www.facebook.com"
                 target='_blank'
                 rel='noopener  noreferrer'
                 className='hover:text-gray-500'>
                    <TbBrandMeta/> 
                 </a>

                {/* Instagram logo through using react-icons library */}
                 <a href="https://www.facebook.com"
                 target='_blank'
                 rel='noopener  noreferrer'
                 className='hover:text-gray-500'>
                    <IoLogoInstagram/> 
                 </a>

                    {/* Twitter logo from using react-icon library */}
                 <a href="https://www.facebook.com"
                 target='_blank'
                 rel='noopener  noreferrer'
                 className='hover:text-gray-500'>
                    <RiTwitterXLine className='h-4 w-4'/> 
                 </a>

            </div>

                <p className='text-gray-500'>Call Us</p>
                <p>
                    {/* phone icon from using react-icons library */}
                    <FiPhoneCall className='inline-block mr-2'/>
                    +91 9899698835
                </p>
            </div>

        </div>

        {/* Footer Bottom */}
        <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
            <p className='text-gray-500 text-sm  tracking-tighter text-center'>2025, CompileTab. All Rights Reserved.</p>
        </div>

    </footer>
  )
}

export default Footer