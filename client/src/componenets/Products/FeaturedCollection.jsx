import React from 'react'
import {Link} from "react-router-dom"
import featured from "../../assets/featured.webp"


const FeaturedCollection = () => {
  return (

    <section className='py-16 px-8'>

      {/* Main Container */}
      <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl'>

      {/* Left Content */}
      <div className='lg:w-1/2 p-8 text-center lg:text-left'>

      <h2 className='text-lg font-semibold text-gray-700 mb-2'>Comfort and Style</h2>

      <h2 className='text-4xl lg:text-5xl font-bold mb-6'>Apparel made for your everyday life</h2>

      <p className='text-lg text-gray-600 mb-6'>Discover high-quality comfortable clothing that effortlessly blends fashion and function. Designed to make you look and feel great every day.</p>

      <Link to="/collections/all"
      className='bg-black text-white px-6
      py-3 rounded-lg text-lg hover:bg-gray-800'
      >Shop Now</Link>

      </div>

      {/* Right Content, image part */}
      <div className='lg:w-1/2'>
      <img src={featured} alt="Featured Collection" 
      className='w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl' />
      </div>

      </div>

    </section>

    // <div className='flex gap-6 justify-center p-6'>

    //     {/* Left part and right part will be cover in it */}
    //     <div className='rounded-2xl h-[38rem] w-[95%] flex flex-cols border-2 border-pink-700 0 justify-between'>
        
    //     {/* Left part, text part comes here */}
    //     <div className='flex flex-cols items-center justify-between border-2 w-[30rem] border-green-900'>

    //     <div className='border border-red-500 h-[22rem] '>

    //     <p className='font-semibold text-[1.1rem]'>Comfort and Style</p>

    //      <h2 className=''>Apparel made for your everyday life</h2>
    //         <p className=''>Discover high-quality comfortable clothing that effortlessly blends fashion and function. 
    //             Designed to make you look and feel great every day.</p>

    //         <button className='border rounded-2xl text-white bg-gray-950'>Shop Now</button>

    //     </div>
            

    //     </div>

    //     {/* Right part, image part comes here */}
    //     <div className='border w-fit'>
    //         <img className='w-full h-full overflow-hidden rounded-2xl'
    //          src="https://picsum.photos/500/500?random=20" alt="imageFrompicsum" />

    //     </div>

    //     </div>

    // </div>
  )
}

export default FeaturedCollection