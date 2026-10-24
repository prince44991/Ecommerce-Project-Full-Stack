import { useContext, useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { StoreContext } from '../../context/StoreContext'
const Signup = ({setShowlogin}) => {
  const [currentState, setCurrentState] = useState('Login')
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })
  const [hello,setHello] = useState("")
  // const {url,setToken} = useContext(StoreContext)
  const url = "http://localhost:8001"

  const handlChange = (e) => {
    const name = e.target.name;
    const value = e.target.value
  setData({...data,[name]:value})
  }

  


  const onLogin = async (event) => {
    event.preventDefault()
    let newurl = url
    if(currentState === "Login"){
      newurl += '/user/login'
    }else{
      newurl += '/user/signup'
    }

    const response = await axios.post(newurl,data)
    
    if(response.data.scuess){
      setHello(response.data.token)
      localStorage.getItem("token",response.data.token)
      setShowlogin(false)
      console.log("login ok")
    }else{
      alert(response.data.message)
      console.log("login error")
    }
  }
  return (
   
       <div className='login-popup'>
        <form className='login-popup-contanir' onSubmit={onLogin}>
          <div className='login-popup-title'>
            <h2>{currentState}</h2>
            <button onClick={() =>setShowlogin(false)}>x</button>
          </div>
          <div className='login-popup-inputs'>
            {currentState==="Login"?<></>:<input type='text' placeholder='enter a name' required/>}
            
             <input type='email' name="email" value={data.email} onChange={handlChange} placeholder='enter a email' required/>
              <input type='password' name="password" value={data.password} onChange={handlChange} placeholder='enter a password' required/>
          </div>
          <button className='btn-click'>{currentState==="SignUp"?"Create Account":"Login"}</button> 
          <div className="login-popup-condition">
             <input type='checkbox' required/>
             <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
          {currentState==="Login"
          ?
          <p>Create a new account <span onClick={() => setCurrentState("SignUp")}>Click here</span></p>
          :
          <p>Already have account<span onClick={() => setCurrentState("Login")}>Login here</span></p>
        }
        </form>

       </div> 

  
  )
}

export default Signup
