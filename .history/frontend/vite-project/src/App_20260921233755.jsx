import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import {Route, Routes} from 'react-router-dom'

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
    </Routes>
    </>
  )
}

export default App
