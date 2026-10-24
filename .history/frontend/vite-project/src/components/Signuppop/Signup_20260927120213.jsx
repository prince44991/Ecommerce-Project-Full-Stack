import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Signup = ({setShowlogin}) => {
  const [currentState,setcurrentState] = useState("SignUp")
  return (
    <div>
      <h2>login</h2>
      <button onClick={() => setShowlogin(false)}>*</button>
    </div>
  )
}

export default Signup
