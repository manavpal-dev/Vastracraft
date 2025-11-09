import React, { useEffect, useState } from 'react'
import {toast} from "sonner"
import ProductGrid from './ProductGrid';
// toast library is for the notification shows on the screen

const selectedProduct = {
    name:"Stylish Jacket",
    price:290,
    originalPrice:200,
    description:"This is a Stylish Jacket perfect for any occasion",
    brand:"FashionBrand",
    material:"Leather",
    sizes:["S","M","L","XL"], // array
    colors:["Red","green"], // array
    images:[ // arrays of object
        {
            url:"https://picsum.photos/500/500?random=10",
            altText:"Stylish Jacket 1",
        },
        {
           url:"https://picsum.photos/500/500?random=11",
           altText:"Stylish Jacket 2",
        },
    ],
};

const similarProducts = [ //array []

    {
        _id:1,
        name:"Product 1",
        price:150,
        images:[{
         url:"https://picsum.photos/500/500?random=6",
        }]
    },

    {
        _id:2,
        name:"Product 2",
        price:100,
        images:[{
         url:"https://picsum.photos/500/500?random=7",
        }]
    },

    {
        _id:3,
        name:"Product 3",
        price:200,
        images:[{
         url:"https://picsum.photos/500/500?random=8",
        }]
    },

    {
        _id:4,
        name:"Product 4",
        price:90,
        images:[{
         url:"https://picsum.photos/500/500?random=9",
        }]
    },

]

const ProductDetails = () => {

    //use state hook used
    const [mainImage, setMainImage] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [isButton, setIsButton] = useState(false);

    //useEffect hook used
    useEffect(()=> {
        if(selectedProduct?.images?.length > 0){
            setMainImage(selectedProduct.images[0].url);
        }
    },[selectedProduct]);

    // functions related handling qunatiy of product
    const handleQuantityChange = () =>{
        if(quantity > 1){
            setQuantity(quantity-1);
        }
    }

    // function related to handling cart details
    const handleAddToCart = () =>{
        if(!selectedSize || !selectedColor){
            toast.error("Please select a size and color before adding to cart.",{
            
                duration:1000,
            });
            return;            
        }
        setIsButton(true);

        setTimeout(()=>{
            toast.success("Product added to cart",{
                duration:1000,
            });

            setIsButton(false);
        },500)
    }


  return (
    <div className='p-6'>

        <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg'>
           
            <div className='flex flex-col md:flex-row'>
        
               {/* Left Thumbnails or small two images side or desktop view*/}
        <div className='hidden md:flex flex-col space-y-4 mr-6'>
            {selectedProduct.images.map((images,index)=>(
                <img
                key={index}
                src={images.url} 
                alt={images.altText || `Thumbnail ${index}`} 
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === images.url ? "border-black":"border-white"}`}
                onClick={()=>setMainImage(images.url)}/>
            ))}
        </div>

            {/* Main Image or big one image */}
            <div className='md:w-1/2'>
            <div className='mb-4'>
            <img src={mainImage} 
            alt="Main Product" 
            className='w-full h-auto object-cover rounded-lg'/>
            </div>
            </div>

            {/* Mobile Thumbnail it only shows on mobile view*/}
            <div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4 '>
            {selectedProduct.images.map((images,index)=>(
                <img
                key={index}
                src={images.url} 
                alt={images.altText || `Thumbnail ${index}`} 
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === images.url ? "border-black":"border-white"}`}
                onClick={()=>setMainImage(images.url)}/>
            ))}
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 md:ml-10">
            <h1 className='text-2xl md:text-3xl font-semibold
            mb-2'>{selectedProduct.name}</h1>

            <p className='text-lg text-gray-600 mb-1 line-through'>{selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}</p>

            <p className='text-xl text-gray-500 mb-2'>
                ${selectedProduct.price} </p>

            <p className='text-gray-600 mb-4'>{selectedProduct.description}</p>

            <div className='mb-4'>
                <p className='text-gray-700'>Color:</p>
                <div className='flex gap-2 mt-2'>{selectedProduct.colors.map((color)=>(
                    <button key={color} 
                    onClick={()=>setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-4 border-black" : "border-gray-300"}`}
                    style={{backgroundColor:color.toLocaleLowerCase(),
                    filter:"bright"
                    }}></button>
                ))}
                </div>
            </div>

                {/* Size section code */}
                <div className='mb-4'>
                    <p className='text-gray-700'>Size:</p>
                    <div className='flex gap-2 mt-2'>
                        {selectedProduct.sizes.map((size)=>(
                            <button key={size}
                            onClick={()=>setSelectedSize(size)}
                            className={`px-4 py-2 rounded border  transition-all
                               duration-300 ${selectedSize === size ? "bg-black text-white " : "hover:font-semibold"}`}>{size}</button>
                        ))}
                    </div>
                </div>
                        
                    {/* Quantity section code */}
                <div className='mb-6'>
                    <p className='text-gray-700'>Quantity:</p>
                    <div className='flex items-center space-x-4 mt-2'>
                        <button className='px-2 py-1 bg-gray-200 rounded text-lg'
                        onClick={()=>handleQuantityChange()}
                        >-</button>

                        <span className='text-lg'>{quantity}</span>
                    

                        <button className='px-2 py-1 bg-gray-200 rounded text-lg'
                        onClick={()=>setQuantity(quantity+1)}>+</button>
                    </div>
                </div>

                {/* Cart add section code */}
                <button className={`bg-black text-white py-2 px-6 rounded w-full mb-4 uppercase font-semibold hover:bg-red-950 transition-all duration-300 ${isButton ? "cursor-not-allowed opacity-50":"hover:bg-gray-900"}`}
                onClick={handleAddToCart }
                disabled={isButton}>{isButton ? "Adding.." :"Add to cart"}</button>

                <div className='mt-10 text-gray-700'>

                    <h3 className='text-xl font-bold 
                    mb-4'>Characteristics:</h3>

                    <table className='w-full text-left text-sm text-gray-600'>
                        <tbody>
                            <tr>
                                <td className='py-1'>Brand</td>
                                <td className='py-1'>{selectedProduct.brand}</td>
                            </tr>

                            <tr>
                                <td className='py-1'>Material</td>
                                <td className='py-1'>{selectedProduct.material}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            </div>

        {/* ProductGrid component starts from here */}
            <div className='mt-20'>
                <h2 className='text-2xl text-center font-medium mb-4'>You May Alos Like</h2>
                
                <ProductGrid
                 products = {similarProducts}/>

            </div>

        </div>

    </div>
  )
}

export default ProductDetails