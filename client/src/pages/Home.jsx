import React from 'react'
import Hero from '../componenets/Layout/Hero'
import GenderCollectionSection from '../componenets/Products/GenderCollectionSection'
import NewArrivals from '../componenets/Products/NewArrivals'
import ProductDetails from '../componenets/Products/ProductDetails'
import ProductGrid from '../componenets/Products/ProductGrid'
import FeaturedCollection from '../componenets/Products/FeaturedCollection'
import FeaturesSection from '../componenets/Products/FeaturesSection'


const placeholderProducts = [ // arrays of object

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

{
  _id:5,
  name:"Product 5",
  price:150,
  images:[{
   url:"https://picsum.photos/500/500?random=16",
  }]
},

{
  _id:6,
  name:"Product 6",
  price:100,
  images:[{
   url:"https://picsum.photos/500/500?random=17",
  }]
},

{
  _id:7,
  name:"Product 7",
  price:200,
  images:[{
   url:"https://picsum.photos/500/500?random=18",
  }]
},

{
  _id:8,
  name:"Product 8",
  price:90,
  images:[{
   url:"https://picsum.photos/500/500?random=19",
  }]
},



]

const Home = () => {

  return (
    <div>
      {/* Hero section that is 1st image of the screen */}
        <Hero/>

    {/* gender collection section that is 2nd image of the screen */}
    <GenderCollectionSection/>

    {/** in this section, newArrivals section comes, example, we can scroll images */}
    <NewArrivals/>

    {/* Best Seller component */}
    <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
    <ProductDetails/>
    
    <div className='container mx-auto'>     
      <h2 className='text-3xl text-center font-bold mb-4'>
        Top Wears for Women
      </h2>

      <ProductGrid products={placeholderProducts}/>
    </div>

    {/* FeaturedCollection component */}
          <FeaturedCollection/>

    {/* FeaturesSection component */}
    <FeaturesSection/>


    </div>
  )
}

export default Home