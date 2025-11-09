import './App.css'
import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import UserLayout from './componenets/Layout/UserLayout';
import AdminLayout from './componenets/Admin/AdminLayout'
import Home from './pages/Home'
import Login from './pages/Login';
import {Toaster} from "sonner"
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';
import ProductDetails from './componenets/Products/ProductDetails';
import Checkout from './componenets/Cart/Checkout';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import MyOrdersPage from './pages/MyOrdersPage';
import AdminHomePage from './pages/AdminHomePage';
import UserManagement from './componenets/Admin/UserManagement';
import ProductManagement from './componenets/Admin/ProductManagement';
import EditProductPage from './componenets/Admin/EditProductPage';
import OrderManagement from './componenets/Admin/OrderManagement';

const App = () => {
  return (

<BrowserRouter>
<Toaster position = "top-right"/>
<Routes>

   {/* User Layout with Nested Route */}
  <Route path='/' element={<UserLayout/>}>
  
    <Route index element={<Home/>}/>  
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="profile" element={<Profile/>}/>
    <Route path='collections/:collection' element={<CollectionPage/>}/>
    <Route path='products/:id' element={<ProductDetails/>}/>
    <Route path='checkout' element={<Checkout/>}/>
    <Route path='order-confirmation' element={<OrderConfirmationPage/>} />
    <Route path='order/:id' element={<OrderDetailsPage/>}/>
    <Route path='my-orders' element={<MyOrdersPage/>}/>

  </Route>

    {/* *Admin Layout and nested route */}
  <Route path='/admin' element={<AdminLayout/>}>

  <Route index element={<AdminHomePage/>}/>
  <Route path='users' element={<UserManagement/>}/>
  <Route path='products' element={<ProductManagement/>}/>
  <Route path='products/:id/edit' element={<EditProductPage/>} />
  <Route path='orders' element={<OrderManagement/>}/>
  </Route>

</Routes>
</BrowserRouter>
  );
}

export default App
