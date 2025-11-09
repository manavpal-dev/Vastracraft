import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'
import Home from '../../pages/Home'

const UserLayout = () => {
  return (
    <>
    {/* Header */}
    <Header/>


    {/* Main content */}
    <main>
      {/* This help to render the home page which is hero section page, which contains middle images */}
      <Outlet/>

      {/* <Home/> * second way to render home page, but it is not a good practise */}

    </main>


    {/* Footer */}
    <Footer/>

    </>
  )
}

export default UserLayout