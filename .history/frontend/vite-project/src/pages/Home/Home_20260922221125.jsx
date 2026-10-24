import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Explore from '../../components/Explore/Explore'
const Home = () => {
  const [Catagory,setCatagory] = useState('All')
  return (
    <div>
      <Header/>
      <Explore Catagory={Catagory} setCatagory={setCatagory} />
    </div>
  )
}

export default Home
