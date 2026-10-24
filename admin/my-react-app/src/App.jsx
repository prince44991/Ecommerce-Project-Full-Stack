import Navbar from './components/Navbar/Navbar.jsx'
import Sliderbar from './components/Sliderbar/Sliderbar.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from './pages/Add/Add.jsx'
import Order from './pages/Order/Order.jsx'
import List from './pages/List/List.jsx'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
    <Navbar />
    <hr/>
    <Sliderbar/>
    <Routes>
      <Route path='/Additem' element={<Add/>} />
      <Route path='/Listitem' element={<List/>} />
      <Route path='/Orders' element={<Order/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
