import React from 'react'
import TopBar from '../Layout/TopBar'
import Navbar from './Navbar'
import CartDrawer from '../Layout/CartDrawer'

const Header = () => {
  return (
<>
    <header className='border-b border-gray-200'>
    {/* Top Bar */}
       <TopBar/>

    {/* Nav Bar */}
        <Navbar/>

    {/* Cart Drawer */}
    <CartDrawer/>
    
    </header>
</>
)
}

export default Header