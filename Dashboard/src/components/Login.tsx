import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser, setUser } from '../redux/user/userSlice'
const Login = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(name && email){
            console.log("Logging in with",{name,email})
            dispatch(setUser({name,email}))
        }
    }
    
    const handleLogout = ()=>{
        dispatch(logoutUser())
    }

  return (
    <div>Welcome Back, Please Loin to continue

        <div>
            <form action = "" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor='name'>Full Name</label>
                    <input 
                    id = "name" 
                    name = "name" 
                    type = "text" 
                    onChange = {(e) =>setName(e.target.value)} 
                    placeholder='Entr your full name' 
                    required/>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input 
                    id = "email" 
                    name = "email" 
                    type = "text" 
                    onChange = {(e) =>setEmail(e.target.value)}
                    placeholder='Entr your Email' 
                    required/>
                </div>
                <button type = "submit">Login</button>
                <button onClick={handleLogout}>Logout</button>
            </form>
        </div>
    </div>
    
  )
}

export default Login