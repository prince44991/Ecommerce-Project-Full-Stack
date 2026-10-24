import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Explore from '../../components/Explore/Explore'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
const Home = () => {
  const [Catagory,setCatagory] = useState('All')
  return (
    <div>
      <Header/>
      <Explore Catagory={Catagory} setCatagory={setCatagory} />
      <FoodDisplay Catagory={Catagory}/>
    </div>
  )
}

export default Home
