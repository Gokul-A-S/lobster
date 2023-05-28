import { useState } from "react";
import {useLogin} from '../hooks/useLogin'
const Login=()=>{
    const [id,setId]=useState('')
    const [password,setPassword]=useState('')
    const {login,isLoading,error}=useLogin()
    const handleSubmit =async (e)=>{
        e.preventDefault()
        await login(id,password)
    }

    return(    
            <form className="login" onSubmit={handleSubmit}>
            <h1>Login</h1>
                <label>ID:</label>
                <input type="text" required value={id} onChange={(e)=>setId(e.target.value)}/>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button disabled={isLoading} type="submit">Login</button>
                {error&&<div className="error">{error}</div>}
            </form>
        
    )
}
export default Login;