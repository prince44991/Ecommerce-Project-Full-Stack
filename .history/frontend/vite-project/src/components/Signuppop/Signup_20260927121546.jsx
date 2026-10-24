import { useState } from 'react'
import './Signup.css'

const Signup = ({setShowlogin}) => {
  const [currentState, setCurrentState] = useState('SignUp')

  return (
   
       <div>
              <h2>{currentState}</h2>
              <button onClick={() => setShowlogin(false)}>*</button>
       </div>

  
  )
}

export default Signup
