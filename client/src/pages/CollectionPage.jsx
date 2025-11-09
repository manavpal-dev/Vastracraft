import React, { useEffect, useState,useRef } from 'react'
import {FaFilter} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
import FilterSidebar from '../componenets/Products/FilterSidebar';
import SortOptions from '../componenets/Products/SortOptions';
import ProductGrid from '../componenets/Products/ProductGrid';

const CollectionPage = () => {
    // useState hook
    const [products, setProducts] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    //useRef
    const sidebarRef = useRef(null);

    //function for togglesidebar
    const toggleSidebar = () =>{
      setIsSidebarOpen(!isSidebarOpen); //it means true
    };

    const handleClickOutside = (e) =>{

      // closed sidebar if clicked outside
      if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
        setIsSidebarOpen(false);
      }
    };

    //useEffect
    useEffect(()=>{
      //Add event listner for click
      document.addEventListener("mousedown",handleClickOutside);
     
      return () => {
        //clean event listner
        document.removeEventListener("mousedown",handleClickOutside);
      };

    },[]);

  
    //useEffect hook
    useEffect(()=>{
        setTimeout(()=>{
            const fetchedProducts = [ // arrays of object

                {
                  _id:1,
                  name:"Product 1",
                  price:150,
                  images:[{
                   url:"https://picsum.photos/500/500?random=2",
                  }]
              },
              
              {
                  _id:2,
                  name:"Product 2",
                  price:100,
                  images:[{
                   url:"https://picsum.photos/500/500?random=3",
                  }]
              },
              
              {
                  _id:3,
                  name:"Product 3",
                  price:200,
                  images:[{
                   url:"https://picsum.photos/500/500?random=4",
                  }]
              },
              
              {
                  _id:4,
                  name:"Product 4",
                  price:90,
                  images:[{
                   url:"https://picsum.photos/500/500?random=1",
                  }]
              },
              
              {
                _id:5,
                name:"Product 5",
                price:150,
                images:[{
                 url:"https://picsum.photos/500/500?random=9",
                }]
              },
              
              {
                _id:6,
                name:"Product 6",
                price:100,
                images:[{
                 url:"https://picsum.photos/500/500?random=8",
                }]
              },
              
              {
                _id:7,
                name:"Product 7",
                price:200,
                images:[{
                 url:"https://picsum.photos/500/500?random=11",
                }]
              },
              
              {
                _id:8,
                name:"Product 8",
                price:90,
                images:[{
                 url:"https://picsum.photos/500/500?random=12",
                }]
              },
              
              ];// objects of array -> end here
              setProducts(fetchedProducts);

        },1000);
    },[])

  return (
    <div className='flex flex-col lg:flex-row'>
        
        {/* Mobile Filter button */}
        <button className='lg:hidden border p-2 flex justify-center items-center'
        onClick={()=>toggleSidebar()}>
        <FaFilter className='mr-2 cursor-pointer'/>Filters
        </button>

        {/* Filter Sidebar --> it's a component */}
        <div ref={sidebarRef} className={`${isSidebarOpen ? "translate-x-0":"-translate-x-full"} fixed inset-y-0 x-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0 `}>
        <div className='flex'>
          <FilterSidebar className=""/> 
           <IoMdClose onClick={()=>toggleSidebar(false)}
            className='lg:hidden  h-8 w-12 mt-3 mr-1 font-bold cursor-pointer text-gray-800'/>
          </div>      
        </div>

        <div className='flex-grow p-4'>
          <h2 className='text-2xl uppercase mb-4'>All Collections</h2>

          {/* Sort Option */}
          <SortOptions/>

          {/* Product Grid */}
          <ProductGrid products={products}/>
        </div>

    </div>
  )
}

export default CollectionPage