import { useState } from 'react'
import './Signup.css'

const Signup = ({setShowlogin}) => {
  const [currentState, setCurrentState] = useState('Login')

  return (
   
       <div className='login-popup'>
        <form className='login-popup-contanir'>
          <div className='login-popup-title'>
            <h2>{currentState}</h2>
            <button onClick={() =>setShowlogin(false)}>x</button>
          </div>
          <div className='login-popup-inputs'>
            {currentState==="Login"?<></>:<input type='text' placeholder='enter a name' required/>}
            <input type='text' placeholder='enter a name' required/>
             <input type='email' placeholder='enter a email' required/>
              <input type='password' placeholder='enter a password' required/>
          </div>
          <button>{currentState==="SignUp"?"Create Account":"Login"}</button> 
        </form>

       </div>

  
  )
}

export default Signup
