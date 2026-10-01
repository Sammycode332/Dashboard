import React, { useState,useEffect,useMemo,useCallback} from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser, setUser } from '../redux/user/userSlice'
const Login = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [error,setError]  = useState('')

    useEffect(()=>{
        document.title = `Welcome ${name}`
        console.log(`name is ${name}`)
    },[name])
    useEffect(()=>{
        console.log("Login component appeared")
    })
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Printing Hello World")
        },1000)

        return()=>{
            clearInterval(timer)
        }
    },[])

    const something = useMemo(()=>{
       
        console.log("Calculating something...")
        return name.length
    },[name]) //usememo will check if a dependency value hasnt been changed if it hasnt it keeps that calue but if ith has changed it goes ahed to peroform a function nut use callbavk o
    //on th eother hand remebers a function if it sees the dependencthasnt hchanged reuse the fprevious functon but if it has changed 

    const dispatch = useDispatch()
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault() //telss the browswr not to reload the page by default5
        if(name && email){
            console.log("Logging in with",{name,email})
            console.log(`Name: ${name}`)
            console.log(`Email: ${email}`)
            dispatch(setUser({name,email}))
            setError("")
        }else {
            setError("Please fill in all the fields")
        }
    }
    
    const handleLogout = useCallback(()=>{
        dispatch(logoutUser())
    }, [dispatch])

  return (
    <div>Welcome Back, Please Login to continue

        <div>
            <form action = "" onSubmit={(e) => handleSubmit(e)} noValidate>
                <div>
                    <label htmlFor='name'>Full Name</label>
                    <input 
                    id = "name" 
                    name = "name" 
                    type = "text" 
                    onChange = {(e) =>{
                        setName(e.target.value)
                        setError("")
                    }} 
                    value = {name}
                    placeholder='Enter your full name' 
                    required/>
                </div>
                {error && <p>{error}</p>}
                <p>Name length: {something}</p>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input 
                    id = "email" 
                    name = "email" 
                    type = "text" 
                    onChange = {(e) =>{
                        setEmail(e.target.value)
                        setError("")}}
                    value = {email}
                    placeholder='Enter your Email' 
                    required/>
                </div>
                <button type = "submit">Login</button>
                <button type = "button" onClick={handleLogout}>Logout</button> 
            </form>
        </div>
    </div>
    
  )
//   for a llogout button use type set to button we dont want the browser resubmitting the form when the user clicks on it

}

export default Login