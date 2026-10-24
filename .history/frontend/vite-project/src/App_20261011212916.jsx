import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import {Route, Routes} from 'react-router-dom'
import Signup from './components/Signuppop/Signup'
import VerifyOrder from './pages/VerifyOrder/VerifyOrder'

function App() {
 const [Showlogin,setShowlogin] = useState(false)
 

  return (
    <>
    {Showlogin?<Signup setShowlogin={setShowlogin}/>:<></>}
    <Navbar setShowlogin={setShowlogin}/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
      <Route path='/myorder' element={<VerifyOrder/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
