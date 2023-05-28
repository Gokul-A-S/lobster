import { useState } from "react"
import {useRegister} from '../hooks/useRegister'
const Register=()=>{
    const [id,setId]=useState('admin')
    const [password,setPassword]=useState('')
    const {signup,isLoading,error}=useRegister()
    const handleSubmit=async (e)=>{
        e.preventDefault()
        await signup(id,password)
    }
    return(
        
            <form className="register" onSubmit={handleSubmit}>
                <h1>Register</h1>
                <label>ID:</label>
                <input type="text" disabled required onChange={(e)=>setId(e.target.value)} value={id}/>
                <label>Password:</label>
                <input type="password" required onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <button disabled={isLoading} type="submit">Register</button>
                {error&&<div className="error">{error}</div>}
            </form>
       
    )
}

export default Register