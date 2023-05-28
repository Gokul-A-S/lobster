import { useState } from "react";

const Login=()=>{
    const [id,setId]=useState('')
    const [password,setPassword]=useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(id,password)
    }

    return(    
            <form className="login" onSubmit={handleSubmit}>
            <h1>Login</h1>
                <label>ID:</label>
                <input type="text" required value={id} onChange={(e)=>setId(e.target.value)}/>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        
    )
}
export default Login;