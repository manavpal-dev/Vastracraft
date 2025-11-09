import heroImg from "../../assets/rabbit-hero.webp"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (

    // this image is our first image which is showing on the screen
    
    <section className='relative'>
        <img src={heroImg} alt="VastraCraft" className='w-full sm:h-[220px] md:h-[600px] lg:h-[625px] object-cover'/>
   
    <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-center text-white p-6'>
            <h1 className='text-4xl md:text-9xl font-bold tracking-tighter uppercase hover:text-red-400 duration-1000 transition-all mb-4 '>vacation <br />ready</h1>

            <p className='text-sm tracking-tighter md:text-lg mb-6'>Explore our vacation-ready outfits with <br className="lg:hidden"/> fast worlwide shipping.</p>

            <Link to="/collections/all" className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg hover:bg-yellow-400 transition-all duration-400">Shop Now</Link>
        </div>
    </div>
   
    </section>

  )
}

export default Hero